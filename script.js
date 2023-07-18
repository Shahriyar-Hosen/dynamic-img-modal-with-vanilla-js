const productImages = document.getElementsByClassName("productImage");
const modalImage = document.getElementById("modalImage");
const modal = document.getElementById("myModal");

for (let i = 0; i < productImages.length; i++) {
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
