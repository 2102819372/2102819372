import { _ as __nuxt_component_0 } from './nuxt-link-01469011.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/charts/ch01" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u53BBch01`);
      } else {
        return [
          createTextVNode("\u53BBch01")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/charts/ch02" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u53BBch02`);
      } else {
        return [
          createTextVNode("\u53BBch02")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/charts/ch03" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u53BBch03`);
      } else {
        return [
          createTextVNode("\u53BBch03")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/charts/ch04" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u53BBch04`);
      } else {
        return [
          createTextVNode("\u53BBch04")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/workspace/2102819372/nuxt_test/src/pages/index.vue"]]);

export { index as default };
//# sourceMappingURL=index-9b58946b.mjs.map
