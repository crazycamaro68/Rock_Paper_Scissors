//RPS Stands for RPS
const RPS = ["rock", "paper", "scissors"]
let playerChoice = "";

const computerChoice = Math.floor(Math.random() * RPS.length);
console.log(RPS[computerChoice])
