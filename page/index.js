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
