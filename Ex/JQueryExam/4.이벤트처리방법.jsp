<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script>
	$(function() {
		$("img").on("click",function(event){
			event.stopPropagation();
			event.preventDefault();
			alert("이미지 이벤트 발생");
		});	
		$("div").on("click",function(){
			alert("div 이벤트 발생");
		});	
	});
	</script>
</head>
<body>
	<a href="http://www.naver.com">
		<div id="human">
			<img src="/JavaScriptJQuery/b.jpg"></img>
		</div>
	</a>

</body>
</html>