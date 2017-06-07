/* 
 *------- useful variable 
 * var ctx = $.context();
 * var john = ctx+'/resources/js/john.js';
 */



/*==== function in index ========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-14
@UPDATE DATE : 2017-05-14

	index_movie_rank(data)
	play_youtube(id, src)
	show_slide()
	slide_click(add)
	slide_css(slide)
	view_index()
=================================*/
function index_movie_rank(data){
        var rank_li = '';
        var total = 0;
        var movie_arr = [];
        $.each(data.movie_list, function(i,movie){
            total += movie.count*1;
            movie_arr.push(movie);
        });
        $.each(movie_sort(movie_arr), function(i,movie){
            var count = movie.count;
            rank_li += '<li><a href="javascript:abb1.jquery.movie_detail('+movie.seq+')"><em>'+(i+1)+'</em>'
                       + '<span class="abb1_rank_grade" style="background: url(resources/img/movie/grade_'+movie.grade+'.png);"></span>'
                       + '<span class="abb1_rank_moviename">'+ movie.title +'</span>'
                       + '</a>'
                       + '<em>'+(count/total*100).toFixed(1)+'%</em>'
                       + '</li>';
        });
        $('#rank_ul').html(rank_li);
}
function play_youtube(id, src){
    	$('#'+ id).html('<iframe width="784px" height="453px" src="'+src+'?autoplay=1"></iframe>')
}
function show_slide(){
        var slide = '<div><ul><li><a id="prev"><img src="resources/img/common/prev.png" alt="" /></a></li>';
        for(var i=0; i<4; i++){
            slide += '<li><a href="javascript:abb1.jquery.movie_detail('+(i+1)+')"><img src="resources/img/movie/movie_poster_'+i+'.png" alt="" width="188px" height="274px"/></a></li>';
        }
        slide_css(slide);
}

function slide_click(add){
        $('#prev').on('click',function(){
           var slide = '<div><ul><li><a id="prev"><img src="resources/img/common/prev.png" alt="" /></a></li>';
           add-=4;
           if(add==-4){
              add = 8;
           }
           for(var i=0+add; i<4+add; i++){
              slide += '<li><a href="javascript:abb1.jquery.movie_detail('+(i+1)+')"><img src="resources/img/movie/movie_poster_'+i+'.png" alt="" width="188px" height="274px"/></a></li>'
           }
           slide_css(slide);
           slide_click(add);
        });
        $('#next').on('click',function(){
           var slide = '<div><ul><li><a id="prev"><img src="resources/img/common/prev.png" alt="" /></a></li>';
           add+=4;
           if(add>=12){
              add = 0;
           }
           for(var i=0+add; i<4+add; i++){
              slide += '<li><a href="javascript:abb1.jquery.movie_detail('+(i+1)+')"><img src="resources/img/movie/movie_poster_'+i+'.png" alt="" width="188px" height="274px"/></a></li>'
           }
           slide_css(slide);
           slide_click(add);
        });
}
function slide_css(slide){
        slide += '<li><a id="next"><img src="resources/img/common/next.png" alt="" /></a></li></ul></div>'
        var slidePoster = $('#slidePoster');
        slidePoster.html(slide);
        slidePoster.find('div:first-child').addClass('abb1_width_100 abb1_text_center');
        slidePoster.find('ul').addClass('abb1_slidePoster');
        slidePoster.find('li:first-child').addClass('abb1_slideBtn');
        slidePoster.find('li:nth-child(6)').addClass('abb1_slideBtn');
}
function index_css(){
	var boxoffice = $('#boxoffice');
	var botable = boxoffice.find('table');
	botable.addClass('abb1_tbboxoffice');
	botable.find('tr:first-child').find('td:first-child').addClass('abb1_tbboxoffice_firstcol');
	botable.find('ul').addClass('abb1_rank');
	$('#reservation').addClass('abb1_main_reservebtn');
	$('#reservation').find('a').attr('href',$.context()+'/reservation/main').css('color','white');
	var eventBxMain = $('#eventBxMain');
	eventBxMain.find('div:first-child').addClass('abb1_width_100 abb1_text_center');
	eventBxMain.find('div:first-child').find('div:first-child').addClass('abb1_eventBxMain');
	
}



