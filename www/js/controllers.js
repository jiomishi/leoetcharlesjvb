angular.module('starter.controllers', [])

.controller('Bienvenue', ['$scope', function($scope) { 
  $scope.title = 'Bienvenue'; 
}]);

function masquer_div(id, id2)
{
  if (document.getElementById(id).style.display == 'block') {
       document.getElementById(id).style.display = 'none';
  }
  else {
       document.getElementById(id).style.display = 'block';
  }

  if (document.getElementById(id2).style.display == 'none') {
       document.getElementById(id2).style.display = 'block';
  }
  else {
       document.getElementById(id2).style.display = 'none';
  }
}
