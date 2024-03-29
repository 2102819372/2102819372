import isPrime from "./isprime";

export default class NumberTimer {
  constructor(duration = 500) {
    this.duration = duration;
    this.number = 1; //当前数字
    this.onNumberCreated = null; //当一个数字产生要调用的回调函数
    this.timerId = null;
  }
  start() {
    if (this.timerId) {
      return;
    }
    setInterval(() => {
      this.onNumberCreated &&
        this.onNumberCreated(this.number, isPrime(this.number));
      this.number++;
    }, this.duration);
  }
  stop() {
    if (!this.timerId) {
      return;
    }
    this.timerId = null;
  }
}