/*==== function in movie main ====
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-14
@UPDATE DATE : 2017-05-14

	view_movie_main()
	movie_sort(movie_arr)
	order_by_rate(data, ctx)
	gpa_sort(review_list)
	order_by_gpa(data, ctx)
=================================*/
function view_movie_main(){
	var view = '   <div id="movieMain">'
        +'      <div>'
        +'        <ul>'
        +'          <li><a href="#">현재상영작</a></li>'
        +'          <li><a href="#">상영예정작</a></li>'
        +'        </ul>'
        +'      </div>'
        +'      <div id="order">'
        +'         <ul>'
        +'            <li><a id="order_by_rate" href="#">예매순</a></li>'
        +'            <li><a id="order_by_gpa" href="#">평점순</a></li>'
        +'         </ul>'
        +'      </div>'
        +'      <div>'
        +'         <div id="movieList"></div>'
        +'         <div id="movieList2"></div>'
        +'      </div>'
        +'   </div>';
	return view;
}
function movie_sort(movie_arr){
    var temp = 0;
    for(k=0; k<movie_arr.length; k++) {
	for(j=k+1; j<movie_arr.length; j++) {
	    if(movie_arr[k].count*1<=movie_arr[j].count*1) {
                temp = movie_arr[k];
                movie_arr[k] = movie_arr[j];
                movie_arr[j] = temp;
	    }
      	}
    }
    return movie_arr;
}
function order_by_rate(data, ctx){
        var movie_list = [];
        var review_list = []; 
        var review_total = [0, 0, 0, 0, 0, 0, 0, 0]; 
        var review_count = [0, 0, 0, 0, 0, 0, 0, 0]; 
        var total = 0;
        $.each(data.movie_list, function(i,movie){
          total += movie.count*1;
          movie_list.push(movie);
        });
        $.each(data.review_list, function(i,review){
          review_list.push(review);
        });
        
        movie_list = movie_sort(movie_list);
    
        for(var k=0; k<review_total.length; k++){
           for(var i=0; i<review_list.length; i++){
              if(movie_list[k].seq==review_list[i].movie_seq) {
                review_total[k] += review_list[i].gpa*1;
                review_count[k]++;
              }
          }
        }
    
        var gpa = 0.0;
        var list = '<ul>';
        for(var i=0; i<4; i++){
          gpa = review_count[i]!=0 ? review_total[i]/review_count[i] : 0.0;
          list +='               <li>'
             +'                  <table>'
             +'                     <tr>'
             +'                        <td><a href="javascript:abb1.jquery.movie_detail('+movie_list[i].seq+')"><img src="'+ctx+'/resources/img/movie/'+movie_list[i].pic_main+'" width="228px" height="333.99px" alt="..."></a></td>'
             +'                     </tr>'
             +'                     <tr>'
             +'                        <td><a href="javascript:abb1.jquery.movie_detail('+movie_list[i].seq+')">'+ movie_list[i].title +'</a></td>'
             +'                     </tr>'
             +'                     <tr>'
             +'                        <td>예매율 '+(movie_list[i].count/total*100).toFixed(1)+'% | 관람평점 '+ gpa.toFixed(1)+'</td>'
             +'                     </tr>'
             +'                  </table>'
             +'               </li>';
        }
        list += '</ul>';
        $('#movieList').html(list);
        list = '<ul>';
        for(var i=4; i<8; i++){
          gpa = review_count[i]!=0 ? review_total[i]/review_count[i] : 0.0;
          list +='               <li>'
             +'                  <table>'
             +'                     <tr>'
             +'                        <td><a href="javascript:abb1.jquery.movie_detail('+movie_list[i].seq+')"><img src="'+ctx+'/resources/img/movie/'+movie_list[i].pic_main+'" width="228px" height="333.99px" alt="..."></a></td>'
             +'                     </tr>'
             +'                     <tr>'
             +'                        <td><a href="javascript:abb1.jquery.movie_detail('+movie_list[i].seq+')">'+ movie_list[i].title +'</a></td>'
             +'                     </tr>'
             +'                     <tr>'
             +'                        <td>예매율 '+(movie_list[i].count/total*100).toFixed(1)+'% | 관람평점 '+ gpa.toFixed(1)+'</td>'
             +'                     </tr>'
             +'                  </table>'
             +'               </li>';
    	}
    
       list += '</ul>';
       $('#movieList2').html(list);
       var movieMain=$('#movieMain');
       movieMain.find('div:nth-child(1)').addClass('abb1_movie_btns');
       movieMain.find('ul').addClass('abb1_ul_inline');
       movieMain.find('li').addClass('abb1_li_inline');
       movieMain.find('div:nth-child(1) li:nth-child(1)>a').addClass('abb1_movie_now_btn');
       movieMain.find('div:nth-child(1) li:nth-child(2)>a').addClass('abb1_movie_future_btn');
       $('#order').addClass('abb1_width_right');
       $('#order').find('li:nth-child(1) a').addClass('abb1_padding_right_5');
       
       $('#movieList').addClass('abb1_movie_list_div');
       $('#movieList2').addClass('abb1_movie_list_div');
       movieMain.find('table').addClass('abb1_movie_table');
       movieMain.find('table tr:nth-child(1)>td').addClass('abb1_nowMovie_border');
       movieMain.find('table tr:nth-child(2)>td').addClass('abb1_movie_table_title_td');
       movieMain.find('table tr:nth-child(3)>td').addClass('abb1_movie_table_rate_td');
}
function gpa_sort(review_list){
        var temp = 0;
        for(k=0; k<review_list.length; k++) {
            for(j=k+1; j<review_list.length; j++) {
        	if(review_list[k].gpa*1<=review_list[j].gpa*1) {
        	    temp = review_list[k];
        	    review_list[k] = review_list[j];
        	    review_list[j] = temp;
             	}
            }
        }
        var str = '';
        for(var i=0; i<review_list.length; i++){
            str += review_list[i].gpa + '\n';
        }
        alert(str);
        return review_list;
}
function order_by_gpa(data, ctx){
        var movie_list = []; 
        var review_list = [];
        var review_total = [0, 0, 0, 0, 0, 0, 0, 0]; 
        var review_count = [0, 0, 0, 0, 0, 0, 0, 0]; 
        var total = 0;
        $.each(data.movie_list, function(i,movie){
          total += movie.count*1;
          movie_list.push(movie);
        });
        $.each(data.review_list, function(i,review){
          review_list.push(review);
        });
        
        for(var k=0; k<review_total.length; k++){
           for(var i=0; i<review_list.length; i++){
              if(movie_list[k].seq==review_list[i].movie_seq) {
                review_total[k] += review_list[i].gpa*1;
                review_count[k]++;
              }
          }
        }
/*     진행중인 알고리즘, 월요일에 마무리 지어야함.
    조인을 하던지, 새로운 객체를 만들어서 사용하던지 해야함.
    안그러면 Movie와 Review 테이블의 정렬이 어려움 */
        var gpa = 0.0;
        var list = '<ul>';
        for(var i=0; i<4; i++){
          gpa = review_count[i]!=0 ? review_total[i]/review_count[i] : 0.0;
          list +='               <li>'
             +'                  <table>'
             +'                     <tr>'
             +'                        <td><a href="javascript:abb1.jquery.movie_detail('+i+')"><img src="'+ctx+'/resources/img/movie/'+movie_list[i].pic_main+'" width="228px" height="333.99px" alt="..."></a></td>'
             +'                     </tr>'
             +'                     <tr>'
             +'                        <td><a href="javascript:abb1.jquery.movie_detail('+i+')">'+ movie_list[i].title +'</a></td>'
             +'                     </tr>'
             +'                     <tr>'
             +'                        <td>예매율 '+(movie_list[i].count/total*100).toFixed(1)+'% | 관람평점 '+ gpa.toFixed(1)+'</td>'
             +'                     </tr>'
             +'                  </table>'
             +'               </li>';
        }
        list += '</ul>';
        $('#movieList').html(list);
        list = '<ul>';
        for(var i=4; i<8; i++){
          gpa = review_count[i]!=0 ? review_total[i]/review_count[i] : 0.0;
          list +='               <li>'
             +'                  <table>'
             +'                     <tr>'
             +'                        <td><a href="javascript:abb1.jquery.movie_detail('+i+')"><img src="'+ctx+'/resources/img/movie/'+movie_list[i].pic_main+'" width="228px" height="333.99px" alt="..."></a></td>'
             +'                     </tr>'
             +'                     <tr>'
             +'                        <td><a href="javascript:abb1.jquery.movie_detail('+i+')">'+ movie_list[i].title +'</a></td>'
             +'                     </tr>'
             +'                     <tr>'
             +'                        <td>예매율 '+(movie_list[i].count/total*100).toFixed(1)+'% | 관람평점 '+ gpa.toFixed(1)+'</td>'
             +'                     </tr>'
             +'                  </table>'
             +'               </li>';
        }
    
       list += '</ul>';
       $('#movieList2').html(list);
       var movieMain=$('#movieMain');
       movieMain.find('div:nth-child(1)').addClass('abb1_movie_btns');
       movieMain.find('ul').addClass('abb1_ul_inline');
       movieMain.find('li').addClass('abb1_li_inline');
       movieMain.find('div:nth-child(1) li:nth-child(1)>a').addClass('abb1_movie_now_btn');
       movieMain.find('div:nth-child(1) li:nth-child(2)>a').addClass('abb1_movie_future_btn');
       $('#order').addClass('abb1_width_right');
       $('#order').find('li:nth-child(1) a').addClass('abb1_padding_right_5');
       
       $('#movieList').addClass('abb1_movie_list_div');
       $('#movieList2').addClass('abb1_movie_list_div');
       movieMain.find('table').addClass('abb1_movie_table');
       movieMain.find('table tr:nth-child(1)>td').addClass('abb1_nowMovie_border');
       movieMain.find('table tr:nth-child(2)>td').addClass('abb1_movie_table_title_td');
       movieMain.find('table tr:nth-child(3)>td').addClass('abb1_movie_table_rate_td');
}
/*==== function in movie detail ====
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-15
@UPDATE DATE : 2017-05-15

    movie_detail_css(view)
    make_review(index, review_list)
    movie_statistic(m)
    movie_detail_view(ctx, rank, rate, m)
    calc_grade(m)
=================================*/
function movie_detail_css(view){
    	$('#container').html(view);
	var movieDetail = $('#movieDetail');
	var movieTrailer=$('#movieTrailer');
	movieTrailer.addClass('abb1_movie_detail_trailer');
	movieDetail.find('div:nth-child(1)>img').addClass('abb1_movie_trailer');
	var movieInfo=$('#movieInfo');
	movieInfo.addClass('abb1_movie_detail_container');
	movieInfo.find('div:nth-child(1)').addClass('abb1_movie_detail_info');
	movieInfo.find('div:nth-child(1)').find('ul').addClass('abb1_ul_inline');
	movieInfo.find('div:nth-child(1)').find('li').addClass('abb1_li_inline');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(1)').find('tr:nth-child(2) td').addClass('abb1_height_10');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(1)').find('tr:nth-child(3) td').addClass('abb1_movie_btn_reservation_td');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(1)').find('a').addClass('abb1_movie_btn_reservation');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('td:nth-child(2)').addClass('abb1_height_50');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('span:nth-child(1)').addClass('abb1_movie_rate');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('span:nth-child(2)').addClass('abb1_movie_detail_font_color');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('td:nth-child(6)').addClass('abb1_height_50');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('td:nth-child(8)').addClass('abb1_height_50');   
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('td:nth-child(10)').addClass('abb1_height_50');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('td:nth-child(7)').addClass('abb1_movie_detail_font_color');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('td:nth-child(9)').addClass('abb1_movie_detail_font_color');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('td:nth-child(11)').addClass('abb1_movie_detail_font_color');
	movieInfo.find('div:nth-child(2)').addClass('abb1_movie_detail_synopsys');
	movieInfo.find('div:nth-child(2)').find('tr:nth-child(2)>td').addClass('abb1_movie_detail_synopsys_content');
	movieInfo.find('div:nth-child(3)').addClass('abb1_movie_donutchart');   
	var movieActor = movieDetail.find('div:nth-child(3)');
	movieActor.addClass('abb1_bgcolor_beige');
	movieActor.find('div:nth-child(1)').addClass('abb1_width_left');
	movieActor.find('div:nth-child(1)').find('h3').addClass('abb1_movie_actor_title');
	movieActor.find('div:nth-child(2)').addClass('abb1_movie_detail_actor_list');
	movieActor.find('div:nth-child(2)').find('ul').addClass('abb1_ul_inline');
	movieActor.find('div:nth-child(2)').find('li').addClass('abb1_li_inline');
	var movieReview =movieDetail.find('div:nth-child(4)');
	movieReview.addClass('abb1_movie_review_div');
	movieReview.find('div:nth-child(1)').addClass('abb1_movie_review_box');
	movieReview.find('div:nth-child(1)').find('table').addClass('abb1_movie_review_table');
	movieReview.find('div:nth-child(1)').find('table tr:nth-child(1)>td:nth-child(2)').addClass('abb1_text_right');
	movieReview.find('div:nth-child(1)').find('table tr:nth-child(2)').addClass('abb1_nowMovie_border');
	movieReview.find('div:nth-child(1)').find('table tr:nth-child(2)>td:nth-child(1)').addClass('abb1_movie_review_gpa');
	movieReview.find('div:nth-child(1)').find('table tr:nth-child(2)>td:nth-child(1)').find('span:nth-child(1)').addClass('abb1_font_size_20');
	movieReview.find('div:nth-child(1)').find('table div').addClass('abb1_margin_top_10');
	movieReview.find('div:nth-child(1)').find('table div>span').addClass('star-input');
	movieReview.find('div:nth-child(1)').find('table div>span>span').addClass('input');
	movieReview.find('div:nth-child(1)').find('table tr:nth-child(2)>td:nth-child(2)').addClass('abb1_nowMovie_border');
	movieReview.find('div:nth-child(1)').find('table tr:nth-child(2)>td:nth-child(3)').addClass('abb1_movie_review_btn');
	movieReview.find('div:nth-child(1)').find('table tr:nth-child(2)>td:nth-child(3) span').addClass('abb1_movie_review_btn_text');
	movieReview.find('div:nth-child(2)').addClass('abb1_margin_top_20');
	movieReview.find('div:nth-child(2) table').addClass('abb1_movie_review');
	movieReview.find('div:nth-child(2) table tr:nth-child(1)>td').addClass('abb1_text_left');
	movieReview.find('div:nth-child(2) table tr:nth-child(2)>td:nth-child(2)').addClass('abb1_text_right');
	movieReview.find('div:nth-child(2) table tr:nth-child(3)>td').addClass('abb1_text_right');  
}
function make_review(index, review_list){
        var view = '';
        for(var i=0; i<index; i++){
	    view += '<table id="review">'
		+'         <tr>'
		+'            <td colspan="3"><strong>평점: '+review_list[i].gpa+'</strong></td>'
		+'         </tr>'
		+'         <tr>'
		+'            <td colspan="2">'+review_list[i].content+'.</td>'
		+'            <td class="abb1_text_right">'+review_list[i].customer_id+'</td>'
		+'         </tr>'
		+'         <tr>'
		+'            <td colspan="3">'+review_list[i].reg_date+'</td>'
		+'         </tr>'
		+'   </table>';
	}
        return view;
}
function movie_statistic(m){
    var google_total = m.male_p*1 + m.female_p*1;
	var male = m.male_p/google_total * 100;
	var female = m.female_p/google_total * 100;
	abb1.api.google(male, female);
}
function movie_detail_view(ctx, rank, rate, m){
    var grade = calc_grade(m);
    var view = '<div id="movieDetail">'
	+'      <div id="movieTrailer">'
	+'		<iframe width="784px" height="453px" src="'+m.trailer_url+'?autoplay=1"></iframe>'
	+'      </div>'
	+'      <div id="movieInfo">'
	+'         <div>'
	+'         <ul>'
	+'         <li>'
	+'            <table>'
	+'               <tr>'
	+'                  <td>'
	+'                     <img src="'+ctx+'/resources/img/movie/'+m.pic_main+'" width="228px" height="333.99px" alt="...">'
	+'                  </td>'
	+'               </tr>'
	+'               <tr>'
	+'                  <td></td>'
	+'               </tr>'
	+'               <tr>'
	+'                  <td>'
	+'                     <a href="#">예매하기</a>'
	+'                  </td>'
	+'               </tr>'
	+'            </table>'
	+'         </li>'
	+'         <li>'
	+'            <table>'
	+'               <tr>'
	+'                  <td colspan="4"><h3><strong>'+m.title+'</strong></h3></td>'
	+'               </tr>'
	+'               <tr>'
	+'                  <td><strong>예매율</strong></td>'
	+'                  <td><span>'+rank+'</span> <span>위, '+rate+'% </span></td>'
	+'                  <td><strong>관람평점</strong></td>'
	+'                  <td>9.0</td>'
	+'               </tr>'
	+'               <tr>'
	+'                  <td><strong>등급</strong></td>'
	+'                  <td colspan="3">'+grade+'관람가</td>'
	+'               </tr>'
	+'               <tr>'
	+'                  <td><strong>개봉일</strong></td>'
	+'                  <td colspan="3">'+m.released+'</td>'
	+'               </tr>'
	+'               <tr>'
	+'                  <td><strong>기본정보</strong></td>'
	+'                  <td colspan="3">'+m.info+'</td>'
	+'               </tr>'
	+'            </table>'
	+'         </li>'
	+'      </ul>'
	+'      </div>'
	+'      <div>'
	+'         <table>'
	+'            <tr>'
	+'               <td colspan="4"><h3><strong>시놉시스</strong></h3></td>'
	+'            </tr>'
	+'            <tr>'
	+'               <td colspan="4">'+m.synopsys+'</td>'
	+'            </tr>'
	+'         </table>'
	+'      </div>'
	+'      <div id="donutchart"></div>'
	+'      </div>'
	+'      <div>'
	+'         <div>'
	+'            <h3>감독 및 출연</h3>'
	+'         </div>'
	+'         <div>'
	+'            <ul>'
	+'               <li><img src="'+ctx+'/resources/img/movie/'+m.pic_director+'" alt="" />'
	+'                  <br><br>'+m.name_director+'<br>감독'
	+'               </li>'
	+'               <li><img src="'+ctx+'/resources/img/movie/'+m.pic_actor+'" alt="" />'
	+'                  <br><br>'+m.name_actor+'<br>배우'
	+'               </li>'
	+'            </ul>'
	+'         </div>'
	+'      </div>'
	+'      <div>'
	+'         <div>'
	+'            <table>'
	+'               <tr>'
	+'                  <td colspan="4"><h3>평점 및 영화 리뷰</h3></td>'
	+'                  <td colspan="2">(한글 150자/영문300자)</td>'
	+'               </tr>'
	+'               <tr>'
	+'                  <td>'
	+'                     <span><strong>평점</strong></span>'
	+'                     <div>'
	+'                        <span>'
	+'                             <span>'
	+'                               <input type="radio" name="star-input" id="p1" value="1"><label for="p1">1</label>'
	+'                               <input type="radio" name="star-input" id="p2" value="2"><label for="p2">2</label>'
	+'                               <input type="radio" name="star-input" id="p3" value="3"><label for="p3">3</label>'
	+'                               <input type="radio" name="star-input" id="p4" value="4"><label for="p4">4</label>'
	+'                               <input type="radio" name="star-input" id="p5" value="5"><label for="p5">5</label>'
	+'                               <input type="radio" name="star-input" id="p6" value="6"><label for="p6">6</label>'
	+'                               <input type="radio" name="star-input" id="p7" value="7"><label for="p7">7</label>'
	+'                               <input type="radio" name="star-input" id="p8" value="8"><label for="p8">8</label>'
	+'                               <input type="radio" name="star-input" id="p9" value="9"><label for="p9">9</label>'
	+'                               <input type="radio" name="star-input" id="p10" value="10"><label for="p10">10</label>'
	+'                           </span><br>'
	+'                             <output for="star-input"><b>0</b><strong>점</strong></output>'
	+'                        </span>'
	+'                     </div>'
	+'                  </td>'
	+'                  <td colspan="4">'
	+'                     <textarea name="" id="" cols="100" rows="5" placeholder="영화 리뷰는 로그인 후에 작성하실 수 있습니다."></textarea>'
	+'                  </td>'
	+'                  <td><a href=""><span>입력</span></a></td>'
	+'               </tr>'
	+'            </table>'
	+'         </div>'
	+'    <div>';
    return view;
}
function calc_grade(m){
    var grade = '';
    if(m.grade=='all'){
 		grade = '전체';
    } else {
 		grade = m.grade + '세이상';
    }
    return grade;
}

