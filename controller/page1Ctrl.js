app.controller('page1Controller', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    var CityData = [{
            label: '中国',
            provinces: [{
                    label: '北京'
                },
                {
                    label: '河北',
                    cities: [{
                            label: '石家庄'
                        },
                        {
                            label: '承德'
                        },
                        {
                            label: '唐山'
                        }
                    ]
                }
            ]
        },
        {
            label: '美国',
            provinces: [{
                    label: '纽约',
                    cities: [{
                            label: '曼哈顿区'
                        },
                        {
                            label: '皇后区'
                        }
                    ]
                },
                {
                    label: '德克萨斯州',
                    cities: [{
                            label: '休斯顿'
                        },
                        {
                            label: '达拉斯'
                        }
                    ]
                },
                {
                    label: '加利福尼亚州'
                }
            ]
        }
    ]


    var menuData = [{
            title: '项目管理',
            attr: [{
                    label: '北京'
                },
                {
                    label: '河北',
                    cities: [{
                            label: '石家庄'
                        },
                        {
                            label: '承德'
                        },
                        {
                            label: '唐山'
                        }
                    ]
                }
            ]
        },
        {
            label: '美国',
            provinces: [{
                    label: '纽约',
                    cities: [{
                            label: '曼哈顿区'
                        },
                        {
                            label: '皇后区'
                        }
                    ]
                },
                {
                    label: '德克萨斯州',
                    cities: [{
                            label: '休斯顿'
                        },
                        {
                            label: '达拉斯'
                        }
                    ]
                },
                {
                    label: '加利福尼亚州'
                }
            ]
        }
    ]
    $scope.vm = {};
    $scope.vm.countries = CityData;
    $scope.vm.select = function(country, province, city) {
        $scope.vm.country = country;
        $scope.vm.province = province;
        $scope.vm.city = city;
    };
    var dataUrl = $sce.trustAsResourceUrl("http://192.168.1.211:8000/sigla_show/");
    console.log(dataUrl)




  $http.jsonp(dataUrl, {jsonpCallbackParam: 'cb'}).then(function(data){
    // console.log(data)
  });


}])