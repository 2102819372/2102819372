import NumberTimer from "./util/number";
import appendNumber from "./page/appendNumber";
let n = new NumberTimer();
n.onNumberCreated = function (n, isPrime) {
  appendNumber(n, isPrime);
};
n.start();
setTimeout(() => {
  n.stop();
}, 5000);
