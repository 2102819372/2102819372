<!--
 * @Author: 冷 晓飞 2102819372@qq.com
 * @Date: 2023-12-04 00:59:47
 * @LastEditors: 冷 晓飞 2102819372@qq.com
 * @LastEditTime: 2023-12-05 07:22:52
 * @FilePath: /2102819372/nuxt_test/src/pages/charts/ch04.vue
 * @Description: ch04
-->
<script setup lang="ts">
import { ref } from "vue";
import {
  useMutationObserver,
  useParentElement,
  useWindowScroll,
  useBroadcastChannel,
  useClipboard,
  useEyeDropper,
  useFileSystemAccess,
  useTextareaAutosize,
  useWebNotification,
  type UseWebNotificationOptions,
} from "@vueuse/core";
//useMutationObserver
const el = ref(null);
const messages = ref<string[]>([]);
const className = ref({});
const style = ref({});
useMutationObserver(
  el, //绑定的元素
  (mutations) => {
    //mutation当前改变的属性记录
    const mutation = mutations[0];
    if (!mutation) return;
    messages.value.push(mutation.attributeName!);
  },
  {
    attributes: true,
  }
);
setTimeout(() => {
  className.value = {
    test: true,
    test2: true,
  };
}, 1000);
setTimeout(() => {
  style.value = {
    color: "red",
  };
}, 1550);
//useParentElement
const el2 = ref(null);
const parentEl = useParentElement(el2);
console.log("useParentElement", parentEl.value);
//useWindowScroll
const { x: WindowScrollX, y: WindowScrollY } = useWindowScroll();
//useBroadcastChannel
const message = ref("");
const { isSupported, data, post, error } = useBroadcastChannel({
  name: "vueuse-channel-demo",
});
watch(data, () => {
  if (data.value) alert(data.value);
});
//useClipboard
const source = ref("");
const {
  text: Clipboardtext,
  copy: Clipboardcopy,
  copied: Clipboardcopied,
  isSupported: ClipboardisSupported,
} = useClipboard();
//useEyeDropper
const {
  isSupported: EyeDropperisSupported,
  open: EyeDropperopen,
  sRGBHex,
} = useEyeDropper();
//useFileSystemAccess
const dataType = ref("Text") as Ref<"Text" | "ArrayBuffer" | "Blob">;
const {
  isSupported: FileSystemAccessisSupported,
  file: FileSystemAccessfile,
  fileName: FileSystemAccessfileName,
  fileMIME: FileSystemAccessfileMIME,
  fileSize: FileSystemAccessfileSize,
  fileLastModified: FileSystemAccessfileLastModified,
  open: FileSystemAccessopen,
  save: FileSystemAccesssave,
  create: FileSystemAccesscreate,
  saveAs: FileSystemAccesssaveAs,
  data: FileSystemAccessdata,
} = useFileSystemAccess({
  dataType,
  types: [
    {
      description: "text",
      accept: {
        "text/plain": [".txt", ".html"],
      },
    },
  ],
  excludeAcceptAllOption: true,
});
const onSave = async () => {
  await FileSystemAccesssave();
  alert("保存成功");
};
//useTextareaAutosize
const { textarea, input } = useTextareaAutosize();
//useWebNotification
const WebNotificationOptions: UseWebNotificationOptions = {
  title: "hello,world",
  dir: "auto",
  lang: "en",
  renotify: true,
  tag: "test",
};
const { isSupported: WebNotification, show: WebNotificationshow } =
  useWebNotification(WebNotificationOptions);
