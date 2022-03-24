const screen = getElementById('screen');
let result = 0;
let nextNumber = 0;
const calculatedNumberListView = getElementById('calculatedNumberList');
let calculatedNumberList = [];
let calculateType = null;

function setScreenNumber(number) {
    screen.value = number;
}
function updateCalculatedNumberListView() {
    calculatedNumberListView.innerHTML = ''
    calculatedNumberList.forEach(calculatedNumber => {
        let calculatedNumberView = document.createElement('li');
        calculatedNumberView.innerText = calculatedNumber
        calculatedNumberListView.appendChild(calculatedNumberView)
    });
}


getElementById('AC').onclick = function allClear() {
    result = 0;
    nextNumber = 0;
    setScreenNumber(0);
    calculatedNumberList = [];
    updateCalculatedNumberListView()
    calculateType = null;
}
getElementById('CE').onclick = function clearEntry() {
    let prevNumber = calculatedNumberList.pop();
    result = prevNumber || 0;
    nextNumber = 0
    setScreenNumber(prevNumber || 0);
    updateCalculatedNumberListView()
    calculateType = null;
}

getElementById('plus').onclick = function plus() {
    calculateType = 'plus'
}
getElementById('minus').onclick = function minus() {
    calculateType = 'minus'
}
getElementById('times').onclick = function times() {
    calculateType = 'times'
}
getElementById('devide').onclick = function devide() {
    calculateType = 'devide'
}
getElementById('percent').onclick = function percent() {
    calculateType = 'percent'
}

const numberButtons = document.getElementsByClassName('number');
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].onclick = function () {
        pressNumber(parseInt(numberButtons[i].innerText))
    }
}
function pressNumber(number) {
    if (calculateType) {
        if (!nextNumber) nextNumber = number
        else nextNumber = nextNumber * 10 + number
        setScreenNumber(nextNumber)
    } else {
        if (!result) result = number
        else result = result * 10 + number
        setScreenNumber(result)
    }
}

getElementById('calculate').onclick = function calculate() {
    if (calculateType) {
        switch (calculateType) {
            case 'plus': result = result + nextNumber; break;
            case 'minus': result = result - nextNumber; break;
            case 'times': result = result * nextNumber; break;
            case 'devide': result = parseInt(result / nextNumber); break;
            case 'percent': result = parseInt(result % nextNumber); break;
        }
    }
    setScreenNumber(result)
    calculatedNumberList.push(result)
    updateCalculatedNumberListView()
    calculateType = null;
    nextNumber = 0;
}

function getElementById(id) {
    return document.getElementById(id);
}