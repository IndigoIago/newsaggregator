angular.module('getHTML', [

  ])

  .controller('getHTMLController', function($scope, $http) {
    $scope.getHTML = function(url) {
      // var url = $scope.url;
      $http.get(url, function(res) {
        // document.getElementById('articleFrame').src='"' + escape(res) + '"';
      })
    }

});