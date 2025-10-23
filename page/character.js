const agents = {
  duelist: {
    name: "제트",
    role: "타격대",
    img: "../images/제트.png",
    description: "빠르고 민첩한 공격수로, 적진을 교란시키며 팀의 핵심 공격을 담당합니다.",
    skills: ["Cloudburst: 연막 수류탄", "Updraft: 상승", "Tailwind: 순간 이동", "Blade Storm: 폭풍검"]
  },
  initiator: {
    name: "소바",
    role: "척후대",
    img: "../images/소바.png",
    description: "정보 수집과 적 견제를 전문으로 하며, 팀의 공격 성공률을 높입니다.",
    skills: ["Recon Bolt: 탐지 화살", "Owl Drone: 정찰 드론", "Shock Bolt: 충격 화살", "Hunter's Fury: 장거리 공격"]
  },
  sentinel: {
    name: "세이지",
    role: "감시자",
    img: "../images/세이지.png",
    description: "방어와 회복을 담당하며 팀원 지원이 특기입니다.",
    skills: ["Barrier Orb: 방벽 생성", "Slow Orb: 느려짐 구슬", "Healing Orb: 회복", "Resurrection: 부활"]
  },
  controller: {
    name: "브림스톤",
    role: "전략가",
    img: "../images/브림스톤.png",
    description: "전술 지원과 연막 스킬로 팀을 지원합니다.",
    skills: ["Sky Smoke: 연막 투하", "Incendiary: 화염탄", "Stim Beacon: 공격력 강화", "Orbital Strike: 강력한 폭격"]
  }
};

function showAgent(role) {
  const agent = agents[role];
  document.getElementById("agent-img").src = agent.img;
  document.getElementById("agent-name").textContent = agent.name;
  document.getElementById("agent-role").textContent = agent.role;
  document.getElementById("agent-description").textContent = agent.description;

  const skillsList = document.getElementById("agent-skills");
  skillsList.innerHTML = "";
  agent.skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}
