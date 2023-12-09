import ERROR from '../../src/constants/error.js';
import UnwantedMenuValidator from '../../src/utils/validators/UnwantedMenuValidator.js';

describe('못 먹는 메뉴 예외 상황 테스트', () => {
  const cases = [
    {
      input: ',,adf,,',
      description: '구분을 잘못하였을 경우 예외처리를 한다.',
      expected: ERROR.unwantedMenu.separator,
    },
    {
      input: 'asd, wer, df',
      description: '최소 0개, 최대 2개의 못 먹는 메뉴가 아닌 경우 예외처리를 한다.',
      expected: ERROR.unwantedMenu.count,
    },
  ];

  test.each(cases)('코치 이름 $input을 통해 에러를 반환한다.', ({ input, expected }) => {
    // when
    const result = () => UnwantedMenuValidator.validateUnwantedMenu(input);

    // then
    expect(result).toThrow(expected);
  });
});
