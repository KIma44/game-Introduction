// 발로란트 스킨 데이터
const skins = [
  { name: "가이아 복수 고스트", weapon: "고스트", rarity: "프리미엄 에디션", price: 1775, discount: 42, img: "../images/skins/가이아 복수 고스트.png" },
  { name: "네뷰라 아레스", weapon: "아레스", rarity: "프리미엄 에디션", price: 1775, discount: 31, img: "../images/skins/네뷰라 아레스.png" },
  { name: "넵튠 가디언", weapon: "가디언", rarity: "프리미엄 에디션", price: 1775, discount: 27, img: "../images/skins/넵튠 가디언.png" },
  { name: "도깨비 프렌지", weapon: "프렌지", rarity: "프리미엄 에디션", price: 1775, discount: 54, img: "../images/skins/도깨비 프렌지.png" },
  { name: "메이지펑크 스펙터", weapon: "스펙터", rarity: "프리미엄 에디션", price: 1775, discount: 21, img: "../images/skins/메이지펑크스펙터.png" },
  { name: "아이온", weapon: "버키", rarity: "프리미엄 에디션", price: 1775, discount: 21, img: "../images/skins/아이온버키.png" },
  { name: "크림슨비스트", weapon: "저지", rarity: "프리미엄 에디션", price: 1775, discount: 21, img: "../images/skins/크림슨비스트저지.png" },
  { name: "메이지펑크", weapon: "버키", rarity: "프리미엄 에디션", price: 1775, discount: 21, img: "../images/skins/크메이지펑버키.png" },
  { name: "포세이큰", weapon: "스팅어", rarity: "프리미엄 에디션", price: 1775, discount: 21, img: "../images/skins/포세이큰 스팅어.png" },
  { name: "프라임", weapon: "스펙터", rarity: "프리미엄 에디션", price: 1775, discount: 21, img: "../images/skins/프라임스펙터.png" },
  { name: "프라임", weapon: "클래식", rarity: "프리미엄 에디션", price: 1775, discount: 21, img: "../images/skins/프라임클래식.png" },
  { name: "메이지펑크", weapon: "마샬", rarity: "프리미엄 에디션", price: 1775, discount: 21, img: "../images/skins/프리미엄마샬.png" },
  { name: "약탈자", weapon: "오딘", rarity: "프리미엄 에디션", price: 1775, discount: 21, img: "../images/skins/약탈자 오딘.png" },
  { name: "약탈자", weapon: "오퍼", rarity: "프리미엄 에디션", price: 1775, discount: 21, img: "../images/skins/약탈자오퍼.png" },
  { name: "에고", weapon: "아웃로", rarity: "프리미엄 에디션", price: 1775, discount: 21, img: "../images/skins/에고 아웃로.png" },
  { name: "에이몬디어", weapon: "불독", rarity: "프리미엄 에디션", price: 1775, discount: 21, img: "../images/skins/에이몬디어 불독.png" },
  { name: "오리진", weapon: "오퍼", rarity: "프리미엄 에디션", price: 1775, discount: 21, img: "../images/skins/오리진 오퍼.png" },
  { name: "용맹한 영웅", weapon: "밴달", rarity: "프리미엄 에디션", price: 1775, discount: 21, img: "../images/skins/용맹한 영웅 밴달.png" },
  { name: "정찰", weapon: "팬텀", rarity: "프리미엄 에디션", price: 1775, discount: 21, img: "../images/skins/정찰팬텀.png" },
  { name: "러쉬 아레스", weapon: "아레스", rarity: "디럭스 에디션", price: 1275, discount: 36, img: "../images/skins/디럭스 러쉬 아레스.png" },
  { name: "럭스 고스트", weapon: "고스트", rarity: "디럭스 에디션", price: 1275, discount: 21, img: "../images/skins/디럭스 럭스 고스트.png" },
  { name: "레베리 클래식", weapon: "클래식", rarity: "디럭스 에디션", price: 1275, discount: 21, img: "../images/skins/디럭스 레베리 클래식.png" },
  { name: "스마이트 저지", weapon: "저지", rarity: "디럭스 에디션", price: 1275, discount: 21, img: "../images/skins/디럭스 스마이트 저지.png" },
  { name: "프림즘 II 쇼티", weapon: "쇼티", rarity: "디럭스 에디션", price: 1275, discount: 21, img: "../images/skins/디럭스 프리즘 II쇼티.png" },
  { name: "시그니처", weapon: "셰리프", rarity: "디럭스 에디션", price: 1275, discount: 21, img: "../images/skins/디럭스시그니처셰리프.png" },
  { name: "급강화", weapon: "프렌지", rarity: "셀렉트 에디션", price: 875, discount: 21, img: "../images/skins/셀렉트 급강화 프렌지.png" },
  { name: "스마이트", weapon: "오딘", rarity: "셀렉트 에디션", price: 875, discount: 21, img: "../images/skins/셀렉트 스마이트 오딘.png" },
  { name: "실바누스", weapon: "밴달", rarity: "셀렉트 에디션", price: 875, discount: 21, img: "../images/skins/셀렉트 실바누스 밴달.png" },
  { name: "아리스토크랫", weapon: "스팅어", rarity: "셀렉트 에디션", price: 875, discount: 21, img: "../images/skins/셀렉트 아리스토크랫 스팅어.png" },
  { name: "윈터원더랜드", weapon: "마샬", rarity: "셀렉트 에디션", price: 875, discount: 21, img: "../images/skins/셀렉트 윈터원더랜드 마샬.png" },
  { name: "프리즘", weapon: "아웃로", rarity: "셀렉트 에디션", price: 875, discount: 21, img: "../images/skins/셀렉트 프리즘 아웃로.png" },
  { name: "프리즘", weapon: "팬텀", rarity: "셀렉트 에디션", price: 875, discount: 21, img: "../images/skins/셀렉트 프리즘 팬텀.png" },
  { name: "호라인즈", weapon: "불독", rarity: "셀렉트 에디션", price: 875, discount: 21, img: "../images/skins/셀렉트 호라인즈 불독.png" },
  { name: "미니마", weapon: "셰리프", rarity: "셀렉트 에디션", price: 875, discount: 21, img: "../images/skins/셀렉트셰리프.png" },
  { name: "제노헌터", weapon: "칼", rarity: "울트라 에디션", price: 1775, discount: 21, img: "../images/skins/제노헌터 칼.png" },
  { name: "크라이오스테이시스", weapon: "칼", rarity: "울트라 에디션", price: 1775, discount: 21, img: "../images/skins/크라이오스테이시스 칼 스킨.png" },

];

