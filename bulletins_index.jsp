<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>通知公告</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0" />
	<meta name="format-detection" content="telephone=no" />
	
	<link rel="stylesheet" type="text/css" href="css/bulletin-list.css">
	<script type="text/javascript" src="js/angular.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
	<script type="text/javascript" src="index/controllers/indexController.js"></script>
	<script type="text/javascript" src="index/services/authService.js"></script>
	<script type="text/javascript" src="index/directives/indexDirective.js"></script>
	<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
	
	
  </head>
  
  <body ng-app="bulletins" ng-controller="mainCtr">
	<div class="page-loading" style="display:none;"></div>
	<div id="search-box">
		<div id="search-input">
			<input id="search-key" type="text" placeholder="输入公告标题进行搜索" ng-model="searchKey">
			<div id="search-clear"></div>
		</div>
		<div id="search-btn"></div>
	</div>
	<div class="bar-background"></div>
	<div class="bulletin-group" ng-repeat="bulletin in bulletins._bulletin_info | orderBy:'-startTime'" ng-controller="detailCtr">
		<bulletin-item ng-click="goDetail(bulletin.id)"></bulletin-item>
	</div>
	<div class="bottom-notify"></div>
</body>
</html>
