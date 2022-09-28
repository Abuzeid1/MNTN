const parent = document.querySelector("header.header");
const child = document.querySelector("header.header > .header-content.section");

const height = parent.offsetHeight - child.offsetHeight;
const FirstOffsetTop = child.offsetTop;
document.addEventListener("scroll", changeOpacity);
function changeOpacity() {
  child.style.opacity = (height - child.offsetTop) / (height - FirstOffsetTop);
}
