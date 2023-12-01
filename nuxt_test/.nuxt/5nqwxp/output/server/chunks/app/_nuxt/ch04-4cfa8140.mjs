import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { useMutationObserver } from '@vueuse/core';
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
  __name: "ch04",
  __ssrInlineRender: true,
  setup(__props) {
    const el = ref(null);
    const messages = ref([]);
    useMutationObserver(
      el,
      (mutations) => {
        if (mutations[0])
          return;
        messages.value.push(mutations[0].attributeName);
      },
      {
        attributes: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "abc"
      }, _attrs))}>1</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/charts/ch04.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ch04 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/workspace/2102819372/nuxt_test/src/pages/charts/ch04.vue"]]);

export { ch04 as default };
//# sourceMappingURL=ch04-4cfa8140.mjs.map
