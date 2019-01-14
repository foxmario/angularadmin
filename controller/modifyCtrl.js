app.controller('modifyController', ['$scope', function($scope) {

	$scope.changePassword= function(user){
		if($scope.changeForm.$valid){

		}else{
			layer.msg('请正确填写', { time: 3000, shift: 6, icon: 5 });
		}

	}

}])