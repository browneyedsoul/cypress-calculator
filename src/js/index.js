function App() {
  const Digits = document.querySelector(".digits");
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

  Digits.addEventListener("click", handleDigitClick);
}

App();
