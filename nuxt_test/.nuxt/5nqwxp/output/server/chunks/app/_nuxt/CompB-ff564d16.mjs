import { useSSRContext, defineComponent } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSharedMouse } from './index-1293819a.mjs';
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
  __name: "CompB",
  __ssrInlineRender: true,
  setup(__props) {
    useSharedMouse();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>CompB</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/charts/ch03/sharedComposable/CompB.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CompB = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/workspace/2102819372/nuxt_test/src/pages/charts/ch03/sharedComposable/CompB.vue"]]);

export { CompB as default };
//# sourceMappingURL=CompB-ff564d16.mjs.map
