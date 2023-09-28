// Assuming you have an AngularJS app defined
var app = angular.module('myApp', []);

// Define a controller
app.controller('myController', function($scope) {
  $scope.toggleDescription = function() {
    const description = angular.element(document.querySelector('#description'));
    // Toggle the visibility of the description
    if (description.text() === 'none' || description.text() === '') {
      description.text(original); // Show the description
    } else {
      description.text(''); // Hide the description
    }
  };

  $scope.duplicateCard = function() {
    const clone = angular.element(document.querySelector('.card')).clone(); // Clone the whole card
    angular.element(document.querySelector('body')).append(clone);
  };

  $scope.changeBackgroundColor = function() {
    const card = angular.element(document.querySelector('.card'));
    // Change background color
    card.css('background-color', '#' + randomColor());
  };

  $scope.changeHeading = function() {
    const title = angular.element(document.querySelector('h2'));
    title.text('Super Pod 2 Realty');
  };

  $scope.deleteCard = function() {
    const cards = angular.element(document.querySelectorAll('.card'));
    // Check if there are cards to delete
    if (cards.length > 1) {
      const lastCard = cards[cards.length - 1];
      lastCard.remove();
    }
  };
});
