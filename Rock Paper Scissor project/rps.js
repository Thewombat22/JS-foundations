function getComputerChoice(){
    const computerOptions = ["Rock", "Paper", "Scissors"]
    const computerPick = Math.floor(Math.random() * computerOptions.length)
    return computerPick
}
