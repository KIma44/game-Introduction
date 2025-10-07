const links = document.querySelectorAll("header a");

links.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.transform = "scale(1.1)";
        link.style.transition = "0.2s";
    });
    link.addEventListener("mouseout", () => {
        link.style.transform = "scale(1)";
    });
});

// 이미지 시간 지나면 바뀌는 기능
const imgList = ["../images/챔피언스2021.jpg",
    "../images/2022챔피언스.jpg", "../images/2024챔피언스.jpg"
];

let currentIndex = 0;
const imgElement = document.getElementById("slider");

setInterval(() => {
    currentIndex = (currentIndex + 1) % imgList.length;
      imgElement.src = imgList[currentIndex];
    }, 3000); // 3초

console.log('dda')


// 검색 창 기능
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
});
