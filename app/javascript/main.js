const CLASSNAME = "-visible";
const TIMEOUT = 2000;
const $target = $(".bg");
let animationStopped = false;

setTimeout(() => {
  $target.addClass(CLASSNAME); // アニメーションを開始
}, TIMEOUT);

