const sliderBox = document.getElementById("image-slider");

function setImage(element) {
  document.querySelector(".framer-sl1pfe").className = "framer-1ef5yrv";
  element.className = "framer-sl1pfe";
  element.querySelector("img").src;
  sliderBox.src = element.querySelector("img").src;
}

for (i = 0; i != 6; i++) {
  const element = document.getElementById(`image-slider-item-${i}`);
  element.onclick = () => setImage(element);
}
