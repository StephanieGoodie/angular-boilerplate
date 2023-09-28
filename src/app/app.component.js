// Assuming you have an AngularJS app defined
app.controller('MyController', function ($scope) {
// Define a controller
//duplicate button
$scope.duplicatecard = function () {
document.querySelector('#btn').addEventListener('click', () => {
  const clone = document.querySelector('.card').cloneNode(true); // Clone the whole card
  document.body.appendChild(clone);
});
};

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letters = ["A", "B", "C", "D", "E", "F"];

function randomColor() {
  var color = "";
  for (var i = 0; i < 3; i++) {
    var index = Math.floor(Math.random() * (numbers.length + letters.length));
    color += (index < numbers.length) ? numbers[index] : letters[index - numbers.length];
  }
  return color;
}
$scope.changeBGcolor = function () {
document.querySelector('#colorBtn').addEventListener('click', () => {
  const card = document.querySelector('.card');
  // Change background color
  card.style.backgroundColor = '#' + randomColor();
});
};

$scope.changeheading = function () {
// HEADING CHANGER
document.querySelector('#Headingbtn').addEventListener('click', () => {
  const title = document.querySelector('h2');
  title.innerText = "Super Pod 2 Realty";
});};

$scope.deletecard = function () {
// Card delete
document.querySelector('#dltbtn').addEventListener('click', () => {
  const cards = document.querySelectorAll('.card');
  // Check if there are cards to delete
  if (cards.length > 1) {
    const lastCard = cards[cards.length - 1];
    lastCard.parentNode.removeChild(lastCard);
  }
});};

$scope.toggleDescription = function () {
var original = document.querySelector('#description').innerText;

document.querySelector('#detailsBtn').addEventListener('click', () => {
  const description = document.querySelector('#description');
  // Toggle the visibility of the description
  if (description.innerText === 'none' || description.innerText === '') {
    description.innerText = original; // Show the description
  } else {
    description.innerText = ''; // Hide the description
  }
});
};

})