import { useSSRContext, defineComponent, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { useStore } from './injectState-34318ce4.mjs';
import { _ as _export_sfc } from '../server.mjs';
import '@vueuse/core';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "couter",
  __ssrInlineRender: true,
  setup(__props) {
    const { count } = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>counter:${ssrInterpolate(unref(count))}</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/charts/ch03/vueuseInject/couter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const counter = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/workspace/2102819372/nuxt_test/src/pages/charts/ch03/vueuseInject/couter.vue"]]);

export { counter as default };
//# sourceMappingURL=couter-8b3930b6.mjs.map
