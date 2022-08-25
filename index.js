const parent = document.querySelector(".header");
const child = document.querySelector(".header > .header-content");
const FirstOffsetBottom =
  parent.offsetHeight - child.offsetTop - child.offsetHeight;

document.addEventListener("scroll", changeOpacity);
function changeOpacity() {
  let offsetBottom = parent.offsetHeight - child.offsetTop - child.offsetHeight;

  child.style.opacity = offsetBottom / FirstOffsetBottom;
}
