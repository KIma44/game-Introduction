const weapons = [
   {
    id : 'Classic',
    name : '클래식',
    type : '권총',
    img : '../images/guns/클래식.png',
    desc : '사격 방향에 있는 경우를 제외하고 40m 이상 거리에서 총성 들리지 않음',
    specs : {
      가격 : '0', 탄창 : '12'
    }
  },
   {
    id : 'Shorty',
    name : '쇼티',
    type : '권총',
    img : '../images/guns/쇼티.png',
    desc : '사격 방향에 있는 경우를 제외하고 40m 이상 거리에서 총성 들리지 않음',
    specs : {
      가격 : '300', 탄창 : '2'
    }
  },
   {
    id : 'FRIENDZY',
    name : '프렌지',
    type : '권총',
    img : '../images/guns/프렌지.png',
    desc : '사격 방향에 있는 경우를 제외하고 40m 이상 거리에서 총성 들리지 않음',
    specs : {
      가격 : '450', 탄창 : '15'
    }
  },
  
  {
    id : 'Ghost',
    name : '고스트',
    type : '권총',
    img : '../images/guns/고스트.png',
    desc : '사격 방향에 있는 경우를 제외하고 40m 이상 거리에서 총성 들리지 않음',
    specs : {
      가격 : '500', 탄창 : '13'
    }
  },
  {
    id : 'Sherriff',
    name : '셰리프',
    type : '권총',
    img : '../images/guns/셰리프.png',
    desc : '사격 방향에 있는 경우를 제외하고 40m 이상 거리에서 총성 들리지 않음',
    specs : {
      가격 : '800', 탄창 : '6'
    }
  },

  {
    id: 'Stinger',
    name: '스팅어',
    type: '기관단총',
    img: '../images/guns/스팅어.png',
    desc: '가성비 좋은 SMG. 근거리에서 빠른 연사.',
    specs: { 가격: '1100', 탄창: '20' }
  },
  {
    id: 'Spectre',
    name: '스펙터',
    type: '기관단총',
    img: '../images/guns/스펙터.png',
    desc: '가성비 좋은 SMG. 근거리에서 빠른 연사.',
    specs: { 가격: '1600', 탄창: '30' }
  },
  
  {
    id: 'Bucky',
    name: '버키',
    type: '산탄총',
    img: '../images/guns/버키.png',
    desc: '근거리 광역 데미지. 실내에서 매우 위력적.',
    specs: { 가격: '850', 탄창: '5' }
  },
  {
    id: 'Judge',
    name: '저지',
    type: '산탄총',
    img: '../images/guns/저지.png',
    desc: '근거리 광역 데미지. 실내에서 매우 위력적.',
    specs: { 가격: '1850', 탄창: '5' }
  },

  {
    id: 'Bulldog',
    name: '불독',
    type: '소총',
    img: '../images/guns/불독.png',
    desc: `발로란트의 대표 돌격소총으로, 중거리~장거리 전투에 강력합니다. 
    50m 거리에서도 헤드샷 한 방으로 처치가 가능한 높은 명중력을 가집니다.`,
    specs: {
      가격: '2050', 탄창: '24'
    }
  },
  {
    id: 'Guardian',
    name: '가디언',
    type: '소총',
    img: '../images/guns/가디언.png',
    desc: `발로란트의 대표 돌격소총으로, 중거리~장거리 전투에 강력합니다. 
    50m 거리에서도 헤드샷 한 방으로 처치가 가능한 높은 명중력을 가집니다.`,
    specs: {
      가격: '2250', 탄창: '12'
    }
  },
  {
    id: 'vandal',
    name: '밴달',
    type: '소총',
    img: '../images/guns/밴달.png',
    desc: `발로란트의 대표 돌격소총으로, 중거리~장거리 전투에 강력합니다. 
    50m 거리에서도 헤드샷 한 방으로 처치가 가능한 높은 명중력을 가집니다.`,
    specs: {
      가격: '2900', 탄창: '25'
    }
  },

  {
    id: 'phantom',
    name: '팬텀',
    type: '소총',
    img: '../images/guns/팬텀.png',
    desc: '근거리에서 높은 연사력과 낮은 반동, 소음 특성을 보유한 자동소총입니다.',
    specs: { 가격: '2900', 탄창: '30' }
  },

  {
    id : 'Odin',
    name : '아레스',
    type : '기관총',
    img : '../images/guns/아레스.png',
    desc : '연산 시간에 따른 연산 속도 up',
    specs : {
      가격 : '1600', 탄창 : '50'
    }
  },
  {
    id : 'Odin',
    name : '오딘',
    type : '기관총',
    img : '../images/guns/오딘.png',
    desc : '연산 시간에 따른 연산 속도 up',
    specs : {
      가격 : '3200', 탄창 : '100'
    }
  },

  {
    id: 'Marshall',
    name: '마샬',
    type: '저격소총',
    img: '../images/guns/마샬.png',
    desc: '한 방에 큰 데미지. 이동 시 속도 저하. 고위력 저격총.',
    specs: { 가격: '950', 탄창: '5' }
  },
  {
    id: 'Out of the way',
    name: '아웃로',
    type: '저격소총',
    img: '../images/guns/아웃로.png',
    desc: '한 방에 큰 데미지. 이동 시 속도 저하. 고위력 저격총.',
    specs: { 가격: '2700', 탄창: '2' }
  },
  {
    id: 'Operator',
    name: '오퍼레이터',
    type: '저격소총',
    img: '../images/guns/오퍼.png',
    desc: '한 방에 큰 데미지. 이동 시 속도 저하. 고위력 저격총.',
    specs: { 가격: '4700', 탄창: '5' }
  },
  
];

