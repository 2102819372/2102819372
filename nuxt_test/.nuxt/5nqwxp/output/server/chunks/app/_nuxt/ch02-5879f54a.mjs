import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><svg width="0" height="0"><defs><linearGradient y2="0" x2="1" y1="1" x1="1" id="my-gradient"><stop stop-color="#ff0000" offset="0"></stop><stop stop-color="#ffff00" offset="1"></stop></linearGradient></defs></svg><svg class="svg-gradient" width="100" height="100" viewBox="0 0 24 24"><path d="M12 2a9 9 0 0 0-9 9v11l3-3l3 3l3-3l3 3l3-3l3 3V11a9 9 0 0 0-9-9M9 8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m6 0a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"></path></svg></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/charts/ch02.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ch02 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/workspace/2102819372/nuxt_test/src/pages/charts/ch02.vue"]]);

export { ch02 as default };
//# sourceMappingURL=ch02-5879f54a.mjs.map
