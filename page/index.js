const imgList = [
"../images/챔피언스2021.jpg",
"../images/2022챔피언스.jpg",
"../images/2024챔피언스.jpg"
];
let currentIndex = 0;
const imgElement = document.getElementById("slider");
setInterval(() => {
currentIndex = (currentIndex + 1) % imgList.length;
imgElement.src = imgList[currentIndex];
}, 3000); 
const searchBtn = document.getElementById("searchBtn");     
const searchBox = document.getElementById("searchBox");     
const closeBtn = document.getElementById("closeBtn");       
const input = document.getElementById("searchInput");       
searchBtn.addEventListener("click", () => {
searchBox.classList.add("active");
input.focus(); 
});
closeBtn.addEventListener("click", () => {
searchBox.classList.remove("active");
input.value = "";
const allSections = document.querySelectorAll("main section");
allSections.forEach(section => {
section.style.display = section.dataset.originalDisplay || "block";
});
});
input.addEventListener("keypress", function (e) {
if (e.key === "Enter") {
const keyword = input.value.trim().toLowerCase();
if (!keyword) return;
const allSections = document.querySelectorAll("main section");
let found = false;
allSections.forEach(section => {
const text = section.textContent.toLowerCase();
if (text.includes(keyword)) {
section.style.display = section.dataset.originalDisplay || "block";
found = true;
} else {
section.style.display = "none";
}
});
if (!found) {
alert("검색 결과가 없습니다.");
}
}
});
document.addEventListener("DOMContentLoaded", () => {
const sections = document.querySelectorAll("main section");
sections.forEach(section => {
section.dataset.originalDisplay = getComputedStyle(section).display;
});
});