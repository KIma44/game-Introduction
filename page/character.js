const agents = {
제트: {
name: "제트",
role: "타격대",
img: "../images/character/제트.png",
description: "빠르고 민첩한 공격수로, 적진을 교란시키며 팀의 핵심 공격을 담당합니다.",
skills: {
"e : 대쉬": "빠르게 지정된 방향으로 돌진해 생존 및 교란에 특화된 스킬입니다.",
"q : 상승": "상승 바람을 이용해 위로 높게 도약합니다.",
"c : 연막 수류탄": "시야를 가리는 구름 연막을 생성합니다.",
"궁극기 : 폭풍검": "정확도가 높은 칼날을 여러 개 소환해 강력한 공격을 가합니다."
}
},
닉스: {
name: "닉스",
role: "타격대",
img: "../images/character/닉스.png",
description: "영국 출신 피닉스의 능력은 강력한 화염과 섬광을 이용한 난전 스타일입니다.",
skills: {
"e : 커브볼": "강력한 섬광탄으로, 투척 방향에 따라 곡선으로 날아갑니다.",
"q : 뜨거운 손": "불덩이를 던져 적을 태우고, 자신은 회복할 수 있습니다.",
"c : 불길": "불길 벽을 생성해 시야를 차단하고 적에게 피해를 줍니다.",
"궁극기 : 역습": "죽어도 해당 위치에서 부활합니다."
}
},
소바: {
name: "소바",
role: "척후대",
img: "../images/character/소바.png",
description: "정보 수집과 견제에 능한 정찰 요원입니다.",
skills: {
"e : 탐지 화살": "주변 적 위치를 드러내는 화살입니다.",
"q : 충격 화살": "넓은 범위에 피해를 주는 에너지 화살입니다.",
"c : 올빼미 드론": "정찰 드론을 조종해 적 위치를 파악합니다.",
"궁극기 : 사냥꾼의 분노": "벽을 관통하는 강력한 에너지 광선을 발사합니다."
}
},
세이지: {
name: "세이지",
role: "감시자",
img: "../images/character/세이지.png",
description: "치유와 방어 능력을 가진 핵심 서포터입니다.",
skills: {
"e : 회복 구슬": "아군 또는 자신을 치유합니다.",
"q : 둔화 구슬": "적의 이동 속도를 느리게 만드는 지대를 생성합니다.",
"c : 장벽 구슬": "높은 벽을 생성해 경로를 차단합니다.",
"궁극기 : 부활": "죽은 아군 한 명을 되살립니다."
}
},
브림스톤: {
name: "브림스톤",
role: "전략가",
img: "../images/character/브림스톤.png",
description: "연막과 지속 피해 스킬로 전장을 통제합니다.",
skills: {
"e : 연막 투하": "넓은 지역을 가리는 연막을 떨어뜨립니다.",
"q : 소이탄": "넓은 화염 지역을 만들어 지속 피해를 줍니다.",
"c : 자극제 신호기": "범위 내 아군의 사격 능력을 강화합니다.",
"궁극기 : 궤도 일격": "지정한 지역에 강력한 레이저 폭격을 가합니다."
}
}
};
function showAgent(role) {
const agent = agents[role];
document.getElementById("agent-img").src = agent.img;
document.getElementById("agent-name").textContent = agent.name;
document.getElementById("agent-role").textContent = agent.role;
document.getElementById("agent-description").textContent = agent.description;
const skillsList = document.getElementById("agent-skills");
const skillDescBox = document.getElementById("skill-description");
skillsList.innerHTML = "";
skillDescBox.textContent = "스킬을 선택하세요.";
Object.entries(agent.skills).forEach(([skillName, skillDesc]) => {
const li = document.createElement("li");
const btn = document.createElement("button");
btn.textContent = skillName;
btn.onclick = () => {
skillDescBox.textContent = skillDesc;
};
li.appendChild(btn);
skillsList.appendChild(li);
});
}