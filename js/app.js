//首页APP
var app = angular.module("bulletins",['indexPageDirectives', 'indexControllers', 'indexServices'])
.config(['$httpProvider', function ($httpProvider) {//将post等请求改为表单形式提交 
  // Intercept POST requests, convert to standard form encoding
  $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
    var key, result = [];

    if (typeof data === "string")
      return data;

    for (key in data) {
      if (data.hasOwnProperty(key))
        result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    return result.join("&");
  });
}]);

//详情页app
var detailApp = angular.module("detailApp",['detailControllers','detailServices', 'ngSanitize'])
.config(['$httpProvider', function ($httpProvider) {//将post等请求改为表单形式提交 
  // Intercept POST requests, convert to standard form encoding
  $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
    var key, result = [];

    if (typeof data === "string")
      return data;

    for (key in data) {
      if (data.hasOwnProperty(key))
        result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    return result.join("&");
  });
}]);

//当需要使用$location.search()获取url中的参数时 需要设置html5Mode为true
detailApp.config(['$locationProvider', function($locationProvider){
    $locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});    
}]);