/*==== function in board main ====
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-15
@UPDATE DATE : 2017-05-15

	board_main_ddl(count)
	board_main_table()
	board_main_notice(notice_list)
	board_main_article(article_list, pageNo)
	board_main_css(view, pageNo)
=================================*/
function board_main_ddl(count){
    var view = '<div id="board_main">'
	  +	   '<div><strong>고객센터</strong></div>'
	  +	   '<div>'
	  +	      '<div id="board_main_ddl">'
	  +	         '<select name="city">'
	  +	            '<option value="" selected>지역선택</option>'
	  +	            '<option value="seoul">서울</option>'
	  +	            '<option value="gyunggi">경기</option>'
	  +	            '<option value="daejeon">대전</option>'
	  +	         '</select>'
	  +	         '<select name="theater">'
	  +	            '<option value="" selected>영화관선택</option>'
	  +	            '<option value="gasan">가산디지털</option>'
	  +	            '<option value="gayang">가양</option>'
	  +	            '<option value="gangdong">강동</option>'
	  +	         '</select>'
	  +	         '<select name="search">'
	  +	            '<option value="title" selected>제목</option>'
	  +	            '<option value="content">내용</option>'
	  +	            '<option value="both">제목+내용</option>'
	  +	         '</select>' 
	  +	         '<input id="board_main_find_keyword" type="text" placeholder="내용 입력"/>'
	  +	         '<input id="board_main_find_search" type="button" value="검색"/>'
	  +	         '<span>총 <strong>'+count+'</strong>개의 게시물이 있습니다.</span>'
	  +	      '</div>';
    return view;
}
function board_main_table(){
    var view = '<div id="board_main_table"><table>'
			  +		      '<colgroup>'
			  +		      	'<col />'
			  +		      	'<col />'
			  +		      	'<col />'
			  +		      	'<col />'
			  +		      	'<col />'
			  +		      '</colgroup>'
			  +	         '<thead>'
			  +	         '<tr>'
			  +	            '<th>번호</th>'
			  +	            '<th>영화관</th>'
			  +	            '<th>제목</th>'
			  +	            '<th>등록일</th>'
			  +	            '<th>조회수</th>'
			  +	         '</tr>'
			  +	         '</thead>'
			  +	         '<tbody>';
    return view;
}
function board_main_notice(notice_list){
    var notice_row = '';
    for(var i=0; i<notice_list.length; i++){
		  var notice = notice_list[i];
		  notice_row += '<tr class="notice">'
			  +	            '<td>-</td>'
			  +	            '<td><b>전체</b></td>'
			  +	            '<td><a href="javascript:abb1.jquery.board_notice_detail('+notice_list[i].seq+')">[공지]'+notice_list[i].title+'</a></td>'
			  +	            '<td>'+notice_list[i].reg_date+'</td>'
			  +	            '<td>'+notice_list[i].hits+'</td>'
			  +	        ' </tr>';
	      }
    return notice_row;
}
function board_main_article(article_list, article_count, pageNo){
    	var article = '';
	for(var i=(pageNo-1)*article_count; i<pageNo*article_count; i++){
	  var multiplex = '';
	  if(article_list[i].multiplex_seq==1){
	      multiplex = '가산디지털';
	  }
	  article += '<tr>'
		  +	   '<td>'+article_list[i].seq+'</td>'
		  +	   '<td>'+multiplex+'</td>'
		  +	   '<td><a href="javascript:abb1.jquery.board_detail('+article_list[i].seq+')">'+article_list[i].title+'</a></td>'
		  +	   '<td>'+article_list[i].reg_date+'</td>'
		  +	   '<td>'+article_list[i].hits+'</td>'
		  +	'</tr>';
	  if(article_list[i].seq==1){
	      break;
	  }
	}
	article +='</tbody></table></div>';
	return article;
}
function board_main_css(view, pageNo){
        $('#container').html(view);
        var board_main = $('#board_main');
	board_main.find('div:first-child').addClass('abb1_bbs_table_text');
	board_main.find('div:nth-child(2)').addClass('abb1_bbs_table abb1_width_center_w900');
	$('#board_main_ddl').find('select').addClass('abb1_select_box');
	$('#board_main_find_keyword').addClass('abb1_searchtext');
	$('#board_main_find_search').addClass('abb1_submitbtn');
	var board_main_table = $('#board_main_table');
	board_main_table.addClass('abb1_bbs_main_table');
	board_main_table.find('table').css('text-align','center');
	board_main_table.find('col:nth-child(1)').css('width','11%');
	board_main_table.find('col:nth-child(2)').css('width','14%');
	board_main_table.find('col:nth-child(3)').css('width','60%');
	board_main_table.find('col:nth-child(4)').css('width','30%');
	board_main_table.find('col:nth-child(5)').css('width','30%');
	$('#bbs_pagination').find('table').addClass('abb1_bbs_pagination_table');
	var bbs_pagination_number = $('#bbs_pagination_number')
	bbs_pagination_number.css('width','150px');
	var on_number = pageNo%5==0 ? 5 : pageNo%5;
	bbs_pagination_number.find('a:nth-child('+on_number+')').addClass('on');
	var board_main_btn = $('#board_main_btn');
	board_main_btn.css('text-align','right');
	board_main_btn.find('input').addClass('abb1_bbs_write_btn');
}




