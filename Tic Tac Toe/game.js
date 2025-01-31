let userscore = 0;
let compscore = 0;

const msg = document.querySelector("#msg")
const choices = document.querySelectorAll(".choice");
const user = document.querySelector("#user-score")
const comp = document.querySelector("#comp-score")

const funCompChoice = () => {
    const option = ["rock" , "paper" , "scissor"];
    const ranidx = Math.floor(Math.random() * 3);
    return option[ranidx];
}

const drawgame = () => {
    msg.innerText = "Match was drawn! Play again"
    msg.style.backgroundColor = "darkblue"
}

const showWinner = (userwin) => {
    if(userwin){
        userscore++;
        user.innerText = userscore;
        msg.innerText = "User Win"
        msg.style.backgroundColor = "Green"
    }else{
        compscore++;
        comp.innerText = compscore;
        msg.innerText = "computer Win"
        msg.style.backgroundColor = "Red"
    }
}

const playgame = (userChoice) => {
    console.log("user choice = " , userChoice)
    //Generate computer choice
    const compChoice = funCompChoice();
    

    if(userChoice === compChoice){
        drawgame();
    }

    else{
        let userwin = true;
        if(userChoice === "rock"){
            // paper , scissor
           userwin =  compChoice === "paper" ? false : true; 
        }
        else if(userChoice === "paper"){
            // rock , scissor
            userwin = compChoice === "scissor" ? false : true;
        }else{
            //rock, paper
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin);
    }

}

choices.forEach((choice) =>{
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})