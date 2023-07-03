const App = () => {
  const Digits = document.querySelector(".digits");
  const Operation = document.querySelector(".operators");
  const AllClear = document.querySelector(".modifiers");
  const Equal = document.querySelector(".equal");
  const Total = document.querySelector("#total");

  const handleDigitClick = (e) => {
    if (!e.target.classList.contains("digit")) {
      return;
    }
    const currentTotal = Total.innerText;
    const newDigit = e.target.innerText;

    if (e.target.classList.contains("digit")) {
      Total.innerText =
        currentTotal === "0" ? newDigit : currentTotal + newDigit;
    }
  };
  const handleOperationClick = (e) => {
    if (!e.target.classList.contains("operation")) {
      return;
    }
    const currentTotal = Total.innerText;
    const newOper = e.target.innerText;

    if (e.target.classList.contains("operation")) {
      Total.innerText = currentTotal === "0" ? null : currentTotal + newOper;
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
};

App();
