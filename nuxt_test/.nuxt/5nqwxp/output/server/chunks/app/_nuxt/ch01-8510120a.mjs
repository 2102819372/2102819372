import { useSSRContext, defineComponent, ref } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
  __name: "ch01",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9f68de0a><div class="w-0 h-0 border-b-rose-500 border-solid border-l-transparent border-r-transparent trigger" data-v-9f68de0a></div><div class="h-80 w-screen bg-neutral-500" data-v-9f68de0a><svg width="100%" height="300px" version="1.1" data-v-9f68de0a><path d="M 150 0 L 300 240 L0 240 Z" data-v-9f68de0a></path></svg></div><canvas id="testCanvas" data-v-9f68de0a></canvas></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/charts/ch01.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ch01 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9f68de0a"], ["__file", "/workspace/2102819372/nuxt_test/src/pages/charts/ch01.vue"]]);

export { ch01 as default };
//# sourceMappingURL=ch01-8510120a.mjs.map
