angular.module("MainApp",[])
  .controller("MainController",function($scope){
    $scope.lists=[];
    for (var i = 0; i < 10000; i++) {
      $scope.lists.push(i);
    }

});
