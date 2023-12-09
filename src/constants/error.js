const coachNames = Object.freeze({
  empty: '[ERROR] 코치의 이름을 입력해주세요.',
  separator: '[ERROR] 코치 이름의 구분을 잘못 입력하셨습니다.',
  participants: '[ERROR] 최소 2명, 최대 5명까지 입력해주세요.',
  length: '[ERROR] 코치 이름을 최소 2글자, 최대 4글자로 입력해주세요.',
  duplicated: '[ERROR] 코치의 이름이 중복되었습니다.',
});

const unwantedMenu = Object.freeze({
  separator: '[ERROR] 못 먹는 메뉴들의 구분을 잘못 입력하셨습니다.',
  count: '[ERROR] 최소 0개, 최대 2개의 못 먹는 메뉴여야 합니다.'
});

const ERROR = Object.freeze({
  coachNames,
  unwantedMenu,
});

export default ERROR;
