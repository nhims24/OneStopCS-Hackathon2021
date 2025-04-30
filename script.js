// fact list key feature on home page
// list of facts

var factList = [
  "majoring in this field can lead to lucrative careers that will remain in high demand",
  "the Future of Computer Science is promising", "choosing a career in this field will open the doors to many job opportunities",
  "it has a median pay of $91250", 
  "there is a job growth of 11% in the computer and IT field"
];

//get facts by id

var fact1 = document.getElementById("fact");
var myButton = document.getElementById("factgen");
var count = 0;

//when button is clicked
myButton.addEventListener("click", displayFact);

//function to display fact
function displayFact() {
  fact1.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
