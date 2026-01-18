let boxes = document.querySelectorAll(".box");                   
let resetbtn = document.querySelectorAll("#reset-btn");
let newGameBtn = document.querySelectorAll("#new-btn");
let msgContainer = document.querySelectorAll(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;//playerx, player0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

const ResetGame = () =>{
    turn0 = true;
    enableboxes();
    msgContainer.classList.add("hide");


};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
     console.log("box was clicked");
     if(turn0) {
        //player0
     box.innerText = "0";
     turn0 = false;

     } else {
     box.innerText  = "x";
     turn0 = true;
     }
       box.disabled = true;


        CheckWinner();

    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};


const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

    const showWinner = (winner) => {
        msg.innerText = 'congratulations, Winner is ${winner}';    }
       msgContainer.classList.remove("hide");
    disableBoxes();
    ;

const CheckWinner  = () => {
     for  (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
        if (pos1Val != "" && pos2Val != "" && pos3Val !="") {
            if (pos1Val === pos2Val && pos3Val) {
            console.log("winner",pos1Val);
            showWinner(pos1Val);
            }
        }
    }
     };

newGameBtn.addEventListener("click",      resetGame);
resetbtn.addEventListener("click", resetGame);
    

