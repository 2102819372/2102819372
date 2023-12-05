import "../public/assets/index.css";
import src from "../public/assets/屏幕截图 2023-10-13 203336.png";
const img = document.createElement("img");
img.src = src;
document.body.appendChild(img);
import NumberTimer from "./util/number";
import appendNumber from "./page/appendNumber";
let n = new NumberTimer();
/**
 * Executes the "onNumberCreated" function.
 *
 * @param {number} n - The number created.
 * @param {boolean} isPrime - Indicates if the number is prime.
 */
n.onNumberCreated = function (n, isPrime) {
  appendNumber(n, isPrime);
};
n.start();
setTimeout(() => {
  n.stop();
}, 5000);
