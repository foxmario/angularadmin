app.factory("httpInterceptor", ["$q", "$injector", function($q, $injector) {
    return {
        request: function(config) {
            // 请求成功
            return config || $q.when(config);
        },
        requestError: function(respons) { // 请求失败

            return $q.reject(respons)
        },
        response: function(response) {
            // do something on response success
            return response || $q.when(response);
        },
        responseError: function(respons) {
            // do something on response error
            if (respons.status == 401) {

                rootScope.$state.go("login");
            } else if (respons.status === 404) {
                console.log("404!");
                var rootScope = $injector.get('$rootScope');
                var state = $injector.get('$rootScope').$state.current.name;
                rootScope.stateBeforLogin = state;
                rootScope.$state.go("home.404");
            } else if (respons.status == 403) {
                var rootScope = $injector.get('$rootScope');
                var state = $injector.get('$rootScope').$state.current.name;
                rootScope.stateBeforLogin = state;
                rootScope.$state.go("home.403");
            }
            return $q.reject(respons);
        }
    };
}]);