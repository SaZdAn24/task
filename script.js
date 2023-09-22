const button = document.createElement("button"); // создали кнопку
button.innerText = "добавить";
const inputFirst = document.createElement("input"); //создали два импута
const inputSecond = document.createElement("input");

const buttonSecond = document.createElement("button"); //создали кнопку
buttonSecond.innerText = "отправить"; //дали название кнопке <отправить>

const root = document.querySelector(".root"); //нашли див под нозванием <рот>

// Функция для создания и добавления карточки
const addCard = (name, surname) => {
  const html = `<h2>${name} ${surname}</h2>`; // создали карточку

  const cardDiv = document.createElement("div"); // создали <див>
  cardDiv.innerHTML = html; // сказали что кардив принимает  нтмл

  const crossSimvol = "x";
  const crossElement = document.createElement("span"); // это весь код для крестика
  crossElement.textContent = crossSimvol;
  crossElement.className = "close-icon";

  // Навешиваем обработчик клика на крестик для удаления карточки
  crossElement.addEventListener("click", () => {
    root.removeChild(cardDiv); // Удаляем карточку
  });

  cardDiv.appendChild(crossElement); // Добавляем крестик внутрь карточки
  root.appendChild(cardDiv); // Добавляем карточку в корневой контейнер
};

const toggleStateInputs = (value) => {
  inputSecond.style.display = value;
  inputFirst.style.display = value; //создаем переменную чтоб положить туда наши импуты и кнопки в которых делаем значение value
  buttonSecond.style.display = value; // что значит лежит то что в будущем напишем
};

button.addEventListener("click", function () {
  // на первую кнопку вешаем обработчик событий клик
  button.style.display = "none"; //говорим что она у нас не видна на экране
  toggleStateInputs("block"); // вместо кнопки появляется переменная toggleStateInputs
});

buttonSecond.addEventListener("click", function () {
  // на кнопку вешаем обработчик событий клик
  button.style.display = "block"; /// создаем переменную и говорим что ее значение то что мы потом напишем
  toggleStateInputs("none"); // вместо кнопки появляется переменная toggleStateInputs
  const name = inputFirst.value; // создаем переменную и говорим что ее значение то что мы потом напишем
  const surname = inputSecond.value; // создаем переменную и говорим что ее значение то что мы потом напишем

  addCard(name, surname); // вызываем функцию со значение имени
});

toggleStateInputs("none"); //говорим что она у нас не видна на экране

function renderElements() {
  // создаем функцию в которой создаем массив через метод фор перебираем его
  const elements = [button, inputFirst, inputSecond, buttonSecond];
  for (let i = 0; i < elements.length; i++) {
    root.appendChild(elements[i]); // все что перебрали кладем в див
  }
}

renderElements(); //вызываем функцию