/*==== function in board notice detail ====
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-15
@UPDATE DATE : 2017-05-15

	attach_file_check(ctx, notice, attach)
	board_notice_detail_view(ctx, notice, attach)
	board_notice_detail_css(view)
=================================*/
function attach_file_check(ctx, notice){
    var attach = '';
    if(notice.file!='default'){
	attach = '<img src="'+ctx+'/resources/img/board/'+notice.file+'" alt="" />';
    }
    return attach;
}
function board_notice_detail_view(ctx, notice, attach){
    var view = '<div id="board_notice_detail">'
	+'      <div><strong>고객센터</strong></div>'
	+'      <div>'
	+'	      <table id="board_notice_detail_table">'
	+'	         <tr>'
	+'	            <td>'
	+'	               <h3>[공지]'+notice.title+'</h3>'
	+'	               <ul>'
	+'	                  <li>'
	+'	                     <strong>영화관 : </strong><span> 전체</span>'
	+'	                  </li>'
	+'	                  <li>'
	+'	                     <strong>등록일 : </strong><span> '+notice.reg_date+'</span>'
	+'	                  </li>'
	+'	                  <li>'
	+'	                     <strong>조회수 : </strong><span> '+notice.hits+'</span>'
	+'	                  </li>'
	+'	               </ul>'
	+'	            </td>'
	+'	         </tr>'
	+'	         <tr>'
	+'	            <td colspan="2">'
	+			attach
	+'	            <div id="board_notice_content">'+notice.content+'</div>'
	+'	            </td>'
	+'	         </tr>'
	+'	      </table>'
	+'     </div>'
	+'   <div id="board_notice_detail_btn">'
	+'         <a href="'+ctx+'/board/main"><input type="button" value="목록"/></a>'
	+'      </div>'
	+'   </div>';
    board_notice_detail_css(view);
    return view;
}
function board_notice_detail_css(view){
    $('#container').html(view);
    var ctx = $.context();
    var board_notice_detail = $('#board_notice_detail');
    board_notice_detail.addClass('abb1_bbs_write_container');
    board_notice_detail.find('div:first-child').addClass('abb1_bbs_table_text');
    board_notice_detail.find('div:nth-child(2)').css('margin','0 auto').css('text-align','center');
    var board_notice_detail_table = $('#board_notice_detail_table');
    board_notice_detail_table.addClass('abb1_bbs_notice_table');
    board_notice_detail_table.find('ul').addClass('abb1_view_info');
    var board_notice_detail_btn = $('#board_notice_detail_btn')
    board_notice_detail_btn.addClass('abb1_bbs_write_btns');
    board_notice_detail_btn.find('input').addClass('abb1_bbs_write_confirm');
    $('#board_notice_content').css('padding','0 50px');
}


