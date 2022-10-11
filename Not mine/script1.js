// Кнопки
let wantPlay = document.querySelector('#want-play');
let start = document.querySelector('#submit');
let gameButton = document.querySelector('#to-game');

// Модальные окна
let firstModal = document.querySelector('#modal-input');
let secondModal = document.querySelector('#start');


// Игра
let minValue = document.querySelector('#min').value;
let maxValue = document.querySelector('#max').value;
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

// Открытие первого модального окна
wantPlay.addEventListener('click', () => {
    firstModal.classList.add('modal-active');
   
    document.querySelector('#user-min').innerText = minValue;
    document.querySelector('#user-max').innerText = maxValue; 

    if (isNaN(minValue) || isNaN(maxValue)) {
        minValue = 1;
        maxValue = 100;
    }
    
    
    
})

// Открытие второго модального окна
start.addEventListener('click', () => {
    firstModal.classList.remove('modal-active');
    secondModal.classList.add('modal-active');
    
    
})

// Начало игры
gameButton.addEventListener('click', () => {
    secondModal.classList.remove('modal-active');

})

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;
let phraseRandom = Math.round(Math.random() * 3);
let answerPhrase;
if ((phraseRandom === 1)) {
                           answerPhrase = `Вы загадали число ${answerNumber }?`;
                        } else if (answerPhrase = (phraseRandom === 2)) {
                           answerPhrase = `Пфффф, проще простого! Это число ${answerNumber }?`;
                        } else {
                           answerPhrase = `Сейчас обалдеешь. Я знаю, что ты загадал ${answerNumber }! Да?`;
                        }

                        answerField.innerText = answerPhrase;

document.querySelector('#btnRetry').addEventListener('click', function () {
    firstModal.classList.add('modal-active');
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;;
    minValue = parseInt(document.querySelector('#min'));
    maxValue = parseInt(document.querySelector('#max'));
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    
    let phraseRandom = Math.round(Math.random() * 3);
                        let answerPhrase;
if ((phraseRandom === 1)) {
                           answerPhrase = `Вы загадали число ${answerNumber }?`;
                        } else if (answerPhrase = (phraseRandom === 2)) {
                           answerPhrase = `Пфффф, проще простого! Это число ${answerNumber }?`;
                        } else {
                           answerPhrase = `Сейчас обалдеешь. Я знаю, что ты загадал ${answerNumber }! Да?`;
                        }

                        answerField.innerText = answerPhrase;
})

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue) {
            let phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase;
            if (phraseRandom === 1) {
               answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
            } else if (answerPhrase = (phraseRandom === 2)) {
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
            } else {
                answerPhrase = `Ну и задачка...\n\u{1F612}`;
            }
        }    

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
        
            let phraseRandom = Math.round(Math.random() * 3);
                        let answerPhrase;
if ((phraseRandom === 1)) {
                           answerPhrase = `Вы загадали число ${answerNumber }?`;
                        } else if (answerPhrase = (phraseRandom === 2)) {
                           answerPhrase = `Пфффф, проще простого! Это число ${answerNumber }?`;
                        } else {
                           answerPhrase = `Сейчас обалдеешь. Я знаю, что ты загадал ${answerNumber }! Да?`;
                        }

                        answerField.innerText = answerPhrase;
                    }
    })

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue) {
            let phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase;
            if (phraseRandom === 1) {
               answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
            } else if (answerPhrase = (phraseRandom === 2)) {
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
            } else {
                answerPhrase = `Ну и задачка...\n\u{1F612}`;
            }
        }    

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
        
            let phraseRandom = Math.round(Math.random() * 3);
                        let answerPhrase;
if ((phraseRandom === 1)) {
                           answerPhrase = `Вы загадали число ${answerNumber }?`;
                        } else if (answerPhrase = (phraseRandom === 2)) {
                           answerPhrase = `Пфффф, проще простого! Это число ${answerNumber }?`;
                        } else {
                           answerPhrase = `Сейчас обалдеешь. Я знаю, что ты загадал ${answerNumber }! Да?`;
                        }

                        answerField.innerText = answerPhrase;
                    }
    })

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let phraseRandom = Math.round(Math.random() * 3);
        let answerPhrase;
        if (phraseRandom === 1) {
                answerPhrase = `Я всегда угадываю\n\u{1F44C}`;
            } else if (answerPhrase = (phraseRandom === 2)) {
                answerPhrase = `Мастер в здании\n\u{1F60E}`;
            } else {
                answerPhrase = `Я справился, а ты бы смог?\n\u{1F525}`;
            }
        
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})