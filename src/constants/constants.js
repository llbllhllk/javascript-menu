const random = Object.freeze({
  from: 1,
  to: 5,
});

const index = Object.freeze({
  first: 0,
  listLength: 9,
});

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
  separator: ' | ',
});

const CONSTANTS = Object.freeze({
  random,
  number,
  coachNames,
  unwantedMenu,
  coaches,
  string,
  index,
});

export default CONSTANTS;
