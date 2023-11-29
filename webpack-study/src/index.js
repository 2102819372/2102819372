require("../assets/index.css");
const src = require("../assets/屏幕截图 2023-10-13 203336.png");
const img = document.createElement("img");
console.log(src)
img.src = src;
document.body.appendChild(img);
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
