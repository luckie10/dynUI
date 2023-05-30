import { cats } from "./assets";
import "./slideshow.scss";

const Slideshow = ((images) => {
  let currentImage = 0;
  const imagesLength = Object.keys(images).length - 1;
  const tape = document.querySelector(".slideshow-tape");
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
  };
  };

  const nextImg = () => {
    currentImage < imagesLength ? (currentImage += 1) : (currentImage = 0);
    moveSSTape();
  };

  const prevImg = () => {
    currentImage > 0 ? (currentImage -= 1) : (currentImage = imagesLength);
    moveSSTape();
  };

  const bindButtons = () => {
    const buttonNext = document.querySelector(".next-image");
    buttonNext.addEventListener("click", nextImg);
    const buttonPrev = document.querySelector(".prev-image");
    buttonPrev.addEventListener("click", prevImg);
  };

  const init = () => {
    populateSlideshowTape();
    bindButtons();
  };

  return { init };
})(cats);

export { Slideshow as default };
