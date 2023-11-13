/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #medium #template-literal

  ### Question

  Replace the `camelCase` or `PascalCase` string with `kebab-case`.

  `FooBarBaz` -> `foo-bar-baz`

  For example

  ```ts
  type FooBarBaz = KebabCase<"FooBarBaz">
  const foobarbaz: FooBarBaz = "foo-bar-baz"

  type DoNothing = KebabCase<"do-nothing">
  const doNothing: DoNothing = "do-nothing"
  ```

  > View on GitHub: https://tsch.js.org/612
*/

/* _____________ Your Code Here _____________ */
/**如果是第一个字母就不用加-只用小写，然后再检查是否为小写如果是将继续递归，如果不是就在前面加-让后小写当前字母并继续递归 */
// type KebabCase<S extends string, isFrist extends boolean = true> =
//   S extends `${infer F}${infer R}`
//   ? isFrist extends true
//   ? `${Lowercase<F>}${KebabCase<R, false>}`
//   : F extends Lowercase<F>
//   ? `${F}${KebabCase<R, false>}`
//   : `-${Lowercase<F>}${KebabCase<R, false>}`
//   : S
/**直接检测第一个字母后面的字母是不是大写如果是就小写并且无需加-如果不是就在该大写字母前加上-并将此字母改为小写 */
type KebabCase<S extends string> = S extends `${infer F}${infer R}`
  ? // 判断剩余字符的首字母是否大写
    R extends Uncapitalize<R>
    ? // 如果是小写，那么直接拼接递归处理后的剩余字符
      `${Lowercase<F>}${KebabCase<R>}`
    : // 如果是大写，那么增加 - 拼接
      `${Lowercase<F>}-${KebabCase<R>}`
  : "";
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/612/answer
  > View solutions: https://tsch.js.org/612/solutions
  > More Challenges: https://tsch.js.org
*/
