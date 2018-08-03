console.log("hello,N00B!")
let Players = document.querySelectorAll(".player")
let Num = Math.floor((Math.random() * 8) + 1);
let playerReceive= false
let lastPlayer=0
let playerLeft = false
let playerRight = false
let mySound = document.querySelector("#myAudio")

document.addEventListener('keyup' , function(e){
    mySound.play()
    
})
setInterval(Wa,1500)

document.addEventListener('keyup' , function(e){
    if (e.keyCode == 40) {
        playerReceive= true
    }else if (e.keyCode == 37) {
        playerLeft = true
   }else if (e.keyCode == 39) {
        playerRight= true
    }else{
        console.log("N/A")
    }
})


 function Wa() {
     
    if (lastPlayer == 6) {
        if (playerReceive == false) {
            alert("Game Over!")
            
        }
    }else if (lastPlayer == 5) {
        if (playerLeft == false) {
            alert("Game Over!")
            
        }
    }else if (lastPlayer == 7) {
        if (playerRight == false) {
            alert("Game Over!")
          
        }
    }
        
    playerReceive = false
    playerLeft = false
    playerLeft = false
    console.log("failure!")
    Players.forEach(player => {
          player.style.backgroundColor="lime"  
         })
    Num = Math.floor((Math.random() * 8));
    console.log(Num)
    Players[Num].style.backgroundColor="blue"
    lastPlayer = Num
    
    if (Num ==  6) {
        console.log("YOU!")
        
        
    }
    
    else if (Num == 5) {
        console.log("6!")
    }
    
    else if (Num == 7) {
        console.log("8!")
    }
}