/*==== function in board detail ====
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-16
@UPDATE DATE : 2017-05-16
=================================*/
function board_detail_comment_init(comment_list){
    if(comment_list.length==0){
	    var comment = {
		    customer_id : '',
		    reg_date : '',
		    content : '댓글이 존재하지 않습니다. 첫 번째 댓글을 달아보세요!'
	    }
	    comment_list.push(comment);
	}  
}
function board_detail_view(article){
    var view =  '<div id="bbs_detail">'
	    +'      <div><strong>문의사항</strong></div>'
	    +'      <div>'
	    +'      <table id="bbs_detail_table">'
	    +'         <tr>'
	    +'            <td>'
	    +'               <h3>'+article.title+'</h3>'
	    +'               <ul>'
	    +'                  <li>'
	    +'                     <strong>카테고리 : </strong><span> '+article.article_type+'</span>'
	    +'                  </li>'
	    +'                  <li>'
	    +'                     <strong>등록일 : </strong><span> '+article.reg_date+'</span>'
	    +'                  </li>'
	    +'                  <li>'
	    +'                     <strong>조회수 : </strong><span> '+article.hits+'</span>'
	    +'                  </li>'
	    +'               </ul>'
	    +'            </td>'
	    +'         </tr>'
	    +'         <tr>'
	    +'            <td colspan="2">'
	    +'            <div id="bbs_detail_content">'
	    +'            	<span>'+article.content+'</span>'		        	    +'            </div>'
	    +'            </td>'
	    +'         </tr>';
    return view;
}
function board_detail_comment_view(comment_list){
    var view = '         <tr>'
	    +'            <td>'
	    +'            <div>'
	    +'            <ul id="bbs_detail_review_ul">';
    for(var i=0; i<comment_list.length; i++){
	var comment = comment_list[i];
	view +=  '<li>'
	    +'      <div>'
	    +'      <strong id="bbs_review_result_name'+(i+1)+'">'+comment.customer_id+'</strong> <span id="bbs_review_result_reg_date'+(i+1)+'">'+comment.reg_date+'</span>'
	    +'      <p id="bbs_review_result_txt'+(i+1)+'">'+comment.content+'</p>'
	    +'      </div>'
	    +'   </li>';
    }
    view += '            </ul>'
	    +'            </div>'
	    +'            </td>'
	    +'         </tr>'
	    +'         <tr>'
	    +'            <td>';
    return view;
}
function board_detail_css(view){
    $('#container').html(view);
	var bbs_detail = $('#bbs_detail');
	bbs_detail.addClass('abb1_bbs_write_container');
	bbs_detail.find('div:first-child').addClass('abb1_bbs_table_text');
	bbs_detail.find('div:nth-child(2)').addClass('abb1_bbs_pagination_table');
	var bbs_detail_table = $('#bbs_detail_table');
	bbs_detail_table.addClass('abb1_bbs_notice_table');
	bbs_detail_table.find('ul:first-child').addClass('abb1_view_info');
	$('#bbs_detail_content').addClass('abb1_view_content');
	var bbs_detail_review_ul = $('#bbs_detail_review_ul');
	bbs_detail_review_ul.find('div').addClass('abb1_review_result').css('padding','10px');
	for(var i=1; i<6; i++){
		$('#bbs_review_result_name'+i).addClass('abb1_bbs_review_result_name');
		$('#bbs_review_result_txt'+i).addClass('abb1_bbs_review_result_txt');
		$('#bbs_review_result_reg_date'+i).addClass('abb1_bbs_review_result_reg_date');
	}
	var bbs_detail_reply = $('#bbs_detail_reply');
	bbs_detail_reply.find('col:nth-child(1)').css('width','90%');
	bbs_detail_reply.find('col:nth-child(2)').css('width','10%');
}




