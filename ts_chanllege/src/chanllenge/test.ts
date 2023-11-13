interface Eg1 {
  name: string;
  readonly age: number;
}
type T1 = keyof Eg1;
const a: T1 = "name";
const b: T1 = "age";

class Eg2 {
  private name: string = "";
  public readonly age: number = 1;
  protected home: string = "";
  a() {
    this.name;
  }
}
type T2 = keyof Eg2;
const c: T2 = "age";

interface Eg1 {
  name: string;
  readonly age: number;
}
// string
type V1 = Eg1["name"];
// string | number
// type V2 = Eg1["name" | "age"];
// any
// type V2 = Eg1["name" | "age2222"];
// string | number
type V3 = Eg1[keyof Eg1];
const V3S: V3 = "";
const V3S2: V3 = 1;

interface Dg1 {
  name: string;
  age: number;
}

interface Dg2 {
  color: string;
  age: string;
}
type Ts = Dg1 & Dg2;
const DgCon: Ts = {
  name: "",
  age: (function a() {
    throw Error();
  })(),
  color: "",
};
interface E1 {
  name: string;
}

interface E2 {
  sex: number;
}

/**
 * @example
 * T3 = {name: string, sex: number, age: number}
 */
interface E3 extends E1, E2 {
  age: number;
}

/**
 * @example
 * type A1 = 1
 */
type A1 = "x" extends "x" ? 1 : 2;

/**
 * @example
 * type A2 = 2
 */
type A2 = "x" | "y" extends "x" ? 1 : 2;

/**
 * @example
 * type A3 = 1 | 2
 */
type P<T> = T extends "x" ? 1 : 2;
type A3 = P<"x" | "y">;

/**
 * type A4 = 2;
 */
type PT<T> = [T] extends ["x"] ? 1 : 2;
type A4 = PT<"x" | "y">;

interface Animal {
  name: string;
}

interface Dog extends Animal {
  break(): void;
}
/*类型的可赋值性 */
type Fa1 = 1 | 2 | 3;
type Ch1 = 2 | 3;
let aT: Fa1;
let bT: Ch1;

// 不可赋值
bT = aT;
// 可以赋值
aT = bT;
/*接口的可赋值性 */
interface Animal {
  name: string;
}

interface Dog extends Animal {
  break(): void;
}

let ani: Animal;
let dog: Dog;

// 可以赋值，子类型更佳具体，可以赋值给更佳宽泛的父类型
ani = dog;
// 反过来不行
dog = ani;
/**协变 */
interface Animal {
  name: string;
}

interface Dog extends Animal {
  break(): void;
}

let Xg1: Animal;
let Xg2: Dog;
// 兼容，可以赋值
Xg1 = Xg2;

let Eg3: Array<Animal>;
let Eg4: Array<Dog>;
// 兼容，可以赋值
Eg3 = Eg4;

interface Animal {
  name: string;
}

interface Dog extends Animal {
  break(): void;
}
/**逆变 */
type AnimalFn = (arg: Animal) => void;
type DogFn = (arg: Dog) => void;

let Ng1: AnimalFn;
let Ng2: DogFn;
// 不再可以赋值了，
// AnimalFn = DogFn不可以赋值了, Animal = Dog是可以的
Ng1 = Ng2;
// 反过来可以
Ng2 = Ng1;

/**双向协变 */
// lib.dom.d.ts中EventListener的接口定义
interface EventListener {
  (evt: Event): void;
}
// 简化后的Event
interface Event {
  readonly target: EventTarget | null;
  preventDefault(): void;
}
// 简化合并后的MouseEvent
interface MouseEvent extends Event {
  readonly x: number;
  readonly y: number;
}

// 简化后的Window接口
interface Window {
  // 简化后的addEventListener
  addEventListener(type: string, listener: EventListener): any;
}

// 日常使用
window.addEventListener("click", (e: Event) => {});
window.addEventListener("mouseover", (e: MouseEvent) => {});

/**partial */
/**
 * 主要通过K extends keyof T约束K必须为keyof T的子类型
 * keyof T得到的是T的所有key组成的联合类型
 */
type PartialOptional<T, K extends keyof T> = {
  [P in K]?: T[P];
};

/**
 * @example
 *     type Eg1 = { key1?: string; key2?: number }
 */
type Pg1 = PartialOptional<
  {
    key1: string;
    key2: number;
    key3: "";
  },
  "key1" | "key2"
>;

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type PartReadonly<T, K extends keyof T> = {
  readonly [P in K]: T[P];
};
/**
 * @example
 * type Eg = {
 *   readonly key1: string;
 *   readonly key2: number;
 * }
 */
type Rd1 = MyReadonly<{
  key1: string;
  key2: number;
}>;
type RdP = PartReadonly<
  {
    key1: string;
    key2: number;
  },
  "key1"
>;

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * @example
 * type Eg = {readonly a?: string}
 */
type Pc1 = MyPick<{ readonly a?: string; b: number }, "a" | "b">;

type MyRecord<T extends string | number | symbol, K> = {
  [P in T]: K;
};

/**
 * @example
 * type Eg1 = {
 *   a: { key1: string; };
 *   b: { key1: string; };
 * }
 * @desc 就是遍历第一个参数'a' | 'b'的每个子类型，然后将值设置为第二参数
 */
type Rc1 = MyRecord<"a" | "b", { key1: string }>;

