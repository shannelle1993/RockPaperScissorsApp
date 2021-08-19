let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("Rock")
const paper_div = document.getElementById("Paper")
const scissors_div = document.getElementById("Scissors")

function getComputerChoice() {
    const choices = ['Rock','Paper','Scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function win(userChoice, computerChoice) {
    userScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win!`
    console.log(result_p)
}
win()

function lose() {
    computerScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${computerChoice} beats ${userChoice}. You lose.`
    console.log(result_p)
}
lose()
function draw() {
    computerScore === userScore
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = "Draw!"
    console.log(result_p)
}
draw()
function rockPaperScissors(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case "PaperRock":
        case "ScissorsPaper":
        case "RockScissors":
            win(userChoice, computerChoice)
            break
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice, computerChoice)
            break
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice, computerChoice)
            break
    }
}

rockPaperScissors();

function main() {

    rock_div.addEventListener('click', function () {
    rockPaperScissors("Rock")
    })
    paper_div.addEventListener('click', function () {
        rockPaperScissors("Paper")
    })
    scissors_div.addEventListener('click', function () {
        rockPaperScissors("Scissors")
    })
}

main();

//event listener to function when clicked
//after clicking function will compare random userchoice to comp choice
//need math.random method to randomize compchoices
//coding logic needed to compare choices and choose winner (i.e rock > scissors, etc.)
//output win
//winner score will grow (i.e. i++) using if statement?