const grid = document.getElementById('grid');
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');
const resetBtn = document.getElementById('reset');

const backdrop = document.getElementById('backdrop');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalSpecs = document.getElementById('modal-specs');
const modalDesc = document.getElementById('modal-desc');
const closeModalBtn = document.getElementById('close-modal');

// 카드 렌더링
function render(list) {
  grid.innerHTML = '';
  if (list.length === 0) {
    grid.innerHTML = '<p style="color:#cbd5db; padding:20px; grid-column:1/-1">검색 결과가 없습니다.</p>';
    return;
  }
  list.forEach(w => {
    const card = document.createElement('button');
    card.className = 'weapon-card';
    card.type = 'button';
    card.setAttribute('data-id', w.id);
    card.innerHTML = `
      <div class="thumb"><img src="${w.img}" alt="${w.name} 이미지"></div>
      <div class="meta"><div class="name">${w.name}</div><div class="type">${w.type}</div></div>
    `;
    card.addEventListener('click', () => openModal(w));
    grid.appendChild(card);
  });
}

function openModal(weapon) {
  modalImg.src = weapon.img;
  modalName.textContent = weapon.name + ' — ' + weapon.type;
  modalDesc.textContent = weapon.desc;
  modalSpecs.innerHTML = '';

  

  backdrop.style.display = 'flex';
  backdrop.setAttribute('aria-hidden', 'false');

  function handleKey(e) {
    if (e.key === 'Escape') closeModal();
  }
  document.addEventListener('keydown', handleKey);

  closeModalBtn.onclick = closeModal;
  backdrop.onclick = (ev) => {
    if (ev.target === backdrop) closeModal();
  };

  function closeModal() {
    backdrop.style.display = 'none';
    backdrop.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', handleKey);
  }
}

// 필터 및 검색
function applyFilters() {
  const q = searchInput.value.trim().toLowerCase();
  const t = filterSelect.value;
  const filtered = weapons.filter(w => {
    const matchName = w.name.toLowerCase().includes(q);
    const matchType = (t === 'all') ? true : (w.type === t);
    return matchName && matchType;
  });
  render(filtered);
}

searchInput.addEventListener('input', applyFilters);
filterSelect.addEventListener('change', applyFilters);
resetBtn.addEventListener('click', () => {
  searchInput.value = '';
  filterSelect.value = 'all';
  applyFilters();
});

render(weapons);
