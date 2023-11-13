/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #中等 #object

  ### 题目

  获取两个接口类型中的差值属性。

  ```ts
  type Foo = {
    a: string;
    b: number;
  }
  type Bar = {
    a: string;
    c: boolean
  }

  type Result1 = Diff<Foo,Bar> // { b: number, c: boolean }
  type Result2 = Diff<Bar,Foo> // { b: number, c: boolean }

  ```

  > 在 Github 上查看：https://tsch.js.org/645/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Diff<O, O1> = {
  [P in keyof O | keyof O1 as P extends keyof O & keyof O1
    ? never
    : P]: P extends keyof O ? O[P] : P extends keyof O1 ? O1[P] : never;
};

// type Diff<O, O1> = {
//   // keyof O | keyof O1 拿到所有的属性中，通过 keyof O & keyof O1 判断是否是公共属性，如是公共属性，置为 never
//   [P in keyof O | keyof O1 as P extends keyof O & keyof O1
//     ? never
//     : P]: P extends keyof O ? O[P] : P extends keyof O1 ? O1[P] : never; // 补充属性值即可
// };
// let a = { a: 1, b: 2, c: 3 }
// let b = { c: 3, d: 4 }
// type KA = keyof typeof a
// type KB = keyof typeof b
// type Equal1<O, O1> = (keyof O & keyof O1) extends keyof (O & O1) ? true : false//true
// type Equal2<O, O1> = (keyof O | keyof O1) extends keyof (O | O1) ? true : false//false
// let test: Equal2<typeof a, typeof b>
/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
];

/* _____________ 下一步 _____________ */
/*
    > 分享你的解答：https://tsch.js.org/645/answer/zh-CN
    > 查看解答：https://tsch.js.org/645/solutions
    > 更多题目：https://tsch.js.org/zh-CN
  */
