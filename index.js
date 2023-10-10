const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const formPizza = document.getElementById("formPizza");
const pizzaInput = document.getElementById("pizzaSelecter");
const inputError = document.getElementById("errorContainer");
const pizzaSubmit = document.getElementById("submitPizzaBtn");
const renderCardPizza = document.getElementById("renderContainer");

const pizzaLocalStorage = JSON.parse(localStorage.getItem("pizza"));

const renderPizza = (pizza) => {
  const { nombre, precio, ingredientes, imagen } = pizza;
  renderCardPizza.innerHTML = `
  <div class="card">
  <h2 class="card-title">${nombre.toUpperCase()}</h2>
  <p class="ingredients">${ingredientes.join(", ")}</p>
  <p class="price">$${precio}</p>
  <img src=${imagen} alt="${nombre}" class="card-img"/>
  </div>`;
};

const pizzaIdSelected = (e) => {
  e.preventDefault();
  const inputValue = Number(pizzaInput.value);
  inputError.innerHTML = "";
  if (!inputValue) {
    inputError.innerHTML = "No hay ningún ID ingresado.";
    return;
  }

  if (inputValue > pizzas.length || inputValue <= 0) {
    inputError.innerHTML = "El ID ingresado no existe.";
    return;
  }

  const pizzaFound = pizzas.find((pizza) => pizza.id === inputValue);

  if (pizzaFound) {
    renderPizza(pizzaFound);
    localStorage.setItem("pizza", JSON.stringify(pizzaFound));
  }
  formPizza.reset();
};

const init = () => {
  formPizza.addEventListener("submit", pizzaIdSelected);
  renderPizza(pizzaLocalStorage);
};
init();
