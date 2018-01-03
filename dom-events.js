const greetingEl = document.getElementById("greeting")
const astrosEl = document.getElementById("astros")

// window.onload = () => {
//   greetingEl.innerText = "oh, hey there!"
//   renderAstros()
// }
//
// renderAstros = () => {
//   const astros = peopleInSpace["people"]
//   let peopleEls = astros.map((a) => {
//     let name = a["name"]
//     return `<li>${name}</li>`
//   })
//   astrosEl.innerHTML = `<ul>${peopleEls.join("")}</ul>`
// }

 // create a function that alerts "these are all the astronauts!"
 // when the title element is clicked.
 var title = document.getElementsByClassName("title")[0]
 title.onclick = () => {
   alert("these are all the astronausts!")
 }

// HTML element
// log to the console the client's x coordinate of their
// mouse as they move it around the window.
const body = document.getElementsByTagName("body")[0]

// when event listener fires of, creates event
body.onmouseover = (event) => {
  console.log(event.screenX)
}

// make an element that displays the most recent key pressed in the DOM
body.onkeypress = (event) => {
  console.log(event.key)
}

// create a text input element. When a user clicks on the text field to input,
// log the input element to console.




// when a user clicks away from the input, log ("bye") to the console.

// wrap the input element with a form element.

// when the form is submitted, render the client's inputted text to the DOM
const form = document.getElementById("iform")
const textInput = document.getElementById("textInput")
const answer = document.getElementById("textInput")

form.onSubmit = (event) => {
  // prevents submit from refreshing the page
  event.preventDefault()
  console.log(textInput.value)
  answer.innerText = textInput.value
}


// HINT: look into event.preventDefault()
