import { cats } from "./assets";
import "./slideshow.scss";

const Slideshow = ((images) => {
  let currentImage = 0;
  const imagesLength = Object.keys(images).length - 1;

  const tape = document.querySelector(".slideshow-tape");
  const dots = document.querySelector(".dots");

  const generateImage = (url) => {
    const img = new Image();
    img.src = url;
    img.classList.add("image");

    return img;
  };

  const populateSlideshowTape = () => {
    Object.values(images).map((imgURL) => {
      const imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");
      imgContainer.appendChild(generateImage(imgURL));

      tape.appendChild(imgContainer);
    });
  };

  const moveSSTape = () => {
    let leftCoords = currentImage * 500;
    tape.style.left = `-${leftCoords}px`;
    activateDot();
  };

  const moveToImage = (index) => {
    currentImage = index;
    moveSSTape();
  };

  const nextImg = () => {
    currentImage < imagesLength ? (currentImage += 1) : (currentImage = 0);
    moveSSTape();
  };

  const prevImg = () => {
    currentImage > 0 ? (currentImage -= 1) : (currentImage = imagesLength);
    moveSSTape();
  };

  const activateDot = () => {
    const allDots = document.querySelectorAll(".dot");
    allDots.forEach((dot) => dot.classList.remove("active"));
    allDots[currentImage].classList.add("active");
  };

  const generateDots = () => {
    for (let i = 0; i <= imagesLength; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.addEventListener("click", () => moveToImage(i));

      dots.appendChild(dot);
    }
    activateDot();
  };

  const bindButtons = () => {
    const buttonNext = document.querySelector(".next-image");
    buttonNext.addEventListener("click", nextImg);
    const buttonPrev = document.querySelector(".prev-image");
    buttonPrev.addEventListener("click", prevImg);
  };

  const init = () => {
    populateSlideshowTape();
    generateDots();
    bindButtons();
  };

  return { init };
})(cats);

export { Slideshow as default };
