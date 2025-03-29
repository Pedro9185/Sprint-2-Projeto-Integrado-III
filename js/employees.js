//mostrar filtros
const filterButtom = document.getElementById('filterButtom');
const showFiltersSpace = document.getElementById('showFilters-space');



filterButtom.addEventListener('click', function() {
    showFiltersSpace.classList.toggle("show");
  });