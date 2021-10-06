function convertToAnimalIcons(arr) {
  let [dogNumber, catNumber, fishNumber, birdNumber] = [0, 0, 0, 0];

  dogNumber = arr.filter((elem) => elem.species === 'dog').length;
  catNumber = arr.filter((elem) => elem.species === 'cat').length;
  fishNumber = arr.filter((elem) => elem.species === 'fish').length;
  birdNumber = arr.filter((elem) => elem.species === 'bird').length;
  const total = dogNumber + catNumber + fishNumber + birdNumber;

  const othersNumber = arr.length - total;

  const dogIcon = <i className='fas fa-dog'></i>;
  const catIcon = <i className='fas fa-cat'></i>;
  const fishIcon = <i className='fas fa-fish'></i>;
  const birdIcon = <i className='fas fa-kiwi-bird'></i>;
  const othersIcon = <i className='fas fa-hippo'></i>;

  let [dog, cat, fish, bird, others] = ['', '', '', '', ''];

  if (dogNumber) {
    dog = (
      <span className="me-2">
        <span>{dogNumber}</span> <span>{dogIcon}</span>
      </span>
    );
  }
  if (catNumber) {
    cat = (
      <span className="me-2">
        <span>{catNumber}</span> <span>{catIcon}</span>
      </span>
    );
  }
  if (fishNumber) {
    fish = (
      <span className="me-2">
        <span>{fishNumber}</span> <span>{fishIcon}</span>
      </span>
    );
  }
  if (birdNumber) {
    bird = (
      <span className="me-2">
        <span>{birdNumber}</span> <span>{birdIcon}</span>
      </span>
    );
  }
  if (othersNumber) {
    others = (
      <span className="me-2">
        <span>{othersNumber}</span> <span>{othersIcon}</span>
      </span>
    );
  }

  return <p className="m-0">{dog}{cat}{fish}{bird}{others}</p>;
}

export default convertToAnimalIcons;
