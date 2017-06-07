<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/xml" prefix="x" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title><tiles:getAsString name="title"/></title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script src="${context}/resources/js/util.cookie.js"></script>
	<script src="${context}/resources/js/abb1.controller.js"></script>
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script src="//d1p7wdleee1q2z.cloudfront.net/post/search.min.js"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link href="${context}/resources/css/bootstrap_admin/bootstrap.min.css" rel="stylesheet">
    <link href="${context}/resources/css/bootstrap_admin/sb-admin.css" rel="stylesheet">
    <link href="${context}/resources/css/bootstrap_admin/plugins/morris.css" rel="stylesheet">
    <link href="${context}/resources/css/bootstrap_admin/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="${context}/resources/css/abb1.css" type="text/css"/>
</head>
<body>
	<header>
		<div id="publicHeader">
			<tiles:insertAttribute name="header"></tiles:insertAttribute>
		</div>
	</header>
	<section>
		<article id="googlemapArticle">
			<tiles:insertAttribute name="gnb"/>
			<tiles:insertAttribute name="wrapper"/>
		</article>
	</section>
	<footer>
		<tiles:insertAttribute name="footer"/>
	</footer>
</body>
</html>

