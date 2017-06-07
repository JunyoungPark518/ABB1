/*
========= abb1-meta ========
* abb1-context
* abb1-util
* abb1-api
* abb1-cookie
* abb1-controller
===========================
*/
var abb1 = abb1 || {};

/*========= abb1-context =========
@AUTHOR : Hyeseun Yeom
@CREATE DATE : 2017-05-06
@UPDATE DATE : 2017-05-06
@DESC : META-INF
=================================*/
abb1.context = (function() {
    var onCreate = function(context) {
        $.getScript(context + '/resources/js/abb1.domain.js', function() {
            $.extend(new Session(context));
            setContentView();
        });
    };
    var setContentView = function() {
        abb1.controller.onCreate();
    };
    return {
        onCreate: onCreate
    };
})();

/* ========= abb1-util =========
 * @AUTHOR : Hyeseun Yeom
 * @CREATE DATE : 2017-05-06
 * @UPDATE DATE : 2017-05-06
 * @DESC : Etc methods(ex: email check validation, calculation profile, datetime check algorithm)
	abb1-util-validation
    	abb1-util-calcProfile
    	abb1-util-datetime
	abb1-util-starRating
=================================*/
abb1.util = {
    validation: function(x) {
        return (x != "");
    },
    calcProfile: function(ssn) {
        var arr = [];
        var date = abb1.util.datetime();
        var year = date.substring(0, 4) * 1,
            month = date.substring(4, 6) * 1,
            day = date.substring(6, 8) * 1;
        var age = ssn.substring(0, 2) * 1;
        var flag = ssn.charAt(7) == '3' || ssn.charAt(7) == '4';
        arr.push(flag ? '20' + ssn.substring(0, 2) + '년 ' + ssn.substring(2, 4) + '월 ' + ssn.substring(4, 6) + '일' : '19' + ssn.substring(0, 2) + '년 ' + ssn.substring(2, 4) + '월 ' + ssn.substring(4, 6) + '일');
        arr.push(flag ? year - 2000 - age + '세' : year - 1900 - age + '세');
        arr.push(ssn.charAt(7) === '1' || ssn.charAt(7) === '3' ? '남자' : '여자');
        return arr;
    },
    datetime: function() {
        var d = new Date();
        var month = d.getMonth() + 1;
        var year = d.getYear() - 100;
        var calcstr = '20' + year + '0' + month + '' + d.getDate();
        var showstr = '20' + year + '년 0' + month + '월 ' + d.getDate() + '일';
        $('#date').html(showstr);
        return calcstr;
    },
    starRating: function() {
        var $star = $(".star-input"),
            $result = $star.find("output>b");
        $(document).on("focusin", ".star-input>.input", function() {
            $(this).addClass("focus");
        }).on("focusout", ".star-input>.input", function() {
            var $this = $(this);
            setTimeout(function() {
                if ($this.find(":focus").length === 0) {
                    $this.removeClass("focus");
                }
            }, 100);
        }).on("change", ".star-input :radio", function() {
            $result.text($(this).next().text());
        }).on("mouseover", ".star-input label", function() {
            $result.text($(this).text());
        }).on("mouseleave", ".star-input>.input", function() {
            var $checked = $star.find(":checked");
            if ($checked.length === 0) {
                $result.text("0");
            } else {
                $result.text($checked.next().text());
            }
        });
    }
};


/* ========= abb1-api ========= 
 * @AUTHOR : Junyoung Park 
 * @CREATE DATE : 2017-05-10 
 * @UPDATE DATE : 2017-05-29 
 * @DESC : Using API(Google Chart)
=================================*/
abb1.api = {
    google: function(male, female) {
        $.getScript('https://www.gstatic.com/charts/loader.js', function() {
            google.charts.load("current", {
                packages: ["corechart"]
            });
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {
                var data = google.visualization.arrayToDataTable([
                    ['Task', 'Hours per Day'],
                    ['남자', male],
                    ['여자', female]
                ]);
                var options = {
                    title: '성별 선호도',
                    pieHole: 0.4,
                };
                var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
                chart.draw(data, options);
            }
        });
    },
    google2: function(male, female) {
        $.getScript('https://www.gstatic.com/charts/loader.js', function() {
            google.charts.load("current", {
                packages: ["corechart"]
            });
            google.charts.setOnLoadCallback(drawDonutChart);

            function drawDonutChart() {
                var data = google.visualization.arrayToDataTable([
                    ['Task', 'Hours per Day'],
                    ['남자', male],
                    ['여자', female]
                ]);
                var options = {
                    title: '성별 선호도',
                    pieHole: 0.4,
                    chartArea: {
                        left: 20,
                        top: 50,
                        width: '75%',
                        height: '100%'
                    }
                };
                var chart = new google.visualization.PieChart(document.getElementById('admin_movie_donut_chart'));
                chart.draw(data, options);
            }
        });
    },
    googleAreaChart: function(sales) {
        $.getScript('https://www.gstatic.com/charts/loader.js', function() {
            google.charts.load("current", {
                packages: ["corechart"]
            });
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {
                var data = google.visualization.arrayToDataTable([
                    ['Year', 'Sales'],
                    ['2012', 1550000],
                    ['2013', 1400000],
                    ['2014', 1610000],
                    ['2015', 1320000],
                    ['2016', 1510000],
                    ['2017', sales]
                ]);
                var options = {
                    title: '롯데시네마 연도별 매출',
                    vAxis: {
                        minValue: 0
                    }
                };
                var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
                chart.draw(data, options);
            }
        });
    }
}

/*========= abb1-cookie =========
@AUTHOR : Hyeseon Yeom
@CREATE DATE : 2017-05-12
@UPDATE DATE : 2017-05-12
@DESC : Cookie 
=================================*/
abb1.cookie = {
    setCookie: function(name, value) {
        document.cookie = name + "=" + encodeURIComponent(value);
    },
    getCookie: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    },
    removeCookie: function(name) {
        abb1.cookie.setCookie(name, '', -1);
    }
}

