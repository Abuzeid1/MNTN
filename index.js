const parent = document.querySelector(".header");
const child = document.querySelector(".header > .header-content");
const FirstOffsetBottom =
  parent.offsetHeight - child.clientHeight - child.offsetHeight - 1;

document.addEventListener("scroll", changeOpacity);
function changeOpacity() {
  let offsetBottom =
    parent.offsetHeight - child.offsetHeight - child.offsetTop - 1;
  child.style.opacity = offsetBottom / FirstOffsetBottom;
}
