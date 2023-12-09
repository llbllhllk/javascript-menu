import ERROR from '../../src/constants/error.js';
import CoachNamesValidator from '../../src/utils/validators/CoachNamesValidator.js';

describe('코치 이름 예외 상황 테스트', () => {
  const cases = [
    {
      input: '',
      description: '입력을 하지 않았을 경우 예외처리를 한다.',
      expected: ERROR.coachNames.empty,
    },
    {
      input: ',,adf,bd,sdf,,',
      description: '구분을 잘못하였을 경우 예외처리를 한다.',
      expected: ERROR.coachNames.separator,
    },
    {
      input: 'asdf',
      description: '최소 2명, 최대 5명까지 식사한 경우가 아닌 경우 예외처리를 한다.',
      expected: ERROR.coachNames.participants,
    },
    {
      input: 'a, b, c, d, asdfe',
      description: '이름이 최소 2글자, 최대 4글자가 아닌 경우',
      expected: ERROR.coachNames.length,
    },
  ];

  test.each(cases)('코치 이름 $input을 통해 에러를 반환한다.', ({ input, expected }) => {
    // when
    const result = () => CoachNamesValidator.validateCoachNames(input);

    // then
    expect(result).toThrow(expected);
  });
});