/*==== function in board write ====
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-16
@UPDATE DATE : 2017-05-16
=================================*/
function board_write_view(){
    var view = '<div id="board_write">'
	    +'      <div><strong>문의내용</strong></div>'
	    +'      <div>      '
	    +'      	<span><span>*</span> 표시항목은 필수 입력 항목입니다.</span>'
	    +'      </div>'
	    +'      <table id="board_write_table">'
	    +'	      <colgroup>'
	    +'	      	<col />'
	    +'	      	<col />'
	    +'	      </colgroup>'
	    +'         <tr>'
	    +'            <td>문의종류 <span>*</span></td>'
	    +'            <td id="board_write_radio">'
	    +'               <input type="radio" name="kind" value="1" checked="checked"/><span>문의</span>'
	    +'               <input type="radio" name="kind" value="2" checked="checked"/><span>칭찬</span>'
	    +'               <input type="radio" name="kind" value="3" checked="checked"/><span>불만</span>'
	    +'               <input type="radio" name="kind" value="4" checked="checked"/><span>건의</span>'
	    +'            </td>'
	    +'         </tr>'
	    +'         <tr>'
	    +'            <td>분류 <span>*</span></td>'
	    +'            <td>'
	    +'               <select id="board_write_category" name="category">'
	    +'                  <option value="" selected>분류 선택</option>'
	    +'                  <option value="theater">영화관 문의</option>'
	    +'                  <option value="movie">영화 문의</option>'
	    +'                  <option value="customer">회원 문의</option>'
	    +'                  <option value="paying">결제 문의</option>'
	    +'                  <option value="homepage">홈페이지 문의</option>'
	    +'               </select> '
	    +'            </td>'
	    +'         </tr>'
	    +'         <tr>'
	    +'            <td>영화관 <span>*</span></td>'
	    +'            <td><input id="board_write_select_multiplex" type="button" value="영화관 선택"/></td>'
	    +'         </tr>'
	    +'         <tr>'
	    +'            <td>제목 <span>*</span></td>'
	    +'            <td>'
	    +'               <input id="board_write_title" type="text" name="title" maxlength="50"/>'
	    +'            </td>'
	    +'         </tr>'
	    +'         <tr>'
	    +'            <td>내용 <span>*</span></td>'
	    +'            <td>'
	    +'               <textarea name="contents" id="board_write_content" cols="30" rows="10"></textarea>'
	    +'            </td>'
	    +'         </tr>'
	    +'         <tr>'
	    +'            <td>첨부파일</td>'
	    +'            <td>'
	    +'               <input type="file" id="file" name="file" value="파일 찾기"/>'
	    +'               <span>jpg, jpeg, png, bmp, pdf (2MB × 1개)</span>'
	    +'            </td>'
	    +'         </tr>'
	    +'      </table>'
	    +'      <div id="board_write_btns">'
	    +'         <a href="#"><input id="board_write_cancel" type="button" value="취소"/></a>'
	    +'         <a href="#"><input id="board_wrtie_confirm" type="button" value="확인"/></a>'
	    +'      </div>'
	    +'   </div>';
    return view;
}
function board_write_css(view){
    	$('#container').html(view);
	var board_write = $('#board_write');
	board_write.addClass('abb1_bbs_write_container');
	board_write.find('div:first-child').addClass('abb1_bbs_write_text');
	board_write.find('div:nth-child(2)').find('span').addClass('abb1_bbs_write_font');
	var board_write_table = $('#board_write_table');
	board_write_table.addClass('abb1_bbs_write_table');
	board_write_table.find('col:nth-child(1)').css('width','15%');
	board_write_table.find('col:nth-child(2)').css('width','80%');
	board_write_table.find('tr').find('td:first-child').find('span').addClass('star');
	$('#board_write_radio').addClass('abb1_bbs_write_radio');
	$('#board_write_category').addClass('abb1_write_ddl');
	$('#board_write_select_multiplex').addClass('abb1_board_write_select_multiplex');
	$('#board_write_title').addClass('abb1_write_title');
	$('#board_write_content').addClass('abb1_board_write_content');
	$('#board_write_btns').addClass('abb1_bbs_write_btns');
	$('#board_write_cancel').addClass('abb1_bbs_write_cancel');
	$('#board_wrtie_confirm').addClass('abb1_bbs_write_confirm');
}


