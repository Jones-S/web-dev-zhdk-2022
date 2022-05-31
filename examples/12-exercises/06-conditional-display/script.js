console.info("Everything looks fine ✅.");
console.log("Open this script.js file and write your code...");

// selecting both boxes
const boxes = document.querySelectorAll('[data-js="box"]');
console.log("boxes: ", boxes);

// adding an eventlistener for both boxes
// that listens to mouseover events
boxes.forEach((box) => {
  box.addEventListener("mouseover", handleHover);
});

// function which is executed whenever a mouseover is detected
// the parameter "event" includes information about that mouseover event
// incl. information about the target (which is the element that is actually hovered).
function handleHover(event) {
  const target = event.target;
  console.log("target: ", target);

  // write rest of the display function here

  // hints:
  // Create a variable to save the value of the data-weather attribute:
  // -> "sunny" || "rainy"

  // const weather =

  const displayElement = document.querySelector("[data-js-weather]");
  console.log("displayElement; ", displayElement);

  // Display either
  // "The weather is sunny." or "It is raining."
  // depending on the value of the variable "weather"
  // and display that text inside
  // the already selected div "displayElement"

  // Make use of a conditional branching (if)
}
