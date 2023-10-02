const button = document.createElement("button"); // создали кнопку
button.innerText = "добавить";
const inputFirst = document.createElement("input"); //создали два импута
const inputSecond = document.createElement("input");

const buttonSecond = document.createElement("button"); //создали кнопку
buttonSecond.innerText = "отправить"; //дали название кнопке <отправить>

const root = document.querySelector(".root"); //нашли див под нозванием <рот>

// переменная для отслеживания количества строк
let numberOfLines = 0;

// Функция для создания и добавления карточки
const addCard = (name, surname) => {
  const html = `<h2>${name} ${surname}</h2>`; // создали карточку

  const cardDiv = document.createElement("div"); // создали <див>
  cardDiv.className = "storage";
  cardDiv.innerHTML = html; // сказали что кардив принимает  нтмл

  const crossSimvol = "x";
  const crossElement = document.createElement("span"); // это весь код для крестика
  crossElement.textContent = crossSimvol;
  crossElement.className = "close-icon";

  // Навешиваем обработчик клика на крестик для удаления карточки
  crossElement.addEventListener("click", () => {
    root.removeChild(cardDiv); // Удаляем карточку
    // добовляем код который считает и -- количесво карточек //
    numberOfLines--;
    delite(); // вызываем функцию
  });

  cardDiv.appendChild(crossElement); // Добавляем крестик внутрь карточки
  root.appendChild(cardDiv); // Добавляем карточку в корневой контейнер
  // добовляем код который считает и увеличивает количесво карточек //
  numberOfLines++;
  delite(); // вызываем функцию
};

// для суммы строк в н1
const sumString = document.createElement("div"); // создали новый див
sumString.className = "sumStrinr"; // дали этому диву класс
root.appendChild(sumString); // положили в дом по родительскому элементу

// функция которая считает строки
function delite() {
  sumString.textContent = `Количество строк: ${numberOfLines}`;
}

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

  if (name !== "" && surname !== "") {
    // Проверяем, что оба импута не пусты
    addCard(name, surname); // вызываем функцию со значениями имени и фамилии
    inputFirst.value = ""; // Очищаем первый input
    inputSecond.value = ""; // Очищаем второй input
    button.style.display = "block"; // показываем первую кнопку
    toggleStateInputs("none"); // скрываем input'ы и вторую кнопку
  }
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
delite();
