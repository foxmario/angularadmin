app.controller('homeController', ['$scope', '$cookies', '$state', function($scope, $cookies, $state) {


    $('.side-menu-item>a').on('click', function(event) {
        if ($(this).parent().children('.children-menu').length > 0) {
            $(this).parent().toggleClass('active').siblings().removeClass('active');
            $(this).parent().siblings().removeClass('side-menu-this');

        }
        if ($(this).parent().children('.children-menu').length <= 0) {
            mainLayout.removeClass('hide-side');
            $(this).parent().toggleClass('side-menu-this').siblings().removeClass('side-menu-this');
        }
    })

    $('.children-menu-item>a').on('click', function() {
        $(this).parent().toggleClass('current').siblings().removeClass('current');
        $(this).parent().parent().parent('.side-menu-item').siblings().children('.children-menu').children('.children-menu-item').removeClass('current')
        mainLayout.removeClass('hide-side');
    })

























    var hideBtn = $('#hideBtn');
    var mainMask = $('.main-mask');
    var mainLayout = $('#main-layout');

    hideBtn.on('click', function() {
        if (!mainLayout.hasClass('hide-side')) {
            mainLayout.addClass('hide-side');
        } else {
            mainLayout.removeClass('hide-side');
        }
    });
    //遮罩点击隐藏
    mainMask.on('click', function() {
        mainLayout.removeClass('hide-side');
    })


















    $scope.logout = function() {
        $cookies.remove('user');
        $state.go('login');
    }


}])