/*==== function in multiplex main ====
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-16
@UPDATE DATE : 2017-05-16
=================================*/
function multiplex_main_info(o){
    	var view = '<div>'
	+'	<img src="'+o.ctx+'/resources/img/multiplex/theater.jpg" alt="" />'
	+'	</div>'
	+'	<div id="multiplex_info">'
	+'		<h2><strong>'+o.multiplex_name+'</strong></h2>'
	+'		<table id="multiplex_info_table">'
	+'			<tr>'
	+'				<td>'+o.multiplex_addr+' </td>'
	+'				<td><strong>총 상영관수</strong></td>'
	+'				<td>'+o.count+'개관</td>'
	+'				<td><strong>총 좌석수</strong></td>'
	+'				<td>'+o.seat_total+'석</td>'
	+'			</tr>'
	+'		</table>'
	+'	</div>'
	+'	<div id="multiplex_info_btn">'
	+'		<ul>'
	+'		<li><a href="javascript:abb1.jquery.multiplex_main('+o.seq+')"><strong>상영시간표</strong></a></li>'
	+'		<li><a href="javascript:abb1.jquery.multiplex_map('+o.seq+')"><strong>위치정보</strong></a></li>'
	+'		</ul>'
	+'	</div>';
	return view;
}
function multiplex_main_css(view){
    	$('#container').html(view);
	$('#container').addClass('abb1_bgcolor_beige');
	$('#multiplex_info').addClass('abb1_margin_left_100 abb1_padding_top_20');
	var multiplex_info_table = $('#multiplex_info_table');
	multiplex_info_table.find('td:nth-child(2)').addClass('abb1_multiplex_border_right');
	multiplex_info_table.find('td:nth-child(4)').addClass('abb1_multiplex_border_right');
	var multiplex_info_btn = $('#multiplex_info_btn');
	multiplex_info_btn.addClass('abb1_margin_left_100');
	multiplex_info_btn.find('ul').addClass('abb1_ul_inline');
	multiplex_info_btn.find('li:first-child').addClass('abb1_li_inline abb1_multiplex_select_btn');
	multiplex_info_btn.find('li:first-child').find('a').addClass('abb1_multiplex_select_a');
	multiplex_info_btn.find('li:nth-child(2)').addClass('abb1_li_inline abb1_multiplex_btn');
	multiplex_info_btn.find('li:nth-child(2)').find('a').addClass('abb1_multiplex_a');
	var multiplex_calendar = $('#multiplex_calendar');
	multiplex_calendar.addClass('abb1_multiplex_calander');
	multiplex_calendar.find('span').addClass('abb1_font_size_22');
	var movie_time_line = $('#movie_time_line');
	movie_time_line.addClass('abb1_movie_time_line');
	movie_time_line.find('div:first-child').find('span').addClass('abb1_multiplex_movie_title');
	movie_time_line.find('ul').addClass('abb1_ul_inline');
	movie_time_line.find('li').addClass('abb1_li_inline abb1_padding_right_0');
	movie_time_line.find('li').find('strong').addClass('abb1_font_size_22'); 
}

