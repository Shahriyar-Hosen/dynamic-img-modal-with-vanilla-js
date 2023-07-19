// example 1

const productImages = document.getElementsByClassName(
  "productImage"
) as HTMLCollectionOf<HTMLImageElement>;
const modalImage = document.getElementById("modalImage") as HTMLImageElement;
const modal = document.getElementById("myModal") as HTMLElement;

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
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// example 2

const modal1 = document.getElementById("myModal") as HTMLElement;

document.addEventListener("click", function (e: MouseEvent) {
  const targetElement = e.target as HTMLElement;
  if (targetElement?.classList.contains("productImage")) {
    const modalImage = document.getElementById(
      "modalImage"
    ) as HTMLImageElement;
    if (targetElement instanceof HTMLImageElement) {
      modalImage.src = targetElement.src;
    }
    modal1.style.display = "block";
  } else if (
    targetElement?.classList?.contains("close") ||
    targetElement === modal1
  ) {
    modal1.style.display = "none";
  }
});

// example 3

const modal2 = document.getElementById("myModal") as HTMLElement;

document.addEventListener("click", (e: MouseEvent) => {
  const targetElement = e.target as HTMLElement;
  if (targetElement?.classList?.contains("productImage")) {
    const modalImage = document.getElementById(
      "modalImage"
    ) as HTMLImageElement;
    if (targetElement instanceof HTMLImageElement) {
      modalImage.src = targetElement.src;
    }
    modal2.style.display = "block";
  } else if (
    targetElement?.classList?.contains("close") ||
    targetElement === modal2
  ) {
    modal2.style.display = "none";
  }
});

// example 4
const modal3 = document.getElementById("myModal") as HTMLElement;

document.addEventListener("click", function (event) {
  const targetElement = event.target as HTMLElement | null;
  const modalImage = document.getElementById("modalImage") as HTMLImageElement;

  if (targetElement?.classList.contains("productImage")) {
    if (targetElement instanceof HTMLImageElement) {
      modalImage.src = targetElement.src;
    }
    modal3.style.display = "block";
  } else if (
    targetElement?.classList.contains("close") ||
    targetElement === modal3
  ) {
    modal3.style.display = "none";
  }
});

// example 5
const modal4 = document.getElementById("myModal") as HTMLElement;

document.addEventListener("click", function (event) {
  const targetElement = event.target as HTMLElement | null;
  const modalImage = document.getElementById("modalImage") as HTMLImageElement;

  if (targetElement?.classList.contains("productImage")) {
    if (targetElement instanceof HTMLImageElement) {
      modalImage.src = targetElement.src;
    }
    modal4.style.display = "block";
  } else if (
    targetElement?.classList.contains("close") ||
    targetElement === modal4
  ) {
    modal4.style.display = "none";
  }
});
