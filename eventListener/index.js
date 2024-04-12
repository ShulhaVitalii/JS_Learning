// eventsListener - Listen for specific events to create interactive web pages
//       events: click, mouseover, mouseout
//      .addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!";
})

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it!";
})

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me!";
})


myButton.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!";
    // Hide myBox after click on the button
    if(myBox.style.visibility === "hidden"){
        myBox.style.visibility = "visible";
        
    }
    else{
        myBox.style.visibility = "hidden";
        
    }

    
})

myButton.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it!";
})

myButton.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me!";
})



//       events: keydown, keyup
//       document.addEventListener(event, callback);

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox.textContent = "🐱‍🏍";
    myBox.style.backgroundColor = "tomato";
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})

document.addEventListener("keyup", event => {
    myBox.textContent = "🐱‍👤";
    myBox.style.backgroundColor = "lightblue";
})