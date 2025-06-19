const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const value = button.getAttribute('data-value');

        if (button.id == 'clear'){
            display.value = ' ';
        } else if (button.id == 'equal'){
            display.value = eval(display.value)
        } else {
            display.value += value;
        }
    })
})