const read = Object.freeze({
  coachNames: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  unwantedMenu: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',
});

const print = Object.freeze({
  start: '점심 메뉴 추천을 시작합니다.\n',
  resultHeader: '메뉴 추천 결과입니다.',
  end: '추천을 완료했습니다.',
});

const MESSAGE = Object.freeze({ read, print });

export default MESSAGE;
