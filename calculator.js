function displayNumber(numb)  {
    const num = document.querySelector('.field');

    if (num.value === '0') {
        num.value = numb;
    } else {
        num.value += numb
    }
};

function clearField() {
  const num = document.querySelector('.field');
  num.value = '0';
};

function calculate() {
    try {
        const num = document.querySelector('.field');
        num.value = eval(num.value);
    } catch (error) {
        num.value = 'SYNTAX ERROR'
    }
};







