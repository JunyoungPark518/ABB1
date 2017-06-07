<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="gnb">
   <div>
      <div>
         <ul>
            <li><a id="ticketing" href="#">예매</a></li>
            <li><a id="movie" href="#">영화</a></li>
            <li><a id="multiplex" href="#">영화관</a></li>
            <li><a class="abb1_tooltip" href="#">스위트샵<span>미구현</span></a></li>
            <li><a class="abb1_tooltip" href="#">이벤트<span>미구현</span></a></li>
            <li><a class="abb1_tooltip" href="#">기프트샵<span>미구현</span></a></li>
         </ul>
      </div>
   </div>
</div>

<script>
$(function(){
	var gnb = $('#gnb');
	gnb.find('div:first-child').addClass('abb1_width_100 abb1_text_center')
	gnb.find('div:first-child').find('div:first-child').addClass('abb1_width_100 abb1_gnb_tab abb1_text_center');
	gnb.find('ul').addClass('abb1_gnb');
	gnb.find('span:first-child').addClass('abb1_tooltiptext');
	gnb.find('span:nth-child(2)').addClass('abb1_tooltiptext');
	gnb.find('span:nth-child(3)').addClass('abb1_tooltiptext');
});
</script>