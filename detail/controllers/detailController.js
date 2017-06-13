/**
create by fa_zhang 2016-02-04
***/
var detailControllers = angular.module("detailControllers",['detailServices', 'detailPageDirectives']);

detailControllers.controller("showDetailCtr",function($scope, $location, detailInfoService){
	var args = [$location.search().bulletin];
	detailInfoService.getBulletinDetail('getDetail',args);
	$scope.bulletinDetailData = detailInfoService;
})
