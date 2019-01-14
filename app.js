var app = angular.module('myApp', [
    'ui.router',
    'oc.lazyLoad',
    'ngStorage',
    'ngCookies',
    'ng-layer',
    'ui.bootstrap',
    'ui.tree'
]);
app.config([
    '$provide',
    '$compileProvider',
    '$controllerProvider',
    '$filterProvider',
    '$httpProvider',
    function($provide, $compileProvider, $controllerProvider, $filterProvider, $httpProvider) {
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
        $httpProvider.interceptors.push('httpInterceptor');
    }


]);

app.controller('appController', ['$scope', function($scope) {

}])

app.run(['$rootScope',
    '$state',
    '$sessionStorage',
    '$cookies',
    function($rootScope, $state, $sessionStorage, $cookies) {
        $rootScope.baseUrl = 'http://192.168.1.211:8001';
        $rootScope.$state = $state;
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            if (toState.name == 'login') return; // 如果是进入登录界面则允许
            // 如果用户不存在
            if ($cookies.get('user')) {
                var user = JSON.parse($cookies.get('user'));
            }
            // if (!$rootScope.user || !$rootScope.user.token) {
            if (!user) {
                event.preventDefault(); // 取消默认跳转行为
                $state.go("login"); //跳转到登录界面
            }
            $rootScope.loading = true;
        });
        //切换动画

        $rootScope.$on('$stateChangeSuccess', function() {
            $rootScope.loading = false;
        });
    }
])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home/page1');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'view/login.html',
            controller: 'loginController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['controller/loginCtrl.js']);
                }]
            }
        }).state('home', {
            url: '/home',
            templateUrl: 'view/home.html',
            controller: 'homeController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['controller/homeCtrl.js']);
                }]
            }
        }).state('home.page1', {
            url: '/page1',
            templateUrl: 'view/page1.html',
            controller: 'page1Controller',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['controller/page1Ctrl.js']);
                }]
            }
        }).state('home.page2', {
            url: '/page2',
            templateUrl: 'view/page2.html',
            controller: 'page2Controller',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['controller/page2Ctrl.js']);
                }]
            }
        }).state('home.modify', {
            url: '/modify',
            templateUrl: 'view/modify.html',
            controller: 'modifyController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['controller/modifyCtrl.js']);
                }]
            }
        }).state('home.403', {
            url: '/403',
            templateUrl: 'view/403.html',
            controller: '403Controller',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['controller/403Ctrl.js']);
                }]
            }
        }).state('home.404', {
            url: '/404',
            templateUrl: 'view/404.html'
        });
}]);