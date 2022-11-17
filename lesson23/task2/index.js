const generateNumbersRange = (from, to) => {
  const result = [];

  for (let index = from; index <= to; index += 1) {
    result.push(index);
  }
  return result;
};
// render Line-Seats
const getLineSeats = () =>
  generateNumbersRange(1, 10)
    .map(
      seatNumber => `
      <div 
          class="sector__seat" 
          data-seat-number="${seatNumber}"
      ></div>
    `,
    )
    .join('');

// render Sector-Line
const getSectorLines = () => {
  const seatsString = getLineSeats();
  return generateNumbersRange(1, 10)
    .map(
      lineNumber => `
      <div 
          class="sector__line" 
          data-line-number="${lineNumber}"
      >${seatsString}</div>
    `,
    )
    .join('');
};

// render Arena
const arenaElem = document.querySelector('.arena');
const renderArena = () => {
  const linesStrind = getSectorLines();

  const sectorsString = generateNumbersRange(1, 3)
    .map(
      sectorNumber => `
      <div 
         class="sector" 
         data-sector-number="${sectorNumber}"
      >${linesStrind}</div>
    `,
    )
    .join('');

  arenaElem.innerHTML = sectorsString;
};

const onSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) return;

  const { seatNumber } = event.target.dataset;
  const { lineNumber } = event.target.closest('.sector__line').dataset;
  const { sectorNumber } = event.target.closest('.sector').dataset;

  const selectedSeatElem = document.querySelector('.board__selected-seat');

  selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener('click', onSeatSelect);

renderArena();
