let selectedFilter = 'project';

const filterButtons = [...document.getElementsByClassName('filter-button')];
const projectCards = [...document.getElementsByClassName('card-wrapper')];

console.log(projectCards)

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

const updateCardList = (newFilter) => {
  projectCards.forEach(card => {
    const classes = [...card.classList]

    if (classes.includes(newFilter)) {
      card.classList.remove('filtered');
    } else {
      card.classList.add('filtered');
    }
  })
}

const clickFilter = (e) => {
  const newFilter = e.target.id;

  if (newFilter !== selectedFilter) {
    selectedFilter = newFilter;

    updateCardList(newFilter);
    updateFilterButtons();
  }
}

filterButtons.forEach(button => {
  button.addEventListener('click', clickFilter)
})