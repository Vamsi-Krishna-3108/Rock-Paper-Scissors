document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('button');
    const userChoiceDisplay = document.getElementById('user-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const resultDisplay = document.getElementById('result');
    const userScoreDisplay = document.getElementById('user-score');
    const computerScoreDisplay = document.getElementById('computer-score');

    let userScore = 0;
    let computerScore = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const userChoice = button.id;
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            const result = getResult(userChoice, computerChoice);
            
            userChoiceDisplay.textContent = `Your Choice: ${userChoice}`;
            computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;
            resultDisplay.textContent = `Result: ${result}`;

            if (result === 'You win!') {
                userScore++;
            } else if (result === 'You lose!') {
                computerScore++;
            }

            userScoreDisplay.textContent = `Your Score: ${userScore}`;
            computerScoreDisplay.textContent = `Computer's Score: ${computerScore}`;
        });
    });

    function getResult(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'It\'s a draw!';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }
});
