<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
	String userName = request.getParameter("userName");
	if ( userName != null ) {
		userName = java.net.URLEncoder.encode(userName, "UTF-8");
		request.setAttribute("userName", userName);
	}
	String bulletin = request.getParameter("bulletin");
	if ( bulletin != null ) {
		bulletin = java.net.URLEncoder.encode(bulletin, "UTF-8");
		request.setAttribute("bulletin", bulletin);
	}
	String token = request.getParameter("token");
	if ( token != null ) {
		token = java.net.URLEncoder.encode(token, "UTF-8");
		request.setAttribute("token", token);
	}
	String time = request.getParameter("time");
	if ( time != null ) {
		time = java.net.URLEncoder.encode(time, "UTF-8");
		request.setAttribute("time", time);
	}
%>
<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0, user-scalable=no" />
	<meta name="format-detection" content="telephone=no" />
	<link rel="stylesheet" type="text/css" href="css/bulletin-detail.css?v=1.2.0" />
	<script type="text/javascript" src="../../../scripts/jquery/jquery-1.11.0.min.js"></script>
	<script type="text/javascript" src="js/angular.min.js"></script>
	<script type="text/javascript" src="js/angular-sanitize.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
	<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
	
	<script type="text/javascript" src="detail/controllers/detailController.js"></script>
	<script type="text/javascript" src="detail/services/detailService.js"></script>
	<script type="text/javascript" src="detail/directives/detailDirective.js"></script>
	
	
	<title>公告详情</title>
	<script type="text/javascript">
	
	</script>
</head>
<body ng-app="detailApp" ng-controller="showDetailCtr">
		<div class="page-loading" style="display: none;"></div>
		<bulletin-detail></bulletin-detail>
		

	</body>
</html>