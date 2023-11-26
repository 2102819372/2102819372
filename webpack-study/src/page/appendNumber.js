import radColor from "../util/radColor";
let divContainer = document.getElementById("divContainer");
let divCenter = document.getElementById("divCenter");
export default function (n, isPrime) {
  let span = document.createElement("span");
  if (isPrime) {
    span.style.color = radColor();
  }
  span.innerText = n;
  divContainer.appendChild(span);
  createCenterNumber(n);
}
function createCenterNumber(n) {
  divCenter.innerText = n;
}
