const mapsContainer = document.getElementById('maps');
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');
const sortSelect = document.getElementById('sort');
const resetBtn = document.getElementById('reset');
const modalBackdrop = document.getElementById('modalBackdrop');
const closeModal = document.getElementById('closeModal');
const modalContent = document.getElementById('modalContent');
const mapData = [
{
id: "split",name: "스플릿", type: "mid",img: "../images/maps/스플릿.png", location: "일본",
desc: "두 개의 로프와 좁은 회랑이 특징인 고층 도시 맵.",
features: "미드 장악이 매우 중요, 로프 활용 가능",
agents: ["세이지", "레이즈", "바이퍼"],
difficulty: 3,
rotationSpeed: "중간",
tags: ["미드", "로프"],
proTip: "A Heaven 장악 후 롱 압박, 작은 스모크로 회랑 통제.",
combos: [
["오멘", "소바", "제트", "킬조이", "브리치"],
["세이지", "레이즈", "바이퍼", "소바", "오멘"]
]
},
{
id: "icebox",    name: "아이스박스",    type: "mid",    location: "러시아",
img: "../images/maps/아이스박스.png",
desc: "복층 구조가 많은 북극 기지 맵.",
features: "복잡한 수직 구조, 앵글이 많음",
agents: ["바이퍼", "소바", "제트"],
difficulty: 4,
rotationSpeed: "중간",
tags: ["복층", "수직", "앵글"],
proTip: "드론 또는 소바 화살로 위층 앵글 정리, 빠른 로테이션 대비하자.",
combos: [
["바이퍼", "오멘", "소바", "제트", "세이지"],
["제트", "소바", "브리치", "킬조이", "오멘"]
]
},
{
id: "fracture",    name: "프렉처",type: "mid",location: "미국",


img: "../images/maps/프렉처.png",
desc: "독특한 Y자형 구조와 공격 측 스폰이 양쪽에 위치.",

features: "두 방향 스폰, 빠른 회전 구조",
agents: ["브리치", "레이즈", "오멘"],
difficulty: 3,
rotationSpeed: "빠름",
tags: ["Y자", "로테이션"],
proTip: "공격 시 가짜 진입으로 상대 균형 흔들기, 회전 속도를 활용하자.",
combos: [
["브리치", "레이즈", "오멘", "소바", "킬조이"],
["오멘", "브리치", "제트", "소바", "세이지"]
]
},
{
id: "pearl", name: "펄",  type: "mid",location: "포르투갈 (수중 도시)",
img: "../images/maps/펄.png",
desc: "미드 중심의 단순하지만 전략적인 맵.",
features: "미드 라인이 가장 중요",
agents: ["킬조이", "바이퍼", "소바"],
difficulty: 2,
rotationSpeed: "느림",
tags: ["미드", "단순"],
proTip: "미드 컨트롤로 상대의 사이트 진입을 조절하자.",
combos: [
["소바", "킬조이", "바이퍼", "오멘", "제트"],
["세이지", "소바", "킬조이", "바이퍼", "레이즈"]
]
},
{
id: "lotus", name: "로터스",type: "three-site", location: "인도 유적",
img: "../images/maps/로터스.png",
desc: "회전문과 세 개 사이트 구조를 가진 독특한 맵.",
features: "회전문 / 3 사이트",
agents: ["오멘", "페이드", "스카이"],
difficulty: 4,
rotationSpeed: "중간",
tags: ["회전문", "3사이트"],
proTip: "회전문 플레이로 상대의 로테이션 예측을 흔들자.",
combos: [
["오멘", "스카이", "페이드", "브림스톤", "소바"],
["오멘", "페이드", "스카이", "제트", "킬조이"]
]
},
{
id: "sunset",name: "선셋",  type: "mid", location: "미국 LA",
img: "../images/maps/선셋.png",
desc: "미드가 크게 중요하며 LA 거리 기반 맵.",
features: "넓은 미드, 단순한 구조",
agents: ["오멘", "소바", "레이나"],
difficulty: 2,
rotationSpeed: "느림",
tags: ["미드", "개방형"],
proTip: "롱 라인에서 스나이퍼 또는 소바가 매우 유용함.",
combos: [
["소바", "오멘", "레이나", "세이지", "제트"],
["오멘", "소바", "브리치", "킬조이", "레이나"]
]
},
{
id: "abyss",name: "어비스",  type: "mid",location: "알 수 없음",
img: "../images/maps/어비스.png",
desc: "구덩이 추락으로 즉사하는 트랩이 있는 독특한 맵.",
features: "낙사 가능 / 좁은 길",
agents: ["제트", "레이즈", "요루"],
difficulty: 3,
rotationSpeed: "빠름",
tags: ["낙사", "트랩"],
proTip: "요루로 트랩 우회, 낙사 포인트 경계 필수.",
combos: [
["제트", "레이즈", "요루", "오멘", "킬조이"],
["제트", "소바", "오멘", "브리치", "레이즈"]
]
},
{
id: "breeze",name: "브리즈",type: "mid",location: "카리브 해",
img: "../images/maps/브리즈.png",
desc: "넓은 개활지와 긴 사거리 교전이 특징.", 
features: "매우 넓은 거리 / 롱 라인",
agents: ["체임버", "소바", "바이퍼"],
difficulty: 4,
rotationSpeed: "느림",
tags: ["롱거리", "개활지"],
proTip: "스나이퍼 또는 중장거리 에이전트 중심 플레이가 강력함.",
combos: [
["체임버", "소바", "바이퍼", "오멘", "세이지"],
["체임버", "제트", "소바", "브림스톤", "킬조이"]
]
},
{
id: "ascent",name: "어센트",type: "mid", location: "이탈리아 베니스",
img: "../images/maps/어센트.png",
desc: "이탈리아 베니스 상공의 전장. 중앙 미드 장악이 핵심.",
features: "개활지 중심 구조, 미드 통제 중요",
agents: ["소바", "킬조이", "제트"],
difficulty: 3,
rotationSpeed: "중간",
tags: ["미드", "개활지"],
proTip: "미드 스모크 + 소바로 중앙 통제 후 진입 전환이 유리함.",
combos: [
["소바", "킬조이", "제트", "오멘", "세이지"],
["소바", "브리치", "오멘", "킬조이", "제트"]
]
},
{
id: "bind",name: "바인드",  type: "teleporter",location: "모로코",
img: "../images/maps/바인드.png",
desc: "모로코 사막의 전장. 텔레포터를 활용한 회전 전략.",
features: "텔레포터 2개, 미드 없음",
agents: ["오멘", "레이즈", "브림스톤"],
difficulty: 3,
rotationSpeed: "빠름",
tags: ["텔레포터", "로테이션"],
proTip: "텔레포터를 이용한 트릭 로테이션이나 허위 진입이 효과적이다.",
combos: [
["오멘", "브림스톤", "레이즈", "소바", "세이지"],
["오멘", "브림스톤", "제트", "킬조이", "레이즈"]
]
},
{
id: "haven", name: "헤이븐",  type: "three-site", location: "인도",
img: "../images/maps/헤이븐.png",
desc: "세 개의 사이트를 가진 유일한 맵, 회전 판단이 중요.",
features: "3개 사이트 (A / B / C)",
agents: ["사이버", "소바", "제트"],
difficulty: 4,
rotationSpeed: "빠름",
tags: ["3사이트", "회전"],
proTip: "빠른 사이트 간 로테이션 + 정보 플레이가 중요하다.",
combos: [
["사이버", "소바", "제트", "오멘", "킬조이"],
["사이버", "스카이", "소바", "제트", "오멘"]
]
}
];
function renderMaps(data) {
mapsContainer.innerHTML = '';
data.forEach(map => {
const card = document.createElement('div');
card.className = 'map-card';
card.dataset.id = map.id;
card.innerHTML = `
<img class="map-thumb" src="${map.img}" alt="${map.name}">
<div class="map-info">
<h3>${map.name}</h3>
<p>${map.desc}</p>
<div class="meta"><strong>위치:</strong> ${map.location} | <strong>특징:</strong> ${map.features}</div>
<div class="tags">${map.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
<div class="agent-list">${map.agents.map(a => `<span class="agent">${a}</span>`).join('')}</div>
<div class="pro-tip">💡 ${map.proTip}</div>
<div class="mini-overlay">회전 속도: ${map.rotationSpeed}</div>
</div>
`;
card.addEventListener('click', () => openModal(map));
mapsContainer.appendChild(card);
});
}
function filterMaps() {
const kw = searchInput.value.trim().toLowerCase();
let filtered = mapData.filter(m =>
m.name.toLowerCase().includes(kw) ||
m.tags.some(tag => tag.toLowerCase().includes(kw))
);
const filter = filterSelect.value;
if (filter !== 'all') {
filtered = filtered.filter(m => m.type === filter);
}
const sortVal = sortSelect.value;
if (sortVal === 'name') {
filtered.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
} else if (sortVal === 'difficulty-low') {
filtered.sort((a, b) => a.difficulty - b.difficulty);
} else if (sortVal === 'difficulty-high') {
filtered.sort((a, b) => b.difficulty - a.difficulty);
} else if (sortVal === 'type') {
filtered.sort((a, b) => a.type.localeCompare(b.type));
}
renderMaps(filtered);
}
resetBtn.addEventListener('click', () => {
searchInput.value = '';
filterSelect.value = 'all';
sortSelect.value = 'default';
renderMaps(mapData);
});
searchInput.addEventListener('input', filterMaps);
filterSelect.addEventListener('change', filterMaps);
sortSelect.addEventListener('change', filterMaps);
function openModal(map) {
let comboHtml = '';
if (map.combos) {
comboHtml = `<div><strong>추천 조합:</strong><br>` +
map.combos.map(c => c.join(' + ')).join('<br>') +
`</div>`;
}
modalContent.innerHTML = `
<h2>${map.name}</h2>
<img src="${map.img}" alt="${map.name}" style="width:100%; border-radius:8px; margin:10px 0;">
<p>${map.desc}</p>
<div><strong>위치:</strong> ${map.location}</div>
<div><strong>특징:</strong> ${map.features}</div>
<div><strong>추천 요원:</strong> ${map.agents.join(', ')}</div>
${comboHtml}
<div><strong>프로 팁:</strong> ${map.proTip}</div>
`;
modalBackdrop.style.display = 'flex';
document.body.style.overflow = 'hidden';
}
closeModal.addEventListener('click', () => {
modalBackdrop.style.display = 'none';
document.body.style.overflow = '';
});
modalBackdrop.addEventListener('click', (e) => {
if (e.target === modalBackdrop) {
modalBackdrop.style.display = 'none';
document.body.style.overflow = '';
}
});
renderMaps(mapData);