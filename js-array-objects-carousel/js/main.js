/* Data */

const items = [
  {
    title: "Svezia",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
    img: "img/1.jpg",
  },
  {
    title: "Svizzera",
    text: "Lorem ipsum.",
    img: "img/2.jpg",
  },
  {
    title: "Gran Bretagna",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "img/3.jpg",
  },
  {
    title: "Germania",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
    img: "img/4.jpg",
  },
  {
    title: "Paradise",
    text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
    img: "img/5.jpg",
  },
];

// Select Carousel and Thumbnails
const carouselContainer = document.querySelector(".my-carousel-images");
const thumbnailsContainer = document.querySelector(".my-thumbnails");

// Generate Images & Thumbnails
for (let i = 0; i < items.length; i++) {
  carouselContainer.innerHTML += `
    <div class="position-relative d-none">
        <div class="position-absolute start-0 bottom-0 end-0 text-white text-end p-5">
            <h1>${items[i].title}</h1>
            <p>${items[i].text}</p>
        </div>
        <img
            class="w-100"
            src="${items[i].img}"
            alt="${items[i].title}"
        />
    </div>`;

  thumbnailsContainer.innerHTML += `
    <div class="thumbnail">
        <img class="w-100" src="${items[i].img}" alt="Thumbnail of ${items[i].title} picture">
    </div>`;
}

// Images Active
let activeElement = 0;
const imgDnoneElements = document.querySelectorAll(".d-none");
imgDnoneElements[activeElement].classList.add("active");
const thumbnails = document.querySelectorAll(".thumbnail img");
thumbnails[activeElement].classList.add("active");

// Select Buttons
const nextButton = document.querySelector(".my-next");
const prevButton = document.querySelector(".my-previous");

// Button Event Listener
nextButton.addEventListener("click", function () {
  changeCarousel(1);
});
prevButton.addEventListener("click", function () {
  changeCarousel(-1);
});

/**
 * Change Carousel Img
 * @param {*} moreorless // = 1 for Next, = -1 for Previous
 */
function changeCarousel(moreorless) {
  imgDnoneElements[activeElement].classList.remove("active");
  thumbnails[activeElement].classList.remove("active");
  activeElement = activeElement + moreorless;
  if (activeElement === thumbnails.length) activeElement = 0;
  if (activeElement === -1) activeElement = thumbnails.length - 1;
  imgDnoneElements[activeElement].classList.add("active");
  thumbnails[activeElement].classList.add("active");
}

// BONUS
const afterCarousel = document.getElementById("my-after-carousel");

// Create buttons and form
afterCarousel.innerHTML += `
<div class="d-flex gap-2 justify-content-center mb-5">
  <a id="button-autoplay" class="btn btn-primary">Autoplay Carousel ></a>
  <a id="button-invert" class="btn btn-secondary">Autoplay Carousel <</a>
  <a id="button-stop" class="btn btn-warning">Stop</a>
</div>

<!--
<div>
  <h3>Add a new img</h3>
  <div>
      <input type="text" id="input-title" placeholder="Title">
      <input type="text" id="input-text" placeholder="Text">
      <input type="text" id="input-img" placeholder="Link of and img">
      <input type="submit" id="input-submit" value="Submit">
  </div>
</div>
-->`;

// Add Event Listener
document
  .getElementById("button-autoplay")
  .addEventListener("click", handleAutoplay);
document
  .getElementById("button-invert")
  .addEventListener("click", handleAutoplay);
document
  .getElementById("button-stop")
  .addEventListener("click", handleAutoplay);
let initCarousel;

// Handle Autoplay
function handleAutoplay(e) {
  if (e.srcElement.id == "button-autoplay")
    initCarousel = setInterval(changeCarousel, 2000, 1); // if press autplau button
  if (e.srcElement.id == "button-stop") clearInterval(initCarousel); // if press stop button
  if (e.srcElement.id == "button-invert") setInterval(changeCarousel, 2000, -1); // if press changeCarousel invert
}

// Add img and recreate all
/* document.getElementById("input-submit").addEventListener("click", function () {
  const newImg = {};
  newImg.title = document.getElementById("input-title").value;
  newImg.text = document.getElementById("input-text").value;
  newImg.img = document.getElementById("input-img").value;
  items.push(newImg);
}); */
