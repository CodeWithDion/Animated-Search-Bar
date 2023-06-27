const searchBarContainer = document.querySelector(".search-bar-container");
const magnfierEl = document.querySelector(".magnifier");

magnfierEl.addEventListener("click", () => {
    searchBarContainer.classList.toggle("active");
})