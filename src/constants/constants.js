const coachNames = Object.freeze({
  separator: ',',
  min: 2,
  max: 4,
});

const unwantedMenu = Object.freeze({
  separator: ',',
  min: 0,
  max: 2,
});

const coaches = Object.freeze({
  min: 2,
  max: 5,
});

const number = Object.freeze({
  zero: 0,
});

const string = Object.freeze({
  empty: '',
});

const CONSTANTS = Object.freeze({
  number,
  coachNames,
  unwantedMenu,
  coaches,
  string,
});

export default CONSTANTS;
