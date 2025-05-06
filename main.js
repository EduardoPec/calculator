function insertToDisplay(data) {
    document.querySelector('.calculator-screen').value += data;
}

function clean() {
    document.querySelector('.calculator-screen').value = '';
}

function back() {
    const screen = document.querySelector('.calculator-screen')
    screen.value = screen.value.slice(0, -1);
}

function result() {
    const screen = document.querySelector('.calculator-screen')
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Error';

    }
}