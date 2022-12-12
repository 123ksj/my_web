document.addEventListener("scroll", _checkPosition);

var winH = window.innerHeight;    // 758
var items = document.querySelectorAll(".image-scroll");
console.log(items);

function _checkPosition() {
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove("hidden");

    var posFromTop = items[i].getBoundingClientRect().top;

    if (winH > posFromTop) {
      items[i].classList.add("scroll-effect");
    }
    
  }
}
