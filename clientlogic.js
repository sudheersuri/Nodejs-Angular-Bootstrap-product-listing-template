var app=angular.module("webapp",[]);
app.controller("webcontroller",function($scope,$http)
{
  $scope.loaddata=function()
  {
    $http.get("http://localhost:3000/stories").then(function(response)
    {
      $scope.stories=response.data;
      console.log($scope.stories);
    });
  }
});
