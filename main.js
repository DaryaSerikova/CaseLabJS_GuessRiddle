var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(guessAnswer) {
        if (this.tries > 0) {
            const message = (guessAnswer.toLowerCase() === this.correctAnswer) ? "Правильный ответ" : "Неправильный ответ";
            message === "Правильный ответ" ? this.tries = 0 : this.tries;

            alert(`${message}`);
            console.log(message); //the repeating in console.log for autotest
            
            if (this.tries <= 3 && message === "Неправильный ответ") {
                let indexHint = this.hints.length - this.tries + 1 //2-3+1 //2-2+1

                if (indexHint < 2) {
                    alert(`Подсказка: ${this.hints[indexHint]}`);
                }
            }
            this.tries--;
            if (this.tries <= 0) {
                alert("Игра окончена! Обновите страницу, чтобы начать заново.");
                console.log("Игра окончена");
            } else {
                alert(`Количество оставшихся попыток: ${this.tries}`);
            }
        
        } else {
            alert("Игра окончена! Обновите страницу, чтобы начать заново.");
            console.log("Игра окончена");
        }
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;

    if (guessedAnswer) {

        riddle.checkAnswer(guessedAnswer);

    }
}