/*==== function in multiplex map ====
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-17
@UPDATE DATE : 2017-05-17
=================================*/
function multiplex_map_css(view){
    $('#container').html(view);
	$('#container').addClass('abb1_bgcolor_beige');
	$('#multiplex_map_title').addClass('abb1_multiplex_map_title');
	var multiplex_info_btn = $('#multiplex_info_btn');
	multiplex_info_btn.addClass('abb1_margin_left_100');
	multiplex_info_btn.find('ul').addClass('abb1_ul_inline');
	multiplex_info_btn.find('li:first-child').addClass('abb1_li_inline abb1_multiplex_btn');
	multiplex_info_btn.find('li:first-child').find('a').addClass('abb1_multiplex_a');
	multiplex_info_btn.find('li:nth-child(2)').addClass('abb1_li_inline abb1_multiplex_select_btn');
	multiplex_info_btn.find('li:nth-child(2)').find('a').addClass('abb1_multiplex_select_a');
	$('#multiplex_map_api').find('div:first-child').addClass('abb1_multiplex_map');
	$('#map').css('width','900px').css('height','438px');
}
function initMap(axis) {
    var latval = axis.split(', ')[0]*1;
    var lngval = axis.split(', ')[1]*1;
    var pos = {lat: latval, lng: lngval};
    var map = new google.maps.Map(document.getElementById('map'), {
	    center: pos,
	    zoom: 17
    });
    var marker = new google.maps.Marker({
	    position: pos,
	    map: map
    });
}




/*==== function in reservation main ====
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-17
@UPDATE DATE : 2017-05-17
=================================*/
function reservation_main_css(view){
    $('#container').html(view);
	$('#container').addClass('abb1_reservation');
	var reservation_main_form = $('#reservation_main_form');
	reservation_main_form.addClass('abb1_reservation_main_form');
	reservation_main_form.find('table').addClass('abb1_reservation_calendar');
	reservation_main_form.find('span').addClass('abb1_font_size_25');
	var reservation_multiplex = $('#reservation_multiplex');
	reservation_multiplex.addClass('abb1_reservation_multiplex');
	reservation_multiplex.find('col:nth-child(1)').addClass('abb1_width_60');
	reservation_multiplex.find('col:nth-child(2)').addClass('abb1_width_40');
	reservation_multiplex.find('tr:first-child').addClass('abb1_border_top_2');
	var reservation_tab_scroll = $('#reservation_tab_scroll');
	reservation_tab_scroll.addClass('abb1_reservation_tab_scroll');
	reservation_tab_scroll.find('ul').addClass('abb1_reservation_theater_zone');
	reservation_tab_scroll.find('span').addClass('abb1_reservation_area_zone');
	$('#reservation_tab_cont').addClass('abb1_reservation_tab_cont on');
	var reservation_area_list = $('#reservation_area_list');
	reservation_area_list.addClass('abb1_reservation_area_cont on');
	reservation_area_list.find('ul').addClass('abb1_reservation_area_list');
	 reservation_area_list.find('a:nth-child(1)').addClass('on');
	var reservation_area = $('#reservation_area');
	reservation_area.addClass('abb1_reservation_area');
	reservation_area.find('a').addClass('abb1_reservation_tab_cont on');
	var reservation_movielist = $('#reservation_movielist');
	reservation_movielist.addClass('abb1_reservation_movielist');
	reservation_movielist.find('li:nth-child(1)').find('a').addClass('on');
	var reservation_confirm = $('#reservation_confirm');
	reservation_confirm.addClass('abb1_reservation_confirm');
	reservation_confirm.find('div').addClass('abb1_reservation_time');
	reservation_confirm.find('h3').addClass('sub_tit02');
	var reservation_time = $('#reservation_time');
	reservation_time.addClass('abb1_reservation_time_a');
	reservation_time.find('h4:first-child').addClass('abb1_reservation_timetit');
	var movie_time_line = $('#movie_time_line');
	movie_time_line.addClass('abb1_padding_15');
	movie_time_line.find('div').addClass('abb1_padding_bottom_20');
	$('#movie_title').addClass('abb1_multiplex_movie_title');
	var movie_timeline_ul = $('#movie_timeline_ul');
	movie_timeline_ul.addClass('abb1_ul_inline');
	movie_timeline_ul.find('li').addClass('abb1_li_inline abb1_padding_right_0');
	movie_timeline_ul.find('strong').addClass('abb1_font_size_22');
}





/*==== function in multiplex map ====
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-17
@UPDATE DATE : 2017-05-17
=================================*/
