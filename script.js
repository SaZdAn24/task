const button = document.createElement("button");
button.innerText = "добавить";
const inputFirst = document.createElement("input");
const inputSecond = document.createElement("input");

const buttonSecond = document.createElement("button");
buttonSecond.innerText = "отправить";

const root = document.querySelector(".root");

const getCard = (name, surname) => {
  const html = ` <h2> ${name} </h2>
					<h2> ${surname} </h2>
									`;

  return html;
};

const addCard = (name, surname) => {
  root.insertAdjacentHTML("beforeend", getCard(name, surname));
};

const toggleStateInputs = (value) => {
  inputSecond.style.display = value;
  inputFirst.style.display = value;
  buttonSecond.style.display = value;
};

button.addEventListener("click", function () {
  button.style.display = "none";
  toggleStateInputs("block");
});

buttonSecond.addEventListener("click", function () {
  button.style.display = "block";
  toggleStateInputs("none");
  const name = inputFirst.value;
  const surname = inputSecond.value;

  addCard(name, surname);
});

toggleStateInputs("none");

function renderElements() {
  const elements = [button, inputFirst, inputSecond, buttonSecond];
  for (let i = 0; i < elements.length; i++) {
    root.appendChild(elements[i]);
  }
}

renderElements();
