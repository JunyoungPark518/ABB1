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
        var index='<div id="wrapper">' +
            '    <div id="boxoffice" style="padding-top: 0px;">' +
            '      <table style="width: 100%;">' +
            '         <tr>' +
            '            <td>BOX OFFICE' +
            '            <div>' +
            '               <a id="orderbyticket" href="javascript:void(0)">예매순</a>' +
            '            </div>' +
            '            </td>' +
            '         </tr>' +
            '         <tr>' +
            '            <td>' +
            '            <ul id="rank_ul"></ul>' +
            '            </td>' +
            '         </tr>' +
            '         <tr>' +
            '            <td id="reservation"><a class="abb1_white">예매하기</a></td>' +
            '         </tr>' +
            '         <tr>' +
            '            <td id="login" class="login" style="background-color: #000000;color: white;font-weight: bold;font-size: 20px;height: 30px;"><a style="color:white">로그인</a></td>' +
            '         </tr>' +
            '      </table>' +
            '   </div>' +
            '</div>';

        var indexLogin='<div id="wrapper">' +
            '    <div id="boxoffice" style="padding-top: 0px;">' +
            '      <table style="width: 100%;">' +
            '         <tr>' +
            '            <td>BOX OFFICE' +
            '            <div>' +
            '               <a id="orderbyticket" href="javascript:void(0)">예매순</a>' +
            '            </div>' +
            '            </td>' +
            '         </tr>' +
            '         <tr>' +
            '            <td>' +
            '            <ul id="rank_ul"></ul>' +
            '            </td>' +
            '         </tr>' +
            '         <tr>' +
            '            <td id="reservation"><a class="abb1_white">예매하기</a></td>' +
            '         </tr>' +
            '         <tr>' +
            '            <td id="mypage" style="background-color: #000000;color: white;font-weight: bold;font-size: 20px;height: 30px;"><a style="color:white">마이페이지</a></td>' +
            '         </tr>' +
            '         <tr>' +
            '            <td id="logout" style="background-color: #000000;color: white;font-weight: bold;font-size: 20px;height: 30px;"><a style="color:white">로그아웃</a></td>' +
            '         </tr>' +
            '      </table>' +
            '   </div>' +
            '</div>';
        if(localStorage.getItem('login')==='Y'){
            $('#wrapper').html(indexLogin);
        }else{
            $('#wrapper').html(index);
        }
        var boxoffice = $('#boxoffice');
        var botable = boxoffice.find('table');
        botable.addClass('abb1_tbboxoffice');
        botable.find('tr:first-child').find('td:first-child').addClass('abb1_tbboxoffice_firstcol');
        botable.find('ul').addClass('abb1_rank');
        $('#reservation').addClass('abb1_main_reservebtn');
        $('#reservation').find('a').css('color','white');
        var eventBxMain = $('#eventBxMain');
        eventBxMain.find('div:first-child').addClass('abb1_width_100 abb1_text_center');
        eventBxMain.find('div:first-child').find('div:first-child').addClass('abb1_eventBxMain');


        $('#login').on('click',function(){
            customerLogin();
        });

        $('#mypage').on('click',function(){
            customerMypage();
        });
        $('#logout').on('click',function(){
            localStorage.setItem('id','');
            localStorage.setItem('point','');
            localStorage.setItem('login','N');
            onCreate();
        });

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
            },
            error: function(xhr, status, msg) {}
        });
        $('#reservation').on('click',function(){
            showingList();
            //alert($(this).attr('id'));
        });
        $('#logo').on('click',function(){
           onCreate();
        });
    };

    var showingList=function(){
        $('#wrapper').html('<div id="movie_time_line" style="margin: 0px;"></div>');
        $.ajax({
            url: "http://yeomhyeseon.com/get/multiplex/1",
            method: "POST",
            data: JSON.stringify({}),
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
                var info_list = data.info_list;
                var theater_count = data.theater_count;
                var dis_show_list = data.dis_show_list;
                var timetable_list = data.timetable_list;
                $.each(data.info_list, function(i, info) {
                    info_list.push(info);
                });

                var seq=1;
                var seat_total = 0;
                $.each(data.theater_list, function(i, theater) {
                    if (seq == theater.multiplex_seq) {
                        seat_total += theater.total_seat * 1;
                    }
                });

                var multiplex_name = '';
                var multiplex_addr = '';
                for (var i = 0; i < info_list.length; i++) {
                    if (seq == info_list[i].mulSeq) {
                        multiplex_name = info_list[i].mulName;
                        multiplex_addr = info_list[i].mulAddress;
                    }
                }
                var o = {
                    ctx: 'http://yeomhyeseon.com/',
                    multiplex_name: multiplex_name,
                    multiplex_addr: multiplex_addr,
                    count: theater_count,
                    seat_total: seat_total,
                    seq: seq
                };
                $('#movie_time_line').html(multiplexMainTimetableService(data, getTodayValue()));

                multiplexMainCss();

                $('.goMain').on('click', function() {
                    multiplexMain(seq);
                });

                $('.cannot').on('click', function() {
                    alert('상영시간이 지났습니다. 예매가 불가능 합니다.');
                });

                $('.goMD').on('click', function() {
                    var id = $(this).attr('id');
                    movieDetail(id);
                });

                $('.goR').on('click', function() {
                    var id = $(this).attr('id');
                    var shoSeq = id.split('rv')[1];
                    console.log(shoSeq);
                    reservationSeat(shoSeq);
                });
            },
            error: function(xhr, status, msg) {
                alert(msg);
            }
        });
    }

    var reservationSeat = function(shoSeq) {
        $.ajax({
            url: "http://yeomhyeseon.com/get/reservation/",
            method: "POST",
            data: JSON.stringify({}),
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
                var seatCount = 0;
                var seatReserved = [];
                var movSeq = 0;
                var movCount = 0;
                $.each(data.info_list, function(i, info) {
                    if (info.shoSeq == shoSeq) {
                        seatReserved.push(info.resId.split('-')[3]);
                    }
                });
                $.each(data.timetable_list, function(i, time) {
                    if (time.shoSeq == shoSeq) {
                        seatCount = time.theTotalSeat;
                        movSeq = time.movSeq;
                        movCount = time.movCount;
                    }
                });
                seatReserved = seatReserved.sort();
                $('#wrapper').html(reservationSeatView());
                $('#seat_area_table').html(reservationSeatTableView(seatCount));
                showSeatTableService(seatCount, seatReserved);
                makeAisleService(seatCount, [2, 8]);
                reservationSeatCss();

                $('.reserved').on('click', function() {
                    alert('예약된 좌석은 선택할 수 없습니다.');
                });
                var json = {
                    seatCount: seatCount,
                    seatReserved: seatReserved,
                    timetableList: data.timetable_list,
                    shoSeq: shoSeq,
                    movSeq: movSeq,
                    movCount: movCount
                };
                possibleSeatClickEvent(json);

            },
            error: function(xhr, status, msg) {
                alert(msg);
            }
        });
    };

    var possibleSeatClickEvent = function(o) {
        var seatCount = o.seatCount;
        var seatReserved = o.seatReserved;
        var timetable_list = o.timetableList;
        var shoSeq = o.shoSeq;
        $('.can').on('click', function() {
            var id = $(this).attr('id');
            $('#seat_area_table').html(reservationSeatTableView(seatCount));
            makeAisleService(seatCount, [2, 8]);
            disableSeatTableService(seatCount, id);
            $('.disabled').on('click', function() {
                alert('먼저 선택한 좌석을 해제한 후 선택하세요.');
            });
            $('#seat').append(reservationSeatTicketingTableView());
            $('#ticketing_tr2').html(reservationSeatInfoView());
            $.each(timetable_list, function(i, time) {
                if (time.shoSeq == shoSeq) {
                    $('#moviePoster').attr('src', 'http://yeomhyeseon.com/resources/img/movie/' + time.movPicMain);
                    $('#ticketing_movie_title').html(time.movTitle);
                    $('#ticketing_movie_type').html(time.movInfo);
                    var grade = '';
                    if (time.movGrade == 'all') {
                        grade = '전체관람가';
                    } else {
                        grade = time.movGrade + '세이상관람가';
                    }
                    $('#movGrade').html(grade);
                    $('#showdate').html(time.shoShowDate);
                    $('#runningTime').html(time.shoStartTime + '~' + time.shoEndTime);
                    $('#multiplexName').html(time.mulName + ' ' + time.theName);
                    $('#seatNum').html(id);
                    var cost = generateCost(time.shoPrice) + '원';
                    $('#ticketing_cost').html(cost);
                    $('#ticketing_cost_total').html(cost);
                }
            });
            reservationSeatCss();
            $('.selected').on('click', function() {
                reservationSeat(shoSeq);
            });
            $('#doReservation').on('click', function() {
                var customerId = localStorage.getItem('id');
                if (localStorage.getItem('login') === 'N') {
                    alert('로그인 후에 예매가 가능합니다. 로그인 페이지로 이동합니다.');
                    customerLogin();
                } else {
                    var json = {
                        timetable_list: timetable_list,
                        seatId: id,
                        shoSeq: shoSeq
                    };
                    var reg_date = generateReservationKey(json).reg_date;
                    var reservationId = generateReservationKey(json).reservationId;
                    var showingSeq = generateReservationKey(json).showingSeq;
                    $.ajax({
                        url: "http://yeomhyeseon.com/put/customer/point",
                        method: "POST",
                        data: JSON.stringify({
                            customer_id: localStorage.getItem('id'),
                            point: localStorage.getItem('point'),
                            sum: 'true'
                        }),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data) {
                            if (data.result == 1) {
                                localStorage.setItem('point', data.point);
                            }
                        },
                        error: function(xhr, status, msg) {
                            alert(msg);
                        }
                    });
                    $.ajax({
                        url: "http://yeomhyeseon.com/post/reservation",
                        method: "POST",
                        data: JSON.stringify({
                            id: reservationId,
                            reg_date: reg_date,
                            canceled: 'N',
                            price: '10000',
                            hcount: '1',
                            customer_id: localStorage.getItem('id'),
                            showing_seq: showingSeq
                        }),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data) {
                            if (data.result == 1) {
                                $.ajax({
                                    url: "http://yeomhyeseon.com/put/movie/count",
                                    method: "POST",
                                    data: JSON.stringify({
                                        count: o.movCount * 1 + 1,
                                        seq: o.movSeq
                                    }),
                                    dataType: "json",
                                    contentType: "application/json",
                                    success: function(data) {
                                        //RESERVATION SUCCES AND CALLBACK LOGIC AFTER TEST, CHANGE HERE
                                        alert('성공적으로 예매되었습니다. 마이페이지로 이동합니다.');
                                        customerMypage();
                                        //reservationSeat(shoSeq);
                                    },
                                    error: function(xhr, status, msg) {
                                        alert(msg);
                                    }
                                });
                            }
                        },
                        error: function(xhr, status, msg) {
                            alert(msg);
                        }
                    });

                }
            });
        });
    };

    var customerMypage = function() {
        $('#wrapper').html(customerMypageView());
        $.ajax({
            url: 'http://yeomhyeseon.com/get/reservation/customer',
            method: 'POST',
            data: JSON.stringify({
                id: localStorage.getItem('id')
            }),
            dataType: 'json',
            contentType: 'application/json',
            success: function(data) {
                $('#point').text(localStorage.getItem('point'));
                var view = '';
                if (data.infoList.length === 0) {
                    $('#mypage_reservation').html('<h5 id="default_msg">예매/구매내역이 없습니다.</h5>');
                    customerMypageCss();
                } else {
                    $.each(data.infoList, function(i, info) {
                        var canceled = '';
                        if (info.resCanceled === 'N') {
                            canceled = '취소가능';
                        } else if (info.resCanceled === 'Y') {
                            canceled = '취소';
                        } else {
                            canceled = '사용';
                        }
                        view = '<div id="mypage_table' + i + '" style="margin-top: 5px;margin-bottom: 5px;">   <table style="width: 100%;">' +
                            '   <tr>' +
                            '      <td><span id="reservation_no' + i + '"><strong>예매번호</strong></span></td>' +
                            '      <td id="reservation_number' + i + '">' + info.resId + '</td>' +
                            '   </tr>' +
                            '   <tr>' +
                            '      <td><strong>예매일</strong></td>' +
                            '      <td id="reservation_date' + i + '">' + info.resRegDate + '</td>' +
                            '   </tr>' +
                            '   <tr>' +
                            '      <td><strong>사용상태</strong></td>' +
                            '      <td id="canceled' + i + '">' + canceled + '</td>' +
                            '   </tr>' +
                            '   <tr>' +
                            '      <td><strong>예매내역</strong></td>' +
                            '      <td id="movie_name' + i + '">' + info.movTitle + '</td>' +
                            '   </tr>' +
                            '		<tr>' +
                            '			<td style="padding-right: 20px;"><strong>상영일</strong></td>' +
                            '			<td id="show_info' + i + '">' + info.shoShowDate + '</td>' +
                            '		</tr>' +
                            '		<tr>' +
                            '			<td style="padding-right: 20px;"><strong>상영시간</strong></td>' +
                            '			<td id="show_info' + i + '">' + info.shoStartTime + ' ~ ' + info.shoEndTime+'</td>' +
                            '		</tr>' +
                            '		<tr>' +
                            '			<td style="padding-right: 20px;"><strong>상영관</strong></td>' +
                            '			<td id="show_info' + i + '">' + info.mulName + ', ' + info.theName + '</td>' +
                            '		</tr>' +
                            '		<tr>' +
                            '			<td><strong>관람인원</strong></td>' +
                            '			<td id="customer_info' + i + '">성인' + info.resHcount + ' | 좌석 ' + info.resId.split('-')[3] + '</td>' +
                            '		</tr>' +
                            '   <tr>' +
                            '      <td id="price_title' + i + '"><strong>총 결제 금액</strong></td>' +
                            '      <td id="reservation_price' + i + '">' + info.resPrice + '원</td>' +
                            '      <td id="detail_icon' + i + '" style="text-align: right;"><input id="detail_' + i + '" class="abb1_rs_cancel btn btn-default" style="background-color: rgba(158, 158, 158, 0.43);" type="button" value="취소"/></td>' +
                            '   </tr>' +
                            '</table></div>';
                        if (i === 0) {
                            $('#mypage_reservation').html(view);
                        } else {
                            $('#mypage_reservation').append(view);
                        }

                    });
                    customerMypageCss();
                    $('.abb1_rs_cancel').on('click', function() {
                        var i = $(this).attr('id').split('_')[1];
                        $.ajax({
                            url: "http://yeomhyeseon.com/put/customer/point",
                            method: "POST",
                            data: JSON.stringify({
                                customer_id: localStorage.getItem('id'),
                                point: localStorage.getItem('point'),
                                sum: 'false'
                            }),
                            dataType: "json",
                            contentType: "application/json",
                            success: function(data) {
                                if (data.result == 1) {
                                    localStorage.setItem('point', data.point);
                                }
                            },
                            error: function(xhr, status, msg) {
                                alert(msg);
                            }
                        });
                        $.ajax({
                            url: 'http://yeomhyeseon.com/put/canceled',
                            method: 'POST',
                            data: JSON.stringify({
                                id: $('#reservation_number' + i).text()
                            }),
                            dataType: 'json',
                            contentType: 'application/json',
                            success: function(data) {
                                if (data.result === 1) {
                                    alert('취소되었습니다.');
                                    customerMypage();
                                }
                            },
                            error: function(xhr, status, msg) {
                                alert('업데이트 실패 이유:')
                            }
                        });

                    });
                }
            },
            error: function(xhr, status, msg) {
                alert('실패 이유: ' + msg)
            }
        });
        $('#mypageCancelList').on('click', function() {
            customerMypageCancel();
        });
        $('#mypageMyInfo').on('click', function() {
            customerMypageInfo();
        });
    };

    function customerMypageCss(){
        var mypage = $('#mypage');
        mypage.addClass('abb1_find_id_container');
        $('#mypageGnb').addClass('abb1_padding_top_20 abb1_width_left');
        mypage.find('table').css('margin','15px');
        mypage.find('div:first-child');
        mypage.find('div:first-child').find('h2').addClass('abb1_color_bold_brown').addClass('abb1_width_left');
        mypage.find('div:nth-child(2)').find('ul').addClass('abb1_page_ul_inline');
        mypage.find('div:nth-child(2)').find('li').addClass('abb1_page_li_inline');
        mypage.find('div:nth-child(2)').find('li:nth-child(1)').find('a').addClass('abb1_mypage_select_btn');
        mypage.find('div:nth-child(2)').find('li:nth-child(2)').find('a').addClass('abb1_mypage_not_select_btn');
        var mypage_reservation_content = $('#mypage_reservation_content');
        mypage_reservation_content.css('margin','0 auto').css('width','100%').css('text-align','left').css('background-color','white').css('padding-bottom','20px').css('padding-top','20px');
        mypage_reservation_content.find('ul').addClass('abb1_page_ul_inline abb1_mypage_margin');
        mypage_reservation_content.find('li').addClass('abb1_page_li_inline');
        mypage_reservation_content.find('li').find('a').addClass('abb1_detail_gnb_li');
        var mypage_reservation = $('#mypage_reservation');
        mypage_reservation.addClass('abb1_page_reservation');
        mypage_reservation.find('tr:first-child').addClass('abb1_margin_left_20');
        mypage_reservation.find('tr:nth-child(2)').find('td:nth-child(3)').addClass('abb1_text_right');
        mypage.find('table>tr:nth-child(3)>td:nth-child(3)').css('text-align','right');
        $('#default_msg').css('padding-left','20px');
        mypage.find('div:first-child>h4').addClass('abb1_width_right');
    }

    function customerMypageView() {
        return '<div id="mypage" class="abb1_find_id_container">' +
            '		<div> ' +
            '			<h3><strong>마이시네마</strong></h3><h4 style="width: 100%;"><strong>내 포인트</strong>: <span id="point"></span>점</h4>' +
            '		</div>' +
            '		<div id="mypage_reservation_content" style="width: 100%;">' +
            '			<div id="mypage_reservation">' +
            '			</div>' +
            '		</div>' +
            '	</div>';

    }

    function generateReservationKey(o) {
        var reg_date = '';
        var reservationId = '';
        var showingSeq = '';
        $.each(o.timetable_list, function(i, time) {
            if (time.shoSeq == o.shoSeq) {
                reg_date = time.shoShowDate;
                showingSeq = time.shoSeq;
                reservationId = time.mulSeq + '-' + time.movSeq + '-' + convertTime(time.shoStartTime) + '-' + o.seatId;
            }
        });
        return {
            reg_date: reg_date,
            reservationId: reservationId,
            showingSeq: showingSeq
        };
    }

    function convertTime(param) {
        var time = param.split(':')[0] + param.split(':')[1];
        return time;
    }

    function generateCost(param) {
        var money = '';
        if (param.length == 4) {
            money = param.substring(0, 1) + ',' + param.substring(1, 4);
        } else if (param.length == 5) {
            money = param.substring(0, 2) + ',' + param.substring(2, 5);
        }
        return money;
    }

    function reservationSeatView() {
        return '<div id="seat">' +
            '    <div id="reservation_seat_form" style="width:100%">' +
            '      <div>' +
            '         <div style="padding: 0px;">' +
            '            <span></span>' +
            '         </div>' +
            '      <div>' +
            '         <span>Screen</span>' +
            '      </div>' +
            '      <div id="seat_area">' +
            '         <div style="width: 100%">' +
            '            <table id="seat_area_table">' +
            '            </table>' +
            '         </div>' +
            '         <div>' +
            '            <img src="' + 'http://yeomhyeseon.com/resources/img/reservation/seat_info.png" alt="" style="width: 100%"/>' +
            '         </div>' +
            '      </div>' +
            '      </div>' +
            '    </div>' +
            '  </div>';
    }

    function reservationSeatTicketingTableView() {
        return '  <div id="ticketing" style="width: 140px;margin: 0 auto;margin-bottom: 30px;">' +
            '    <div style="height: 0px;min-width: 0px;">' +
            '    <div>' +
            '      <table>' +
            '        <tr id="ticketing_tr2">' +
            '        </tr>' +
            '     </table>' +
            '      </div>' +
            '    </div>' +
            '  </div>';
    }

    function reservationSeatInfoView() {
        return  '<td id="ticketing_paying">' +
            '             <a id="doReservation" href="javascript:void(0)"><input type="button" value="결제하기" class="abb1_ticketing_btn" style="width: 140px;background-color: #dbd5c0;color: black;height:40px;margin-bottom: 30px;"/></a>' +
            '     </td>';
    }

    function disableSeatTableService(seatCount, id) {
        for (var i = 0; i < seatCount / 10; i++) {
            for (var j = 1; j <= 10; j++) {
                var compare = '';
                if (j == 10) {
                    compare = getChar(i) + j;
                } else {
                    compare = getChar(i) + '0' + j;
                }
                if (compare == id) {
                    $('#' + id).addClass('selected');
                } else if (j == 10) {
                    $('#' + getChar(i) + j).addClass('disabled');
                } else {
                    $('#' + getChar(i) + '0' + j).addClass('disabled');
                }
            }
        }
    }

    function reservationSeatTableView(seatCount) {
        var seat_area_table = '<colgroup>' +
            '	            	<col style="width: 9%"/>' +
            '	            	<col style="width: 90%"/>' +
            '	            </colgroup>';
        for (var i = 0; i < seatCount / 10; i++) {
            seat_area_table += '<tr>' +
                '	   <td>' + getChar(i) + '</td>' +
                '	   <td>' +
                '	      <a id="' + getChar(i) + '01" href="javascript:void(0)">1</a>' +
                '	      <a id="' + getChar(i) + '02" href="javascript:void(0)">2</a>' +
                '	      <a id="' + getChar(i) + '03" href="javascript:void(0)">3</a>' +
                '	      <a id="' + getChar(i) + '04" href="javascript:void(0)">4</a>' +
                '	      <a id="' + getChar(i) + '05" href="javascript:void(0)">5</a>' +
                '	      <a id="' + getChar(i) + '06" href="javascript:void(0)">6</a>' +
                '	      <a id="' + getChar(i) + '07" href="javascript:void(0)">7</a>' +
                '	      <a id="' + getChar(i) + '08" href="javascript:void(0)">8</a>' +
                '	      <a id="' + getChar(i) + '09" href="javascript:void(0)">9</a>' +
                '	      <a id="' + getChar(i) + '10" href="javascript:void(0)">10</a>' +
                '	   </td>' +
                '	</tr>';
        }
        seat_area_table += '<tr>' +
            '	    <td>' +
            '	    </td>' +
            '	    <td style="text-align: center;">' +
            '	       <img src="' + 'http://yeomhyeseon.com/resources/img/reservation/exit_bottom.png" alt="" />' +
            '	    </td>' +
            '	 </tr>';
        return seat_area_table;
    }

    function showSeatTableService(seatCount, seatReserved) {
        for (var i = 1; i <= seatCount / 10; i++) {
            for (var j = 1; j <= 10; j++) {
                var row = $('#seat_area_table').find('tr:nth-child(' + i + ') td:nth-child(1)').text();
                var col = $('#seat_area_table').find('tr:nth-child(' + i + ') td:nth-child(2) a:nth-child(' + j + ')').text();
                var combination = '';
                if (col != '10') {
                    combination = row + '0' + col;
                } else {
                    combination = row + col;
                }
                if (seatReserved.length == 0) {
                    $('#seat_area_table').find('tr:nth-child(' + i + ') td:nth-child(2) a:nth-child(' + j + ')').addClass('can');
                } else {
                    if (combination == seatReserved[0]) {
                        $('#seat_area_table').find('tr:nth-child(' + i + ') td:nth-child(2) a:nth-child(' + j + ')').addClass('reserved');
                        seatReserved.shift();
                    } else {
                        $('#seat_area_table').find('tr:nth-child(' + i + ') td:nth-child(2) a:nth-child(' + j + ')').addClass('can');
                    }
                }
            }
        }
    }

    function reservationSeatCss(){
        $('#container').addClass('abb1_seat');
        var reservation_seat_form = $('#reservation_seat_form');
        reservation_seat_form.addClass('abb1_reservation_seat_form');
        reservation_seat_form.find('div:first-child').css('padding','30px 0');
        reservation_seat_form.find('div:first-child').find('div').addClass('abb1_seat_maintext');
        reservation_seat_form.find('div:first-child').find('div:nth-child(2)').addClass('abb1_seat_screen');
        var seat_area = $('#seat_area');
        seat_area.addClass('abb1_seat_area');
        seat_area.find('div:first-child').addClass('abb1_seat_table');
        var seat_area_table = $('#seat_area_table');
        seat_area_table.find('span').addClass('abb1_aisle');
        seat_area.find('div:last-child').addClass('abb1_seat_info');
        $('#ticketing > div').addClass('abb1_ticketing_settings');
        $('#ticketing > div > div').addClass('abb1_ticketing_table');
        $('#ticketing_tr1').addClass('abb1_ticketing_tr');
        $('#ticketing_tr2').addClass('abb1_ticketing_tr2');
        $('#ticketing_movie_title').addClass('abb1_ticketing_moviename');
        $('#ticketing_movie_type').addClass('abb1_ticketing_type');
        $('#ticketing_cost').addClass('abb1_ticketing_cost');
        $('#ticketing_paying').addClass('abb1_ticketing_paying');
        $('#ticketing_paying input').addClass('abb1_ticketing_btn');
    }

    function makeAisleService(seatCount, arr) {
        for (var a = 0; a < arr.length; a++) {
            for (var i = 1; i <= seatCount / 10; i++) {
                $('#seat_area_table').find('tr:nth-child(' + i + ') td:nth-child(2) a:nth-child(' + arr[a] + ')').after('<span></span>');
            }
        }
    }

    function getChar(param) {
        var char = '';
        if (param == 0) {
            char = 'A';
        } else if (param == 1) {
            char = 'B';
        } else if (param == 2) {
            char = 'C';
        } else if (param == 3) {
            char = 'D';
        } else if (param == 4) {
            char = 'E';
        } else if (param == 5) {
            char = 'F';
        } else if (param == 6) {
            char = 'G';
        } else if (param == 7) {
            char = 'H';
        } else if (param == 8) {
            char = 'I';
        } else if (param == 9) {
            char = 'J';
        } else if (param == 10) {
            char = 'K';
        } else if (param == 11) {
            char = 'L';
        } else if (param == 12) {
            char = 'M';
        } else {
            char = 'Z';
        }
        return char;
    }

    function multiplexMainTimetableService(data, date) {
        var info_list = data.info_list;
        var theater_count = data.theater_count;
        var disShowList = data.dis_show_list;
        var timetableList = data.timetable_list;
        var view = '';

        var currentTime = getCurrentTime();
        var hour = currentTime.split(':')[0] * 1;
        var minute = currentTime.split(':')[1] * 1;

        var className = 'goR';


        for (var i = 0; i < disShowList.length; i++) {
            var movie_title = '';
            for (var j = 0; j < timetableList.length; j++) {
                if (disShowList[i].movie_seq == timetableList[j].movSeq && date == timetableList[j].shoShowDate) {
                    movie_title = timetableList[j].movTitle;
                    view += '      <div>' +
                        '         <span class="abb1_multiplex_movie_title"><strong>' + movie_title + '</strong></span><a id="' + disShowList[i].movie_seq + '" class="goMD" href="javascript:void(0)"></a>' +
                        '      </div>' +
                        '      <ul>';
                    break;
                }
            }

            for (var j = 0; j < timetableList.length; j++) {
                if (disShowList[i].movie_seq == timetableList[j].movSeq && date == timetableList[j].shoShowDate) {
                    var json = {
                        info_list: info_list,
                        timetableList: timetableList,
                        j: j
                    };

                    if (getTodayValue() === date) {
                        if (timetableList[j].shoStartTime.split(':')[0] * 1 > hour) {
                            className = 'goR';
                        } else if (timetableList[j].shoStartTime.split(':')[0] * 1 == hour && timetableList[j].shoStartTime.split(':')[1] * 1 > minute) {
                            className = 'goR';
                        } else {
                            className = 'cannot';
                        }
                    }

                    var resCount = multiplexMainMovielist(json).resCount;
                    view += '   <a id="rv' + timetableList[j].shoSeq + '" class="'+className+'" href="#"><li><table>' +
                        '      <tr>' +
                        '      <td>' + timetableList[j].theName + '</td>' +
                        '      </tr>' +
                        '      <tr>' +
                        '      <td><strong>' + timetableList[j].shoStartTime + '</strong></td>' +
                        '      </tr>' +
                        '      <tr>' +
                        '      <td> ' + resCount + '석 / ' + timetableList[j].theTotalSeat + '석</td>' +
                        '      </tr>' +
                        '   </table></li></a>';
                }
            }
            view += '</ul>';
        }
        view += '</div>';
        return view;
    }

    function multiplexMainMovielist(o) {
        var resCount = 0;
        var infoIdResTime = '';
        for (var k = 0; k < o.info_list.length; k++) {
            var infoIdMultiplexSeq = o.info_list[k].resId.split('-')[0];
            var infoIdMovieSeq = o.info_list[k].resId.split('-')[1];
            infoIdResTime = o.info_list[k].resId.split('-')[2];
            var resTime = infoIdResTime.substring(0, 2) + ":" + infoIdResTime.substring(2, 4);
            if (o.info_list[k].shoSeq == o.timetableList[o.j].shoSeq && o.info_list[k].shoStartTime == resTime) {
                resCount++;
            }
        }
        resCount = resCount / 2;
        var json = {
            resCount: resCount,
            resTime: infoIdResTime
        };
        return json;
    }

    function multiplexMainCss(){
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
        $('#date').addClass('abb1_calendar');
    }

    function getTodayValue() {
        var today = datetime();
        var todayval = '';
        if(today.substring(6,8)*1>9){
            todayval = today.substring(0, 4) + '-' + today.substring(4, 6) + '-' + today.substring(6, 8);
        } else {
            todayval = today.substring(0, 4) + '-' + today.substring(4, 6) + '-0' + today.substring(6, 8);
        }
        return todayval;
    }

    function getCurrentTime() {
        var d = new Date();
        var time = leadingZeros(d.getHours(), 2) + ':' + leadingZeros(d.getMinutes(), 2);
        return time;
    }

    function leadingZeros(n, digits) {
        var zero = '';
        n = n.toString();

        if (n.length < digits) {
            for (i = 0; i < digits - n.length; i++)
                zero += '0';
        }
        return zero + n;
    }

    function datetime() {
        var d = new Date();
        var month = d.getMonth() + 1;
        var year = d.getYear() - 100;
        var calcstr = '20' + year + '0' + month + '' + d.getDate();
        var showstr = '20' + year + '년 0' + month + '월 ' + d.getDate() + '일';
        $('#date').html(showstr);
        return calcstr;
    }

    function movieList(){
        return '';
    }

    var customerLogin = function() {
        $('#wrapper').html(customerLoginView());
        customerLoginCss();
        $('#login_btn').on('click', function(e) {
            if ($.trim($('#customer_id').val()) == '') {
                alert('아이디를 입력하세요.');
                return;
            } else if ($('#customer_pw').val() == '') {
                alert('비밀번호를 입력하세요.');
                return;
            } else {
                e.preventDefault();
                $.ajax({
                    url: 'http://www.yeomhyeseon.com/login',
                    method: 'POST',
                    data: JSON.stringify({
                        id: $('#customer_id').val(),
                        pw: $('#customer_pw').val()
                    }),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(data) {
                        if (data.exist === '0') {
                            alert('아이디가 존재하지 않습니다.');
                        } else if (data.permission === 'admin') {
                            alert('관리자로 로그인 하셨습니다.');
                            adminIndex();
                        } else if (data.permission === 'customer') {
                            alert('로그인성공');
                            localStorage.setItem("id",data.customer.id);
                            localStorage.setItem("point",data.customer.point);
                            localStorage.setItem("login","Y");
                            onCreate();
                        } else {
                            alert('비밀번호를 다시 확인하세요.');
                        }
                        $('#loginForm').submit();
                    },
                    error: function(xhr, status, msg) {
                        alert('로그인 실패이유:' + msg)
                    }
                });
            }
        });
    };

    function customerLoginView() {
        return '<div id="customer_login_form">' +
            '	<div style="argin: 0 auto;text-align: center;width: 100%;">' +
            '      <h3>로그인</h3>' +
            '      <table id="login_table" style="width: 100%;margin-top: 20px;">' +
            '         <tr>' +
            '            <td><input id="customer_id" name="customer_id" tabindex="1" type="text" placeholder="아이디"></td>' +
            '         </tr>' +
            '         <tr>' +
            '           <td><input id="customer_pw" name="customer_pw" tabindex="2" type="password" placeholder="비밀번호"></td>' +
            '         </tr>' +
            '         <tr>'+
            '           <td id="td_login" rowspan="2">' +
            '            	<a id="a_login" href="#"><input id="login_btn" type="submit" tabindex="3" value="로그인"></a>' +
            '            </td>' +
            '        </tr>'
            '      </table>'+
            '</div>';
    }

    function customerLoginCss(){
        var customer_login_form = $('#customer_login_form');
        customer_login_form.addClass('abb1_signup_form');
        customer_login_form.find('h2').addClass('abb1_login_maintext');
        $('#login_table').addClass('abb1_signup_form_control');
        $('#login_btn').addClass('btn abb1_btn_lg abb1_login_btn');
        $('#find_table').addClass('abb1_find_table');
        $('#find_table').find('tr:nth-child(1)>td').css('padding','0 0 0 82px').css('text-align','left');
        $('#find_table').find('tr:nth-child(2)>td').addClass('abb1_a_findIdPw');
        var login_footer = $('#login_footer');
        login_footer.addClass('abb1_div_login_footer');
        login_footer.find('table').addClass('abb1_width_center_w800');
        login_footer.find('td:nth-child(1)').addClass('abb1_width_448');
        login_footer.find('td:nth-child(2)').addClass('abb1_width_200');
        login_footer.find('td:nth-child(2)').find('input').addClass('btn abb1_btn_lg abb1_btn_verification').css('height','60px').css('width','120px').css('font-size','15px');
    }

    var movieSort=function(movie_arr) {
        var temp = 0;
        for (k = 0; k < movie_arr.length; k++) {
            for (j = k + 1; j < movie_arr.length; j++) {
                if (movie_arr[k].count * 1 < movie_arr[j].count * 1) {
                    temp = movie_arr[k];
                    movie_arr[k] = movie_arr[j];
                    movie_arr[j] = temp;
                }
            }
        }
        return movie_arr;
    };

    var indexMovieRank=function(obj) {
        return '<li class="gogo"><a id="movie' + obj.movie.seq + '" class="goMovie" href="javascript:void(0)"><em style="padding: 0 5px;">' + (obj.i + 1) + '. </em>' +
            '<span class="abb1_rank_grade" ></span>' +
            '<span class="abb1_rank_moviename">' + obj.movie.title + '</span>' +
            '</a>' +
            '<em>' + (obj.count / obj.total * 100).toFixed(1) + '%</em>' +
            '</li>';
    }

    return{
        onCreate: onCreate
    }
})();



$(function(){
    app.initialize();
});



