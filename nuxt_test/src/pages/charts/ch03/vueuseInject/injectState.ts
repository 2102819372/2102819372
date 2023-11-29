import { computed, ref } from "vue";
import { createInjectionState } from "@vueuse/core";
//初始化vueuseinject设置
const [useProvideStore, useStore] = createInjectionState(
  (initialValue: number) => {
    //state
    const count = ref(initialValue);
    //getters
    const double = computed(() => count.value * 2);
    //action
    function increment() {
      count.value++;
    }
    return { count, double, increment };
  }
);
export { useProvideStore, useStore };

export function useStoreWithDefaultValue() {
  return (
    useStore() ?? {
      count: ref(0),
      double: ref(0),
      increment: () => {},
    }
  );
}
export function useStoreOrThrow() {
  const store = useStore();
  if (store == null)
    throw new Error(
      "Please call `useProvideCounterStore` on the appropriate parent component"
    );
  return store;
}
