const weapons = [
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
    id: 'spectre',
    name: '스팅어',
    type: '기관단총',
    img: '../images/guns/스팅어.png',
    desc: '가성비 좋은 SMG. 근거리에서 빠른 연사.',
    specs: { 가격: '1100', 탄창: '20' }
  },
  {
    id: 'judge',
    name: '저지',
    type: '산탄총',
    img: '../images/guns/저지.png',
    desc: '근거리 광역 데미지. 실내에서 매우 위력적.',
    specs: { 가격: '1850', 탄창: '5' }
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
    name : '오딘',
    type : '기관총',
    img : '../images/guns/오딘.png',
    desc : '연산 시간에 따른 연산 속도 up',
    specs : {
      가격 : '3200', 탄창 : '100'
    }
  },
  {
    id: 'operator',
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

  // 밴달일 때만 상세 테이블로 표시
  if (weapon.id === 'vandal') {
    const table = document.createElement('div');
    table.className = 'spec-table';
    table.innerHTML = `
      <div class="spec-row"><span>달리기 속도</span><span>${weapon.specs.달리기_속도}</span></div>
      <div class="spec-row"><span>장착 속도</span><span>${weapon.specs.장착_속도}</span></div>
      <div class="spec-row"><span>재장전 속도</span><span>${weapon.specs.재장전_속도}</span></div>
      <div class="spec-row"><span>연사 속도</span><span>${weapon.specs.연사_속도}</span></div>
      <div class="spec-row"><span>초탄 퍼짐</span><span>${weapon.specs.초탄_퍼짐}</span></div>
      <div class="spec-row"><span>피해량</span><span>${weapon.specs.피해량}</span></div>
      <div class="spec-row"><span>보조 공격</span><span>${weapon.specs.보조공격}</span></div>
    `;
    modalSpecs.appendChild(table);
  } else {
    // 나머지 무기들은 기존처럼 간단히 표시
    for (const k in weapon.specs) {
      const s = document.createElement('div');
      s.className = 'spec';
      s.textContent = `${k}: ${weapon.specs[k]}`;
      modalSpecs.appendChild(s);
    }
  }

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
