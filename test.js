var productImages = document.getElementsByClassName("productImage");
var modalImage = document.getElementById("modalImage");
var modal = document.getElementById("myModal");

for (var i = 0; i < productImages.length; i++) {
  productImages[i].addEventListener("click", function () {
    modalImage.src = this.src;
    modal.style.display = "block";
  });
}

document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    modal.style.display = "none";
  });

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

window.addEventListener("scroll", function () {
  modal.style.display = "none";
});

// Main code:

window.addEventListener("scroll", function () {
  modal.style.display = "none";
