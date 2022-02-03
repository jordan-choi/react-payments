# React Mobile Payments

- 개발환경
  - Webpack
  - React
  - TypeScript
  - TailwindCSS
  - Storybook

## Requirements

- [x] `<`(뒤로가기) 버튼 클릭 시, 카드 목록 페이지로 이동한다.
- [x] 카드 번호를 입력 받을 수 있다.
  - [x] 카드 번호입력 폼에 라벨을 보여준다.
  - [x] 카드 번호는 숫자만 입력가능하다.
  - [x] 카드 번호 4자리마다 -가 삽입된다.
  - [x] 카드 번호는 실시간으로 카드 UI에 반영된다.
  - [x] 카드 번호는 앞 8자리만 숫자로 보여지고, 나머지 숫자는 \*로 보여진다.
  - [ ] 카드 번호 앞 8자리로 카드사를 추정하여 그 테마를 카드 UI에 반영한다.
  - [ ] 카드사가 선택되고 유효한 카드 번호 16자리를 모두 입력하면, 자동으로 만료일로 focus된다.
  - [ ] 카드 앞 8자리 숫자를 입력하고 카드사가 선택되지 않은 경우, 나머지 카드 번호 입력 시도 시, 카드사 선택 모달이 보여진다.
  - [x] 유효하지 않은 카드 번호를 입력하면, 입력 폼 아래에 에러 메시지를 보여준다.
- [x] 만료일을 입력 받을 수 있다.
  - [x] 만료일 입력 폼에 라벨을 보여준다.
  - [x] MM / YY 로 placeholder를 적용한다.
  - [x] 월, 년 사이에 자동으로 /가 삽입된다.
  - [x] 만료일은 실시간으로 카드 UI에 반영된다.
  - [x] 월은 1이상 12이하 숫자여야 한다.
  - [ ] 월, 년 입력이 유효하면 보안코드 입력으로 focus된다
  - [x] 유효하지 않은 만료일을 입력하면, 입력 폼 아래에 에러 메시지를 보여준다.
- [x] 보안코드를 입력 받을 수 있다.
  - [x] 카드 보안코드 입력 폼에 라벨을 보여준다.
  - [x] 보안코드는 \*으로 보여진다.
  - [ ] 보안코드 3자리가 입력되면 카드 비밀번호 입력으로 focus된다.
  - [ ] 보안코드는 숫자만 입력가능하다.
  - [x] 유효하지 않은 보안코드를 입력하면, 입력 폼 아래에 에러 메시지를 보여준다.
- [ ] 카드 비밀번호의 앞 2자리를 입력 받을 수 있다.
  - [ ] 카드 비밀번호 입력 폼에 라벨을 보여준다.
  - [ ] 카드 비밀번호는 각 폼마다 한자리 숫자만 입력가능하다.
  - [ ] 첫자리 입력이 완료되면 둘째자리 입력으로 focus된다.
  - [ ] 카드 번호 입력 시, \*으로 보여진다.
  - [ ] 유효하지 않은 카드 비밀번호를 입력하면, 입력 폼 아래에 에러 메시지를 보여준다.
- [x] 카드 소유자 이름을 입력 받을 수 있다.
  - [x] 카드 소유자 이름 입력 폼 라벨을 보여준다.
  - [x] 이름은 30자리까지 입력할 수 있다.
  - [x] 이름 입력 폼 위에, 현재 입력 자릿수와 최대 입력 자릿수를 실시간으로 보여준다.
  - [x] 클릭 시, 카드 등록 완료 페이지로 이동한다.

### 심화 요구사항 (선택사항)

- [ ] Storybook 단위 테스트
- [ ] 유효성 검증 실패에 대한 UI/UX 추가
- [ ] 카드사 선택
  - [ ] 카드사를 선택하면 모달이 닫히고, 그 테마를 카드 UI에 반영한다.
  - [ ] 카드사를 선택하지 않아도 모달을 닫을 수 있다.
- [ ] 보안코드 툴팁
  - [ ] 클릭 시, 보안코드 관련 안내 메시지를 보여준다.
  - [ ] focusout 시, 툴팁이 닫힌다.
- [ ] 가상 키보드
  - [ ] 마스킹 처리된 값 입력시 사용
  - [ ] 숫자를 랜덤으로 배열
