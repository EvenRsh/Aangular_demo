let app = angular.module(`tulingApp`, []);
let func = ($scope, $http) => {
    $scope.name = `haha`;
    $scope.submit = () => {
        $http.jsonp(`0216/turing.php`, {
            params: {
                callback: `JSON_CALLBACK`,
                que: $scope.ask
            }
        }).then((res) => {
            $scope.output = res.data.text;
        });
    }
};

app.controller(`indexCtrl`, [`$scope`, `$http`, func]);

