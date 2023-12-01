import { ref, computed } from 'vue';
import { createInjectionState } from '@vueuse/core';

const [useProvideStore, useStore] = createInjectionState(
  (initialValue) => {
    const count = ref(initialValue);
    const double = computed(() => count.value * 2);
    function increment() {
      count.value++;
    }
    return { count, double, increment };
  }
);
function useStoreWithDefaultValue() {
  var _a;
  return (_a = useStore()) != null ? _a : {
    count: ref(0),
    double: ref(0),
    increment: () => {
    }
  };
}
function useStoreOrThrow() {
  const store = useStore();
  if (store == null)
    throw new Error(
      "Please call `useProvideCounterStore` on the appropriate parent component"
    );
  return store;
}

export { useProvideStore, useStore, useStoreOrThrow, useStoreWithDefaultValue };
//# sourceMappingURL=injectState-34318ce4.mjs.map
