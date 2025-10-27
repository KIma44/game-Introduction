  const weapons = [
      {
        id: 'vandal',
        name: 'Vandal',
        type: 'Rifle',
        img: 'images/vandal.png',
        desc: '중장거리에서 강력한 한발 데미지. 고정 데미지 라이플.',
        specs: { price: '2900', fireRate: '9.25(약)', mag: '25' }
      },
      {
        id: 'phantom',
        name: 'Phantom',
        type: 'Rifle',
        img: 'images/phantom.png',
        desc: '근거리에서 높은 연사력과 낮은 반동, 소음 특성 보유.',
        specs: { price: '2900', fireRate: '11(약)', mag: '30' }
      },
      {
        id: 'operator',
        name: 'Operator',
        type: 'Sniper',
        img: 'images/operator.png',
        desc: '한 방에 큰 데미지. 이동 시 속도 저하. 고위력 저격총.',
        specs: { price: '4700', fireRate: '0.75', mag: '5' }
      },
      {
        id: 'judge',
        name: 'Judge',
        type: 'Shotgun',
        img: 'images/judge.png',
        desc: '근거리 광역 데미지. 실내에서 매우 위력적.',
        specs: { price: '1500', fireRate: '3.5', mag: '7' }
      },
      {
        id: 'spectre',
        name: 'Spectre',
        type: 'SMG',
        img: 'images/spectre.png',
        desc: '가성비 좋은 SMG. 근거리에서 빠른 연사.',
        specs: { price: '1600', fireRate: '13', mag: '30' }
      }
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

    // 카드 렌더링 함수
    function render(list){
      grid.innerHTML = '';
      if(list.length === 0){
        grid.innerHTML = '<p style="color:#cbd5db; padding:20px; grid-column:1/-1">검색 결과가 없습니다.</p>';
        return;
      }
      list.forEach(w => {
        const card = document.createElement('button');
        card.className = 'weapon-card';
        card.type = 'button';
        card.setAttribute('data-id', w.id);
        card.innerHTML = `
          <div class="thumb" aria-hidden="true">
            <img src="${w.img}" alt="${w.name} 이미지" onerror="this.onerror=null;this.src='images/placeholder.png'">
          </div>
          <div class="meta">
            <div class="name">${w.name}</div>
            <div class="type">${w.type}</div>
          </div>
        `;
        // 클릭 시 모달 오픈
        card.addEventListener('click', () => openModal(w));
        grid.appendChild(card);
      });
    }

    function openModal(weapon){
      modalImg.src = weapon.img;
      modalImg.alt = `${weapon.name} large image`;
      modalName.textContent = weapon.name + ' — ' + weapon.type;
      modalDesc.textContent = weapon.desc;
      modalSpecs.innerHTML = '';
      for(const k in weapon.specs){
        const s = document.createElement('div');
        s.className = 'spec';
        s.textContent = `${k}: ${weapon.specs[k]}`;
        modalSpecs.appendChild(s);
      }

      backdrop.style.display = 'flex';
      backdrop.setAttribute('aria-hidden', 'false');

      // ESC로 닫기
      function handleKey(e){
        if(e.key === 'Escape') closeModal();
      }
      document.addEventListener('keydown', handleKey);

      // 닫기 함수 (내부에서 한번만 바인딩)
      closeModalBtn.onclick = closeModal;
      backdrop.onclick = (ev) => {
        if(ev.target === backdrop) closeModal();
      };

      function closeModal(){
        backdrop.style.display = 'none';
        backdrop.setAttribute('aria-hidden', 'true');
        document.removeEventListener('keydown', handleKey);
      }
    }

    // 필터링 + 검색
    function applyFilters(){
      const q = searchInput.value.trim().toLowerCase();
      const t = filterSelect.value;
      const filtered = weapons.filter(w => {
        const matchName = w.name.toLowerCase().includes(q);
        const matchType = (t === 'all') ? true : (w.type === t);
        return matchName && matchType;
      });
      render(filtered);
    }

    // 이벤트 바인딩
    searchInput.addEventListener('input', applyFilters);
    filterSelect.addEventListener('change', applyFilters);
    resetBtn.addEventListener('click', () => {
      searchInput.value = '';
      filterSelect.value = 'all';
      applyFilters();
    });

    // 초기 렌더
    render(weapons);