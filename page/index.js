// ==========================
// 이미지 슬라이더 기능
// ==========================

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
}, 3000); // 3초마다 이미지 변경

// ==========================
// 검색창 열고 닫기 기능
// ==========================

const searchBtn = document.getElementById("searchBtn");     // 돋보기 버튼
const searchBox = document.getElementById("searchBox");     // 검색창 div
const closeBtn = document.getElementById("closeBtn");       // 닫기 버튼 (×)
const input = document.getElementById("searchInput");       // input 입력창

// 검색창 열기
searchBtn.addEventListener("click", () => {
    searchBox.classList.add("active");
    input.focus(); // 자동 포커스
});

// 검색창 닫기 및 초기화
closeBtn.addEventListener("click", () => {
    searchBox.classList.remove("active");
    input.value = "";

    // 모든 섹션 다시 보이게 하기
    const allSections = document.querySelectorAll("main section");
    allSections.forEach(section => {
        section.style.display = "block";
    });
});

// ==========================
// 검색 기능 (Enter 키로 필터링)
// ==========================

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const keyword = input.value.trim().toLowerCase(); // 입력된 검색어
        if (!keyword) return;

        const allSections = document.querySelectorAll("main section");

        let found = false;
        allSections.forEach(section => {
            const text = section.textContent.toLowerCase();
            if (text.includes(keyword)) {
                section.style.display = "block";
                found = true;
            } else {
                section.style.display = "none";
            }
        });

        // 검색 결과 없을 때 메시지 추가 (선택사항)
        if (!found) {
            alert("검색 결과가 없습니다.");
        }
    }
});
