/*
    NodeList = Static colection of HTML elements by (id, class,element)
        Can be created by using querySelecyorAll()
        Similar to an array, byt no (map, filter, reduce)
        NodeList won't update to automatically reflect changes
*/

// let buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);

// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent = "rrr"
// });

//// CLICK event listener
// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";
//     })
// });

//// MOUSEOVER + MOUSEOUT event listener
// buttons.forEach(button => {
//         button.addEventListener("mouseover", event => {
//             event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//         })
//         button.addEventListener("mouseout", event => {
//             event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//         })
//     });

//// ADD EN ELEMENT
// const newButton = document.createElement("button"); //STEP 1
// newButton.textContent = "Button 5"; //STEP 2
// newButton.classList = "myButtons";
// document.body.appendChild(newButton); //STEP 3

// buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);

//// REMOVE EN ELEMENT
// buttons.forEach(button => {
//         button.addEventListener("click", event => {
//             event.target.remove()
//             buttons = document.querySelectorAll(".myButtons");
//             console.log(buttons);
//         })
//     });


/*
    ClassList = Element property in JS used to interact
         with an element's list of classes (CSS classes)
         Allows you to make reusable classes for many elements
         across your webpage
         add()
         remove()
         toggle() - remove if present and if not
         replace(oldClass, newClass)
         contains()
*/

// const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover", event =>{
//     event.target.classList.toggle("hover");
// })

// myButton.addEventListener("mouseout", event =>{
//     event.target.classList.toggle("hover");
// })

// myButton.classList.add("enabled");
// myButton.addEventListener("click", event =>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤦‍♂️";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }    
// })

////////////////////
let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })
});

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("disabled")){
                    event.target.textContent += "🤦‍♂️";
                }
                else{
                    event.target.classList.replace("enabled", "disabled");
                }
    })
});