/*
  2946 - ObjectEntries
  -------
  by jiangshan (@jiangshanmeta) #medium #object

  ### Question

  Implement the type version of ```Object.entries```

  For example

  ```typescript
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
  ```

  > View on GitHub: https://tsch.js.org/2946
*/

/* _____________ Your Code Here _____________ */
// type ObjectEntries<T> = {
//   // 遍历修改属性值
//   [K in keyof T]-?: [K, T[K]];
//   // 索引签名得到结果
// }[keyof T];
type ObjectEntries<T> = {
  [K in keyof Required<T>]: [
    K,
    [T[K]] extends [undefined] ? undefined : Required<T>[K]
  ];
}[keyof T];
// type ObjectEntries<T> = {
//   // step1，移除修饰符中的 可选修饰符
//   [P in keyof T]-?: [
//     P,
//     // 如果 T[P] 只有一个 undefined
//     [T[P]] extends [undefined]
//     ? // 返回 T[P] 也就是 undefined
//     T[P]
//     : // 否则，从属性中移除 undefined 以满足用例的要求
//     Exclude<T[P], undefined>,
//   ];
// }[keyof T];
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>,
  Expect<
    Equal<
      ObjectEntries<{ key: string | undefined }>,
      ["key", string | undefined]
    >
  >
];

/* _____________ Further Steps _____________ */
/*
    > Share your solutions: https://tsch.js.org/2946/answer
    > View solutions: https://tsch.js.org/2946/solutions
    > More Challenges: https://tsch.js.org
  */
