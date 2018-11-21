angular.module("umbraco").controller("plac3bodk.Comments",function ($scope) {
    if (typeof $scope.model.config.comment != "undefined") {
           $scope.comment = $scope.model.config.comment;
       }
});
