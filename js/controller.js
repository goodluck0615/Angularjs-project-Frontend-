var App = angular.module('myApp', ['textAngular']).controller('userCtrl', function($scope) {
$scope.fName = '';
$scope.lName = '';
$scope.passw1 = '';
$scope.passw2 = '';
$scope.users = [
{id:1, fName:'Hege',lName:"Pege" },
{id:2, fName:'Kim',lName:"Pim" },
{id:3, fName:'Sal',lName:"Smith" },
{id:4, fName:'Jack',lName:"Jones" },
{id:5, fName:'John',lName:"Doe" },
{id:6, fName:'Peter',lName:"Pan" }
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false; 
$scope.editUser = function(id) {
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.fName = '';
    $scope.lName = '';
    } else {
    $scope.edit = false;
    $scope.fName = $scope.users[id-1].fName;
    $scope.lName = $scope.users[id-1].lName; 
  }
};

$scope.$watch('passw1',function() {$scope.test;});
$scope.$watch('passw2',function() {$scope.test;});
$scope.$watch('fName',function() {$scope.test;});
$scope.$watch('lName',function() {$scope.test;});

$scope.tab = 1;

        $scope.setTab = function (tabId) {
            $scope.tab = tabId;
        };

        $scope.isSet = function (tabId) {
            return $scope.tab === tabId;
        };

$scope.htmlContent = '<h2>Text!</h2>';
});

