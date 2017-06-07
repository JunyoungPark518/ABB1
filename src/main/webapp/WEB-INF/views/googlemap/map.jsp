<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="wrapper" class="abb1_bgcolor_beige">
   <div>
      <img src="${context}/resources/img/multiplex/theater.jpg" alt="" />
   </div>
   <div class="abb1_multiplex_map_title">
      <h2><strong>가산디지털 위치정보</strong></h2>
   </div>
   <div class="abb1_margin_left_100">
      <ul class="abb1_ul_inline">
         <li class="abb1_li_inline abb1_multiplex_btn"><a id="multiplexMain" href="/web" class="abb1_multiplex_a"><strong>상영시간표</strong></a></li>
         <li class="abb1_li_inline abb1_multiplex_select_btn"><a href="javascript:void(0)" class="abb1_multiplex_select_a"><strong>위치정보</strong></a></li>
      </ul>
   </div>
   <div id="multiplex_map_api">
      <div class="abb1_multiplex_map">
         <div id="googlemap" class="abb1_multiplex_map"></div>
      </div>
   </div>
</div>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6m9EZ4h4wexybh_2AmLEktZvKyn-ei-4&callback=initMap" async defer></script>
<script>
function initMap() {
    var latval = 37.477633;
    var lngval = 126.889149;
    var pos = {lat: latval, lng: lngval};
    var map = new google.maps.Map(document.getElementById('googlemap'), {
       center: pos,
       zoom: 17
    });
    var marker = new google.maps.Marker({
       position: pos,
       map: map
    });
}
</script>