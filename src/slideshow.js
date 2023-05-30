import { cats } from "./assets";
import "./slideshow.scss";

const Slideshow = ((images) => {
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

  const init = () => {
    populateSlideshowTape();
  };
  return { init };
})(cats);
export { Slideshow as default };
