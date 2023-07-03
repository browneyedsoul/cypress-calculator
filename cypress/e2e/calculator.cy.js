/*
2개의 숫자에 대해 덧셈이 가능하다.
 2개의 숫자에 대해 뺄셈이 가능하다.
 2개의 숫자에 대해 곱셈이 가능하다.
 2개의 숫자에 대해 나눗셈이 가능하다.
 AC(All Clear)버튼을 누르면 0으로 초기화 한다.
 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
 계산 결과를 표현할 때 소수점 이하는 버림한다.
*/

const clickDigitButtons = (digits = []) => {
  digits.forEach((digit) => {
    cy.get(".digit").contains(digit).click();
  });
};

const checkDisplayValue = (value) => {
  cy.get("#total").should("have.text", value);
};

describe("Test Calculator app", () => {
  beforeEach("Visit Page", () => {
    cy.visit("../../index.html");
  });

  it("Represent Number 0 in display", () => {
    checkDisplayValue(0);
  });

  it("Click Number -> Number displayed", () => {
    clickDigitButtons(["1"]);
    checkDisplayValue(1);
  });

  it("Click two numbers -> Conjugated Numbers displayed", () => {
    clickDigitButtons(["1"]);
    clickDigitButtons(["2"]);
    checkDisplayValue(12);
  });

  it("Click three numbers -> Conjugated Numbers displayed", () => {
    clickDigitButtons(["1"]);
    clickDigitButtons(["2"]);
    clickDigitButtons(["3"]);
    checkDisplayValue(123);
  });

  it("Represent operator in display when you press three numbers and then press operator", () => {});
  it("Represent only last operator when you click multiple operators", () => {});
});