</script>
<template>
  <div>
    <h2 class="text-2xl text-rose-200">useMutationobserver</h2>
    <hr />
    <div ref="el" :class="className" :style="style">
      <div v-for="(text, index) of messages" :key="index">
        Mutation Attribute:{{ text }}
      </div>
    </div>
    <br />
    <h2 class="text-2xl text-rose-200">useParentElement</h2>
    <hr />
    <div ref="el2">
      {{ parentEl }}
    </div>
    <br />
    <h2 class="text-2xl text-rose-200">useWindowScroll</h2>
    <hr />
    <div>{{ WindowScrollX }},{{ WindowScrollY }}</div>
    <br />
    <h2 class="text-2xl text-rose-200">useBroadcastChannel</h2>
    <hr />
    <div class="p-1">
      <form @submit.prevent="post(message)">
        <input class="border-2" v-model="message" type="text" />
        <button type="submit">Send Message</button>
      </form>
      <div>接收到{{ data }}</div>
      <div v-if="error" class="text-rose-800">错误{{ error }}</div>
    </div>
    <br />
    <h2 class="text-rose-200 text-2xl">useClipboard</h2>
    <hr />
    <div class="p-1">
      <form v-if="ClipboardisSupported" @submit.prevent="Clipboardcopy(source)">
        <input type="text" class="border-2" v-model="source" />
        <button type="submit">
          <span v-if="!Clipboardcopied">copy</span><span v-else>copied</span>
        </button>
      </form>
      <p v-else>Your browser does not support Clipboard API</p>
      <p>
        当前复制:<code>{{ Clipboardtext || "none" }}</code>
      </p>
    </div>
    <h2 class="text-rose-200 text-2xl">useClipboardItems</h2>
    <hr />
    <div class="p-1">
      <template v-if="EyeDropperisSupported">
        <div>isSupport:{{ isSupported }}</div>
        <div>
          sRGBHex: <span :style="{ color: sRGBHex }">{{ sRGBHex }}</span>
        </div>
        <button
          class="border-2 active:bg-slate-200 rounded"
          :disabled="!EyeDropperisSupported"
          @click="() => EyeDropperopen()"
        >
          Open Eye Dropper
        </button>
      </template>
      <div v-else>
        <span>Not Supported by Your Browser</span>
      </div>
    </div>
    <br />
    <h2 class="text-rose-200 text-2xl">useFileSystemAccess</h2>
    <hr />
    <div class="p-1">
      <button
        @click="FileSystemAccessopen()"
        class="border-2 p-2 rounded-xl active:bg-slate-400 active:text-white"
      >
        Open
      </button>
      <button
        @click="FileSystemAccesscreate()"
        class="border-2 p-2 rounded-xl active:bg-slate-400 active:text-white"
      >
        NewFile
      </button>
      <button
        :disabled="!FileSystemAccessfile"
        @click="onSave()"
        class="border-2 p-2 rounded-xl active:bg-slate-400 active:text-white"
      >
        Save
      </button>
      <button
        :disabled="!FileSystemAccessfile"
        @click="FileSystemAccesssaveAs()"
        class="border-2 p-2 rounded-xl active:bg-slate-400 active:text-white"
      >
        Save as
      </button>
      <button
        class="border-2 p-2 rounded-xl active:bg-slate-400 active:text-white"
        @click="FileSystemAccessdata = undefined"
      >
        cancel
      </button>
      <div v-if="FileSystemAccessdata">
        <textarea
          class="border-2"
          v-if="typeof FileSystemAccessdata === 'string'"
          cols="30"
          rows="10"
          v-model="FileSystemAccessdata"
          w-full
        />
        <span v-else>{{ FileSystemAccessdata }}</span>
      </div>
    </div>
    <br />
    <h2 class="text-rose-200 text-2xl">useTextareaAutosize</h2>
    <hr />
    <div class="p-1">
      <textarea
        cols="30"
        rows="10"
        ref="textarea"
        v-model="input"
        class="border-2"
      ></textarea>
    </div>
    <br />
    <h2 class="text-rose-200 text-2xl">useWebNotification</h2>
    <hr />
    <div class="p-1">
      <button
        v-if="!WebNotification"
        :disabled="!WebNotification"
        class="border-2 active:bg-slate-400 active:text-white p-1.5 rounded-md"
        @click="() => WebNotificationshow()"
      >
        useWebNotification
      </button>
      <div v-else>
        The Notification Web API is not supported in your browser.
      </div>
    </div>
    <br />
    <h2 class="text-rose-200 text-2xl"></h2>
  </div>
</template>
