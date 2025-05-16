let face1input = document.querySelector("#face1");
let face2input = document.querySelector("#face2");

let headsButton = document.querySelector("#heads");
let tailsButton = document.querySelector("#tails");


let resultDiv = document.querySelector("#result")

  
        let coin = Math.random ();
        print(coin);
        if (coin <=0.5) {
            console.log("Heads")
        }  else {
            console.log("Tails");
        }


function coinButton1()
    console.log(face1, face2)

headsButton.addEventListener("click", function() {
   
    let face1 = parseFloat(face1input)
    let face2 = parseFloat(face2input)
    coinButton1 (face1, face2);
    resultDiv.textContent = coinButton1(face1, face2)
});


function coinButton2()
    console.log(face1, face2)

tailsButton.addEventListener("click", function() {
   
    let face1 = parseFloat(coin.value)
    let face2 = parseFloat(coin.value)
    coinButton2(face1, face2);
    resultDiv.textContent = coinButton2(face1, face2)
});
    
    
    
