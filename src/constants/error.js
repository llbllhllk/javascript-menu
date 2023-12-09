const coachNames = Object.freeze({
  empty: '[ERROR] 코치의 이름을 입력해주세요.',
  separator: '[ERROR] 구분을 잘못입력하셨습니다.',
  participants: '[ERROR] 최소 2명, 최대 5명까지 입력해주세요.',
  length: '[ERROR] 코치 이름을 최소 2글자, 최대 4글자로 입력해주세요.',
});

const ERROR = Object.freeze({
  coachNames,
});

export default ERROR;