/*========= abb1-controller =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-06
@UPDATE DATE : 2017-05-06
@DESC : controller
=================================*/
abb1.controller = (function() {
    var service, view, css, cookie;

    var onCreate = function() {
        service = $.javascript() + '/abb1.service.js';
        view = $.javascript() + '/abb1.view.js';
        css = $.javascript() + '/abb1.css.js';
        cookie = $.javascript() + '/util.cookie.js'
        setContentView();
    };

    var setContentView = function() {
        $.when(
            $.getScript(service),
            $.getScript(view),
            $.getScript(css),
            $.getScript(cookie),
            $.Deferred(function(deferred) {
                $(deferred.resolve);
            })
        ).done(function() {
            abb1.cookie.setCookie('login', 'N');
            indexTiles();
        });
    };

    // 로그인 판별 로직
    var checkLogin = function() {
        if (abb1.cookie.getCookie('login') === 'N') {
            $('#logout').attr('id', 'login').text('로그인');
            $('#mycinema').attr('id', 'register').text('회원가입');
            $('#FAQ_login').attr('id', 'FAQ');
        } else {
            $('#login').attr('id', 'logout').text('로그아웃');
            $('#register').attr('id', 'mycinema').text('마이시네마');
            $('#FAQ').attr('id', 'FAQ_login');
        }
    };

    // 헤더
    var header = function() {
        $('#header').html(headerView());
    };

    // GNB
    var gnb = function() {
        $('#gnb').html(gnbView());
        gnbCss();
    };

    // 푸터
    var footer = function() {
        $('#footer').html(footerView());
        $('#footer').find('div:first-child').css('padding-top', '40px').css('background', '#f9f6ec');
    };

    // 타일즈 인덱스
    var indexTiles = function() {
        header();
        gnb();
        footer();
        $('#home').on('click', function() {
            index();
        });
        if (abb1.cookie.getCookie('id') === null || abb1.cookie.getCookie('id') === '') {
            $('#logout').attr('id', 'login').text('로그인');
            $('#mycinema').attr('id', 'register').text('회원가입');
            $('#FAQ_login').attr('id', 'FAQ');
        } else if (abb1.cookie.getCookie('id') != null || abb1.cookie.getCookie('id') != '') {
            abb1.cookie.setCookie('login', 'Y');
            $('#login').attr('id', 'logout').text('로그아웃');
            $('#register').attr('id', 'mycinema').text('마이시네마');
            $('#FAQ').attr('id', 'FAQ_login');
        } else if (abb1.cookie.getCookie('login') === 'N') {
            $('#logout').attr('id', 'login').text('로그인');
            $('#mycinema').attr('id', 'register').text('회원가입');
            $('#FAQ_login').attr('id', 'FAQ');
        }
        if (abb1.cookie.getCookie('id') === '' || abb1.cookie.getCookie('id') === null) {
            $('#wrapper').html(indexView());
        } else {
            $('#wrapper').html(indexLoginView());
        }
        if (abb1.cookie.getCookie('gender') != '') {
            $.ajax({
                url: $.context() + "/get/gender/movie",
                method: "POST",
                data: JSON.stringify({
                    gender: abb1.cookie.getCookie('gender')
                }),
                dataType: "json",
                contentType: "application/json",
                success: function(data) {
                    var movieSeqList = [];
                    var movSeqArr = new Array(data.movieList.length);
                    var movCountArr = new Array(data.movieList.length);
                    var movTitleArr = [];
                    var movGradeArr = [];
                    for (var i = 0; i < movSeqArr.length; i++) {
                        movSeqArr[i] = data.movieList[i].seq;
                        movCountArr[i] = 0;
                        movTitleArr[i] = data.movieList[i].title;
                        movGradeArr[i] = data.movieList[i].grade;
                    }
                    $.each(data.list, function(i, movSeq) {
                        for (var i = 0; i < movSeqArr.length; i++) {
                            if (movSeqArr[i] == movSeq) {
                                movCountArr[i]++;
                                break;
                            }
                        }
                    });
                    var movSeqJsonArr = [];
                    for (var i = 0; i < movSeqArr.length; i++) {
                        var json = {
                            seq: movSeqArr[i],
                            count: movCountArr[i],
                            title: movTitleArr[i],
                            grade: movGradeArr[i]
                        };
                        movSeqJsonArr.push(json);
                    }
                    for (k = 0; k < movSeqJsonArr.length; k++) {
                        for (j = k + 1; j < movSeqJsonArr.length; j++) {
                            if (movSeqJsonArr[k].count * 1 <= movSeqJsonArr[j].count * 1) {
                                var temp = movSeqJsonArr[k];
                                movSeqJsonArr[k] = movSeqJsonArr[j];
                                movSeqJsonArr[j] = temp;
                            }
                        }
                    }

                    var view = '';
                    for (var i = 0; i < 8; i++) {
                        var t = movSeqJsonArr[i];
                        view += '<li><a id="movie' + t.seq + '" class="goMovie" href="#"><em style="padding: 0 20px;">' + (i + 1) + '위 </em>' +
                            '<span class="abb1_rank_grade" style="background: url(resources/img/movie/grade_' + t.grade + '.png);"></span>' +
                            '<span class="abb1_rank_moviename">' + t.title + '</span>' +
                            '</a>' +
                            '</li>';
                    }
                    var gender = (abb1.cookie.getCookie('gender') == 'M') ? '남성' : '여성';
                    $('#gender_title').html(gender + ' 예매 순위');
                    $('#rank_by_gender').html(view);


                },
                error: function(xhr, status, msg) {

                }
            });
        }
        $.ajax({
            url: $.context() + "/get/movie/list",
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

                for (var i = 0; i < 8; i++) {
                    var t = avgSort(statJsonArr)[i];
                    rankLiByGpa += '<li><a id="movie' + t.seq + '" class="goMovie" href="#"><em style="padding: 0 5px;">' + (i + 1) + '. </em>' +
                        '<span class="abb1_rank_grade" style="background: url(resources/img/movie/grade_' + t.grade + '.png);"></span>' +
                        '<span class="abb1_rank_moviename">' + t.title + '</span>' +
                        '</a>' +
                        '<em>☆ ' + t.avg + '</em>' +
                        '</li>';
                }


                $('#rank_ul').html(rankLiByTicket);
                findYoutube(data);
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
                });
            },
            error: function(xhr, status, msg) {}
        });
        indexTilesClickEvent();
    };

    // 타일즈 인덱스 클릭 이벤트
    function indexTilesClickEvent() {
        $('#FAQ_login').on('click', function() {
            necessary();
            boardMain(1);
            indexTilesClickEvent();
        });
        $('#reservation').find('a').on('click', function() {
            necessary();
            reservationMain();
            indexTilesClickEvent();
        });
        $('#login').on('click', function() {
            necessary();
            customerLogin();
            indexTilesClickEvent();
        });
        $('#register').on('click', function() {
            necessary();
            customerSignUp();
            indexTilesClickEvent();
        });
        $('#ticketing').on('click', function() {
            necessary();
            reservationMain();
            indexTilesClickEvent();
        });
        $('#movie').on('click', function() {
            necessary();
            movieMain();
            indexTilesClickEvent();
        });
        $('#multiplex').on('click', function() {
            necessary();
            multiplexMain(1);
            indexTilesClickEvent();
        });
        $('#FAQ').on('click', function() {
            boardMain(1);
            indexTilesClickEvent();
        });
        $('#logout').on('click', function() {
            abb1.cookie.removeCookie('id');
            abb1.cookie.removeCookie('pw');
            abb1.cookie.removeCookie('name');
            abb1.cookie.removeCookie('gender');
            abb1.cookie.removeCookie('birth');
            abb1.cookie.removeCookie('phone');
            abb1.cookie.removeCookie('email');
            abb1.cookie.removeCookie('point');
            abb1.cookie.removeCookie('address');
            abb1.cookie.setCookie('login', 'N');
            index();
            indexClickEvent();
        });
        $('#mycinema').on('click', function() {
            if (abb1.cookie.getCookie('id') === null || abb1.cookie.getCookie('id') === '') {
                customerSignUp();
            } else if (abb1.cookie.getCookie('id') != null || abb1.cookie.getCookie('id') != '') {
                customerMypage();
            } else if (abb1.cookie.getCookie('login') === 'N') {
                customerSignUp();
            }
            indexClickEvent();
        });
    };

    // 각 함수에서 사용되는 함수
    var necessary = function() {
        header();
        gnb();
        footer();
        $('#home').on('click', function() {
            index();
        });
        checkLogin();
    };

    // 인덱스
    var index = function() {
        if (abb1.cookie.getCookie('login') === 'N') {
            $('#wrapper').html(indexView());
        } else {
            $('#wrapper').html(indexLoginView());
        }
        if (abb1.cookie.getCookie('gender') != '') {
            $.ajax({
                url: $.context() + "/get/gender/movie",
                method: "POST",
                data: JSON.stringify({
                    gender: abb1.cookie.getCookie('gender')
                }),
                dataType: "json",
                contentType: "application/json",
                success: function(data) {
                    var movieSeqList = [];
                    var movSeqArr = new Array(data.movieList.length);
                    var movCountArr = new Array(data.movieList.length);
                    var movTitleArr = [];
                    var movGradeArr = [];
                    for (var i = 0; i < movSeqArr.length; i++) {
                        movSeqArr[i] = data.movieList[i].seq;
                        movCountArr[i] = 0;
                        movTitleArr[i] = data.movieList[i].title;
                        movGradeArr[i] = data.movieList[i].grade;
                    }
                    $.each(data.list, function(i, movSeq) {
                        for (var i = 0; i < movSeqArr.length; i++) {
                            if (movSeqArr[i] == movSeq) {
                                movCountArr[i]++;
                                break;
                            }
                        }
                    });
                    var movSeqJsonArr = [];
                    for (var i = 0; i < movSeqArr.length; i++) {
                        var json = {
                            seq: movSeqArr[i],
                            count: movCountArr[i],
                            title: movTitleArr[i],
                            grade: movGradeArr[i]
                        };
                        movSeqJsonArr.push(json);
                    }
                    for (k = 0; k < movSeqJsonArr.length; k++) {
                        for (j = k + 1; j < movSeqJsonArr.length; j++) {
                            if (movSeqJsonArr[k].count * 1 <= movSeqJsonArr[j].count * 1) {
                                var temp = movSeqJsonArr[k];
                                movSeqJsonArr[k] = movSeqJsonArr[j];
                                movSeqJsonArr[j] = temp;
                            }
                        }
                    }

                    var view = '';
                    for (var i = 0; i < 8; i++) {
                        var t = movSeqJsonArr[i];
                        view += '<li><a id="movie' + t.seq + '" class="goMovie" href="javascript:void(0)"><em style="padding: 0 20px;">' + (i + 1) + '위 </em>' +
                            '<span class="abb1_rank_grade" style="background: url(resources/img/movie/grade_' + t.grade + '.png);"></span>' +
                            '<span class="abb1_rank_moviename">' + t.title + '</span>' +
                            '</a>' +
                            '</li>';
                    }
                    var gender = (abb1.cookie.getCookie('gender') == 'M') ? '남성' : '여성';
                    $('#gender_title').html(gender + ' 예매 순위');
                    $('#rank_by_gender').html(view);


                },
                error: function(xhr, status, msg) {

                }
            });
        }
        if (abb1.cookie.getCookie('login') === 'N') {
            $('#logout').attr('id', 'login').text('로그인');
            $('#mycinema').attr('id', 'register').text('회원가입');
            $('#FAQ_login').attr('id', 'FAQ');
        } else {
            $('#login').attr('id', 'logout').text('로그아웃');
            $('#register').attr('id', 'mycinema').text('마이시네마');
            $('#FAQ').attr('id', 'FAQ_login');
        }
        $.ajax({
            url: $.context() + "/get/movie/list",
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

                for (var i = 0; i < 8; i++) {
                    var t = avgSort(statJsonArr)[i];
                    rankLiByGpa += '<li><a id="movie' + t.seq + '" class="goMovie" href="#"><em style="padding: 0 5px;">' + (i + 1) + '. </em>' +
                        '<span class="abb1_rank_grade" style="background: url(resources/img/movie/grade_' + t.grade + '.png);"></span>' +
                        '<span class="abb1_rank_moviename">' + t.title + '</span>' +
                        '</a>' +
                        '<em>☆ ' + t.avg + '</em>' +
                        '</li>';
                }
                $('#rank_ul').html(rankLiByTicket);
                findYoutube(data);
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
                });
            },
            error: function(xhr, status, msg) {}
        });
        indexClickEvent();
    };

    // 인덱스 내에서 클릭하는 슬라이드 이벤트
    var indexSlideClick = function(add, movie_arr) {
        var arr = reverseArr(movie_arr, 8);
        $('#prev').on('click', function() {
            var slide = indexSlideLi();
            add -= 4;
            if (add == -4) {
                add = 4;
            }
            $('#slidePoster').find('ul').html(slide);
            for (var i = 0; i < 4; i++) {
                $('#slide' + i).html('<img src="' + $.image() + '/movie/' + arr[i + add].pic_main + '" alt="" width="188px" height="274px">');
            }
            indexSlideClick(add, movie_arr);
            indexSlideCss();
            $('.goMovieDetail').on('click', function() {
                var rarr = reverseArr(movie_arr, 8);
                var i = $(this).attr('id').split('slide')[1];
                movieDetail(rarr[(i * 1 + add * 1)].seq);
            });
        });
        $('#next').on('click', function() {
            var slide = indexSlideLi();
            add += 4;
            if (add >= 8) {
                add = 0;
            }
            $('#slidePoster').find('ul').html(slide);
            for (var i = 0; i < 4; i++) {
                $('#slide' + i).html('<img src="' + $.image() + '/movie/' + arr[i + add].pic_main + '" alt="" width="188px" height="274px">');
            }
            indexSlideClick(add, movie_arr);
            indexSlideCss();
            $('.goMovieDetail').on('click', function() {
                var rarr = reverseArr(movie_arr, 8);
                var i = $(this).attr('id').split('slide')[1];
                movieDetail(rarr[(i * 1 + add * 1)].seq);
            });
        });
    };

    // 인덱스 내에서 사용하는 클릭 이벤트 집합
    function indexClickEvent() {
        checkLogin();
        $('.goMovie').on('click', function() {
            var id = $(this).attr('id');
            var num = id.split('movie')[1];
            movieDetail(num);
            indexClickEvent();
        });
        $('#FAQ').on('click', function() {
            boardMain(1);
            indexClickEvent();
        });
        $('#reservation').find('a').on('click', function() {
            reservationMain();
            indexClickEvent();
        });
        $('.goMovieDetail').on('click', function() {
            var rarr = reverseArr(data.movie_list, 8);
            var i = $(this).attr('id').split('slide')[1];
            movieDetail(rarr[(i * 1 + add * 1)].seq);
            indexClickEvent();
        });
        $('#reservation').find('a').on('click', function() {
            reservationMain();
            indexClickEvent();
        });
        $('#login').on('click', function() {
            customerLogin();
            indexClickEvent();
        });
        $('#logout').on('click', function() {
            abb1.cookie.removeCookie('id');
            abb1.cookie.removeCookie('pw');
            abb1.cookie.removeCookie('name');
            abb1.cookie.removeCookie('gender');
            abb1.cookie.removeCookie('birth');
            abb1.cookie.removeCookie('phone');
            abb1.cookie.removeCookie('email');
            abb1.cookie.removeCookie('point');
            abb1.cookie.removeCookie('address');
            abb1.cookie.setCookie('login', 'N');
            index();
            indexClickEvent();
        });
        $('#mycinema').on('click', function() {
            if (abb1.cookie.getCookie('id') === null || abb1.cookie.getCookie('id') === '') {
                customerSignUp();
            } else if (abb1.cookie.getCookie('id') != null || abb1.cookie.getCookie('id') != '') {
                customerMypage();
            } else if (abb1.cookie.getCookie('login') === 'N') {
                customerSignUp();
            }
            indexClickEvent();
        });
    };

    // 회원 로그인
    var customerLogin = function() {
        $('#wrapper').html(customerLoginView());
        customerLoginCss();
        var authId = $.cookie('authId');
        if (authId != undefined) {
            $('#customer_id').val(authId);
            $('#remember').prop("checked", true);
        }
        $('#login_btn').on('click', function(e) {
            if ($.trim($('#customer_id').val()) == '') {
                alert('아이디를 입력하세요.');
                return;
            } else if ($('#customer_pw').val() == '') {
                alert('비밀번호를 입력하세요.');
                return;
            } else {
                var checked = $("#remember").prop("checked");
                if (checked) {
                    $.cookie('authId', $("#customer_id").val());
                } else {
                    $.removeCookie("username");
                }
                e.preventDefault();
                $.ajax({
                    url: $.context() + '/login',
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
                            abb1.cookie.setCookie('id', data.customer.id);
                            abb1.cookie.setCookie('pw', data.customer.pw);
                            abb1.cookie.setCookie('name', data.customer.name);
                            abb1.cookie.setCookie('gender', data.customer.gender);
                            abb1.cookie.setCookie('birth', data.customer.birth);
                            abb1.cookie.setCookie('phone', data.customer.phone);
                            abb1.cookie.setCookie('email', data.customer.email);
                            abb1.cookie.setCookie('point', data.customer.point);
                            abb1.cookie.setCookie('address', data.customer.address);
                            abb1.cookie.setCookie('login', 'Y');
                            index();
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
        $('#findId').on('click', function() {
            customerFindId();
        });
        $('#findPw').on('click', function() {
            customerFindPw();
        });
        $('#register2').on('click', function() {
            customerSignUp();
        });
    };

    // 회원 아이디 찾기 페이지
    var customerFindId = function() {
        var emailRandom = '';
        $('#wrapper').html(customerFindIdView());
        customerFindIdCss();
        $('#cancel').on('click', function() {
            customerLogin();
        });
        $('#email').keyup(function() {
            customerCheckEmail();
        });
        $('#check_email').keyup(function() {
            customerCorrectEmail(emailRandom);
        });
        $('#customer_send_email').on('click', function() {
            if (checkEmail($('#email').val())) {
                $.ajax({
                    url: $.context() + '/get/email/auth',
                    method: "POST",
                    data: $('#email').val(),
                    dataType: "json",
                    contentType: "application/json",
                    success: function(data) {
                        emailRandom = data.random;
                        alert('해당 email로 인증번호를 전송했습니다.');
                    },
                    error: function(xhr, status, msg) {
                        alert('실패 이유:' + msg);
                    }
                });
            } else {
                alert('이메일이 양식에 맞지 않습니다.');
            }
        });
        $('#confirm').on('click', function() {
            if (emailRandom != '' && $('#check_email').val() == emailRandom && checkName($('#name').val())) {
                $.ajax({
                    url: $.context() + "/get/customer/find",
                    method: "POST",
                    data: JSON.stringify({
                        name: $('#name').val(),
                        email: $('#email').val()
                    }),
                    dataType: "json",
                    contentType: "application/json",
                    success: function(data) {
                        var cname = $('#name').val();
                        var cemail = $('#email').val();
                        if (data.customer.name == cname && data.customer.email == cemail) {
                            customerFindIdSuccess(data.customer);
                        }
                    },
                    error: function(xhr, status, msg) {
                        alert(msg);
                    }
                });
            } else {
                alert('입력하신 정보가 잘못됬습니다.');
            }

        });
    };

    // 회원 아이디 찾기 성공 후
    var customerFindIdSuccess = function(customer) {
        $('#wrapper').html(customerFindIdSuccessView());
        customerFindIdSuccessCss();
        $('#customer_id').html(customer.id);
        $('#confirm').on('click', function() {
            customerLogin();
        });
    };

    // 회원 비밀번호 찾기 페이지
    var customerFindPw = function() {
        var emailRandom = '';
        $('#wrapper').html(customerFindPwView());
        customerFindPwCss();
        $('#cancel').on('click', function() {
            customerLogin();
        });
        $('#email').keyup(function() {
            customerCheckEmail();
        });
        $('#check_email').keyup(function() {
            customerCorrectEmail(emailRandom);
        });
        $('#customer_send_email').on('click', function() {
            if (checkEmail($('#email').val())) {
                $.ajax({
                    url: $.context() + '/get/email/auth',
                    method: "POST",
                    data: $('#email').val(),
                    dataType: "json",
                    contentType: "application/json",
                    success: function(data) {
                        emailRandom = data.random;
                        alert('해당 email로 인증번호를 전송했습니다.');
                    },
                    error: function(xhr, status, msg) {
                        alert('실패 이유:' + msg);
                    }
                });
            } else {
                alert('이메일이 양식에 맞지 않습니다.');
            }
        });
        $('#confirm').on('click', function() {
            if (emailRandom != '' && $('#check_email').val() == emailRandom && checkId($('#id').val())) {
                $.ajax({
                    url: $.context() + "/get/customer/find",
                    method: "POST",
                    data: JSON.stringify({
                        id: $('#id').val(),
                        email: $('#email').val()
                    }),
                    dataType: "json",
                    contentType: "application/json",
                    success: function(data) {
                        var cid = $('#id').val();
                        var cemail = $('#email').val();
                        if (data.customer.id == cid && data.customer.email == cemail) {
                            customerFindPwSuccess(data.customer);
                        }
                    },
                    error: function(xhr, status, msg) {
                        alert(msg);
                    }
                });
            } else {
                alert('입력하신 정보가 잘못됬습니다.');
            }
        });
    };

    // 회원 비밀번호 찾기 성공 후
    var customerFindPwSuccess = function(customer) {
        $('#wrapper').html(customerFindPwSuccessView());
        customerFindPwSuccessCss();
        $('#customer_id').html(customer.id);
        $('#cancel').on('click', function() {
            customerLogin();
        });
        $('#pw').keyup(function() {
            customerCheckPw();
        });
        $('#check_pw').keyup(function() {
            customerCorrectPw();
        });
        $('#confirm').on('click', function() {
            if (checkPw($('#pw').val()) && $('#pw').val() === $('#check_pw').val()) {
                $.ajax({
                    url: $.context() + "/put/customer",
                    method: "POST",
                    data: JSON.stringify({
                        id: customer.id,
                        pw: $('#pw').val()
                    }),
                    dataType: "json",
                    contentType: "application/json",
                    success: function(data) {
                        if (data.result == 1) {
                            alert('비밀번호가 변경되었습니다.');
                            customerLogin();
                        } else {
                            alert('변경에 실패하였습니다.');
                        }
                    },
                    error: function(xhr, status, msg) {
                        alert(msg);
                    }
                });
            } else {
                alert('입력하신 정보가 잘못됬습니다.');
            }
        });
    };

    // 회원 마이페이지
    var customerMypage = function() {
        $('#wrapper').html(customerMypageView());
        $.ajax({
            url: $.context() + '/get/reservation/customer',
            method: 'POST',
            data: JSON.stringify({
                id: abb1.cookie.getCookie('id')
            }),
            dataType: 'json',
            contentType: 'application/json',
            success: function(data) {
                $('#point').text(abb1.cookie.getCookie('point'));
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
                        view = '<div id="mypage_table' + i + '" style="margin-top: 5px;margin-bottom: 5px;margin-left: 20px;">   <table style="width: 880px;">' +
                            '   <tr>' +
                            '      <td id="movie_img' + i + '" rowspan="7" style="padding-left: 12px;"><span id="reservation_pic' + i + '"><img id="movie_poster' + i + '" src="' + $.image() + '/movie/' + info.movPicMain + '" width="140px" height="200px" alt="" /></span></td>' +
                            '      <td><span id="reservation_no' + i + '"><strong>예매번호</strong></span></td>' +
                            '      <td id="reservation_number' + i + '">' + info.resId + '</td>' +
                            '   </tr>' +
                            '   <tr>' +
                            '      <td><strong>예매일</strong></td>' +
                            '      <td colspan="2" id="reservation_date' + i + '">' + info.resRegDate + '</td>' +
                            '   </tr>' +
                            '   <tr>' +
                            '      <td><strong>사용상태</strong></td>' +
                            '      <td colspan="2" id="canceled' + i + '">' + canceled + '</td>' +
                            '   </tr>' +
                            '   <tr>' +
                            '      <td><strong>예매내역</strong></td>' +
                            '      <td colspan="2" id="movie_name' + i + '">' + info.movTitle + '</td>' +
                            '   </tr>' +
                            '		<tr>' +
                            '			<td style="padding-right: 20px;"><strong>상영일</strong></td>' +
                            '			<td colspan="2" id="show_info' + i + '">' + info.shoShowDate + ' | 상영시간 ' + info.shoStartTime + ' ~ ' + info.shoEndTime + ' | 상영관 ' + info.mulName + ', ' + info.theName + '</td>' +
                            '		</tr>' +
                            '		<tr>' +
                            '			<td><strong>관람인원</strong></td>' +
                            '			<td colspan="2" id="customer_info' + i + '">성인' + info.resHcount + ' | 좌석 ' + info.resId.split('-')[3] + '</td>' +
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
                            url: $.context() + "/put/customer/point",
                            method: "POST",
                            data: JSON.stringify({
                                customer_id: abb1.cookie.getCookie('id'),
                                point: abb1.cookie.getCookie('point'),
                                sum: 'false'
                            }),
                            dataType: "json",
                            contentType: "application/json",
                            success: function(data) {
                                if (data.result == 1) {
                                    abb1.cookie.setCookie('point', data.point);
                                }
                            },
                            error: function(xhr, status, msg) {
                                alert(msg);
                            }
                        });
                        $.ajax({
                            url: $.context() + '/put/canceled',
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

    // 회원 마이페이지 취소내역 
    var customerMypageCancel = function() {
        $('#wrapper').html(customerMypageCancelView());
        $.ajax({
            url: $.context() + '/get/cancel',
            method: 'POST',
            data: JSON.stringify({
                id: abb1.cookie.getCookie('id')
            }),
            dataType: 'json',
            contentType: 'application/json',
            success: function(data) {
                $('#point').text(abb1.cookie.getCookie('point'));
                var view = '';
                if (data.infoList.length === 0) {
                    $('#mypage_reservation').append('<h5 id="default_msg">취소내역이 없습니다.</h5>');
                } else {
                    $.each(data.infoList, function(i, info) {
                        var canceled = '';
                        if (info.resCanceled === 'N') {
                            canceled = '취소가능';
                        } else if (info.resCanceled === 'Y') {
                            canceled = '취소완료';
                        } else {
                            canceled = '사용';
                        }
                        view = '<div id="mypage_table' + i + '" style="margin-top: 5px;margin-bottom: 5px;margin-left: 20px;">   <table>' +
                            '   <tr>' +
                            '      <td id="movie_img' + i + '" rowspan="5" style="padding-right: 25px;"><span id="reservation_pic' + i + '"><img id="movie_poster' + i + '" src="' + $.image() + '/movie/' + info.movPicMain + '" width="115px" height="150px" alt="" /></span></td>' +
                            '      <td><span id="reservation_no' + i + '"><strong>예매번호</strong></span></td>' +
                            '      <td id="reservation_number' + i + '">' + info.resId + '</td>' +
                            '   </tr>' +
                            '   <tr>' +
                            '      <td><strong>예매일</strong></td>' +
                            '      <td colspan="2" id="reservation_date' + i + '">' + info.resRegDate + '</td>' +
                            '   </tr>' +
                            '   <tr>' +
                            '      <td><strong>사용상태</strong></td>' +
                            '      <td id="canceled' + i + '" colspan="2">' + canceled + '</td>' +
                            '   </tr>' +
                            '   <tr>' +
                            '      <td><strong>예매내역</strong></td>' +
                            '      <td colspan="2" id="movie_name' + i + '">' + info.movTitle + '</td>' +
                            '   </tr>' +
                            '   <tr>' +
                            '      <td id="price_title' + i + '" style="padding-right: 20px;"><strong>총 결제 금액</strong></td>' +
                            '      <td colspan="2" id="reservation_price' + i + '">' + info.resPrice + '원</td>' +
                            '   </tr>' +
                            '</table></div>';
                        if (i == 0) {
                            $('#mypage_reservation').html(view);
                        } else {
                            $('#mypage_reservation').append(view);
                        }
                    });
                }
                customerMypageCss();
            },
            error: function(xhr, status, msg) {
                alert('실패 이유: ' + msg)
            }
        });
        $('#mypageReservationList').on('click', function() {
            customerMypage();
        });
        $('#mypageMyInfo').on('click', function() {
            customerMypageInfo();
        });
    };

    // 회원 마이페이지 정보 변경
    var customerMypageInfo = function() {
        $('#wrapper').html(customerMypageInfoView());
        customerMypageInfoCss();
        $('#updateInfo').on('click', function() {
            customerUpdateInfoChPw();
        });
        $('#withdrawal').on('click', function() {
            customerWithdrawal();
        });
        $('#mypageReservationList').on('click', function() {
            customerMypage();
        })
    };

    // 회원가입
    var customerSignUp = function() {
        var emailRandom = '';
        $('#wrapper').html(customerSignUpView());
        customerSignUpCss();

        $('#id').keyup(function() {
            var id = $('#id').val();
            $.ajax({
                url: $.context() + '/check/id',
                method: 'POST',
                data: JSON.stringify({
                    id: id
                }),
                dateType: 'json',
                contentType: 'application/json',
                success: function(data) {
                    customerCheckId(data);
                },
                error: function(xhr, status, msg) {
                    alert('실패 이유: ' + msg);
                }
            });
        });
        $('#pw').keyup(function() {
            customerCheckPw();
        });
        $('#check_pw').keyup(function() {
            customerCorrectPw();
        });
        $('#name').keyup(function() {
            customerCheckName();
        });
        $('#birth').keyup(function() {
            customerCheckBirth();
        });
        $('#phone').keyup(function() {
            customerCheckPhone();
        });
        $('#detail_address').keyup(function() {
            customerCheckAddress();
        });
        $('#email').keyup(function() {
            customerCheckEmail();
        });
        $('#send_code').on('click', function(e) {
            $.ajax({
                url: $.context() + '/get/email/auth',
                method: "POST",
                data: $('#email').val(),
                dataType: "json",
                contentType: "application/json",
                success: function(data) {
                    emailRandom = data.random;
                    alert('해당 email로 인증번호를 전송했습니다.');
                },
                error: function(xhr, status, msg) {
                    alert('실패 이유:' + msg);
                }
            });
        });
        $('#check_email').keyup(function() {
            customerCorrectEmail(emailRandom);
        });

        $('#find_postcode').postcodifyPopUp({
            insertAddress: "#address"
        });
        $('#gender_selection').html('<td><div class="abb1_signup_settings abb1_sigunup_form_gender"><input type="radio" id="male" name="gender" value="M" checked="checked"><label id="manLb" for="man" class="unselected">남자</label></div></td><td><div class="abb1_signup_settings abb1_sigunup_form_gender"><input type="radio" id="female" name="gender" value="F"><label id="womanLb" for="woman" class="unselected">여자</label></div></td>');
        genderChecked();
        $('#signup_finish').on('click', function(e) {
            var id = $('#id').val();
            var pw = $('#pw').val();
            var name = $('#name').val();
            var birth = $('#birth').val();
            var phone = $('#phone').val();
            var email = $('#email').val();
            var gender = $(':radio[name="gender"]:checked').val();
            var address = $('#address').val() + $('#detail_address').val();
            var text = (nullCheck(id)) ? '' : '필수 값입니다.';
            $('#result_id_msg').text(text).addClass('notRegExp');
            text = (nullCheck(pw)) ? '' : '필수 값입니다.';
            $('#result_pw_msg').text(text).addClass('notRegExp');
            text = (nullCheck(name)) ? '' : '필수 값입니다.';
            $('#result_name_msg').text(text).addClass('notRegExp');
            text = (nullCheck(birth)) ? '' : '필수 값입니다.';
            $('#result_birth_msg').text(text).addClass('notRegExp');
            text = (nullCheck(phone)) ? '' : '필수 값입니다.';
            $('#result_phone_msg').text(text).addClass('notRegExp');
            text = (nullCheck(email)) ? '' : '필수 값입니다.';
            $('#result_email_msg').text(text).addClass('notRegExp');
            text = (nullCheck(address)) ? '' : '필수 값입니다.';
            $('#result_address_msg').text(text).addClass('notRegExp');
            if (checkId(id) && checkPw(pw) && checkName(name) && checkBirth(birth) && checkPhone(phone) && checkEmail(email) && nullCheck(address) && ($('#pw').val() === $('#check_pw').val()) && (emailRandom === $('#check_email').val())) {
                $.ajax({
                    url: $.context() + '/post/customer',
                    method: 'POST',
                    data: JSON.stringify({
                        id: id,
                        pw: pw,
                        name: name,
                        birth: birth,
                        phone: phone,
                        gender: gender,
                        email: email,
                        address: $('#address').val() + '/' + $('#detail_address').val()
                    }),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(data) {
                        if (data.result === 1) {
                            alert('가입 성공!');
                            $('#wrapper').html(customerSignUpSuccessView());
                            $('#customer_name').text(name);
                            customerSignUpSuccessCss();
                            $('#go_login').on('click', function() {
                                customerLogin();
                            });
                        }
                    },
                    error: function(xhr, status, msg) {
                        alert('가입 실패 이유: ' + msg);
                    }
                });
            } else {
                alert('필수 값이 입력되지 않았습니다.');
            }
        });
    };

    // 성별 클릭 함수
    function genderChecked() {
        $('label[for=woman]').on('click', function() {
            $('#gender_selection').html('<td><div class="abb1_signup_settings abb1_sigunup_form_gender"><input type="radio" id="male" name="gender" value="M"><label id="manLb" for="man" class="unselected">남자</label></div></td>               <td><div class="abb1_signup_settings abb1_sigunup_form_gender"><input type="radio" id="female" name="gender" value="F" checked="checked"><label id="womanLb" for="woman" class="selected">여자</label></div></td>');
            genderChecked();
        });
        $('label[for=man]').on('click', function() {
            $('#gender_selection').html('<td><div class="abb1_signup_settings abb1_sigunup_form_gender"><input type="radio" id="male" name="gender" value="M" checked="checked"><label id="manLb" for="man" class="selected">남자</label></div></td>               <td><div class="abb1_signup_settings abb1_sigunup_form_gender"><input type="radio" id="female" name="gender" value="F"><label id="womanLb" for="woman" class="unselected">여자</label></div></td>');
            genderChecked();
        });
    }

    // 회원정보 변경
    var customerUpdateInfo = function() {
        $('#wrapper').html(customerUpdateInfoView());
        customerUpdateInfoCss();
        $('#id').text(abb1.cookie.getCookie('id'));
        $('#name').text(abb1.cookie.getCookie('name'));
        $('#birth').text(abb1.cookie.getCookie('birth'));
        var phone = abb1.cookie.getCookie('phone');
        $('#phone').attr('placeholder', abb1.cookie.getCookie('phone'));
        $('#gender').text(abb1.cookie.getCookie('gender') === 'M' ? '남자' : '여자');
        $('#address').attr('placeholder', abb1.cookie.getCookie('address').split('/')[0]);
        $('#detail_address').attr('placeholder', abb1.cookie.getCookie('address').split('/')[1]);
        $('#pw').keyup(function() {
            customerCheckPw();
        });
        $('#check_pw').keyup(function() {
            customerCorrectPw();
        });
        $('#phone').keyup(function() {
            customerCheckPhone();
        });
        $('#find_postcode').postcodifyPopUp({
            insertAddress: "#address"
        });
        $('#confirm').on('click', function(e) {
            e.preventDefault();
            var pw = ($('#pw').val() === '') ? abb1.cookie.getCookie('pw') : $('#pw').val();
            var phone = ($('#phone').val() === '') ? abb1.cookie.getCookie('phone') : $('#phone').val();
            var address = ($('#address').val() + $('#detail_address').val() === '') ? abb1.cookie.getCookie('address') : $('#address').val() + '/' + $('#detail_address').val();
            $.ajax({
                url: $.context() + '/put/customer',
                method: 'POST',
                data: JSON.stringify({
                    id: abb1.cookie.getCookie('id'),
                    pw: pw,
                    phone: phone,
                    address: address
                }),
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {
                    if (data.result === 1) {
                        abb1.cookie.setCookie('pw', data.pw);
                        abb1.cookie.setCookie('phone', data.phone);
                        abb1.cookie.setCookie('address', data.address);
                        customerMypageInfo();
                    }
                },
                error: function(xhr, status, msg) {
                    alert('업데이트 실패 이유:' + msg);
                }
            });
        });
        $('#cancel').on('click', function() {
            customerMypageInfo();
        });
    };

    // 회원 정보 변경 시 비밀번호 입력 페이지
    var customerUpdateInfoChPw = function() {
        $('#wrapper').html(customerUpdateInfoChPwView());
        customerUpdateInfoChPwCss();
        $('#id').text(abb1.cookie.getCookie('id'));
        $('#go_update_info').on('click', function() {
            if ($('#pw').val() === abb1.cookie.getCookie('pw')) {
                customerUpdateInfo();
            } else {
                alert('비밀번호를 다시 확인하세요.');
                return;
            }
        });
        $('#cancel').on('click', function() {
            customerMypageInfo();
        });
    };

    // 회원 탈퇴
    var customerWithdrawal = function() {
        $('#wrapper').html(customerWithdrawalView());
        customerWithdrawalCss();
        $('#withdrawal_btn').on('click', function(e) {
            e.preventDefault();
            $.ajax({
                url: $.context() + '/delete/customer',
                method: 'POST',
                data: JSON.stringify({
                    id: abb1.cookie.getCookie('id')
                }),
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {
                    if (data.result === 1) {
                        abb1.cookie.removeCookie('id');
                        abb1.cookie.removeCookie('pw');
                        abb1.cookie.removeCookie('name');
                        abb1.cookie.removeCookie('gender');
                        abb1.cookie.removeCookie('birth');
                        abb1.cookie.removeCookie('phone');
                        abb1.cookie.removeCookie('email');
                        abb1.cookie.removeCookie('point');
                        abb1.cookie.removeCookie('address');
                        abb1.cookie.setCookie('login', 'N');
                        $('#comment').text('지금까지 이용해주셔서 감사드립니다!');
                        $('#ul_btn').html('<li>' +
                            '<a href="' + $.context() + '"><input type="button" value="확인"  /></a>' +
                            '</li>');
                    }
                },
                error: function(xhr, status, msg) {
                    alert('탈퇴 실패 이유:' + msg);
                }
            });
        });
        $('#cancel').on('click', function() {
            customerMypageInfo();
        });
    };

    // 관리자 인덱스
    var adminIndex = function() {
        $('#header').html('');
        $('#gnb').html(adminGnbView());
        $('#wrapper').html(adminIndexView());
        $.ajax({
            url: $.context() + '/get/admin/index/info',
            method: 'POST',
            data: JSON.stringify({
                date: getTodayValue()
            }),
            dataType: 'json',
            contentType: 'application/json',
            success: function(data) {
                $('#today_reservation').text(data.reservation);
                $('#the_number_of_multiplex').text(data.multiplex);
                $('#the_number_of_movie').text(data.movie);
                $('#today_article').text(data.article);
                abb1.api.googleAreaChart(data.sales);
            },
            error: function(xhr, status, msg) {
                alert('실패 이유:' + msg);
            }
        });
        $('#footer').html('');
        adminIndexCss();
        $('#go_index').on('click', function() {
            index();
        });
        $('#admin_index').on('click', function() {
            adminIndex();
        });
        $('#admin_reservation').on('click', function() {
            adminReservation();
        });
        $('#manage_movie').on('click', function() {
            adminMovieManagement();
        });
        $('#regist_movie').on('click', function() {
            adminMovieRegister();
        });
        $('#manage_article').on('click', function() {
            adminBbsFaq(4);
        });
        $('#manage_notice').on('click', function() {
            adminBbsNotice(5);
        });
        $('#admin_gender').on('click', function() {
            adminStatistic();
        });
        $('#admin_member').on('click', function() {
            adminCustomer();
        });
        $('#manage_showing').on('click', function() {
            adminShowing();
        });
        $('#regist_showing').on('click', function() {
            adminShowingRegister();
        });
    };

    // 관리자 통계
    var adminStatistic = function() {
        $('#page-wrapper').html(adminStatisticView());
        $('#statistic_search_btn').on('click', function() {
            var group = $('#statistic_category').val();
            var name = $('#statistic_search_keyword').val();
            $('#chart_div').html(adminStatisticChartView());
            $.ajax({
                url: $.context() + '/get/admin/statistic',
                method: 'POST',
                data: JSON.stringify({
                    group: group,
                    name: name
                }),
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {
                    var male = data.maleP.toFixed(2);
                    var female = data.femaleP.toFixed(2);
                    if (male === '0.00' && female == '0.00') {
                        $('#chart_div').html('<div style="margin-top: 15px;margin-left: 15px;">예매 내역이 없습니다.</div>');
                    } else {
                        abb1.api.google(male * 1, female * 1);
                    }
                },
                error: function(xhr, status, msg) {
                    alert('실패 이유: ' + msg);
                }
            });
        });
        adminStatisticCss();
    };

    // 관리자 상영 정보 등록
    var adminShowingRegister = function(){
        $('#page-wrapper').html(adminShowingRegisterView());
        
        $('#show_date').keyup(function(){
             customerCheckRsShowDate();
        });
        
        $('#confirm').on('click',function(){
           if(!checkBirth($('#show_date').val())){
              alert('날짜 양식이 잘 못 됬습니다.');
           }else if($('#title').val()===''){
              alert('영화 제목이 입력되지 않았습니다.');
           }else{
              $.ajax({
                 url: $.context()+'/get/admin/showing/exist',
                   method: 'POST',
                   data: JSON.stringify({
                      multiplex: $('#multiplex').val(),
                      theater: $('#theater').val(),
                      showDate: $('#show_date').val(),
                      startTime: $('#start_time').val(),
                      title: $('#title').val()
                   }),
                   dataType: 'json',
                   contentType: 'application/json',
                   success: function(data){
                      if(data.exist==='none'){
                         var theaterSeq=data.theaterSeq;
                         var movieSeq=data.movieSeq;
                         var endTime=$('#start_time').val().split(':')[0]+':'+'15';
                         $.ajax({
                             url: $.context()+'/post/admin/showing',
                               method: 'POST',
                               data: JSON.stringify({
                                  theaterSeq: theaterSeq,
                                  showDate: $('#show_date').val(),
                                  startTime: $('#start_time').val(),
                                  endTime: endTime,
                                  movieSeq: movieSeq,
                                  price: 10000
                               }),
                               dataType: 'json',
                               contentType: 'application/json',
                               success: function(data){
                                  if(data.result===1){
                                     alert('영화 시간표 등록 완료');
                                     adminShowingRegister();
                                  }
                               },
                               error: function(xhr,status,msg){
                                  alert('실패 이유: '+msg);
                               }
                          });
                      }else if(data.exist==='exist'){
                         alert('해당시간에 등록된 영화가 있습니다.');
                      }
                   },
                   error: function(xhr,status,msg){
                      alert('실패 이유: '+msg);
                   }
              });
           }
        });
        adminMovieRegisterCss();
     };
     
     // 관리자 상영정보
     var adminShowing=function(){
        $('#page-wrapper').html(adminShowingView());
        adminCustomerCss();
        var theaterName=$('#theater').val();
        $('#customer_show_date').keyup(function(){
             customerCheckShowDate();
        });
        $('#customer_search_btn').on('click',function(){
           if(checkBirth($('#customer_show_date').val())){
              $.ajax({
                   url: $.context()+'/get/admin/showing',
                   method: 'POST',
                   data: JSON.stringify({
                      multiplex: $('#multiplex').val(),
                      theater: $('#theater').val(),
                      showDate: $('#customer_show_date').val(),
                      startTime: $('#customer_start_time').val()
                   }),
                   dataType: 'json',
                   contentType: 'application/json',
                   success: function(data){
                      console.log(data.list);
                      if(data.list.length===0){
                         $('#result').html(adminShowingNotResultView());
                      }else{
                         $('#result').html(adminShowingResultView());
                         $('#multiplexName').text(data.list[0].mulName);
                         $('#theaterName').text(data.list[0].theName);
                         $('#show_date').attr('placeholder',data.list[0].shoShowDate);
                         $('#start_time').attr('placeholder',data.list[0].shoStartTime);
                         $('#end_time').text(data.list[0].shoEndTime);
                         $('#title').text(data.list[0].movTitle);
                         $('#price').text(data.list[0].shoPrice);
                         $('#confirm').on('click',function(){
                            var title=data.list[0].movTitle;
                            var multiplex=data.list[0].mulName;
                            var theater=data.list[0].theName;
                            var seq=data.list[0].shoSeq;
                            var showDate=($('#show_date').val()==='')?data.list[0].shoShowDate:$('#show_date').val();
                            var startTime=($('#start_time').val()==='')?data.list[0].shoStartTime:$('#start_time').val();
                            var endTime=startTime.split(':')[0]+':'+'15';
                            $.ajax({
                                url: $.context()+'/get/admin/showing/exist',
                                  method: 'POST',
                                  data: JSON.stringify({
                                     multiplex: multiplex,
                                     theater: theater,
                                     showDate: showDate,
                                     startTime: startTime,
                                     title: title
                                  }),
                                  dataType: 'json',
                                  contentType: 'application/json',
                                  success: function(data){
                                     if(data.exist==='none'){
                                        $.ajax({
                                           url: $.context()+'/put/admin/showing',
                                           method: 'POST',
                                           data: JSON.stringify({
                                              seq: seq,
                                              showDate: showDate,
                                              startTime: startTime,
                                              endTime: endTime
                                           }),
                                           dataType: 'json',
                                           contentType: 'application/json',
                                           success: function(data){
                                              if(data.result===1){
                                                 alert('업데이트 성공');
                                                 adminShowing();
                                              }
                                           },
                                           error: function(xhr,status,msg){
                                              
                                           }
                                        });
                                     }else if(data.exist==='exist'){
                                        alert('해당시간에 등록된 영화가 있습니다.');
                                     }
                                     },
                                     error: function(){
                                        
                                     }
                                     });
                         });
                         adminMovieRegisterCss();  
                      }
                   },
                   error: function(xhr,status,msg){
                      alert('실패 이유: '+msg);
                   }
              }); 
              adminShowing();
           }else{
              alert('상영 날짜 양식이 잘 못 됬습니다.');
           }
        });
        $('#customer_id').on('click',function(){
           $('#result').html(adminShowingRegisterView());
           adminCustomerCss();
        });
     };

    // 관리자 영화 등록
    var adminMovieRegister = function() {
        $('#page-wrapper').html(adminMovieRegisterView());
        $('#confirm').on('click', function() {
            if ($('#trailer_main').is(':checked')) {
                $.ajax({
                    url: $.context() + '/put/admin/main/movie',
                    method: 'POST',
                    data: JSON.stringify({
                        value1: 0
                    }),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(data) {
                        if (data.result === 1) {
                            adminMovieRegister();
                        }
                    },
                    error: function(xhr, status, msg) {
                        alert('실패 이유: ' + msg);
                    }
                });
            }
            var trailer_main = ($('#trailer_main').is(':checked')) ? '1' : '0';
            $.ajax({
                url: $.context() + '/post/admin/movie',
                method: 'POST',
                data: JSON.stringify({
                    title: $('#title').val(),
                    grade: $('select[name=grade]').val(),
                    released: $('#released').val(),
                    info: $('#info').val(),
                    synopsys: $('#synopsys').val(),
                    name_director: $('#name_director').val(),
                    pic_director: $('#pic_director').val(),
                    name_actor: $('#name_actor').val(),
                    pic_actor: $('#pic_actor').val(),
                    pic_main: $('#pic_main').val(),
                    trailer_url: $('#trailer_url').val(),
                    trailer_main: trailer_main
                }),
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {
                    if (data.result === 1) {
                        alert('업로드 성공');
                        adminMovieRegister();
                    }
                },
                error: function(xhr, status, msg) {
                    alert('실패 이유: ' + msg);
                }
            });
        });
        adminMovieRegisterCss();
    };

    // 관리자 회원 관리
    var adminCustomer = function() {
        $('#page-wrapper').html(adminCustomerView());
        adminCustomerCss();
        $('#customer_search_btn').on('click', function() {
            $.ajax({
                url: $.context() + '/get/admin/customer',
                method: 'POST',
                data: JSON.stringify({
                    value: $('#customer_search_keyword').val()
                }),
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {
                    if (data.cusList.length === 0) {
                        $('#content').text('해당 회원이 존재하지 않습니다.');
                    } else {
                        $.each(data.cusList, function(i, cusInfo) {
                            var view = '                     <tr>' +
                                '                              <td><a id="customer_id" class="abb1_id" href="javascript:void(0)">' + cusInfo.id + '</a></td>' +
                                '                              <td>' + cusInfo.name + '</td>' +
                                '                              <td>' + cusInfo.gender + '</td>' +
                                '                              <td>' + cusInfo.birth + '</td>' +
                                '                           </tr>';
                            if (i === 0) {
                                $('#customer_list').html(view);
                            } else {
                                $('#customer_list').append(view);
                            }
                        });
                    }
                    $('.abb1_id').on('click', function() {
                        $('#result').html(adminCustomerResultView());
                        $.ajax({
                            url: $.context() + '/get/admin/customer/info',
                            method: 'POST',
                            data: JSON.stringify({
                                key: "id",
                                value: $(this).text()
                            }),
                            dataType: 'json',
                            contentType: 'application/json',
                            success: function(data) {
                            	//여기
                                $('#id').text(data.customer.id);
                                //$('#password').text(data.customer.password);
                                $('#name').attr('value', data.customer.name);
                                $('#birth').attr('value', data.customer.birth);
                                $('#phone').attr('value', data.customer.phone);
                                $('#gender').attr('value', data.customer.gender);
                                $('#address').attr('value', data.customer.address.split('/')[0]);
                                $('#address_detail').attr('value', data.customer.address.split('/')[1]);
                                $('#email').attr('value', data.customer.email);
                                $('#update').on('click', function() {
                                    $.ajax({
                                        url: $.context() + '/put/admin/customer',
                                        method: 'POST',
                                        data: JSON.stringify({
                                            id: $('#id').text(),
                                            //pw: $('#password').text(),
                                            name: $('#name').val(),
                                            birth: $('#birth').val(),
                                            phone: $('#phone').val(),
                                            gender: $('#gender').val(),
                                            email: $('#email').val()
                                        }),
                                        dataType: 'json',
                                        contentType: 'application/json',
                                        success: function(data) {
                                            if (data.result === 1) {
                                                alert('업데이트 성공');
                                                adminCustomer();
                                            }
                                        },
                                        error: function(xhr, status, msg) {
                                            alert('실패 이유: ' + msg);
                                        }
                                    });
                                });
                            },
                            error: function(xhr, status, msg) {
                                alert('실패 이유: ' + msg);
                            }
                        });
                        adminCustomerCss();
                    });
                },
                error: function(xhr, status, msg) {
                    alert('실패 이유: ' + msg);
                }
            });
            adminCustomer();
        });

        $('#customer_id').on('click', function() {
            $('#result').html(adminCustomerResultView());
            adminCustomerCss();
        });
        $('#customer_name').on('click', function() {
            $('#result').html(adminCustomerResultView());
            adminCustomerCss();
        });
    };

    // 관리자 예매 내역 관리
    var adminReservation = function() {
        $('#page-wrapper').html(adminReservationView());
        $('#reservation_search_btn').on('click', function() {
            $.ajax({
                url: $.context() + '/get/admin/reservation',
                method: 'POST',
                data: JSON.stringify({
                    category: $('#reservation_category').val(),
                    value: $('#reservation_search_keyword').val()
                }),
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {
                    var male = 0;
                    var female = 0;
                    $('#reservation_detail').html(adminReservationResultView());
                    if (data.reservationList.length === 0) {
                        $('#reservation_table').append('<tbody>' +
                            '                     <tr>' +
                            '                        <td colspan="6">예매내역이 없습니다.</td>' +
                            '                     </tr>' +
                            '                     </tbody>');
                    } else {
                        $.each(data.reservationList, function(i, list) {
                            $('#reservation_table').append('<tbody>' +
                                '                     <tr>' +
                                '                        <td>' + list.theName + '</td>' +
                                '                        <td>' + list.movTitle + '</td>' +
                                '                        <td>' + list.shoStartTime + '</td>' +
                                '                        <td>' + list.resId + '</td>' +
                                '                        <td>' + list.resRegDate + '</td>' +
                                '                        <td>' + list.resPrice + '</td>' +
                                '                     </tr>' +
                                '                     </tbody>');
                            if (list.cusGender === 'M') {
                                male++;
                            } else {
                                female++;
                            }
                        });
                    }
                    if (data.cancelList.length === 0) {
                        $('#cancel_list_table').append('<tbody>' +
                            '                     <tr>' +
                            '                        <td colspan="6">취소내역이 없습니다.</td>' +
                            '                     </tr>' +
                            '                     </tbody>');
                    } else {
                        $.each(data.cancelList, function(i, list) {
                            $('#cancel_list_table').append('<tbody>' +
                                '                     <tr>' +
                                '                        <td>' + list.theName + '</td>' +
                                '                        <td>' + list.movTitle + '</td>' +
                                '                        <td>' + list.shoStartTime + '</td>' +
                                '                        <td>' + list.resId + '</td>' +
                                '                        <td>' + list.resRegDate + '</td>' +
                                '                        <td>' + list.resPrice + '</td>' +
                                '                     </tr>' +
                                '                     </tbody>');
                        });
                    }
                    if (data.showList.length === 0) {
                        $('#movie_list_table').append('<tbody>' +
                            '                     <tr>' +
                            '                        <td colspan="6">상영정보가 없습니다.</td>' +
                            '                     </tr>' +
                            '                     </tbody>');
                    } else {
                        $.each(data.showList, function(i, list) {
                            $('#movie_list_table').append('<tbody>' +
                                '                     <tr>' +
                                '                        <td>' + list.theName + '</td>' +
                                '                        <td>' + list.movTitle + '</td>' +
                                '                        <td>' + list.shoStartTime + '</td>' +
                                '                     </tr>' +
                                '                     </tbody>');
                        });
                    }
                    adminReservationCss();
                    if (male != 0 || female != 0) {
                        var maleP = male / (male + female) * 100;
                        var femaleP = female / (male + female) * 100;
                        abb1.api.google2(maleP, femaleP);
                    }
                },
                error: function(xhr, status, msg) {
                    alert('실패 이유: ' + msg);
                }
            });
        });
        adminReservationCss();
    };

    // 관리자 영화 관리
    var adminMovieManagement = function() {
        $('#page-wrapper').html(adminMovieManagementView());
        $('#movie_search_btn').on('click', function() {
            var seq = '';
            $.ajax({
                url: $.context() + '/get/admin/movie',
                method: 'POST',
                data: JSON.stringify({
                    value: $('#movie_search_keyword').val()
                }),
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {
                    if (data.movie.title === 'no') {
                        $('#movie_deatail').html('<div style="margin-top: 30px;">해당 영화가 없습니다.</div>');
                    } else {
                        $('#movie_deatail').html(adminMovieManagementDetailView());
                        $('#title').text(data.movie.title);
                        $('#grade').text(data.movie.grade);
                        $('#released').text(data.movie.released);
                        $('#info').text(data.movie.info);
                        $('#synopsys').text(data.movie.synopsys);
                        $('#name_director').text(data.movie.name_director);
                        $('#name_actor').text(data.movie.name_actor);
                        $('#trailer_url').text(data.movie.trailer_url);
                        $('#poster').attr('src', $.image() + '/movie/' + data.movie.pic_main);
                        adminMovieManagementCss();
                        adminMovieSearchCss();
                        seq = data.movie.seq;
                    }
                    $('#delete').on('click', function() {
                        $.ajax({
                            url: $.context() + '/get/admin/movie/seq',
                            method: 'POST',
                            data: JSON.stringify({
                                value: seq
                            }),
                            dataType: 'json',
                            contentType: 'application/json',
                            success: function(data) {
                                if (data.exist === 'no') {
                                    var changeSeq = data.seq;
                                    $.ajax({
                                        url: $.context() + '/put/admin/main/movie',
                                        method: 'POST',
                                        data: JSON.stringify({
                                            value1: 1,
                                            seq: changeSeq
                                        }),
                                        dataType: 'json',
                                        contentType: 'application/json',
                                        success: function(data) {
                                            if (data.result === 1) {
                                                $.ajax({
                                                    url: $.context() + '/delete/admin/movie',
                                                    method: 'POST',
                                                    data: JSON.stringify({
                                                        value: seq
                                                    }),
                                                    dataType: 'json',
                                                    contentType: 'application/json',
                                                    success: function(data) {
                                                        if (data.delete === 1) {
                                                            alert('영화 삭제 성공');
                                                            $('#movie_deatail').remove();
                                                        }
                                                    },
                                                    error: function(xhr, status, msg) {
                                                        alert('실패 이유: ' + msg);
                                                    }
                                                });
                                            }
                                        },
                                        error: function(xhr, status, msg) {
                                            alert('실패 이유:' + msg);
                                        }
                                    });
                                } else if (data.exist === 'yes') {
                                    alert('해당 영화는 예매 내역이 있어서 삭제가 불가능합니다.');
                                }
                            },
                            error: function(xhr, status, msg) {
                                alert('실패 이유:' + msg)
                            }
                        });
                    });
                    $('#update').on('click', function() {
                        $('#movie_deatail').html(adminMovieManagementUpdateView());
                        $('#title').attr('value', data.movie.title);
                        $('#grade').attr('value', data.movie.grade);
                        $('#released').attr('value', data.movie.released);
                        $('#info').attr('value', data.movie.info);
                        $('#synopsys').text(data.movie.synopsys);
                        $('#name_director').attr('value', data.movie.name_director);
                        $('#name_actor').attr('value', data.movie.name_actor);
                        $('#trailer_url').attr('value', data.movie.trailer_url);
                        $('#poster').attr('src', $.image() + '/movie/' + data.movie.pic_main);
                        adminUpdateMovie(data, seq);
                        adminMovieManagementCss();
                        adminMovieSearchCss();
                    });
                },
                error: function(xhr, status, msg) {
                    alert('실패 이유: ' + msg);
                }
            });
            adminMovieSearchCss();
        });
        adminMovieManagementCss();
    };

    // 관리자 영화 수정
    var adminUpdateMovie = function(data, seq) {
        $('#update').on('click', function() {
            $.ajax({
                url: $.context() + '/put/admin/movie',
                method: 'POST',
                data: JSON.stringify({
                    seq: seq,
                    title: $('#title').val(),
                    grade: $('#grade').val(),
                    released: $('#released').val(),
                    info: $('#info').val(),
                    synopsys: $('#synopsys').val(),
                    name_director: $('#name_director').val(),
                    name_actor: $('#name_actor').val(),
                    trailer_url: $('#trailer_url').val()
                }),
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {
                    if (data.update === 1) {
                        adminMovieManagement();
                    }
                },
                error: function(xhr, status, msg) {
                    alert('실패 이유:' + msg)
                }
            });
        });
        $('#cancel').on('click', function() {
            adminMovieManagement();
        });
    };

    // 관리자 공지글 관리
    var adminBbsNotice = function() {
        $('#page-wrapper').html(adminBbsNoticeView());
        $.ajax({
            url: $.context() + "/get/admin/notice",
            method: "POST",
            data: JSON.stringify({}),
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
                var view = '';
                for (var i = 0; i < data.noticeList.length; i++) {
                    var t = data.noticeList[i];
                    view += '<tr>' +
                        '            <td>' + t.seq + '</td>' +
                        '            <td><a id="notice' + t.seq + '" class="goNotice" href="javascript:void(0)">' + t.title + '</a></td>' +
                        '            <td>' + t.reg_date + '</td>' +
                        '            <td><input id="delete' + t.seq + '" class="delete" type="button" value="x"/></td>' +
                        '         </tr>';
                }
                $('#notice_tr').after(view);
                $('.goNotice').on('click', function() {
                    var num = $(this).attr('id').split('notice')[1];
                    var n;
                    $.each(data.noticeList, function(i, notice) {
                        if (notice.seq == num) {
                            n = notice;
                        }
                    });
                    $('#notice_write_wrapper').html(adminBbsNoticeWriteView());
                    adminBbsNoticeWriteCss();
                    $('#notice_title').val(n.title);
                    $('#bbs_write_notice').val(n.content);
                    $('#attach').val(n.file);
                    $('#cancel').on('click', function() {
                        adminBbsNotice();
                    });
                    $('#confirm').on('click', function() {
                        $.ajax({
                            url: $.context() + "/put/notice",
                            method: "POST",
                            data: JSON.stringify({
                                seq: num,
                                content: $('#bbs_write_notice').val(),
                                reg_date: getTodayValue(),
                                title: $('#notice_title').val(),
                                file: $('#attach').val()
                            }),
                            dataType: "json",
                            contentType: "application/json",
                            success: function(data) {
                                if (data.result == 1) {
                                    alert('수정이 완료되었습니다.');
                                    adminBbsNotice();
                                }
                            },
                            error: function(xhr, status, msg) {
                                alert(msg);
                            }
                        });
                    });
                });
                $('.delete').on('click', function() {
                    var num = $(this).attr('id').split('delete')[1];
                    $.ajax({
                        url: $.context() + "/delete/notice",
                        method: "POST",
                        data: JSON.stringify({
                            seq: num
                        }),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data) {
                            if (data.result == 1) {
                                alert('성공적으로 제거 되었습니다.');
                            }
                            adminBbsNotice();
                        },
                        error: function(xhr, status, msg) {
                            alert(msg);
                        }
                    });
                });
            },
            error: function(xhr, status, msg) {
                alert(msg);
            }
        });
        $('#write').on('click', function() {
            $('#notice_write_wrapper').html(adminBbsNoticeWriteView());
            adminBbsNoticeWriteCss();
            $('#cancel').on('click', function() {
                adminBbsNotice();
            });
            $('#confirm').on('click', function() {
                var file = $('#attach').val();
                if (file == '') {
                    file = 'default';
                }
                $.ajax({
                    url: $.context() + "/post/notice",
                    method: "POST",
                    data: JSON.stringify({
                        content: $('#bbs_write_notice').val(),
                        reg_date: getTodayValue(),
                        title: $('#notice_title').val(),
                        file: file
                    }),
                    dataType: "json",
                    contentType: "application/json",
                    success: function(data) {
                        if (data.result == 1) {
                            alert('공지글 작성이 완료되었습니다.');
                            adminBbsNotice();
                        }
                    },
                    error: function(xhr, status, msg) {
                        alert(msg);
                    }
                });
            });
        });
        adminBbsNoticeCss();
    };

    // 관리자 게시판 관리/질의응답
    var adminBbsFaq = function(pageNo) {
        $('#page-wrapper').html(adminBbsFaqView());
        $.ajax({
            url: $.context() + "/get/board",
            method: "POST",
            data: JSON.stringify({}),
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
                var articleCount = 0;
                var blockSize = 5;
                var pageSize = 5;
                var view = '';
                $.each(data.article_list, function(t, article) {
                    if (article.article_type == "문의") {
                        articleCount++;
                        view += '<tr>' +
                        '    <td>' + article.seq + '</td>' +
                        '       <td><a id="question' + article.seq + '" class="read" href="javascript:void(0)">' + article.title + '</a></td>' +
                        '       <td>' + article.customer_id + '</td>' +
                        '       <td>' + article.reg_date + '</td>' +
                        '       <td>' + article.answer + '</td>' +
                        '       <td><input id="delete' + article.seq + '" class="delete" type="button" value="x"/></td>' +
                        '    </tr>';
                    }
                });
                $('#faq_tr').after(view);

                $('.delete').on('click', function() {
                    var num = $(this).attr('id').split('delete')[1];
                    $.ajax({
                        url: $.context() + "/delete/article",
                        method: "POST",
                        data: JSON.stringify({
                            seq: num
                        }),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data) {
                            if (data.result == 1) {
                                alert('성공적으로 제거 되었습니다.');
                            }
                            adminBbsFaq(pageNo);
                        },
                        error: function(xhr, status, msg) {
                            alert(msg);
                        }
                    });
                });
                $('.read').on('click', function() {
                    var num = $(this).attr('id').split('question')[1];
                    $.each(data.article_list, function(i, article) {
                        if (article.seq == num) {
                            $('#faq_write_wrapper').html(adminBoardDetailView(article));
                            adminBoardDetailCss();
                            $('#cancel').on('click', function() {
                                adminBbsFaq(pageNo);
                            });
                            $('#bbs_review_contents_submit').on('click', function() {
                                var content = $('#bbs_review_contents').val();
                                $.ajax({
                                    url: $.context() + "/post/comment",
                                    method: "POST",
                                    data: JSON.stringify({
                                        reg_date: getTodayValue(),
                                        content: content,
                                        customer_id: 'admin',
                                        article_seq: num
                                    }),
                                    dataType: "json",
                                    contentType: "application/json",
                                    success: function(data) {
                                        if (data.result == 1) {
                                            $.ajax({
                                                url: $.context() + "/put/admin/article",
                                                method: "POST",
                                                data: JSON.stringify({
                                                    seq: num
                                                }),
                                                dataType: "json",
                                                contentType: "application/json",
                                                success: function(data) {
                                                    alert('답변이 성공적으로 작성되었습니다.');
                                                    adminBbsFaq(pageNo);
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
                            });
                        }
                    });
                });
            },
            error: function(xhr, status, msg) {
                alert(msg);
            }
        });
        adminBbsFaqCss(pageNo);
    };

    // 게시글 상세정보
    var boardDetail = function(seq, pageNo) {
        var cusId = 'default';
        if (abb1.cookie.getCookie('id') != null) {
            cusId = abb1.cookie.getCookie('id');
        }
        $.ajax({
            url: $.context() + "/get/board/" + seq,
            method: "POST",
            data: JSON.stringify({
                customerId: cusId
            }),
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
                var comment_list = [];
                $.each(data.comment_list, function(i, comment) {
                    comment_list.push(comment);
                });
                boardDetailCommentInit(comment_list);
                $('#wrapper').html(boardDetailView(data.article) + boardDetailCommentView(comment_list));
                var adminReply = '';
                var commentLi = '';
                $.each(comment_list, function(i, comment) {
                    if (comment.customer_id == 'admin') {
                        adminReply = '<li>' +
                            '      <div>' +
                            '      <strong id="bbs_review_result_name" style="font-size: 20px;">관리자</strong> <span id="bbs_review_result_reg_date' + comment.seq + '" style="padding: 0 0 0 17px; font-size: 16px;">' + comment.reg_date + '</span>' +
                            '      <p id="bbs_review_result_txt" style="padding: 15px 5px 0; font-size: 14px;">' + comment.content + '</p>' +
                            '      </div>' +
                            '   </li>';
                    } else {
                        commentLi += '<li>' +
                            '      <div>' +
                            '      <strong id="bbs_review_result_name' + (i + 1) + '" style="font-size: 20px;">' + comment.customer_id + '</strong> <span id="bbs_review_result_reg_date' + comment.seq + '">' + comment.reg_date + '</span>' +
                            '      <p id="bbs_review_result_txt' + (i + 1) + '">' + comment.content + '</p>' +
                            '      </div>' +
                            '   </li>';
                    }
                });
                $('#bbs_detail_review_ul').append(adminReply);
                $('#bbs_detail_review_ul').append(commentLi);

                boardDetailCss();
                if (data.customer != null) {
                    if (abb1.cookie.getCookie('id') == data.article.customer_id) {
                        $('#goBMain').before('<a id="update" href="javascript:void(0)"><input type="button" value="수정" class="abb1_bbs_write_confirm"/></a>');
                        $('#update').on('click', function() {
                            boardWrite(seq);
                        });
                    }
                }

                $('#goBMain').on('click', function() {
                    boardMain(pageNo);
                });
                $.each(data.comment_list, function(i, comment) {
                    if (abb1.cookie.getCookie('id') == comment.customer_id) {
                        $('#bbs_review_result_reg_date' + comment.seq).after('<input id="delete' + comment.seq + '" class="deleteComment" type="button" value="x" style="margin-left: 20px; background: white; color: red; border: 1px solid #c7c5c5;">');
                    }
                });
                $('.deleteComment').on('click', function() {
                    var commentSeq = $(this).attr('id').split('delete')[1];
                    $.ajax({
                        url: $.context() + "/delete/comment",
                        method: "POST",
                        data: JSON.stringify({
                            seq: commentSeq
                        }),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data) {
                            alert('댓글이 삭제되었습니다.');
                            boardDetail(seq, pageNo);
                        },
                        error: function(xhr, status, msg) {
                            alert(msg);
                        }
                    });
                });

                var hits = data.article.hits * 1;
                $.ajax({
                    url: $.context() + "/put/hits",
                    method: "POST",
                    data: JSON.stringify({
                        group: 'Article',
                        hits: hits * 1 + 1,
                        seq: seq
                    }),
                    dataType: "json",
                    contentType: "application/json",
                    success: function(data) {},
                    error: function(xhr, status, msg) {
                        alert(msg);
                    }
                });
                $('#bbs_review_contents_submit').on('click', function() {
                    var customerId = abb1.cookie.getCookie('id');
                    if (abb1.cookie.getCookie('login') === 'N') {
                        alert('로그인 후 이용 가능합니다.');
                        customerLogin();
                    } else {
                        var content = $('#bbs_review_contents').val();
                        $.ajax({
                            url: $.context() + "/post/comment",
                            method: "POST",
                            data: JSON.stringify({
                                reg_date: getTodayValue(),
                                content: content,
                                customer_id: customerId,
                                article_seq: seq
                            }),
                            dataType: "json",
                            contentType: "application/json",
                            success: function(data) {
                                boardDetail(seq, pageNo);
                            },
                            error: function(xhr, status, msg) {
                                alert(msg);
                            }
                        });
                    }
                });
            },
            error: function(xhr, status, msg) {
                alert(msg);
            }
        });
    };

    // 게시판 메인
    var boardMain = function(pageNo){
	       indexClickEvent()
	       $.ajax({
	        url: $.context()+"/get/board",
	        method: "POST",
	        data: JSON.stringify({}),
	        dataType: "json",
	        contentType: "application/json",
	        success : function(data){
	          var notice_list = [];
	          var article_list = [];
	          $.each(data.notice_list, function(i, notice){
	              notice_list.push(notice); 
	          });
	          $.each(data.article_list, function(i, article){
	              article_list.push(article);
	          });
	          
	          var count = data.article_count*1 + data.notice_count*1;
	          var view = boardMainView(count);
	          var notice_row = '';
	          for(var i=0; i<notice_list.length; i++){
	               var notice = notice_list[i];
	               notice_row += '<tr class="notice">'
	                  +               '<td>-</td>'
	                  +               '<td><b>전체</b></td>'
	                  +               '<td><a id="notice'+notice_list[i].seq+'" class="goNotice" href="javascript:void(0)">[공지]'+notice_list[i].title+'</a></td>'
	                  +               '<td>'+notice_list[i].reg_date+'</td>'
	                  +               '<td>'+notice_list[i].hits+'</td>'
	                  +           ' </tr>';
	          }
	          view += notice_row;
	          
	          var article_count = 10 - notice_list.length*1;
	          var pageCount = data.article_count/article_count+1; 
	          var article = '';
	          for(var i=(pageNo-1)*article_count; i<pageNo*article_count; i++){
	              var multiplex = checkMultiplex(article_list[i].multiplex_seq*1);
	              article += '<tr>'
	                 +      '<td>'+article_list[i].seq+'</td>'
	                 +      '<td>'+multiplex+'</td>'
	                 +      '<td><a id="detail'+article_list[i].seq+'" class="goBDetail" href="javascript:void(0)">'+article_list[i].title+'</a></td>'
	                 +      '<td>'+article_list[i].reg_date+'</td>'
	                 +      '<td>'+article_list[i].hits+'</td>'
	                 +   '</tr>';
	              if(article_list[i].seq==1){
	                  break;
	              }
	          }
	          article +='</tbody></table></div>';
	          view += article;
	       
	          /* for pagination */
	          // 처음으로 가는 페이지 버튼
	          var pagination = '<div id="bbs_pagination" style="padding: 0 0 50px 310px;">'
	              +'         <table>'
	              +'            <tr>'
	              +'               <td>'
	              +'                  <a class="goFirstPage" href="javascript:void(0)"><img src="'+$.context()+'/resources/img/pagination/prev_all.gif" alt="" /></a>';
	               
	          var prevPageNo = pageNo; // 이전 큰 페이지으로 가는 버튼의 페이지 넘버
	          if(pageNo%5==0) {
	                prevPageNo = prevPageNo-5;
	          } else {
	              prevPageNo = parseInt(prevPageNo/5)*5;
	          }
	          var prev_page_btn = ''; // 이전 큰 페이지으로 가는 버튼
	          
	          // 이전 큰 페이지로 가는 버튼이 출력되는지 확인하는 로직
	          if(parseInt(data.article_count*1/article_count)<=pageNo){
	             prev_page_btn = '<a class="goPrevPage" href="javascript:void(0)"><img src="'+$.context()+'/resources/img/pagination/prev.gif" alt="" /></a>';
	          } else if((count/article_count)<5){
	              prev_page_btn = '';
	          }
	          pagination += prev_page_btn;
	          pagination += '</td><td id="bbs_pagination_number"><h4>';
	          
	          
	          var next_page_btn = ''; // 다음 큰 페이지로 가는 버튼
	          
	          // 큰 페이지의 개수가 5 미만일 때
             if(pageCount/6==0){
                   next_page_btn = '';
                   for(var i=0; i<count/article_count; i++){
                  pagination += '<a id="page'+i+'" class="goPage" href="javascript:void(0)">'+(i+1)+'</a>';
                   }
             } else {
                for(var i=0; i<count/article_count; i++){
                   pagination += '<a id="page'+i+'" class="goPage" href="javascript:void(0)">'+(i+1)+'</a>';
                }
             }
	                 
	          var nextPageNo = pageNo; // 다음 큰 페이지로 가는 버튼의 페이지 넘버
	          if(pageNo%5==0){ 
	             nextPageNo = nextPageNo+1; 
	          } else { 
	        nextPageNo = parseInt(nextPageNo/5)*5+6; 
	          }
	                
	          // 다음 큰 페이지로 가는 버튼이 출력되는지 확인하는 로직
	          if(parseInt(data.article_count*1/article_count)>=pageNo){
	         next_page_btn = '<a class="goNextPage" href="javascript:void(0)"><img src="'+$.context()+'/resources/img/pagination/next.gif" alt="" /></a>';
	          }
	          view += pagination;
	          view += '</h4></td><td>'+next_page_btn;
	     
	          // 마지막 큰 페이지로 가는 버튼
	          var last_page = (count/article_count).toFixed(0);
	          view += boardMainBottomView();
	     
	          $('#wrapper').html(view);
	          boardMainCss(pageNo);
	          
	          // 검색하는 로직
	          boardMainSearchEvent();
	          
	          $('#write').on('click',function(){
	         var customerId = abb1.cookie.getCookie('id');
	         if(abb1.cookie.getCookie('login')==='N'){
	             alert('글 작성은 로그인 후에 이용 가능합니다.');
	             customerLogin();
	         } else {
	             boardWrite(0);
	         }
	          });
	               
	               $('.goBDetail').on('click',function(){
	                   var id = $(this).attr('id');
	                   var num = $(this).attr('id').split('detail')[1]*1;
	                   boardDetail(num, pageNo);
	               });
	               $('.goNotice').on('click',function(){
	                   var id = $(this).attr('id');
	                   var num = $(this).attr('id').split('notice')[1]*1;
	                   boardNoticeDetail(num, pageNo);
	               });
	               $('#bbs_count').html(count);
	                     
	               $('.goFirstPage').on('click',function(){
	                   boardMain(1);
	               });
	                    
	               $('.goPrevPage').on('click',function(){
	                   boardMain(prevPageNo);
	               });
	                    
	               $('.goPage').on('click',function(){
	                   var id = $(this).attr('id');
	                   var num = id.split('page')[1];
	                   boardMain(num*1+1);
	               });
	                    
	               $('.goNextPage').on('click',function(){
	                   boardMain(nextPageNo);
	               });
	                    
	               $('.goLastPage').on('click',function(){
	                   boardMain(last_page);
	               });
	                    
	        },
	        error : function(xhr,status,msg){
	           alert(msg);
	        }
	     }); /* end of ajax */
	   };

    // 게시판 검색 이벤트
    function boardMainSearchEvent() {
        $('#board_main_find_search').on('click', function() {
            var search = $('select[name=search]').val();
            var keyword = $('#board_main_find_keyword').val();
            if (keyword == '') {
                alert('검색어를 입력해주세요.');
            } else {
                $.ajax({
                    url: $.context() + "/get/board/find",
                    method: "POST",
                    data: JSON.stringify({
                        search: search,
                        keyword: keyword
                    }),
                    dataType: "json",
                    contentType: "application/json",
                    success: function(data) {
                        $('#wrapper').html(boardMainSomeView());
                        $('#bbs_count').html(data.articleCount);
                        var body = '';
                        $.each(data.articleList, function(i, article) {
                            var mulName = checkMultiplex(article.multiplex_seq);
                            body += '     <tr>' +
                                '        <td>' + article.seq + '</td>' +
                                '        <td><b>' + mulName + '</b></td>' +
                                '        <td><a id="detail' + article.seq + '" class="goBDetail" href="javascript:void(0)">' + article.title + '</a></td>' +
                                '        <td>' + article.reg_date + '</td>' +
                                '        <td>' + article.hits + '</td>' +
                                '     </tr>'
                        });
                        $('#table_body').append(body);

                        $('.goBDetail').on('click', function() {
                            var id = $(this).attr('id');
                            var num = $(this).attr('id').split('detail')[1] * 1;
                            boardDetail(num, 1);
                        });
                        $('#write').on('click', function() {
                            var customerId = abb1.cookie.getCookie('id');
                            if (abb1.cookie.getCookie('login') === 'N') {
                                alert('글 작성은 로그인 후에 이용 가능합니다.');
                                customerLogin();
                            } else {
                                boardWrite(0);
                            }
                        });
                        boardMainCss(1);
                        boardMainSearchEvent();
                    },
                    error: function(xhr, status, msg) {
                        alert(msg);
                    }
                });

            }
        });
    }

    // 게시판 공지글 상세 정보
    var boardNoticeDetail = function(seq, pageNo) {
        $.ajax({
            url: $.context() + "/get/notice/" + seq,
            method: "POST",
            data: JSON.stringify({}),
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
                var notice = data.notice;
                var attach = attachFileCheck(notice);
                $('#wrapper').html(boardNoticeDetailView(notice, attach));
                boardNoticeDetailCss();
                $('#goBMain').on('click', function() {
                    boardMain(pageNo);
                });
                var hits = data.notice.hits * 1;
                $.ajax({
                    url: $.context() + "/put/hits",
                    method: "POST",
                    data: JSON.stringify({
                        group: 'Notice',
                        hits: hits * 1 + 1,
                        seq: seq
                    }),
                    dataType: "json",
                    contentType: "application/json",
                    success: function(data) {},
                    error: function(xhr, status, msg) {
                        alert(msg);
                    }
                });
            },
            error: function(xhr, status, msg) {
                alert(msg);
            }
        });
    };

    // 관리자 글 작성
    var boardWrite = function(seq) {
        if (seq != 0) {
            $('#wrapper').html(boardWriteView());
            boardWriteCss();
            $.ajax({
                url: $.context() + "/get/board/" + seq,
                method: "POST",
                data: JSON.stringify({}),
                dataType: "json",
                contentType: "application/json",
                success: function(data) {
                    $('#board_write_title').val(data.article.title);
                    $('#board_write_content').val(data.article.content);
                    $('#board_write_cancel').val('삭제');
                    $('#board_wrtie_confirm').val('수정');
                    $('#board_write_cancel').on('click', function() {
                        $.ajax({
                            url: $.context() + "/delete/article",
                            method: "POST",
                            data: JSON.stringify({
                                group: "Comment",
                                seq: data.comment_list[0].article_seq
                            }),
                            dataType: "json",
                            contentType: "application/json",
                            success: function(data) {
                                alert('삭제 되었습니다.');
                                boardMain(1);
                            },
                            error: function(xhr, status, msg) {
                                alert(msg);
                            }
                        });
                    });
                    $('#board_wrtie_confirm').on('click', function() {
                        var title = $('#board_write_title').val();
                        var content = $('#board_write_content').val();
                        if (title == '' || content == '') {
                            alert('비어있는 항목이 있습니다.');
                        } else {
                            $.ajax({
                                url: $.context() + "/put/article",
                                method: "POST",
                                data: JSON.stringify({
                                    seq: seq,
                                    article_type: $('input[name=kind]').val(),
                                    title: $('#board_write_title').val(),
                                    content: $('#board_write_content').val(),
                                    file: '',
                                }),
                                dataType: "json",
                                contentType: "application/json",
                                success: function(data) {
                                    alert('수정되었습니다.');
                                    boardDetail(seq);
                                },
                                error: function(xhr, status, msg) {
                                    alert(msg);
                                }
                            });
                        }
                    });
                },
                error: function(xhr, status, msg) {
                    alert(msg);
                }
            });
        } else {
            $('#wrapper').html(boardWriteView());
            boardWriteCss();
            var multiplex = '';
            var multiplex_seq = 0;
            $('#board_write_select_multiplex').on('click', function() {
                multiplex = '가산디지털';
                var multiplexView = '<span>' + multiplex + '</span>';
                $('#board_write_select_multiplex').after(multiplexView);
                if (multiplex == '가산디지털') {
                    multiplex_seq = 1;
                }
            });
            $('#board_wrtie_confirm').on('click', function() {
                if (multiplex_seq == 0) {
                    alert('영화관을 선택해주세요.');
                }
                var title = $('#board_write_title').val();
                var content = $('#board_write_content').val();
                if (title == '' || content == '') {
                    alert('제목과 내용은 필수 입력사항입니다.');
                } else {
                    $.ajax({
                        url: $.context() + "/post/article",
                        method: "POST",
                        data: JSON.stringify({
                            article_type: getKindOfArticleWrite(),
                            title: title,
                            content: content,
                            file: '',
                            reg_date: getTodayValue(),
                            hits: '0',
                            customer_id: abb1.cookie.getCookie('id'),
                            multiplex_seq: multiplex_seq
                        }),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data) {
                            if (data.result == 1) {
                                alert(getKindOfArticleWrite() + '글 작성이 완료되었습니다.');
                                boardMain(1);
                            } else {
                                alert('알 수 없는 오류 발생');
                            }
                        },
                        error: function(xhr, status, msg) {
                            alert(msg);
                        }
                    });
                }
            });
            $('#board_write_cancel').on('click', function() {
                boardMain(1);
            });
        }

    };

    // 예매 메인 화면
    var reservationMain = function() {
        indexClickEvent();
        $('#wrapper').html(reservationMainView());
        var today = getTodayValue();
        var year = today.split('-')[0];
        var month = today.split('-')[1].substring(1, 2) * 1;
        var date = today.split('-')[2] * 1;
        var day = '';
        var strDate = '';
        var strMonth = '';
        for (var i = 0; i < 6; i++) {
            if (month === 13) {
                month = 1;
            }
            if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
                if (date === 32) {
                    month++;
                    date = 1;
                }
            } else {
                if (date === 31) {
                    month++;
                    date = 1;
                }
            }
            day = month + '/' + date;
            strDate = (date < 10) ? '0' + date : date;
            strMonth = (month < 10) ? '0' + month : month;
            dayId = year + '-' + strMonth + '-' + strDate;
            $('#day' + i + '').attr('value', day);
            $('#day' + i + '').attr('id', dayId);
            date++;
        }
        $('#year').text(year);
        $('.abb1_calendar_day').on('click', function() {
            var day = $(this).attr('id');
            $.ajax({
                url: $.context() + "/get/reservation/",
                method: "POST",
                data: JSON.stringify({}),
                dataType: "json",
                contentType: "application/json",
                success: function(data) {
                    var disShowList = data.dis_show_list;
                    var timetableList = data.timetable_list;
                    var date = day;
                    var json = {
                        date: date,
                        disShowList: disShowList,
                        timetableList: timetableList
                    };
                    $('#reservation_movielist').html(showMovielistService(json));
                    possibleMovieClickEvent(data, date);
                    reservationMainCss();
                },
                error: function(xhr, status, msg) {
                    alert(msg);
                }
            });
        });
        $.ajax({
            url: $.context() + "/get/reservation/",
            method: "POST",
            data: JSON.stringify({}),
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
                var disShowList = data.dis_show_list;
                var timetableList = data.timetable_list;
                var date = today;
                var json = {
                    date: date,
                    disShowList: disShowList,
                    timetableList: timetableList
                };
                $('#reservation_movielist').html(showMovielistService(json));
                possibleMovieClickEvent(data, date);
                reservationMainCss();
            },
            error: function(xhr, status, msg) {
                alert(msg);
            }
        });
        $('.noAction').on('click', function() {
            alert('구현되지 않음');
        });
    };

    // 상영 가능 영화 리스트 클릭 이벤트
    var possibleMovieClickEvent = function(data, today) {
        var info_list = data.info_list;
        var disShowList = data.dis_show_list;
        var timetableList = data.timetable_list;
        var date = today;
        var json = {
            date: date,
            disShowList: disShowList,
            timetableList: timetableList
        };
        var selectedMovieSeq = '',
            selectedMovieName = '';
        $('.movie').on('click', function() {
            var id = $(this).attr('id');
            selectedMovieSeq = id.split('movie')[1];
            $('#reservation_movielist').html(showMovielistService(json));
            disableMovieListService(disShowList, selectedMovieSeq);
            $('#reservation_time').html('<h4>' + checkMultiplex(1) + '</h4><div id="movie_time_line" class="abb1_padding_15">' +
                '<div class="abb1_padding_bottom_20">' +
                '   <span id="movieTitle' + selectedMovieSeq + '" class="abb1_font_size_25"><strong id="movieName"></strong></span><a id="movieDetail" href="javascript:void(0)"><img src="/web/resources/img/icon/movieLink.png" alt=""></a>' +
                '</div>' +
                '<ul id="movie_timeline_ul" class="abb1_ul_inline"></ul>');
            var timetableView = '';

            var currentTime = getCurrentTime();
            var hour = currentTime.split(':')[0] * 1;
            var minute = currentTime.split(':')[1] * 1;

            var className = 'goReservation';

            for (var i = 0; i < timetableList.length; i++) {
                if (selectedMovieSeq == timetableList[i].movSeq && date == timetableList[i].shoShowDate) {
                    var t = timetableList[i];
                    var json1 = {
                        info_list: info_list,
                        timetableList: timetableList,
                        i: i
                    };
                    if (getTodayValue() === date) {
                        if (t.shoStartTime.split(':')[0] * 1 > hour) {
                            className = 'goReservation';
                        } else if (t.shoStartTime.split(':')[0] * 1 == hour && t.shoStartTime.split(':')[1] * 1 > minute) {
                            className = 'goReservation';
                        } else {
                            className = 'cannot';
                        }
                    }
                    var resCount = reservationMovielist(json1).resCount;
                    selectedMovieName = timetableList[i].movTitle;
                    timetableView += '   <a id="rv' + t.shoSeq + '" class="' + className + '" href="javascript:void(0)">' +
                        '   <li class="abb1_li_inline abb1_padding_right_0">' +
                        '   <table class="abb1_reservation_calendar">' +
                        '   <tbody>' +
                        '   <tr class="abb1_border_top_2">' +
                        '      <td id="theaterName' + t.shoSeq + '">' + t.theName +
                        '      </td>' +
                        '   </tr>' +
                        '   <tr>' +
                        '      <td>' +
                        '         <strong id="startTime' + t.shoSeq + '" class="abb1_font_size_22">' + t.shoStartTime + '</strong>' +
                        '      </td>' +
                        '   </tr>' +
                        '   <tr>' +
                        '      <td id="seatCount' + t.shoSeq + '">' + resCount + '석 / ' + t.theTotalSeat + '석</td>' +
                        '   </tr>' +
                        '   </tbody>' +
                        '   </table>' +
                        '   </li>' +
                        '   </a>';
                }
            }
            $('#movie_timeline_ul').append(timetableView);
            $('#movieName').html(selectedMovieName);
            $('.disabled').on('click', function() {
                alert('하나의 영화만 선택 가능합니다.');
            });
            $('.on').on('click', function() {
                $('#reservation_movielist').html(showMovielistService(json));
                $('#reservation_time').html('');
                possibleMovieClickEvent(data, date);
            });

            $('.cannot').on('click', function() {
                alert('상영시간이 지났습니다. 예매가 불가능 합니다.');
            });

            $('.goReservation').on('click', function() {
                var id = $(this).attr('id');
                var shoSeq = $(this).attr('id').split('rv')[1];
                reservationSeat(shoSeq);
            });
            $('#movieDetail').on('click', function() {
                movieDetail(selectedMovieSeq);
            });
            reservationMainCss();
        });
    };

    // 예매 좌석
    var reservationSeat = function(shoSeq) {
        $.ajax({
            url: $.context() + "/get/reservation/",
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

    // 예매 가능한 좌석 조회 클릭 이벤트
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
                    $('#moviePoster').attr('src', $.context() + '/resources/img/movie/' + time.movPicMain);
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
                var customerId = abb1.cookie.getCookie('id');
                if (abb1.cookie.getCookie('login') === 'N') {
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
                        url: $.context() + "/put/customer/point",
                        method: "POST",
                        data: JSON.stringify({
                            customer_id: abb1.cookie.getCookie('id'),
                            point: abb1.cookie.getCookie('point'),
                            sum: 'true'
                        }),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data) {
                            if (data.result == 1) {
                                abb1.cookie.setCookie('point', data.point);
                            }
                        },
                        error: function(xhr, status, msg) {
                            alert(msg);
                        }
                    });
                    $.ajax({
                        url: $.context() + "/post/reservation",
                        method: "POST",
                        data: JSON.stringify({
                            id: reservationId,
                            reg_date: reg_date,
                            canceled: 'N',
                            price: '10000',
                            hcount: '1',
                            customer_id: abb1.cookie.getCookie('id'),
                            showing_seq: showingSeq
                        }),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data) {
                            if (data.result == 1) {
                                $.ajax({
                                    url: $.context() + "/put/movie/count",
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

    // 영화관 메인
    var multiplexMain = function(seq) {
        indexClickEvent();
        $.ajax({
            url: $.context() + "/get/multiplex/" + seq,
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
                    ctx: $.context(),
                    multiplex_name: multiplex_name,
                    multiplex_addr: multiplex_addr,
                    count: theater_count,
                    seat_total: seat_total,
                    seq: seq
                };
                $('#wrapper').html(multiplexMainInfo(o));
                $('#wrapper').append(multiplexMainCalendarView());
                $('#movie_time_line').html(multiplexMainTimetableService(data, getTodayValue()));

                multiplexMainCss();

                $('.goMain').on('click', function() {
                    multiplexMain(seq);
                });

                $('.cannot').on('click', function() {
                    alert('상영시간이 지났습니다. 예매가 불가능 합니다.');
                });
                
                $('.goMap').on('click', function() {
                    alert('미구현');
                    var goMap = $.magnificPopup.open({
                        items : {
                           src : '<div class="white-popup">'
                              +'<p id="emailAuthContent" class="kal-jh-auth-head-text">스케줄 선택 페이지로 돌아가시겠습니까 ?</p>'
                              +'<div class="kal-jh-auth-wrapper">'
                              +   '<button id="goBack" class="" onSubmit="return check();">X</button>'
                              +   '<button id="goBackNo" class="kal-jh-gobacksche-submit-btn" onSubmit="return check();">아니오</button>'
                              +'</div>'
                              +'</div>',
                           type: 'inline'
                           },
                           fixedContentPos: true,  
                             fixedBgPos: true,  
                             overflowY: 'auto',  
                             closeBtnInside: true,  
                             preloader: false,
                             midClick: true,  
                             removalDelay: 300,  
                             closeOnBgClick: false
                     });
                   $('#goBackYes').on('click',function(){
                      alert('돌아가기');
                      $.magnificPopup.close();
                   });
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
    };

    // 영화 상세 정보
    var movieDetail = function(seq) {
        $.ajax({
            url: $.context() + "/get/movie/list",
            method: "POST",
            data: JSON.stringify({
                seq: seq
            }),
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
                var rank = '',
                    rate = '';
                var movie_arr = [];
                var review_list = [];
                var total = 0;

                $.each(data.movie_list, function(i, movie) {
                    total += movie.count * 1;
                    movie_arr.push(movie);
                });
                $.each(data.review_list, function(i, review) {
                    if (review.movie_seq == seq) {
                        review_list.push(review);
                    }
                });
                movie_arr = movieSort(movie_arr);
                var m;
                $.each(movie_arr, function(i, movie) {
                    var count = movie.count;
                    if (seq == movie.seq) {
                        rank = (i + 1) + '';
                        rate = (count / total * 100).toFixed(1);
                        m = movie;
                    }
                });
                var reviewTotal = 0;
                var gpa = 0.0;
                if(review_list.length!=0){
                   for(var i=0; i<review_list.length; i++){
                      reviewTotal += review_list[i].gpa*1; 
                      gpa++;
                   }
                   gpa = reviewTotal/gpa;
                } 
                
                var view = movieDetailView(rank, rate, m, gpa);
                view += movieDetailWriteReviewView();
                for (var i = 0; i < review_list.length; i++) {
                    view += '<table id="review">' +
                        '         <tr>' +
                        '            <td colspan="3"><strong class="abb1_review' + review_list[i].seq + '" style="font-size: 21px; padding: 17px;">평점: ' + review_list[i].gpa + '</strong></td>' +
                        '         </tr>' +
                        '         <tr>' +
                        '            <td colspan="2" style="padding: 9px;">' + review_list[i].content + '.</td>' +
                        '            <td class="abb1_text_right" style="font-size: 20px; padding-right: 10px;">' + review_list[i].customer_id + '</td>' +
                        '         </tr>' +
                        '         <tr>' +
                        '            <td colspan="3" style="font-size: 18px; padding: 10px;">' + review_list[i].reg_date + '</td>' +
                        '         </tr>' +
                        '   </table>';
                }

                $('#wrapper').html(view);

                $.each(review_list, function(i, review) {
                    if (abb1.cookie.getCookie('id') == review.customer_id) {
                        $('.abb1_review' + review.seq).after('<input id="delete' + review.seq + '" class="deleteReview" type="button" value="x" style="margin-left: 20px; background: white; color: red; border: 1px solid #c7c5c5;">');
                    }
                });
                $('.deleteReview').on('click', function() {
                    var revSeq = $(this).attr('id').split('delete')[1];
                    $.ajax({
                        url: $.context() + "/delete/review",
                        method: "POST",
                        data: JSON.stringify({
                            seq: revSeq
                        }),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data) {
                            alert('리뷰가 삭제되었습니다.');
                            movieDetail(seq);
                        },
                        error: function(xhr, status, msg) {
                            alert(msg);
                        }
                    });
                });
                movieDetailCss();
                $.ajax({
                    url: $.context() + '/get/movie/statistic',
                    method: 'POST',
                    data: JSON.stringify({
                        seq: seq
                    }),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(data) {
                        var male = data.maleP.toFixed(2);
                        var female = data.femaleP.toFixed(2);
                        if (male === '0.00' && female == '0.00') {
                            $('#donutchart').html('');
                            $('#donutchart').css('background-color', 'white');
                        } else {
                            abb1.api.google(male * 1, female * 1);
                        }
                    },
                    error: function(xhr, status, msg) {
                        alert('실패 이유: ' + msg);
                    }
                });


                abb1.util.starRating();

                $('#insert').on('click', function() {
                    if (abb1.cookie.getCookie('login') === 'N') {
                        alert('로그인 후에 이용 가능합니다.');
                        customerLogin();
                    } else {
                        var content = $('#content').val();
                        var gpa = $('input[name=star-input]:checked').val();
                        if (gpa != 0 && content != '') {
                            $.ajax({
                                url: $.context() + "/post/review",
                                method: "POST",
                                data: JSON.stringify({
                                    customer_id: abb1.cookie.getCookie('id'),
                                    movie_seq: seq,
                                    reg_date: getTodayValue(),
                                    content: content,
                                    gpa: gpa,
                                    spectator: '실관람객'
                                }),
                                dataType: "json",
                                contentType: "application/json",
                                success: function(data) {
                                    if (data.result == 1) {
                                        movieDetail(seq);
                                    } else {
                                        alert('등록 실패');
                                    }
                                },
                                error: function(xhr, status, msg) {
                                    alert(msg);
                                }
                            });
                        } else {
                            alert('별점 및 내용을 입력하세요.');
                        }

                    }
                });
            },
            error: function(xhr, status, msg) {
                alert(msg);
            }
        });
    };

    // 영화 메인
    var movieMain = function() {
        indexClickEvent();
        $.ajax({
            url: $.context() + "/get/movie/list",
            method: "POST",
            data: JSON.stringify({}),
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
                $('#wrapper').html(movieMainView());
                var review_list = data.review_list;
                var review_total = new Array(review_list.length);
                var review_count = new Array(review_list.length);
                for (var i = 0; i < review_list.length; i++) {
                    review_total[i] = 0;
                    review_count[i] = 0;
                }
                var total = 0;
                $.each(data.movie_list, function(i, movie) {
                    total += movie.count * 1;
                });
                var movie_list = data.movie_list;
                var statSumArr = new Array(movie_list.length);
                var statCountArr = new Array(movie_list.length);
                for (var i = 0; i < movie_list.length; i++) {
                    statSumArr[i] = 0;
                    statCountArr[i] = 0;
                }
                var movSeqArr = [];
                var movTitleArr = [];
                var movGradeArr = [];
                var movPicMainArr = [];
                var movCountArr = [];
                $.each(data.statistic, function(i, stat) {
                    for (var j = 0; j < movie_list.length; j++) {
                        if (stat.revMovieSeq == movie_list[j].seq) {
                            statSumArr[j] += stat.revGpa * 1;
                            statCountArr[j]++;
                            movSeqArr[j] = stat.revMovieSeq;
                            movTitleArr[j] = stat.movTitle;
                            movGradeArr[j] = stat.movGrade;
                            movPicMainArr[j] = stat.movPicMain;
                            movCountArr[j] = stat.movCount;
                        }
                    }
                });
                for(var i=0; i<movie_list.length; i++){
                    if(statSumArr[i]==0){
                	statSumArr[i] = 0;
                	statCountArr[i] = 0;
                	movSeqArr[i] = movie_list[i].seq;
                	movTitleArr[i] = movie_list[i].title;
                	movGradeArr[i] = movie_list[i].grade;
                	movPicMainArr[i] = movie_list[i].pic_main;
                	movCountArr[i] = 0;
                    }
                }
                var statJsonArr = [];
                $.each(statSumArr, function(i, stat) {
                    var statAvg = (statCountArr[i] != 0) ? statSumArr[i] / statCountArr[i] : 0;
                    var json = {
                        avg: statAvg.toFixed(2),
                        title: movTitleArr[i],
                        grade: movGradeArr[i],
                        seq: movSeqArr[i],
                        pic: movPicMainArr[i],
                        count: movCountArr[i]
                    };
                    statJsonArr.push(json);
                });
                movie_list = movieSort(movie_list);
                
                var orderByRes = '<ul>';
                for (var i = 0; i < 4; i++) {
                	console.log(movieSort(statJsonArr)[i]);
                    var t = movieSort(statJsonArr)[i];
                    orderByRes += orderService(t, total);
                }
                orderByRes += '</ul>';
                $('#movieList').html(orderByRes);

                orderByRes = '<ul>';
                for (var i = 4; i < 8; i++) {
                    var t = movieSort(statJsonArr)[i];
                    orderByRes += orderService(t, total);
                }
                orderByRes += '</ul>';
                $('#movieList2').html(orderByRes);

                $('#movieList2').after('<div id="movieList3" class="abb1_movie_list_div"></div><div id="movieList4" class="abb1_movie_list_div"></div>');

                var addList = '<ul class="abb1_ul_inline">';
                if (movie_list.length >= 8) {
                    for (var i = 8; i < movie_list.length; i++) {
                        var t = movieSort(statJsonArr)[i];
                        addList += orderService(t, total);
                    }
                    addList += '</ul>';
                    $('#movieList3').html(addList);
                }
                if (movie_list.length >= 12) {
                    addList = '<ul class="abb1_ul_inline">';
                    for (var i = 12; i < movie_list.length; i++) {
                        var t = movieSort(statJsonArr)[i];
                        addList += orderService(t, total);
                    }
                    addList += '</ul>';
                    $('#movieList4').html(addList);
                }
                movieMainCss();
                $('.goMovie').on('click', function() {
                    var id = $(this).attr('id');
                    var num = $(this).attr('id').split('movie')[1] * 1;
                    movieDetail(num);
                });
                $('#order_by_rate').on('click', function() {
                    movieMain();
                });

                $('#order_by_gpa').on('click', function() {
                    var orderByGpa = '<ul>';
                    for (var i = 0; i < 4; i++) {
                        var t = avgSort(statJsonArr)[i];
                        orderByGpa += orderService(t, total);
                    }
                    orderByGpa += '</ul>';
                    $('#movieList').html(orderByGpa);

                    orderByGpa = '<ul>';
                    for (var i = 4; i < 8; i++) {
                        var t = avgSort(statJsonArr)[i];
                        orderByGpa += orderService(t, total);
                    }
                    orderByGpa += '</ul>';
                    $('#movieList2').html(orderByGpa);
                    var addList = '<ul class="abb1_ul_inline">';
                    for (var i = 8; i < movie_list.length; i++) {
                        var t = avgSort(statJsonArr)[i];
                        addList += orderService(t, total);
                    }
                    addList += '</ul>';
                    $('#movieList3').html(addList);
                    if (movie_list.length >= 12) {
                        addList = '<ul class="abb1_ul_inline">';
                        for (var i = 12; i < movie_list.length; i++) {
                            var t = avgSort(statJsonArr)[i];
                            addList += orderService(t, total);
                        }
                        addList += '</ul>';
                        $('#movieList4').html(addList);
                    }
                    movieMainCss();
                    $('.goMovie').on('click', function() {
                        var id = $(this).attr('id');
                        var num = $(this).attr('id').split('movie')[1] * 1;
                        movieDetail(num);
                    });
                });
                $('#future').on('click', function() {
                    alert('구현되지 않음');
                });
            },
            error: function(xhr, status, msg) {
                alert(msg);
            }
        });
    };
    var footerWhite = function() {
        $('#footer').find('div:first-child').css('margin-top', '40px');
    };
    return {
        onCreate: onCreate
    }
})();