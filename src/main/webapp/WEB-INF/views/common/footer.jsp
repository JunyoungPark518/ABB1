<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="footer">
<div></div>
	<img src="${context}/resources/img/common/footer.png" alt="" />
</div>
</body>
<script>
$(function(){
	$('#footer').find('div:first-child').css('padding-top','40px').css('background','#f9f6ec');
});
abb1.context.onCreate('${context}');
</script>
</html>