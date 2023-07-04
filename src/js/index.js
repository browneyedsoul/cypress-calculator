const App = () => {
  const Digits = document.querySelector(".digits");
  const Operation = document.querySelector(".operators");
  const AllClear = document.querySelector(".modifiers");
  const Bracket = document.querySelector(".brackets");
  const Equal = document.querySelector(".equal");
  const Total = document.querySelector("#total");

  const handleDigitClick = (e) => {
    const currentTotal = Total.innerText;
    const newDigit = e.target.innerText;

    if (e.target.classList.contains("digit")) {
      Total.innerText =
        currentTotal === "0" ? newDigit : currentTotal + newDigit;
    } else {
      return;
    }
  };
  const handleBracketClick = (e) => {
    const currentTotal = Total.innerText;
    const newBracket = e.target.innerText;

    if (e.target.classList.contains("bracket")) {
      Total.innerText =
        currentTotal === "0" ? newBracket : currentTotal + newBracket;
    } else {
      return;
    }
  };
  const handleOperationClick = (e) => {
    const currentTotal = Total.innerText;
    const newOper = e.target.innerText;

    if (e.target.classList.contains("operation")) {
      Total.innerText = currentTotal === "0" ? null : currentTotal + newOper;
    } else {
      return;
    }
  };

  const allClearClick = (e) => {
    if (e.target.classList.contains("all-clear")) {
      Total.innerText = "0";
    } else {
      return;
    }
  };

  const equalResult = (e) => {
    const result = Total.innerText;

    if (e.target.classList.contains("equal")) {
      const temp = eval(result);
      Total.innerText = Math.floor(temp);
    }
  };

  Digits.addEventListener("click", handleDigitClick);
  Operation.addEventListener("click", handleOperationClick);
  AllClear.addEventListener("click", allClearClick);
  Equal.addEventListener("click", equalResult);
  Bracket.addEventListener("click", handleBracketClick);
};

App();
