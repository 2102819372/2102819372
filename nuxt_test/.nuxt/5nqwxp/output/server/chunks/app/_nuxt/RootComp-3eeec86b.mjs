import { useSSRContext, defineComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useProvideStore } from './injectState-34318ce4.mjs';
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
  __name: "RootComp",
  __ssrInlineRender: true,
  setup(__props) {
    useProvideStore(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/charts/ch03/vueuseInject/RootComp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/workspace/2102819372/nuxt_test/src/pages/charts/ch03/vueuseInject/RootComp.vue"]]);

export { RootComp as default };
//# sourceMappingURL=RootComp-3eeec86b.mjs.map