// 모달 요소
const modal = document.getElementById("skinModal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalWeapon = document.getElementById("modalWeapon");
const modalRarity = document.getElementById("modalRarity");
const modalPrice = document.getElementById("modalPrice");
const modalDiscount = document.getElementById("modalDiscount");
const marketContainer = document.getElementById("marketContainer");
const closeBtn = document.querySelector(".close");

// 배열 섞기
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 등급별 클래스 반환
function getRarityClass(rarity) {
  switch (rarity) {
    case "셀렉트 에디션": return "rarity-select";
    case "디럭스 에디션": return "rarity-deluxe";
    case "프리미엄 에디션": return "rarity-premium";
    case "익스클루시브 에디션": return "rarity-exclusive";
    case "울트라 에디션": return "rarity-ultra";
    default: return "";
  }
}

// 야시장 카드 6개 생성
function createNightMarket() {
  marketContainer.innerHTML = "";

  const premiumSkins = shuffle(skins.filter(s => s.rarity === "프리미엄 에디션")).slice(0, 2);
  const remainingSkins = [];
  const usedSkins = new Set(premiumSkins);

  while (remainingSkins.length < 4) {
    const candidate = skins[Math.floor(Math.random() * skins.length)];
    if (!usedSkins.has(candidate)) {
      remainingSkins.push(candidate);
      usedSkins.add(candidate);
    }
  }

  const nightMarketSkins = shuffle([...premiumSkins, ...remainingSkins]);

  nightMarketSkins.forEach(skin => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">?</div>
        <div class="card-back"></div>
      </div>
    `;

    card.addEventListener("click", () => revealSkin(card, skin));
    marketContainer.appendChild(card);
  });
}

// 카드 클릭 처리
function revealSkin(card, skin) {
  if (card.classList.contains("flip")) return;

  skin.discount = Math.floor(Math.random() * 49) + 1;
  const discountedPrice = Math.floor(skin.price * (1 - skin.discount / 100));

  const back = card.querySelector(".card-back");
  back.innerHTML = `
    <img src="${skin.img}">
    <h3>${skin.name}</h3>
    <p>${skin.weapon}</p>
    <p>${skin.rarity}</p>
    <p>원가 : ${skin.price} VP</p>
    <p>할인 ${skin.discount}% → ${discountedPrice} VP</p>
  `;

  // ⭐ 등급 테두리 적용
  back.classList.add(getRarityClass(skin.rarity));

  card.classList.add("flip");

  // 모달 열기
  card.onclick = () => openModal(skin, discountedPrice);
}

// 모달 열기
function openModal(skin, discountedPrice) {
  modal.style.display = "flex";
  modalImg.src = skin.img;
  modalName.textContent = skin.name;
  modalWeapon.textContent = "총기 : " + skin.weapon;
  modalRarity.textContent = "희귀도 : " + skin.rarity;
  modalPrice.textContent =
    `가격 : ${skin.price} VP (할인 ${skin.discount}% → ${discountedPrice} VP)`;
}

// 모달 닫기
closeBtn.onclick = () => (modal.style.display = "none");

// 초기 실행
createNightMarket();

// 초기화 버튼
document.getElementById("resetBtn").onclick = () => {
  createNightMarket();
};