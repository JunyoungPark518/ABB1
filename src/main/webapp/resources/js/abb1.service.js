function movieSort(movie_arr) {
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
}

function avgSort(movie_arr) {
    var temp = 0;
    for (k = 0; k < movie_arr.length; k++) {
        for (j = k + 1; j < movie_arr.length; j++) {
            if (movie_arr[k].avg * 1 < movie_arr[j].avg * 1) {
                temp = movie_arr[k];
                movie_arr[k] = movie_arr[j];
                movie_arr[j] = temp;
            }
        }
    }
    return movie_arr;
}

function orderService(t, total) {
    return '<li class="abb1_li_inline">' +
        '         <table class="abb1_movie_table">' +
        '            <tr>' +
        '               <td class="abb1_nowMovie_border"><a id="movie' + t.seq + '" class="goMovie" href="#"><img src="' + $.image() + '/movie/' + t.pic + '" width="228px" height="333.99px" alt="..."></a></td>' +
        '            </tr>' +
        '            <tr>' +
        '               <td class="abb1_movie_table_title_td"><a class="goMovie" href="javascript:void(0)">' + t.title + '</a></td>' +
        '            </tr>' +
        '            <tr>' +
        '               <td class="abb1_movie_table_rate_td">예매율 ' + (t.count / total * 100).toFixed(1) + '% | 관람평점 ' + t.avg + '</td>' +
        '            </tr>' +
        '         </table>' +
        '      </li>';
}

function calcGpa(count, total) {
    var gpa = 0;
    for (var i = 0; i < 4; i++) {
        gpa = count[i] != 0 ? total[i] / count[i] : 0.0;
    }
    return gpa;
}

function playYoutube(id, src) {
    $('#' + id).html('<iframe width="784px" height="453px" src="' + src + '?autoplay=1"></iframe>')
}

function findYoutube(data) {
    $.each(data.movie_list, function(i, movie) {
        if (movie.trailer_main === '1') {
            playYoutube('trailer', movie.trailer_url);
        }
    });
}

function reverseArr(arr, count) {
    var temp = [];
    for (var i = arr.length - 1; i > arr.length - (1 + count); i--) {
        temp.push(arr[i]);
    }
    return temp;
}

function countReview(movie_list, review_list, review_count, review_total) {
    for (var k = 0; k < 8; k++) {
        for (var i = 0; i < review_list.length; i++) {
            if (movie_list[k].seq == review_list[i].movie_seq) {
                review_total[k] += review_list[i].gpa * 1;
                review_count[k]++;
            }
        }
    }
}

function movieList(list) {
    for (var i = 0; i < 4; i++) {
        list += movieMainList(movie_list, i, calcGpa(review_count, review_total), total);
    }
    return list;
}

function orderByRate(data) {
    var ctx = $.context();
    var movie_list = data.movie_list;
    var review_list = data.review_list;
    var review_total = [0, 0, 0, 0, 0, 0, 0, 0];
    var review_count = [0, 0, 0, 0, 0, 0, 0, 0];
    var total = 0;
    $.each(data.movie_list, function(i, movie) {
        total += movie.count * 1;
    });
    $.each(data.review_list, function(i, review) {
        review_list.push(review);
    });

    movie_list = movieSort(movie_list);
    countReview(movie_list, review_list, review_count, review_total);

    var gpa = 0.0;
    var list = '<ul>';
    for (var i = 0; i < 4; i++) {
        list += movieMainList(movie_list, i, calcGpa(review_count, review_total), total);
    }
    list += '</ul>';
    $('#movieList').html(list);

    list = '<ul>';
    for (var i = 4; i < 8; i++) {
        list += movieMainList(movie_list, i, calcGpa(review_count, review_total), total);
    }

    list += '</ul>';
    $('#movieList2').html(list);

    $('.goMovie').on('click', function() {
        var id = $(this).attr('id');
        var num = $(this).attr('id').split('movie')[1] * 1;
        $('#' + id).on('click', function() {
            movieDetail(movie_list[num].seq);
        });
    });
    movieMainListCss();
}

function calcGrade(m) {
    var grade = '';
    if (m.grade == 'all') {
        grade = '전체';
    } else {
        grade = m.grade + '세이상';
    }
    return grade;
}

function movieStatistic(m) {
    var google_total = m.male_p * 1 + m.female_p * 1;
    var male = m.male_p / google_total * 100;
    var female = m.female_p / google_total * 100;
    abb1.api.google(male, female);
}

function attachFileCheck(notice) {
    var attach = '';
    if (notice.file != 'default') {
        attach = '<img src="' + $.context() + '/resources/img/board/' + notice.file + '" alt="" />';
    }
    return attach;
}

