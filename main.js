const botonNumeros = document.getElementsByName("data-number");
const botonOperaciones = document.getElementsByName("data-operador");
const botonIgual = document.getElementsByName("data-igual")[0];
const borrarTodo = document.getElementsByName("data-delete-all")[0];
const borrarDeAUno = document.getElementsByName("data-delete")[0];
var result = document.getElementById("result");
var operacionActual = " ";
var operacionAnterior = " ";
var operacion = undefined;
console.log(borrarDeAUno);
botonNumeros.forEach(function (boton) {
  boton.addEventListener("click", function () {
    agregarNumero(boton.innerText);
  });
});

botonOperaciones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    seleccionarOperacion(boton.innerText);
  });
});

botonIgual.addEventListener("click", function () {
  calcular();
  actualizarDisplay();
});

borrarTodo.addEventListener("click", function () {
  clear();
  actualizarDisplay();
});

borrarDeAUno.addEventListener("click", function() {
  operacionActual = operacionActual.slice(0, operacionActual.length - 1)
  actualizarDisplay();
});

function seleccionarOperacion(op) {
  if (operacionActual === "") return;
  if (operacionAnterior !== "") {
    calcular();
  }
  operacion = op.toString();
  operacionAnterior = operacionActual;
  operacionActual = "";
}
function calcular() {
  var calculo;
  const anterior = parseFloat(operacionAnterior);
  const actual = parseFloat(operacionActual);
  if (isNaN(anterior) || isNaN(actual)) return;
  switch (operacion) {
    case "+":
      calculo = anterior + actual;
      break;
    case "-":
      calculo = anterior - actual;
      break;
    case "X":
      calculo = anterior * actual;
      break;
    case "/":
      calculo = anterior / actual;
      break;
    case "%":
      calculo = anterior % actual;
      break;
    default:
      return;
  }
  operacionActual = calculo;
  operacion = undefined;
  operacionAnterior = "";
}
function agregarNumero(num) {
  operacionActual = operacionActual.toString() + num.toString();
  actualizarDisplay();
}
function clear() {
  operacionActual = "";
  operacionAnterior = "";
  operacion = undefined;
}
function actualizarDisplay() {
  result.value = operacionActual;
}


clear();
