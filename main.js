var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(guessAnswer) {
        if (this.tries > 0) {
            const message =  (guessAnswer.toLowerCase() === this.correctAnswer) ? "Правильный ответ" : "Неправильный ответ";
            alert(message);
            console.log(message); //the repeating in console.log for autotest

            console.log(`Текущая попытка: ${this.tries}`);
            
            if (this.tries <= 3 && message === "Неправильный ответ") {//2-3+1 //2-2+1
                let indexHint = this.hints.length - this.tries + 1 // 2-2 //2-1
                // console.log(`indexHint ${indexHint}`);

                if (indexHint < 2) {
                    alert(`Подсказка: ${this.hints[indexHint]}`);
                    // console.log(`Hint: ${this.hints[indexHint]}`);
                }
            }
            this.tries--;
        } else {
            alert("Игра окончена");
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
        // console.log(riddle.tries);

    }
}