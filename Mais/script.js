// 1. Relógio Digital
function updateClock() {
  const clock = document.getElementById('digitalClock');
  const now = new Date();
  const h = now.getHours().toString().padStart(2, '0');
  const m = now.getMinutes().toString().padStart(2, '0');
  const s = now.getSeconds().toString().padStart(2, '0');
  clock.textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

// 2. Calculadora Estilizada
const calcDisplay = document.getElementById('calcDisplay');
const calcButtons = document.querySelectorAll('.calc-buttons button');
let calcValue = '0';
let lastIsEqual = false;

function updateCalcDisplay() {
  calcDisplay.value = calcValue;
}

calcButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.getAttribute('data-action');
    if (action === 'C') {
      calcValue = '0';
      lastIsEqual = false;
    } else if (action === '←') {
      if (lastIsEqual) {
        calcValue = '0';
        lastIsEqual = false;
      } else if (calcValue.length > 1) {
        calcValue = calcValue.slice(0, -1);
      } else {
        calcValue = '0';
      }
    } else if (action === '=') {
      try {
        // Eval seguro básico
        let result = eval(calcValue.replace(/[^-()\d/*+.]/g, ''));
        if (result === undefined) result = 0;
        calcValue = result.toString();
      } catch {
        calcValue = 'Erro';
      }
      lastIsEqual = true;
    } else {
      if (lastIsEqual) {
        if ("0123456789.".includes(action)) {
          calcValue = action;
        } else {
          calcValue += action;
        }
        lastIsEqual = false;
      } else {
        if (calcValue === '0' && "0123456789.".includes(action)) {
          calcValue = action;
        } else {
          calcValue += action;
        }
      }
    }
    updateCalcDisplay();
  });
});

updateCalcDisplay();

// 3. Contador de Cliques com Animação
const counterBtn = document.getElementById('counterBtn');
const counterValue = document.getElementById('counterValue');
let counter = 0;
counterBtn.addEventListener('click', () => {
  counter++;
  counterValue.textContent = counter;
  // Adiciona animação
  counterValue.classList.add('animate');
  setTimeout(() => {
    counterValue.classList.remove('animate');
  }, 180);
});