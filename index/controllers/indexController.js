/**
create by fa_zhang 2016-02-04
***/
var indexControllers = angular.module("indexControllers",['indexServices']);
indexControllers
.controller('mainCtr',mainCtr)
.controller('detailCtr',function($scope, goDetailService){
	$scope.goDetail = function(id){
		goDetailService.goDetail(id);
	};
});

function mainCtr($scope,authService){
	var args = [authService.userId, '', authService._page_size];
	authService.initBulletins("getList", args);
	$scope.bulletins = authService;
}