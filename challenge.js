// Good Luck! You got this 💪🏾
// Write your code here.

function playgame(player1,player2){ 
    
    
    if(player1=="paper" && player2=="rock"){
        console.log("The winner of game is Player 1")
 
    } else if(player1=="rock" && player2=="scissors"){
        console.log("The winner of game is Player 1")
 
    } else if(player1=="scissors" && player2=="paper"){
        console.log("The winner of game is Player 1")
 
    }else if (player2==player2){
        console.log("tie")
    }
    if(player2=="paper" && player1=="rock"){
        console.log("The winner of game is Player 2")
 
    } else if(player2=="rock" && player1=="scissors"){
        console.log("The winner of game is Player 2")
 
    } else if(player2=="scissors" && player1=="paper"){
        console.log("The winner of game is Player 2")
 
    }
}
    playgame("scissors","paper")
