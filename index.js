let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (item) => {
    switch (item.target.innerText) {
      case "C":
        display.innerText = "";
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }

        break;
      case "=":
        if (
          display.innerText == "/" ||
          display.innerText == "*" ||
          display.innerText == "." ||
          display.innerText == "+" ||
          display.innerText == "-"
        ) {
          display.innerText = "Error!!";
        } else {
          display.innerText = eval(display.innerText);
        }

        break;
      default:
        display.innerText += item.target.innerText;
    }
  });
});

let button = document
  .querySelector(".mode")
  .addEventListener("click", () => {
    document.body.classList.toggle("mode");
  });
