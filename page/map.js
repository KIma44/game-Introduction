const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');
const cards = document.querySelectorAll('.map-card');

// 🔍 검색 기능
searchInput.addEventListener('input', filterMaps);
filterSelect.addEventListener('change', filterMaps);

function filterMaps() {
  const keyword = searchInput.value.toLowerCase();
  const filterValue = filterSelect.value;

  cards.forEach(card => {
    const name = card.querySelector('h2').textContent.toLowerCase();
    const type = card.dataset.type;

    // 조건: 이름 포함 && 필터 일치 or 전체
    const matchesSearch = name.includes(keyword);
    const matchesFilter = filterValue === 'all' || filterValue === type;

    // 둘 다 만족해야 표시
    card.style.display = (matchesSearch && matchesFilter) ? 'flex' : 'none';
  });
}
