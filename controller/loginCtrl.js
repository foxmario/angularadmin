app.controller('loginController',
    ['$scope',
        '$rootScope',
        '$state',
        '$sessionStorage',
        '$cookies',
        '$http',
        function($scope, $rootScope, $state, $sessionStorage, $cookies, $http) {
            $scope.user = {};
            //登录
            $scope.login = function() {
                if ($scope.loginForm.$valid) {
                    // $http({
                    //     method: 'post',
                    //     url: $scope.baseUrl + '/my_login/',
                    //     data: $scope.user
                    // }).then(function(response) {
                    //     if (response.data.message=='验证通过') {
                    //         $cookies.put('user', JSON.stringify($scope.user));
                    //         if ($scope.loginChecked) {
                    //             $cookies.put('remember', JSON.stringify($scope.user));
                    //         }
                    //         $state.go('home.page1');
                    //     } else {
                    //         layer.msg(response.data.message, { time: 3000, shift: 6, icon: 5 });
                    //     }
                    // }, function() {})

                    $cookies.put('user', JSON.stringify($scope.user));
                            if ($scope.loginChecked) {
                                $cookies.put('remember', JSON.stringify($scope.user));
                            }
                            $state.go('home.page1');

                } else {
                    layer.msg('帐号或密码不能为空', { time: 3000, shift: 6, icon: 5 });
                }

            }
            //记住密码
            $scope.remember = function() {
                if ($scope.loginChecked == false) {
                    $cookies.remove('remember');
                }

            }

            $scope.init = function() {
                if ($cookies.get('remember')) {
                    var user = JSON.parse($cookies.get('remember'));
                    $scope.user = user;
                    $scope.loginChecked = true;
                }
            }

            $scope.init();
        }
    ])