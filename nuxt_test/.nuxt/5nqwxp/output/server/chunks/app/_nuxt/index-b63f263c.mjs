import { useSSRContext, defineComponent, ref, computed, watch, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import axios from 'axios';
import { useCounter, useManualRefHistory, useThrottledRefHistory, useDebouncedRefHistory, useDocumentVisibility, useActiveElement, useLastChanged, useMouse, useWindowSize, useAsyncState, useDraggable, useDropZone } from '@vueuse/core';
import { useTimeoutFn } from '@vueuse/shared';
import RootComp from './RootComp-3eeec86b.mjs';
import counter from './couter-8b3930b6.mjs';
import doubelVue from './double-b73d39de.mjs';
import Button from './button-98c7e217.mjs';
import { _ as _export_sfc } from '../server.mjs';
import './injectState-34318ce4.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const startMessage = `VueUseTest`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const foo = ref("");
    const { count, inc, dec, set, reset } = useCounter();
    const {
      canUndo: canUndoRefHistory,
      canRedo: canRedoRefHistory,
      history: historyRefHistory,
      commit: commitRefHistory,
      undo: undoRefHistory,
      redo: redoRefHistory
    } = useManualRefHistory(count, { capacity: 20 });
    const delay = ref(1e3);
    const {
      canUndo: canUndoThrottledRef,
      canRedo: canRedoThrottledRef,
      history: historyThrottledRef,
      undo: undoThrottledRef,
      redo: redoThrottledRef
    } = useThrottledRefHistory(count, {
      capacity: 10,
      deep: true,
      throttle: delay,
      trailing: true
    });
    const { history, undo, redo, canUndo, canRedo } = useDebouncedRefHistory(foo, {
      debounce: delay
    });
    const message = ref(startMessage);
    const visibility = useDocumentVisibility();
    const activeElement = useActiveElement();
    const key = computed(() => {
      var _a, _b;
      return ((_b = (_a = activeElement.value) == null ? void 0 : _a.dataset) == null ? void 0 : _b.id) || "null";
    });
    const lastChange = useLastChanged(foo);
    const { x, y } = useMouse();
    const { width, height } = useWindowSize();
    const { state, isReady, isLoading, execute } = useAsyncState(
      axios.get("https://jsonplaceholder.typicode.com/todos/1").then((t) => t.data),
      {},
      {
        delay: 2e3,
        resetOnExecute: false
      }
    );
    const timeout = useTimeoutFn(() => {
      message.value = startMessage;
    }, 3e3);
    watch(visibility, (current, previous) => {
      if (current === "visible" && previous === "hidden") {
        message.value = "\u{1F389} Welcome back!";
        timeout.start();
      }
    });
    const el = ref(null);
    const {
      x: draX,
      y: draY,
      style
    } = useDraggable(el, {
      initialValue: { x: 40, y: 40 }
    });
    function onDrop(files) {
      console.log(files);
    }
    const dargEl = ref(null);
    useDropZone(dargEl, {
      onDrop,
      dataTypes: ["image/jpeg"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-4xl py-4">ch03</h1><hr><h2 class="text-3xl py-4">${ssrInterpolate(message.value)}</h2><hr><br><div class="text-rose-400 text-lg">useasync</div><hr><div>isReady:${ssrInterpolate(unref(isReady))}</div><div>isLoading:${ssrInterpolate(unref(isLoading))}</div><div>${ssrInterpolate(unref(state))}</div><button class="bg-red-200 text-zinc-50 rounded"> execute </button><div></div><br><div class="text-rose-400 text-lg">\u9F20\u6807 useMouse</div><hr><div>${ssrInterpolate(unref(x))}</div><div>${ssrInterpolate(unref(y))}</div><br><div class="text-rose-400 text-lg">Usewindow</div><hr><div>${ssrInterpolate(unref(width))}</div><div>${ssrInterpolate(unref(height))}</div><br><div class="text-rose-400 text-lg">lastChange&amp;&amp;debounce</div><hr><div><div><input type="text"${ssrRenderAttr("value", foo.value)} class="border-2 border-solid border-rose-400 focus:outline-none focus:ring focus:ring-violet-300 rounded"></div><button${ssrIncludeBooleanAttr(!unref(canUndo)) ? " disabled" : ""} class="border-2 border-solid border-rose-400 active:bg-rose-200 active:text-white"> undo </button><button${ssrIncludeBooleanAttr(!unref(canRedo)) ? " disabled" : ""} class="border-2 border-solid border-rose-400 active:bg-rose-200 active:text-white"> redo </button></div><br><div class="text-rose-400 text-lg">history</div><!--[-->`);
      ssrRenderList(unref(history), (item) => {
        _push(`<div>${ssrInterpolate(item.snapshot)}</div>`);
      });
      _push(`<!--]--><div>\u4E0A\u6B21\u4FEE\u6539\u65F6\u95F4</div><div>${ssrInterpolate(unref(lastChange))}</div><br> vueuseInject <hr>`);
      _push(ssrRenderComponent(RootComp, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(counter, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(doubelVue, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Button, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(counter),
              createVNode(doubelVue),
              createVNode(Button)
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`<br><div class="text-rose-400 text-lg">vueusesharedComposable</div><hr><br><div class="text-rose-400 text-lg">useManualRefHistory</div><hr><div><div>${ssrInterpolate(unref(count))}</div><div><button class="border-2 w-8">+</button><button class="border-2 w-8">-</button><button${ssrIncludeBooleanAttr(!unref(canUndoRefHistory)) ? " disabled" : ""} class="border-2"> undo </button><button${ssrIncludeBooleanAttr(!unref(canRedoRefHistory)) ? " disabled" : ""} class="border-2"> redo </button><button class="border-2">commit</button></div><div><div><!--[-->`);
      ssrRenderList(unref(historyRefHistory), (item) => {
        _push(`<span>,${ssrInterpolate(item.snapshot)}</span>`);
      });
      _push(`<!--]--></div></div></div><br><div class="text-rose-400 text-lg">useThrottledRefHistory</div><hr><div><div>${ssrInterpolate(unref(count))}</div><div><button class="border-2 w-8">+</button><button class="border-2 w-8">-</button><button${ssrIncludeBooleanAttr(!unref(canUndoThrottledRef)) ? " disabled" : ""} class="border-2"> undo </button><button${ssrIncludeBooleanAttr(!unref(canRedoThrottledRef)) ? " disabled" : ""} class="border-2"> redo </button></div><div><!--[-->`);
      ssrRenderList(unref(historyThrottledRef), (item) => {
        _push(`<span>${ssrInterpolate(item.snapshot)}</span>`);
      });
      _push(`<!--]--></div></div><br><div class="text-rose-400 text-lg">useActiveElement</div><hr><div><!--[-->`);
      ssrRenderList(6, (i) => {
        _push(`<input type="text"${ssrRenderAttr("data-id", i)} class="!my-0 !min-w-0"${ssrRenderAttr("placeholder", `${i}`)}>`);
      });
      _push(`<!--]--><div class="mt-2"> Current Active Element: <span class="text-primary">${ssrInterpolate(unref(key))}</span></div></div><br><div class="text-rose-400 text-lg">useDraggable</div><hr><div style="${ssrRenderStyle([unref(style), { "position": "fixed" }])}"> Drag me! I am at ${ssrInterpolate(unref(draX))}, ${ssrInterpolate(unref(draY))}</div><br><div class="text-rose-400 text-lg">useDropZone</div><hr><div class="h-20 w-20 bg-rose-400"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/charts/ch03/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/workspace/2102819372/nuxt_test/src/pages/charts/ch03/index.vue"]]);

export { index as default };
//# sourceMappingURL=index-b63f263c.mjs.map
