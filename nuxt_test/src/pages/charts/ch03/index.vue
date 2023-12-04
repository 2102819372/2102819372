<script setup lang="ts">
import { ref, type Ref } from "vue";
import axios from "axios";
import {
  useAsyncState,
  useMouse,
  useWindowSize,
  useLastChanged,
  useDebouncedRefHistory,
  useCounter,
  useManualRefHistory,
  useThrottledRefHistory,
  useActiveElement,
  useDocumentVisibility,
  useDraggable,
  useDropZone,
} from "@vueuse/core";
import { useTimeoutFn } from "@vueuse/shared";
import RootComp from "./vueuseInject/RootComp.vue";
import counter from "./vueuseInject/couter.vue";
import doubelVue from "./vueuseInject/double.vue";
import Button from "./vueuseInject/button.vue";
const foo = ref("");
const { count, inc, dec, set, reset } = useCounter();
const {
  canUndo: canUndoRefHistory,
  canRedo: canRedoRefHistory,
  history: historyRefHistory,
  commit: commitRefHistory,
  undo: undoRefHistory,
  redo: redoRefHistory,
} = useManualRefHistory(count, { capacity: 20 });
const delay: Ref<number> = ref(1000);
const {
  canUndo: canUndoThrottledRef,
  canRedo: canRedoThrottledRef,
  history: historyThrottledRef,
  undo: undoThrottledRef,
  redo: redoThrottledRef,
} = useThrottledRefHistory(count, {
  capacity: 10,
  deep: true,
  throttle: delay,
  trailing: true,
});
const { history, undo, redo, canUndo, canRedo } = useDebouncedRefHistory(foo, {
  debounce: delay,
});
const startMessage = `VueUseTest`;
const message = ref(startMessage);
const visibility = useDocumentVisibility();
const activeElement = useActiveElement();
const key = computed(() => activeElement.value?.dataset?.id || "null");
const lastChange = useLastChanged(foo);
const { x, y } = useMouse();
const { width, height } = useWindowSize();
const { state, isReady, isLoading, execute } = useAsyncState(
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((t: any) => t.data),
  {},
  {
    delay: 2000,
    resetOnExecute: false,
  }
);
const timeout = useTimeoutFn(() => {
  message.value = startMessage;
}, 3000);
watch(
  visibility,
  (current: "visible" | "hidden", previous: "visible" | "hidden") => {
    if (current === "visible" && previous === "hidden") {
      message.value = "🎉 Welcome back!";
      timeout.start();
    }
  }
);
const el = ref<HTMLElement | null>(null);
const {
  x: draX,
  y: draY,
  style,
} = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
});
function onDrop(files: File[] | null) {
  // called when files are dropped on zone
  console.log(files);
}
const dargEl = ref<HTMLElement | null>(null);
const { isOverDropZone } = useDropZone(dargEl, {
  onDrop,
  dataTypes: ["image/jpeg"],
});
</script>
<template>
  <div>
    <h1 class="text-4xl py-4">ch03</h1>
    <hr />
    <h2 class="text-3xl py-4">{{ message }}</h2>
    <hr />
    <br />
    <div class="text-rose-400 text-lg">useasync</div>
    <hr />
    <div>isReady:{{ isReady }}</div>
    <div>isLoading:{{ isLoading }}</div>
    <div>{{ state }}</div>
    <button @click="execute(2000)" class="bg-red-200 text-zinc-50 rounded">
      execute
    </button>
    <div></div>
    <br />
    <div class="text-rose-400 text-lg">鼠标 useMouse</div>
    <hr />
    <div>{{ x }}</div>
    <div>{{ y }}</div>
    <br />
    <div class="text-rose-400 text-lg">Usewindow</div>
    <hr />
    <div>{{ width }}</div>
    <div>{{ height }}</div>
    <br />
    <div class="text-rose-400 text-lg">lastChange&&debounce</div>
    <hr />
    <div>
      <div>
        <input
          type="text"
          v-model="foo"
          class="border-2 border-solid border-rose-400 focus:outline-none focus:ring focus:ring-violet-300 rounded"
        />
      </div>
      <button
        :disabled="!canUndo"
        @click="undo()"
        class="border-2 border-solid border-rose-400 active:bg-rose-200 active:text-white"
      >
        undo
      </button>
      <button
        :disabled="!canRedo"
        @click="redo()"
        class="border-2 border-solid border-rose-400 active:bg-rose-200 active:text-white"
      >
        redo
      </button>
    </div>
    <br />
    <div class="text-rose-400 text-lg">history</div>
    <div v-for="item in history" :key="item.timestamp">{{ item.snapshot }}</div>
    <div>上次修改时间</div>
    <div>{{ lastChange }}</div>
    <br />
    vueuseInject
    <hr />
    <RootComp>
      <counter />
      <doubelVue />
      <Button />
    </RootComp>
    <br />
    <div class="text-rose-400 text-lg">vueusesharedComposable</div>
    <hr />
    <br />
    <div class="text-rose-400 text-lg">useManualRefHistory</div>
    <hr />
    <div>
      <div>
        {{ count }}
      </div>
      <div>
        <button @click="inc()" class="border-2 w-8">+</button>
        <button @click="dec()" class="border-2 w-8">-</button>
        <button
          :disabled="!canUndoRefHistory"
          @click="undoRefHistory()"
          class="border-2"
        >
          undo
        </button>
        <button
          :disabled="!canRedoRefHistory"
          @click="redoRefHistory()"
          class="border-2"
        >
          redo
        </button>
        <button @click="commitRefHistory()" class="border-2">commit</button>
      </div>
      <div>
        <div>
          <span v-for="item in historyRefHistory" :key="item.timestamp"
            >,{{ item.snapshot }}</span
          >
        </div>
      </div>
    </div>
    <br />
    <div class="text-rose-400 text-lg">useThrottledRefHistory</div>
    <hr />
    <div>
      <div>
        {{ count }}
      </div>
      <div>
        <button @click="inc()" class="border-2 w-8">+</button>
        <button @click="dec()" class="border-2 w-8">-</button>
        <button
          :disabled="!canUndoThrottledRef"
          @click="undoThrottledRef()"
          class="border-2"
        >
          undo
        </button>
        <button
          :disabled="!canRedoThrottledRef"
          @click="redoThrottledRef()"
          class="border-2"
        >
          redo
        </button>
      </div>
      <div>
        <span v-for="item in historyThrottledRef" :key="item.timestamp">{{
          item.snapshot
        }}</span>
      </div>
    </div>
    <br />
    <div class="text-rose-400 text-lg">useActiveElement</div>
    <hr />
    <div>
      <input
        type="text"
        v-for="i in 6"
        :key="i"
        :data-id="i"
        class="!my-0 !min-w-0"
        :placeholder="`${i}`"
      />
      <div class="mt-2">
        Current Active Element:
        <span class="text-primary">{{ key }}</span>
      </div>
    </div>
    <br />
    <div class="text-rose-400 text-lg">useDraggable</div>
    <hr />
    <div ref="el" :style="style" style="position: fixed">
      Drag me! I am at {{ draX }}, {{ draY }}
    </div>
    <br />
    <div class="text-rose-400 text-lg">useDropZone</div>
    <hr />
    <div ref="dargEl" class="h-20 w-20 bg-rose-400"></div>
  </div>
</template>