/**
 * 遍历T中的所有子类型，如果该子类型约束于U（存在于U、兼容于U），
 * 则返回never类型，否则返回该子类型
 * T直接传入时，是按照分配律逐个比较
 * 取差集
 */
type MyExclude<T, U> = T extends U ? never : T;

/**
 * @example
 * type Eg = 'key1'
 */
type Ec1 = MyExclude<"key1" | "key2", "key2">;

type MyExtract<T, U> = T extends U ? T : never;

/**
 * @example
 *  type Eg = 'key1'
 *  T直接传入时，是按照分配律逐个比较
 * @desc 取交集
 */
type Et = MyExtract<"key1" | "key2", "key1">;

/**
 * 利用Pick实现Omit
 */
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type OM = MyOmit<{ a: number; b: number; c: number }, "a" | "b">;

const tsT: OM = {
  c: 3,
};

/**
 *  @desc Parameters具体实现
 */

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
/**
 * @example
 * type Eg = [arg1: string, arg2: number];
 */
type Prm = MyParameters<(arg1: string, arg2: number) => void>;

/**
 * 普通方式
 */
type Tuple1 = [string, number?];
const Tp1: Tuple1 = ["aa", 11];
const Tp1s: Tuple1 = ["aa"];

/**
 * 具名方式
 */
type Tuple2 = [name: string, age?: number];
const Tp2: Tuple2 = ["aa", 11];
const Tp2s: Tuple2 = ["aa"];

/**
 * 约束参数T为数组类型
 * 先判断T是否为数组，如果是数组推到数组元素的类型
 */
type FlattenArray<T extends Array<any>> = T extends Array<infer P> ? P : never;

type FA1 = FlattenArray<[1, 2, "", true]>;

/**
 * @desc ReturnType的实现其实和Parameters的基本一样
 * 无非是使用infer R的位置不一样。
 */
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

/**
 * 核心实现还是利用infer进行推导构造函数的参数类型
 */
type MyConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;

/**
 * @example
 * type Eg = string;
 */
interface ErrorConstructor {
  new (message?: string): Error;
  (message?: string): Error;
  readonly prototype: Error;
}
type Cp1 = ConstructorParameters<ErrorConstructor>;

/**
 * @example
 * type Eg2 = [name: string, sex?: number];
 */
class People {
  constructor(public name: string, sex?: number) {}
}
type Cp2 = ConstructorParameters<typeof People>;

/** */
type MyInstanceType<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: any) => infer R ? R : any;

/**
 * @desc 构造一个将字符串转大写的类型
 * @example
 * type Eg1 = 'ABCD';
 */
type Up1 = Uppercase<"abcd">;

/**
 * @desc 构造一个将字符串转小大写的类型
 * @example
 * type Eg2 = 'abcd';
 */
type Lw1 = Lowercase<"ABCD">;

/**
 * @desc 构造一个将字符串首字符转大写的类型
 * @example
 * type Eg3 = 'Abcd';
 */
type Cpt1 = Capitalize<"abcd">;

/**
 * @desc 构造一个将字符串首字符转小写的类型
 * @example
 * type Eg3 = 'aBCD';
 */
type Ucp1 = Uncapitalize<"ABCD">;

/**
 * 核心实现
 */
// type MySymmetricDifference<A, B> = SetDifference<A | B, A & B>;

/**
 * SetDifference的实现和Exclude一样
 */
type MySymmetricDifference1<T, U> = Exclude<T | U, T & U>;

/**
 * @example
 * type Eg = '1' | '4';
 */
type SDF = MySymmetricDifference1<"1" | "2" | "3", "2" | "3" | "4">;

/**
 * @desc NonUndefined判断T是否为undefined
 */
type NonUndefined<T> = T extends undefined ? never : T;

/**
 * @desc 核心实现
 */
type FunctionKeys<T extends object> = {
  [K in keyof T]: NonUndefined<T[K]> extends Function ? K : never;
}[keyof T];

/**
 * @example
 * type Eg = 'key2' | 'key3';
 */
type AType = {
  key1: string;
  key2: () => void;
  key3: Function;
  key4: number;
};
type FK = FunctionKeys<AType>;

type Primitive = string | number | bigint | boolean | symbol | null | undefined;

/**
 * @desc 用于创建获取指定类型工具的类型工厂
 * @param T 待提取的类型
 * @param P 要创建的类型
 * @param IsCheckNon 是否要进行null和undefined检查
 */
type KeysFactory<
  T,
  P extends Primitive | Function | object,
  IsCheckNon extends boolean
> = {
  [K in keyof T]: IsCheckNon extends true
    ? NonUndefined<T[K]> extends P
      ? K
      : never
    : T[K] extends P
    ? K
    : never;
}[keyof T];

/**
 * @example
 * 例如上述KeysFactory就可以通过工厂类型进行创建了
 */
type FunctionKeys1<T> = KeysFactory<T, Function, true>;
type StringKeys<T> = KeysFactory<T, string, true>;
type NumberKeys<T> = KeysFactory<T, Number, true>;

let NK1: NumberKeys<AType>;

/**
 * 核心实现
 */
type MutableKeys<T extends object> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    P
  >;
}[keyof T];

/**
 * @desc 一个辅助类型，判断X和Y是否类型相同，
 * @returns 是则返回A，否则返回B
 */
type IfEquals<X, Y, A = X, B = never> =
 (<T>() => T extends X ? 1 : 2) extends
   <T>() => T extends Y ? 1 : 2
  ? A
  : B;
