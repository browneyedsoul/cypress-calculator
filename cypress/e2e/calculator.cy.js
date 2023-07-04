const clickDigitButtons = (digits = []) => {
  digits.forEach((digit) => {
    cy.get(".digit").contains(digit).click();
  });
};
const clickOperationButtons = (operation) => {
  cy.get(".operator").contains(operation).click();
};
const clickBracketButtons = (bracket) => {
  cy.get(".brackets").contains(bracket).click();
};
const clickAllClearButtons = () => {
  cy.get(".all-clear").click();
};
const checkDisplayValue = (value) => {
  cy.get("#total").should("have.text", value);
};

describe("Test Calculator app", () => {
  beforeEach("Visit Page", () => {
    cy.visit("../../index.html");
  });

  it("Represent Number 0 in display", () => {
    checkDisplayValue("0");
  });

  it("Click Number -> Number displayed", () => {
    clickDigitButtons(["1"]);
    checkDisplayValue("1");
  });

  it("Click two numbers -> Conjugated Numbers displayed", () => {
    clickDigitButtons(["1", "2"]);
    checkDisplayValue("12");
  });

  it("Click three numbers -> Conjugated Numbers displayed", () => {
    clickDigitButtons(["1", "2", "3"]);
    checkDisplayValue("123");
  });

  it("Click three numbers and operator -> Represent operator in display", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButtons("+");
    checkDisplayValue("123+");
  });

  it("Click multiple operators -> Represent Only the last operator", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButtons("+");
    clickOperationButtons("-");
    checkDisplayValue("123+-");
  });

  it("Display added values", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButtons("+");
    clickDigitButtons(["4", "5", "6"]);
    checkDisplayValue("123+456");
  });

  it("Bracket Test", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButtons("+");
    clickBracketButtons("(");
    clickDigitButtons(["4", "5", "6"]);
    clickBracketButtons(")");
    clickOperationButtons("*");
    clickDigitButtons(["1", "0"]);
    clickOperationButtons("=");
    checkDisplayValue("4683");
  });
  it("Plus Test", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButtons("+");
    clickDigitButtons(["4", "5", "6"]);
    clickOperationButtons("=");
    checkDisplayValue(579);
  });

  it("Minus Test", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButtons("-");
    clickDigitButtons(["4", "5", "6"]);
    clickOperationButtons("=");
    checkDisplayValue("-333");
  });

  it("Multiplication Test", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButtons("*");
    clickDigitButtons(["4", "5", "6"]);
    clickOperationButtons("=");
    checkDisplayValue(56088);
  });

  it("Division Test", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButtons("/");
    clickDigitButtons(["4", "5", "6"]);
    clickOperationButtons("=");
    checkDisplayValue(0);
  });
  it("All clear --> Zero", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickAllClearButtons();
    checkDisplayValue(0);
  });
});
