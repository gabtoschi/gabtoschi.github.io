let selectedFilter = 'project';
const filterButtons = [...document.getElementsByClassName('filter-button')];

const updateFilterButtons = () => {
  filterButtons.forEach(button => {
    if (button.id === selectedFilter) {
      button.classList.add('selected');
    } else {
      button.classList.remove('selected');
    }
  })
}
updateFilterButtons();

const clickFilter = (e) => {
  const newFilter = e.target.id;

  if (newFilter !== selectedFilter) {
    selectedFilter = newFilter;
    updateFilterButtons();
  }
}

filterButtons.forEach(button => {
  button.addEventListener('click', clickFilter)
})