let options = document.querySelectorAll(".photo");
let userScore = document.querySelector("#userScore")
let compScore = document.querySelector("#compScore")
let msg = document.querySelector("#msg")



let a = 1;
let b = 1;




let userwiner = (userwin,comp)=>{
    
    
    if(userwin){
        
        userScore.innerText = a;
        msg.innerText = `You Win Computer Choose ${comp}`;
        document.querySelector(".msg").style.backgroundColor = "green"
        
        a++;
    } else{
        
        compScore.innerText = b;
        msg.innerText = `You Lose Computer Choose ${comp}`;
        document.querySelector(".msg").style.backgroundColor = "red"
        b++;
    }
}

let playGame = (choice)=>{
    


   let comp = compchosice();
   

   if (choice === comp){
    msg.innerText = `Game  Withdraw  You both Choose Same`;
    document.querySelector(".msg").style.backgroundColor = "yellow"
   } else {
    let userwin = true;
    if(choice==="rock"){
        userwin = comp === "scissors" ? true : false;
        
    }else if ( choice ==="scissors"){
        userwin = comp === "paper" ? true : false;
        
    } else{
        userwin = comp ==="rock" ? true :false;
        
    }

    userwiner(userwin,comp,choice);


   }

    

}

let compchosice = ()=>{

    let option = ["rock","paper","scissors"];

    let compChoose = Math.floor(Math.random()*3);
    
    return option[compChoose];


}



options.forEach((option)=>{

    option.addEventListener("click",()=>{
        const userchoice = option.getAttribute("id");
        playGame(userchoice);
        
    })

})


 