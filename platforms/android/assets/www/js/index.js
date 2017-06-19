/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        app.member.onCreate();
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.member=(function(){
    var onCreate=function(){
      setContentView();
    };
    var setContentView=function(){
        $.ajax({
            url: "http://www.yeomhyeseon.com/get/movie/list",
            method: "POST",
            data: JSON.stringify({}),
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
            var rankLiByTicket = '';
            var rankLiByGpa = '';
            var total = 0;
            var movie_arr = data.movie_list;
            $.each(data.movie_list, function(i, movie) {
                total += movie.count * 1;
            });
            for (var i = 0; i < 8; i++) {
                var movie = movieSort(movie_arr)[i];
                var count = movie.count;
                var obj = {
                    i: i,
                    movie: movie,
                    count: count,
                    total: total
                };
                rankLiByTicket += indexMovieRank(obj);
            }
            var statSumArr = new Array(movie_arr.length);
            var statCountArr = new Array(movie_arr.length);
            for (var i = 0; i < movie_arr.length; i++) {
                statSumArr[i] = 0;
                statCountArr[i] = 0;
            }
            var movSeqArr = [];
            var movTitleArr = [];
            var movGradeArr = [];
            $.each(data.statistic, function(i, stat) {
                var movTitle = '',
                    movGrade = '';
                for (var j = 0; j < movie_arr.length; j++) {
                    if (stat.revMovieSeq == movie_arr[j].seq) {
                        statSumArr[j] += stat.revGpa * 1;
                        statCountArr[j]++;
                        movSeqArr[j] = stat.revMovieSeq;
                        movTitleArr[j] = stat.movTitle;
                        movGradeArr[j] = stat.movGrade;
                    }
                }
            });
            var statJsonArr = [];
            $.each(statSumArr, function(i, stat) {
                var statAvg = (statCountArr[i] != 0) ? statSumArr[i] / statCountArr[i] : 0;
                var json = {
                    avg: statAvg.toFixed(2),
                    title: movTitleArr[i],
                    grade: movGradeArr[i],
                    seq: movSeqArr[i]
                };
                statJsonArr.push(json);
            });
            $('#rank_ul').html(rankLiByTicket);

            /*findYoutube(data);
            $('#slidePoster').html(indexSlideView());
            indexCss();
            var add = 0;
            indexSlideClick(add, movie_arr);
            var reverse_arr = reverseArr(movie_arr, 8);
            for (var i = 0; i < 4; i++) {
                $('#slide' + i).html('<img src="' + $.image() + '/movie/' + reverse_arr[i + add].pic_main + '" alt="" width="188px" height="274px">');
            }
            indexSlideCss();
            $('.goMovie').on('click', function() {
                necessary();
                var id = $(this).attr('id');
                var num = id.split('movie')[1];
                movieDetail(num);
                indexTilesClickEvent();
            });
            $('.goMovieDetail').on('click', function() {
                necessary();
                var rarr = reverseArr(data.movie_list, 8);
                var i = $(this).attr('id').split('slide')[1];
                movieDetail(rarr[(i * 1 + add * 1)].seq);
                indexTilesClickEvent();
            });
            $('#orderbyticket').on('click', function() {
                $('#rank_ul').html(rankLiByTicket);
                indexCss();
            });
            $('#orderbyavg').on('click', function() {
                $('#rank_ul').html(rankLiByGpa);
                indexCss();
            });*/
        },
        error: function(xhr, status, msg) {}
    });
    };
    return{
        onCreate: onCreate
    }
})();

var login=function(){
    $('#login-btn').on('click',function(e){
        e.preventDefault();
        var inputId=$('#id').val();
        var inputPass=$('#pass').val();
        var checkval=false;
        console.log(inputId+', '+inputPass);
        $.ajax({
           /*url: 'json/package.json',
            asynch: false,
            tyle: 'POST',
            data:{
               id: inputId,
                password: inputPass
            },
            dataType: 'json',
            success: function(data){
               $.each(data, function(i,o){
                  if(o.id===inputId&&o.password===inputPass) {
                      checkval=true;
                      return false;

                  }else{
                      checkval=false;
                  }
               });
               if(checkval===true){
                   $('body').empty();
                   $('<div></div>').attr('id', 'wrapper').appendTo('body');
                   $('#wrapper').css('width', '100%').css('height', '100%').css('background-color', 'white').append('<div id="container"></div>');
                   $('#wrapper').html('<div>' + o.id + '님 환영합니다.</div>');
               }else{
                   alert('정보가 없습니다.');
                   $('#id').val('');
                   $('#pass').val('');
               }
            }*/
            url: 'http://www.yeomhyeseon.com/login',
            method: 'POST',
            data: JSON.stringify({
                id: inputId,
                pw: inputPass
            }),
            dataType: 'json',
            contentType: 'application/json',
            success: function(data) {
                if (data.exist === '0') {
                    alert('아이디가 존재하지 않습니다.');
                }else if (data.permission === 'customer') {
                    alert(data.customer.id+'님 환영합니다.');
                } else {
                    alert('비밀번호를 다시 확인하세요.');
                }
                $('#loginForm').submit();
            },
            error: function(xhr, status, msg) {
                alert('로그인 실패이유:' + msg)
            }
        });
    });
};
app.bulb=(function(){
    var onCreate=function(){
        setContentView();
    };
    var setContentView =function(){
        var container='<button id="on-btn">Turn on the Light</button>' +
            '<img id="bulb-img" src="http://www.w3schools.com/js/pic_bulboff.gif" alt="">' +
            '<button id="off-btn">Turn off the Light</button>';
        $('#container').css('width','500px').css('margin','0 auto')
            .html(container);
        $('#on-btn').on('click',function(){
           $('#bulb-img').attr('src','http://www.w3schools.com/js/pic_bulbon.gif') ;
        });
        $('#off-btn').on('click',function(){
            $('#bulb-img').attr('src','http://www.w3schools.com/js/pic_bulboff.gif') ;
        });
    }
    return {
        onCreate: onCreate
    }
})();

$(function(){
    app.initialize();
});



