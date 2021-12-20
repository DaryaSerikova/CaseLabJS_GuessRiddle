var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(guessAnswer) {
        guessAnswer.toLowerCase() === this.correctAnswer ? alert("Правильный ответ") : alert("Неправильный ответ");
        guessAnswer.toLowerCase() === this.correctAnswer ? console.log("Правильный ответ") : console.log("Неправильный ответ");
        // TODO: написать логику проверки правильного ответа
        // alert для пользователя, console.log()
        
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;

    if (guessedAnswer) {
        // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
        riddle.checkAnswer(guessedAnswer);

    }
}