function boardDetailCommentInit(comment_list) {
    if (comment_list.length == 0) {
        var comment = {
            customer_id: '',
            reg_date: '',
            content: '댓글이 존재하지 않습니다. 첫 번째 댓글을 달아보세요!'
        }
        comment_list.push(comment);
    }
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

function checkMultiplex(seq) {
    var multiplex = '';
    if (seq == 1) {
        multiplex = '가산디지털';
    } else if (seq == 2) {
        multiplex = '가양';
    }
    return multiplex;
}

function showMovielist(o) {
    var movielist = '';
    for (var i = 0; i < o.dis_show_list.length; i++) {
        for (var j = 0; j < o.info_list.length; j++) {
            if (o.dis_show_list[i].movie_seq == o.info_list[j].movSeq) {
                movielist += '<li><a id="movie' + o.dis_show_list[i].movie_seq + '" class="movie" href="javascript:void(0)"><img src="' + $.context() + '/resources/img/movie/grade_' + o.info_list[j].movGrade + '.png" alt="" width="24px" height="24px"/> ' + o.info_list[j].movTitle + '</a></li>';
                break;
            }
        }
    }
    return movielist;
}

function reservationMovielist(o) {
    var resCount = 0;
    var infoIdResTime = '';
    var startTime = '';
    for (var k = 0; k < o.info_list.length; k++) {
        var infoIdMultiplexSeq = o.info_list[k].resId.split('-')[0];
        var infoIdMovieSeq = o.info_list[k].resId.split('-')[1];
        infoIdResTime = o.info_list[k].resId.split('-')[2];
        var resTime = infoIdResTime.substring(0, 2) + ":" + infoIdResTime.substring(2, 4);
        if (o.info_list[k].shoSeq == o.timetableList[o.i].shoSeq && o.info_list[k].shoStartTime == resTime) {
            startTime = infoIdResTime;
            resCount++;
        }
    }
    var json = {
        resCount: resCount,
        resTime: startTime
    };
    return json;
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

function makeAisleService(seatCount, arr) {
    for (var a = 0; a < arr.length; a++) {
        for (var i = 1; i <= seatCount / 10; i++) {
            $('#seat_area_table').find('tr:nth-child(' + i + ') td:nth-child(2) a:nth-child(' + arr[a] + ')').after('<span></span>');
        }
    }
}

function showMovielistService(o) {
    var movielist = '',
        timetableMovGrade = '',
        timetableMovTitle = '',
        timetableShowDate = '';
    var movSeq = 0,
        timetableMovSeq = 0;
    for (var i = 0; i < o.disShowList.length; i++) {
        movSeq = o.disShowList[i].movie_seq;
        for (var j = 0; j < o.timetableList.length; j++) {
            timetableMovSeq = o.timetableList[j].movSeq;
            timetableMovGrade = o.timetableList[j].movGrade;
            timetableMovTitle = o.timetableList[j].movTitle;
            timetableShowDate = o.timetableList[j].shoShowDate;
            if (movSeq == timetableMovSeq && timetableShowDate == o.date) {
                movielist += '<li><a id="movie' + movSeq + '" class="movie" href="javascript:void(0)"><img src="' + $.context() + '/resources/img/movie/grade_' + timetableMovGrade + '.png" alt="" width="24px" height="24px"/> ' + timetableMovTitle + '</a></li>';
                break;
            }
        }
    }
    return movielist;
}

function disableMovieListService(dis_show_list, selectedMovieSeq) {
    for (var i = 0; i < dis_show_list.length; i++) {
        if (selectedMovieSeq != dis_show_list[i].movie_seq) {
            $('#movie' + dis_show_list[i].movie_seq).addClass('disabled');
        } else {
            $('#movie' + dis_show_list[i].movie_seq).addClass('on');
        }
    }
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
                    '         <span class="abb1_multiplex_movie_title"><strong>' + movie_title + '</strong></span><a id="' + disShowList[i].movie_seq + '" class="goMD" href="javascript:void(0)"><img src="' + $.context() + '/resources/img/icon/movieLink.png" alt="" /></a>' +
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

function convertTime(param) {
    var time = param.split(':')[0] + param.split(':')[1];
    return time;
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

function getTodayValue() {
    var today = abb1.util.datetime();
    var todayval = '';
    if(today.substring(6,8)*1>9){
   todayval = today.substring(0, 4) + '-' + today.substring(4, 6) + '-' + today.substring(6, 8);
    } else {
   todayval = today.substring(0, 4) + '-' + today.substring(4, 6) + '-0' + today.substring(6, 8);
    }
    return todayval;
}

function getKindOfArticleWrite() {
    var kind = $('input[name="kind"]:checked').val();
    if (kind == '1') {
        kind = '문의';
    } else if (kind == '2') {
        kind = '칭찬';
    } else if (kind == '3') {
        kind = '불만';
    } else {
        kind = '건의';
    }
    return kind;
}

function isMultiply5(param) {
    if (param == 0) {
        return false;
    } else if (param % 5 == 0) {
        return true;
    } else {
        return false;
    }
}

function customerCheckId(data) {
    if (data.result === 0) {
        if (checkId(data.id)) {
            $("#result_id_msg").text("사용 가능한 아이디입니다.").removeClass('notRegExp').addClass('regExp');
        } else {
            $("#result_id_msg").text("5~20자의 영문 소문자, 숫자와 특수기호( _ ),(-)만 사용 가능합니다.").removeClass('regExp').addClass('notRegExp');
        }
    } else {
        $("#result_id_msg").text("이미 사용중인 아이디입니다.").removeClass('regExp').addClass('notRegExp');
    }
}

function customerCheckPw() {
    if (checkPw($('#pw').val())) {
        $("#result_pw_msg").text("사용 가능한 비밀번호입니다.").removeClass('notRegExp').addClass('regExp');
    } else {
        $("#result_pw_msg").text("5~15자 영문 대 소문자, 숫자, 특수문자를 사용하세요.").removeClass('regExp').addClass('notRegExp');
    }
}

function customerCorrectPw() {
    if ($('#pw').val() === $('#check_pw').val()) {
        $("#check_pw_msg").text("비밀번호가 일치합니다.").removeClass('notRegExp').addClass('regExp');
    } else {
        $("#check_pw_msg").text("").removeClass('regExp').addClass('notRegExp');
    }
}

function customerCorrectEmail(emailRandom) {
    if (emailRandom === $('#check_email').val()) {
        $("#check_email_msg").text("인증번호가 일치합니다.").removeClass('notRegExp').addClass('regExp');
    } else {
        $("#check_email_msg").text("").removeClass('regExp').addClass('notRegExp');
    }
}

function customerCheckName() {
    if (checkName($('#name').val())) {
        $("#result_name_msg").text("사용 가능한 이름입니다.").removeClass('notRegExp').addClass('regExp');
    } else {
        $("#result_name_msg").text("양식에 맞지 않습니다.").removeClass('regExp').addClass('notRegExp');
    }
}

function customerCheckBirth() {
    if (checkBirth($('#birth').val())) {
        $("#result_birth_msg").text("사용 가능한 생년월일입니다.").removeClass('notRegExp').addClass('regExp');
    } else {
        $("#result_birth_msg").text("양식에 맞지 않습니다.").removeClass('regExp').addClass('notRegExp');
    }
}

function customerCheckPhone() {
    if (checkPhone($('#phone').val())) {
        $("#result_phone_msg").text("사용 가능한 번호입니다.").removeClass('notRegExp').addClass('regExp');
    } else {
        $("#result_phone_msg").text("양식에 맞지 않습니다.").removeClass('regExp').addClass('notRegExp');
    }
}

function customerCheckEmail() {
    if (checkEmail($('#email').val())) {
        $("#result_email_msg").text("사용 가능한 이메일입니다.").removeClass('notRegExp').addClass('regExp');
    } else {
        $("#result_email_msg").text("양식에 맞지 않습니다.").removeClass('regExp').addClass('notRegExp');
    }
}

function customerCheckAddress() {
    if ($('#detail_address').val().length != 0) {
        $("#result_address_msg").text("").removeClass('regExp').addClass('notRegExp');
    }
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

function getCurrentTime() {
    var d = new Date();
    var time = leadingZeros(d.getHours(), 2) + ':' + leadingZeros(d.getMinutes(), 2);
    return time;
}


function customerCheckShowDate(){
    if(checkBirth($('#customer_show_date').val())){
       $("#check_show_date").text("");
    }
    else{
       $("#check_show_date").text("양식에 맞지 않습니다.");
    }
}

function customerCheckRsShowDate(){
    if(checkBirth($('#show_date').val())){
       $("#check_show_date").text("");
    }
    else{
       $("#check_show_date").text("양식에 맞지 않습니다.");
    }
}

//------------------ 정규식
function checkPhone(strValue) {
    var regExp = /[0-9]$/;
    if (strValue.length == 0) {
        return false;
    }
    if (!strValue.match(regExp)) {
        return false;
    }
    return true;
}

function checkId(strValue) {
    //5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
    var regExp = /[_0-9a-z-]{5,15}$/;
    if (strValue.length == 0) {
        return false;
    }
    if (strValue === 'admin') {
        return false;
    }
    if (!strValue.match(regExp)) {
        return false;
    }
    return true;
}

function checkPw(strValue) {
    //5~15자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
    var regExp = /[0-9a-zA-Z!"#$%&'()*+,./:;<=>?@\^_`{|}~-]{5,15}$/;
    if (strValue.length == 0) {
        return false;
    }
    if (!strValue.match(regExp)) {
        return false;
    }
    return true;
}

function checkName(strValue) {
    var regExp = /^[가-힣]*$/;
    if (strValue.length == 0) {
        return false;
    }
    if (!strValue.match(regExp)) {
        return false;
    }
    return true;
}

function checkBirth(strValue) {
    var regExp = /[12][0-9]{3}-[01][0-9]-[0-3][0-9]$/;
    if (strValue.length == 0) {
        return false;
    }
    if (!strValue.match(regExp)) {
        return false;
    }
    return true;
}

function checkPhone(strValue) {
    var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
    if (strValue.length == 0) {
        return false;
    }
    if (!strValue.match(regExp)) {
        return false;
    }
    return true;
}

function checkEmail(strValue) {
    var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
    if (strValue.length == 0) {
        return false;
    }
    if (!strValue.match(regExp)) {
        return false;
    }
    return true;
}

function nullCheck(strValue) {
    if (strValue.length == 0) {
        return false;
    }
    return true;
}
