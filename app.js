const computerChoiceDis = document.getElementById("computerChoice")
const userChoiceDis = document.getElementById("userChoice")
const results = document.getElementById("results")
const possibleChoices = document.querySelectorAll("button")
let userChoice 
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDis.innerHTML = " " + userChoice

    generateComputerChoice()
    getResult()
})) 

function generateComputerChoice(){
    let randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)

    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    else if(randomNumber === 2){
        computerChoice = 'paper'
    }
    else{
        computerChoice = 'scissors'
    }

    computerChoiceDis.innerHTML = " " + computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = "Tie Game"
    }
    else if(computerChoice === 'rock' && userChoice ==='scissors'){
        result = 'Computer Wins'
    }
    else if(computerChoice === 'scissors' && userChoice ==='paper'){
        result = 'Computer Wins'
    }
    else if(computerChoice === 'paper' && userChoice ==='rock'){
        result = 'Computer Wins'
    }
    else if(computerChoice === 'rock' && userChoice ==='paper'){
        result = 'You Win'
    }
    else if(computerChoice === 'paper' && userChoice ==='scissors'){
        result = 'You Win'
    }
    else {
        result = 'You Win'
    }
    results.innerHTML = " " + result
}
