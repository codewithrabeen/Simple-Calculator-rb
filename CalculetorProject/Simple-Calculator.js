let calculation = localStorage.getItem('calculation') || '';
displayCalculation();

function updateCalculation(value) {
  calculation += value;
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-result').innerHTML = `${calculation}`;
}

document.addEventListener('keydown', (event) => {
  const allowedKeys = '0123456789+-*/.';
  if (allowedKeys.includes(event.key)) {
    updateCalculation(event.key);
  } else if (event.key === 'Enter') {
    try {
      calculation = eval(calculation).toString();
      displayCalculation();
      localStorage.setItem('calculation', calculation);
    } catch {
      calculation = '';
      displayCalculation();
    }
  } else if (event.key === 'Backspace') {
    calculation = calculation.slice(0, -1);
    displayCalculation();
    localStorage.setItem('calculation', calculation);
  } else if (event.key.toLowerCase() === 'c') {
    calculation = '';
    displayCalculation();
    localStorage.setItem('calculation', calculation);
  }
});