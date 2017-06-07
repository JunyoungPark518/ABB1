function footerView() {
    return '<div></div><img src="' + $.image() + '/common/footer.png" alt="" />';
}

function gnbView() {
    return '   <div>' +
        '      <div>' +
        '         <ul>' +
        '            <li><a id="ticketing" href="javascript:void(0)">예매</a></li>' +
        '            <li><a id="movie" href="javascript:void(0)">영화</a></li>' +
        '            <li><a id="multiplex" href="javascript:void(0)">영화관</a></li>' +
        '            <li><a class="abb1_tooltip" href="javascript:void(0)">스위트샵<span>미구현</span></a></li>' +
        '            <li><a class="abb1_tooltip" href="javascript:void(0)">이벤트<span>미구현</span></a></li>' +
        '            <li><a class="abb1_tooltip" href="javascript:void(0)">기프트샵<span>미구현</span></a></li>' +
        '         </ul>' +
        '      </div>' +
        '   </div>';
}

function headerView() {
    return '<div class="abb1_no_padding abb1_width_100 abb1_text_center">' +
        '      <div style="margin: 0 auto;">' +
        '         <a id="home" href="javascript:void(0)"><img src="' + $.image() + '/common/main_logo.png" alt=""/></a>' +
        '      </div>' +
        '   </div>' +
        '   <nav id="boot-nav" class="abb1_navbar abb1_navbar-default">' +
        '      <div class="abb1_navbar_container">' +
        '         <div class="navbar-header">' +
        '            <a id="brand" class="navbar-brand" href="https://www.facebook.com/LotteCinema.kr"><span class="abb1_facebook"><img src="' + $.context() + '/resources/img/common/facebook.png" alt="" width="25px" height="25px"/> 롯데시네마 페이스북</span></a>' +
        '         </div>' +
        '         <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
        '            <ul id="ul_gnb" class="nav navbar-nav navbar-right">' +
        '               <li><a id="login" href="javascript:void(0)">로그인<span class="sr-only">(current)</span></a></li>' +
        '               <li><a id="register" href="javascript:void(0)">회원가입<span class="sr-only">(current)</span></a></li>' +
        '               <li><a id="FAQ" href="javascript:void(0)">고객센터<span class="sr-only">(current)</span></a></li>' +
        '            </ul>' +
        '         </div>' +
        '      </div>' +
        '   </nav>';
}

function indexView() {
    return '<div id="wrapper">' +
        '    <div id="boxoffice">' +
        '      <table>' +
        '         <tr>' +
        '            <td>BOX OFFICE' +
        '            <div>' +
        '               <a id="orderbyticket" href="javascript:void(0)">예매순</a>' +
        '               <a id="orderbyavg" href="javascript:void(0)">평점순</a>' +
        '            </div>' +
        '            </td>' +
        '            <td rowspan="3"><a id="trailer" href="javascript:void(0)"></a>' +
        '            </td>' +
        '         </tr>' +
        '         <tr>' +
        '            <td>' +
        '            <ul id="rank_ul"></ul>' +
        '            </td>' +
        '         </tr>' +
        '         <tr>' +
        '            <td id="reservation"><a>예매하기</a></td>' +
        '         </tr>' +
        '      </table>' +
        '   </div>' +
        '   <div id="slidePoster">' +
        '   </div>' +
        '   <div id="bannerbox">' +
        '         <img src="resources/img/common/bannerbox.png" alt="" />' +
        '   </div>' +
        '   <div id="eventBxMain" style="background: url(resources/img/common/bg_pattern.png) repeat left top;">' +
        '         <div>' +
        '            <div>Event</div>' +
        '            <img src="resources/img/common/eventBxMain.png" alt="" />' +
        '         </div>' +
        '   </div>' +
        '   <div id="bnShortcuts">' +
        '        <img src="resources/img/common/shortList.png" alt="" />' +
        '   </div>' +
        '</div>';
}

function indexLoginView() {
    return '<div id="wrapper">' +
        '    <div id="boxoffice">' +
        '      <table style="width: 80%;">' +
        '         <tr>' +
        '            <td style="min-width: 285px;">BOX OFFICE' +
        '            <div>' +
        '               <a id="orderbyticket" href="javascript:void(0)">예매순</a>' +
        '               <a id="orderbyavg" href="javascript:void(0)">평점순</a>' +
        '            </div>' +
        '            </td><td id="gender_title" class="abb1_tbboxoffice_firstcol" style="min-width: 285px;font-size:17px;"></td>' +
        '            <td rowspan="3"><a id="trailer" href="javascript:void(0)"></a>' +
        '            </td>' +
        '         </tr>' +
        '         <tr>' +
        '            <td>' +
        '            <ul id="rank_ul"></ul>' +
        '            </td><td style="border-left: 1px solid black;"><ul id="rank_by_gender"></ul></td>' +
        '         </tr>' +
        '         <tr>' +
        '            <td colspan="2" id="reservation"><a>예매하기</a></td>' +
        '         </tr>' +
        '      </table>' +
        '   </div>' +
        '   <div id="slidePoster">' +
        '   </div>' +
        '   <div id="bannerbox">' +
        '         <img src="resources/img/common/bannerbox.png" alt="" />' +
        '   </div>' +
        '   <div id="eventBxMain" style="background: url(resources/img/common/bg_pattern.png) repeat left top;">' +
        '         <div>' +
        '            <div>Event</div>' +
        '            <img src="resources/img/common/eventBxMain.png" alt="" />' +
        '         </div>' +
        '   </div>' +
        '   <div id="bnShortcuts">' +
        '        <img src="resources/img/common/shortList.png" alt="" />' +
        '   </div>' +
        '</div>';
}

function adminGnbView() {
    return '<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">' +
        '            <div class="navbar-header">' +
        '                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">' +
        '                    <span class="sr-only">Toggle navigation</span>' +
        '                    <span class="icon-bar"></span>' +
        '                    <span class="icon-bar"></span>' +
        '                    <span class="icon-bar"></span>' +
        '                </button>' +
        '                <a id="go_index" class="navbar-brand" href="/web" style="color: rgba(0, 0, 0, 0.65);">로그아웃 및 홈화면으로 이동</a>' +
        '            </div>' +
        '            <div class="collapse navbar-collapse navbar-ex1-collapse" style="background-color: #ebf1f6;">' +
        '                <ul class="nav navbar-nav side-nav" style="background-color: #ebf1f6;">' +
        '                    <li>' +
        '                        <a id="admin_index" href="javascript:void(0)"><i class="fa fa-fw fa-desktop"></i> 메인</a>' +
        '                    </li>' +
        '                    <li>' +
        '                        <a id="admin_reservation" href="javascript:void(0)"><i class="fa fa-fw fa-bar-chart-o"></i> 예매</a>' +
        '                    </li>' +
        '                    <li>' +
        '                      <a id="admin_movie" href="javascript:void(0)" data-toggle="collapse" data-target="#movie"><i class="fa fa-fw fa-dashboard"></i> 영화 <i class="fa fa-fw fa-caret-down"></i></a>' +
        '                        <ul id="movie" class="collapse">' +
        '                            <li>' +
        '                                <a id="manage_movie" href="javascript:void(0)">관리</a>' +
        '                            </li>' +
        '                            <li>' +
        '                                <a id="regist_movie" href="javascript:void(0)">등록</a>' +
        '                            </li>' +
        '                        </ul>' +
        '                    </li>' +
        '                    <li>' +
        '                      <a id="admin_showing" href="javascript:void(0)" data-toggle="collapse" data-target="#showing"><i class="fa fa-fw fa-dashboard"></i> 상영 시간표 <i class="fa fa-fw fa-caret-down"></i></a>' +
        '                        <ul id="showing" class="collapse">' +
        '                            <li>' +
        '                                <a id="manage_showing" href="javascript:void(0)">관리</a>' +
        '                            </li>' +
        '                            <li>' +
        '                                <a id="regist_showing" href="javascript:void(0)">등록</a>' +
        '                            </li>' +
        '                        </ul>' +
        '                    </li>' +
        '                    <li>' +
        '                     <a id="admin_board" href="javascript:void(0)" data-toggle="collapse" data-target="#bbs"><i class="fa fa-fw fa-edit"></i> 게시판 <i class="fa fa-fw fa-caret-down"></i></a>' +
        '                        <ul id="bbs" class="collapse">' +
        '                            <li>' +
        '                                <a id="manage_article" href="javascript:void(0)">문의글 관리</a>' +
        '                            </li>' +
        '                            <li>' +
        '                                <a id="manage_notice" href="javascript:void(0)">공지글 관리</a>' +
        '                            </li>' +
        '                        </ul>' +
        '                    </li>' +
        '                    <li>' +
        '                        <a id="admin_gender" href="javascript:void(0)"><i class="fa fa-fw fa-bar-chart-o"></i> 성별 예매율</a>' +
        '                    </li>' +
        '                    <li>' +
        '                        <a id="admin_member" href="javascript:void(0)"><i class="fa fa-fw fa-wrench"></i> 회원 관리</a>' +
        '                    </li>' +
        '                </ul>' +
        '            </div>' +
        '        </nav>';
}

function adminShowingRegisterView() {
    return '<div id="showing_register" >' +
        '      <div class="abb1_admin_maintext">영화 시간표 등록</div>' +
        '      <div>' +
        '         <div id="movie_register_table" style="margin-left:50px;" class="abb1_signup_form_control abb1_admin_customer_change">' +
        '         <table>' +
        '            <tr style="height:40px;">' +
        '               <td>영화관</td>' +
        '              <td>' +
        '               <select name="multiplex" id="multiplex" style="height: 35px;">' +
        '               <option value="가산디지털">가산디지털</option>' +
        '               </select>' +
        '               </td>' +
        '            </tr>' +
        '            <tr style="height:40px;">' +
        '               <td>상영관</td>' +
        '               <td>' +
        '               <select name="theater" id="theater" style="height: 35px;">' +
        '               <option value="1관">1관</option>' +
        '               <option value="2관">2관</option>' +
        '               <option value="3관">3관</option>' +
        '               <option value="4관">4관</option>' +
        '               </select>' +
        '               </td>' +
        '            </tr>' +
        '            <tr style="height:40px;">' +
        '               <td>상영날짜</td>' +
        '               <td><input id="show_date" type="text" placeholder="2017-00-00"/></td>' +
        '            </tr>' +
        '            <tr style="height:0px;">' +
        '               <td id="check_show_date" colspan="2" style="padding-left: 151px;"></td>' +
        '            </tr>' +
        '            <tr style="height:40px;">' +
        '               <td>상영시작시간</td>' +
        '               <td>' +
        '               <select name="start_time" id="start_time" style="height: 35px;">' +
        '               <option value="09:00">09:00</option>' +
        '               <option value="10:00">10:00</option>' +
        '               <option value="11:00">11:00</option>' +
        '               <option value="12:00">12:00</option>' +
        '               <option value="13:00">13:00</option>' +
        '               <option value="14:00">14:00</option>' +
        '               <option value="15:00">15:00</option>' +
        '               <option value="16:00">16:00</option>' +
        '               <option value="17:00">17:00</option>' +
        '               <option value="18:00">18:00</option>' +
        '               <option value="19:00">19:00</option>' +
        '               <option value="20:00">20:00</option>' +
        '               <option value="21:00">21:00</option>' +
        '               <option value="22:00">22:00</option>' +
        '               </select>' +
        '               </td>' +
        '            </tr>' +
        '            <tr style="height:40px;">' +
        '               <td>영화제목</td>' +
        '               <td><input id="title" type="text"/></td>' +
        '            </tr>' +
        '         </table>' +
        '         </div>' +
        '         <div id="movie_register_btns" class="abb1_bbs_write_btns" style="width: 891px;">' +
        '            <input id="confirm" type="button" class="abb1_bbs_write_cancel" value="등록"/>' +
        '         </div>' +
        '      </div>' +
        '   </div>';
}

function adminShowingView() {
    return '         <div id="customer">' +
        '            <div>영화 시간표 관리</div>' +
        '               <div id="customer_management_wrapper" style="margin-left: 50px;">' +
        '                <div>' +
        '               <select name="multiplex" id="multiplex" style="height: 35px;width:100px;">' +
        '               <option value="가산디지털">가산디지털</option>' +
        '               </select>' +
        '               <select name="theater" id="theater" style="height: 35px;width:100px;">' +
        '               <option value="1관">1관</option>' +
        '               <option value="2관">2관</option>' +
        '               <option value="3관">3관</option>' +
        '               <option value="4관">4관</option>' +
        '               </select>' +
        '                     <input id="customer_show_date" class="abb1_admin_reservation_search_keyword" type="text" placeholder="상영 날짜" />' +
        '               <select name="customer_start_time" id="customer_start_time" style="height: 35px;width:100px;">' +
        '               <option value="09:00">09:00</option>' +
        '               <option value="10:00">10:00</option>' +
        '               <option value="11:00">11:00</option>' +
        '               <option value="12:00">12:00</option>' +
        '               <option value="13:00">13:00</option>' +
        '               <option value="14:00">14:00</option>' +
        '               <option value="15:00">15:00</option>' +
        '               <option value="16:00">16:00</option>' +
        '               <option value="17:00">17:00</option>' +
        '               <option value="18:00">18:00</option>' +
        '               <option value="19:00">19:00</option>' +
        '               <option value="20:00">20:00</option>' +
        '               <option value="21:00">21:00</option>' +
        '               <option value="22:00">22:00</option>' +
        '               </select>' +
        '                     <input id="customer_search_btn" type="button" value="검색"/>' +
        '                  </div>' +
        '<div id="check_show_date" style="margin-left: 215px;"></div>' +
        '                  <div id="result">' +
        '               </div>' +
        '            </div>' +
        '         </div>';
}

function adminShowingNotResultView() {
    return '<div style="margin-top: 25px;margin-left: 23px;">시간표가 존재하지 않습니다.</div>'
}

function adminShowingResultView() {
    return '         <div id="movie_register_table" style="margin-left:50px;" class="abb1_signup_form_control abb1_admin_customer_change">' +
        '         <table>' +
        '            <tr style="height:40px;">' +
        '               <td>영화관</td>' +
        '              <td id="multiplexName">' +
        '               </td>' +
        '            </tr>' +
        '            <tr style="height:40px;">' +
        '               <td>상영관</td>' +
        '               <td id="theaterName">' +
        '               </td>' +
        '            </tr>' +
        '            <tr style="height:40px;">' +
        '               <td>상영날짜</td>' +
        '               <td><input id="show_date" type="text" placeholder="2017-00-00"/></td>' +
        '            </tr>' +
        '            <tr style="height:40px;">' +
        '               <td>상영시작시간</td>' +
        '               <td>' +
        '               <select name="start_time" id="start_time" style="height: 35px;">' +
        '               <option value="09:00">09:00</option>' +
        '               <option value="10:00">10:00</option>' +
        '               <option value="11:00">11:00</option>' +
        '               <option value="12:00">12:00</option>' +
        '               <option value="13:00">13:00</option>' +
        '               <option value="14:00">14:00</option>' +
        '               <option value="15:00">15:00</option>' +
        '               <option value="16:00">16:00</option>' +
        '               <option value="17:00">17:00</option>' +
        '               <option value="18:00">18:00</option>' +
        '               <option value="19:00">19:00</option>' +
        '               <option value="20:00">20:00</option>' +
        '               <option value="21:00">21:00</option>' +
        '               <option value="22:00">22:00</option>' +
        '               </select>' +
        '               </td>' +
        '            </tr>' +
        '           <tr style="height:40px;">' +
        '               <td style="padding-right: 20px;">상영끝시간</td>' +
        '               <td id="end_time"></td>' +
        '            </tr>' +
        '            <tr style="height:40px;">' +
        '               <td>영화제목</td>' +
        '               <td id="title"></td>' +
        '            </tr>' +
        '            <tr style="height:40px;">' +
        '               <td>가격</td>' +
        '               <td id="price"></td>' +
        '         </tr></table>' +
        '         </div>' +
        '         <div id="movie_register_btns" class="abb1_bbs_write_btns" style="width: 891px;">' +
        '            <input id="confirm" type="button" class="abb1_bbs_write_cancel" value="수정 완료"/>' +
        '         </div>' +
        '      </div>' +
        '   </div>';
}

function adminIndexView() {
    return '<div id="page-wrapper" style="padding-left:230px;margin-top: 45px;">' +
        '            <div class="container-fluid">' +
        '                <div class="row">' +
        '                    <div class="col-lg-12">' +
        '                        <h1 class="page-header">' +
        '                            Dashboard' +
        '                        </h1>' +
        '                    </div>' +
        '                </div>' +
        '                <div class="row">' +
        '                    <div class="col-lg-3 col-md-6">' +
        '                        <div class="panel panel-primary">' +
        '                            <div class="panel-heading">' +
        '                                <div class="row">' +
        '                                    <div class="col-xs-3">' +
        '                                        <i class="fa fa-shopping-cart fa-5x"></i>' +
        '                                    </div>' +
        '                                    <div class="col-xs-9 text-right">' +
        '                                        <div id="today_reservation" class="huge">26</div>' +
        '                                        <div>오늘 예매 수</div>' +
        '                                    </div>' +
        '                                </div>' +
        '                            </div>' +
        '                            <a href="javascript:void(0)">' +
        '                                <div class="panel-footer">' +
        '                                    <span class="pull-left">View Details</span>' +
        '                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>' +
        '                                    <div class="clearfix"></div>' +
        '                                </div>' +
        '                            </a>' +
        '                        </div>' +
        '                    </div>' +
        '                    <div class="col-lg-3 col-md-6">' +
        '                        <div class="panel panel-green">' +
        '                            <div class="panel-heading">' +
        '                                <div class="row">' +
        '                                    <div class="col-xs-3">' +
        '                                        <i class="fa fa-tasks fa-5x"></i>' +
        '                                    </div>' +
        '                                    <div class="col-xs-9 text-right">' +
        '                                        <div id="the_number_of_multiplex" class="huge">12</div>' +
        '                                        <div>등록 영화관 수</div>' +
        '                                    </div>' +
        '                                </div>' +
        '                            </div>' +
        '                            <a href="javascript:void(0)">' +
        '                                <div class="panel-footer">' +
        '                                    <span class="pull-left">View Details</span>' +
        '                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>' +
        '                                    <div class="clearfix"></div>' +
        '                                </div>' +
        '                            </a>' +
        '                        </div>' +
        '                    </div>' +
        '                    <div class="col-lg-3 col-md-6">' +
        '                        <div class="panel panel-yellow">' +
        '                            <div class="panel-heading">' +
        '                                <div class="row">' +
        '                                    <div class="col-xs-3">' +
        '                                        <i class="fa fa-support fa-5x"></i>' +
        '                                    </div>' +
        '                                    <div class="col-xs-9 text-right">' +
        '                                        <div id="the_number_of_movie" class="huge">124</div>' +
        '                                        <div>등록 영화 수</div>' +
        '                                    </div>' +
        '                                </div>' +
        '                            </div>' +
        '                            <a href="javascript:void(0)">' +
        '                                <div class="panel-footer">' +
        '                                    <span class="pull-left">View Details</span>' +
        '                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>' +
        '                                    <div class="clearfix"></div>' +
        '                                </div>' +
        '                            </a>' +
        '                        </div>' +
        '                    </div>' +
        '                    <div class="col-lg-3 col-md-6">' +
        '                        <div class="panel panel-red">' +
        '                            <div class="panel-heading">' +
        '                                <div class="row">' +
        '                                    <div class="col-xs-3">' +
        '                                        <i class="fa fa-comments fa-5x"></i>' +
        '                                    </div>' +
        '                                    <div class="col-xs-9 text-right">' +
        '                                        <div id="today_article" class="huge">13</div>' +
        '                                        <div >당일 업데이트 게시글 수</div>' +
        '                                    </div>' +
        '                                </div>' +
        '                            </div>' +
        '                            <a href="javascript:void(0)">' +
        '                                <div class="panel-footer">' +
        '                                    <span class="pull-left">View Details</span>' +
        '                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>' +
        '                                    <div class="clearfix"></div>' +
        '                                </div>' +
        '                            </a>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '                <div class="row">' +
        '                    <div class="col-lg-12">' +
        '                         <div id="chart_div"></div>' +
        '                    </div>' +
        '                </div>' +
        '                <div class="row">' +
        '                    <div class="col-lg-12">' +
        '                          <div id="donutchart"></div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '        </div>';
}

function adminStatisticView() {
    return '         <div id="statistic">' +
        '   <div>성별 예매율</div>' +
        '            <div style="margin-left:50px;"><select name="" id="statistic_category">' +
        '               <option selected>카테고리 선택</option>' +
        '               <option value="multiplex">영화관</option>' +
        '               <option value="movie">영화</option>' +
        '            </select>' +
        '            <input id="statistic_search_keyword" type="text"/>' +
        '            <input id="statistic_search_btn" type="button" value="검색"/>' +
        '			<div id="chart_div">' +
        '			</div>' +
        '         </div>' +
        '         </div>' +
        '      </div>';
}

function adminStatisticChartView() {
    return '<div id="donutchart"></div>';
}

function adminMovieRegisterView() {
    return '    <div id="movie_register">' +
        '   <div>영화 등록</div>' +
        '   <div>' +
        '      <div id="movie_register_table" style="margin-left:50px;margin-bottom: 20px;" class="abb1_signup_form_control abb1_admin_customer_change">' +
        '      <table>' +
        '         <tr style="height:40px;">' +
        '            <td>영화명</td>' +
        '            <td><input id="title" type="text"/></td>' +
        '         </tr>' +
        '         <tr style="height:40px;">' +
        '            <td>등급</td>' +
        '            <td><select name="grade" class="abb1_admin_movie_reg_ddl">' +
        '<option value="12" selected>12세</option>' +
        '<option value="15">15세</option>' +
        '<option value="all">전체</option>' +
        '</select></td>' +
        '         </tr>' +
        '         <tr style="height:40px;">' +
        '            <td>개봉일</td>' +
        '            <td><input id="released" type="text"/></td>' +
        '         </tr>' +
        '         <tr style="height:40px;">' +
        '            <td>기본정보</td>' +
        '            <td><input id="info" type="text"/></td>' +
        '         </tr>' +
        '         <tr style="height:40px;">' +
        '            <td>시놉시스</td>' +
        '            <td><textarea name="" id="synopsys" cols="30" rows="6" style="width: 100%;margin-top: 3px;"></textarea></td>' +
        '         </tr>' +
        '         <tr style="height:40px;">' +
        '            <td>감독 이름</td>' +
        '            <td><input id="name_director" type="text"/></td>' +
        '         </tr>' +
        '         <tr style="height:40px;">' +
        '            <td>감독 사진</td>' +
        '			  <td><input id="pic_director" type="text"/></td>' +
        '         </tr>' +
        '         <tr style="height:40px;">' +
        '            <td>배우 이름</td>' +
        '            <td><input id="name_actor" type="text"/></td>' +
        '         </tr>' +
        '         <tr style="height:40px;">' +
        '            <td>배우 사진</td>' +
        '			  <td><input id="pic_actor" type="text"/></td>' +
        '         </tr>' +
        '         <tr style="height:40px;">' +
        '            <td style="padding-right: 20px;">영화 프로필 사진</td>' +
        '			  <td><input id="pic_main" type="text"/></td>' +
        '         </tr>' +
        '         <tr style="height:40px;">' +
        '            <td>트레일러 URL</td>' +
        '            <td><span><input id="trailer_url" type="text"/></span></td>' +
        '         </tr>' +
        '         <tr id="trailer_check" style="height:40px;">' +
        '            <td><input id="trailer_main" type="checkbox" style="padding-left: 114px;"/></td>' +
        '            <td>메인 페이지 트레일러로 등록</td>' +
        '         </tr>' +
        '      </table>' +
        '      </div>' +
        '      <div id="movie_register_btns" class="abb1_bbs_write_btns" style="padding-top:0px;padding-left: 395px;text-align: left;">' +
        '         <input id="confirm" type="button" class="abb1_bbs_write_cancel" value="확인"/>' +
        '      </div>' +
        '   </div>' +
        '</div>';
}

function adminCustomerView() {
    return '         <div id="customer">' +
        '            <div>회원 관리</div>' +
        '               <div id="customer_management_wrapper" style="margin-left: 50px;">' +
        '                  <div>' +
        '                     <input id="customer_search_keyword" type="text" placeholder="아이디 or 이름" />' +
        '                     <input id="customer_search_btn" type="button" value="검색"/>' +
        '                  </div>' +
        '                  <div id="result">' +
        '                     <div id="admin_customer_table">' +
        '                        <table>' +
        '                        <colgroup>' +
        '                           <col />' +
        '                           <col />' +
        '                           <col />' +
        '                           <col />' +
        '                           <col />' +
        '                        </colgroup>' +
        '                        <thead>' +
        '                           <tr>' +
        '                           <th>ID</th>' +
        '                           <th>이름</th>' +
        '                           <th>성별</th>' +
        '                           <th>생년월일</th>' +
        '                           </tr>' +
        '                        </thead>' +
        '                        <tbody id="customer_list">' +
        '                           <tr>' +
        '                              <td id="content" colspan="5">아이디 또는 이름을 검색하세요.</td>' +
        '                           </tr>' +
        '                        </tbody>' +
        '                     </table>' +
        '                  </div>' +
        '               </div>' +
        '            </div>' +
        '         </div>';
}

function adminCustomerResultView() {
    return '<div id="customer_result">' +
        '   <table>' +
        '      <tr>' +
        '         <td>아이디</td>' +
        '         <td id="id"/></td>' +
        '      </tr>' +
        '      <tr>' +
        '         <td>이름</td>' +
        '         <td><input id="name" type="text" value=""/></td>' +
        '      </tr>' +
        '      <tr>' +
        '         <td>생년월일</td>' +
        '         <td><input id="birth" type="text" value=""/></td>' +
        '      </tr>' +
        '      <tr>' +
        '         <td>전화번호</td>' +
        '         <td><input id="phone" type="text" value=""/></td>' +
        '      </tr>' +
        '      <tr>' +
        '         <td>성별</td>' +
        '         <td><input id="gender" type="text" value=""/></td>' +
        '      </tr>' +
        '      <tr>' +
        '         <td>주소</td>' +
        '         <td><input id="address" type="text" value=""/></td>' +
        '      </tr>' +
        '      <tr>' +
        '         <td>상세주소</td>' +
        '         <td><input id="address_detail" type="text" value=""/></td>' +
        '      </tr>' +
        '      <tr>' +
        '         <td>이메일</td>' +
        '         <td><input id="email" type="text" value=""/></td>' +
        '      </tr>' +
        '      <tr>' +
        '         <td colspan="2"><input id="update" type="button" value="저장"/></td>' +
        '      </tr>' +
        '   </table>' +
        '   </div>';
}

function adminReservationView() {
    return '      <div id="reservation">' +
        '           <div>예매 관리</div>' +
        '         <div id="inner_wrapper" style="margin-left: 50px;margin-right: 50px;">' +
        '            <select name="" id="reservation_category">' +
        '               <option selected>카테고리 선택</option>' +
        '               <option value="multiplex">영화관</option>' +
        '               <option value="movie">영화</option>' +
        '            </select>' +
        '            <input id="reservation_search_keyword" type="text" />' +
        '            <input id="reservation_search_btn" type="button" value="검색"/>' +
        '         </div></div>' +
        '         <div id="reservation_detail" style="margin-left:50px;margin-right:50px;">' +
        '         </div>';
}

function adminReservationResultView() {
    return '   <div>' +
        '            <div id="admin_reservation_list">' +
        '               <div>예매내역</div>' +
        '               <div>' +
        '               <table id="reservation_table">' +
        '                  <colgroup>' +
        '                     <col />' +
        '                     <col />' +
        '                     <col />' +
        '                     <col />' +
        '                     <col />' +
        '                     <col />' +
        '                     </colgroup>' +
        '                     <thead>' +
        '                     <tr>' +
        '                        <th>상영관</th>' +
        '                        <th>영화제목</th>' +
        '                        <th>시작시간</th>' +
        '                        <th>예매번호</th>' +
        '                        <th>예매날짜</th>' +
        '                        <th>가격</th>' +
        '                     </tr>' +
        '                        </thead>' +
        '               </table>' +
        '               </div>' +
        '            </div>' +
        '            <div id="admin_cancel_list">' +
        '               <div>취소내역</div>' +
        '               <div>' +
        '               <table id="cancel_list_table">' +
        '                  <colgroup>' +
        '                     <col />' +
        '                     <col />' +
        '                     <col />' +
        '                     <col />' +
        '                     <col />' +
        '                     <col />' +
        '                     </colgroup>' +
        '                     <thead>' +
        '                     <tr>' +
        '                        <th>상영관</th>' +
        '                        <th>영화제목</th>' +
        '                        <th>시작시간</th>' +
        '                        <th>예매번호</th>' +
        '                        <th>예매날짜</th>' +
        '                        <th>가격</th>' +
        '                     </tr>' +
        '                  </thead>' +
        '               </table>' +
        '               </div>' +
        '            </div>' +
        '            <div id="admin_movie_list">' +
        '               <div>상영정보</div>' +
        '               <div>' +
        '                  <table id="movie_list_table">' +
        '                     <colgroup>' +
        '                        <col />' +
        '                        <col />' +
        '                        <col />' +
        '                        <col />' +
        '                        <col />' +
        '                        </colgroup>' +
        '                        <thead>' +
        '                        <tr>' +
        '                           <th>상영관</th>' +
        '                           <th>영화제목</th>' +
        '                           <th>시작시간</th>' +
        '                        </tr>' +
        '                        </thead>' +
        '                  </table>' +
        '               </div>' +
        '            </div>' +
        '            <div id="admin_movie_donut_chart">' +
        '            </div>' +
        '         </div>';
}

function adminMovieManagementView() {
    return '    <div id="movie_management">' +
        '              <div>영화 관리</div>' +
        '            <div id="management" style="margin-left: 50px;">' +
        '               <input id="movie_search_keyword" type="text" placeholder="영화명 입력" />' +
        '               <input id="movie_search_btn" type="button" value="검색"/>' +
        '            </div>' +
        '           </div>' +
        '         <div id="movie_deatail" style="margin-left:50px;"></div>';
}

function adminMovieManagementDetailView() {
    return '<div>' +
        '         <div id="movie_management_table" style="margin-top: 20px;margin-bottom: 30px;">' +
        '            <table>' +
        '               <tr>' +
        '                  <td rowspan="11" style="padding-right:25px;"><img id="poster" src="' + $.context() + '/resources/img/movie/movie_poster_0.png" alt="" width="100%" height="100%"/></td>' +
        '                  <td>영화명</td>' +
        '                  <td id="title"/></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>등급</td>' +
        '                  <td id="grade"/></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>개봉일</td>' +
        '                  <td id="released"/></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>기본정보</td>' +
        '                  <td id="info"/></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>시놉시스</td>' +
        '                  <td><textarea name="synopsys" id="synopsys" cols="38" rows="6"></textarea></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>감독 이름</td>' +
        '                  <td id="name_director"/></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>배우 이름</td>' +
        '                  <td id="name_actor"/></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td style="padding-right: 15px;">트레일러 URL</td>' +
        '                  <td id="trailer_url"/></td>' +
        '               </tr>' +
        '            </table>' +
        '         </div>' +
        '         <div id="movie_management_btns" style="width:595px;text-align:center"  class="abb1_bbs_write_btns">' +
        '            <input id="delete" type="button" class="abb1_bbs_write_cancel"  value="삭제"/>' +
        '            <input id="update" type="button" class="abb1_bbs_write_confirm" style="background-color: black;color: white;" value="수정"/>' +
        '         </div>' +
        '      </div>';
}

function adminMovieManagementUpdateView() {
    return '<div>' +
        '         <div id="movie_management_table" style="margin-top: 20px;margin-bottom: 30px;">' +
        '            <table>' +
        '               <tr>' +
        '                  <td rowspan="11" style="padding-right:25px;"><img id="poster" src="' + $.context() + '/resources/img/movie/movie_poster_0.png" alt="" width="100%" height="100%"/></td>' +
        '                  <td>영화명</td>' +
        '                  <td><input id="title" type="text" value="영화명"/></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>등급</td>' +
        '                  <td><input id="grade" type="text" value="등급"/></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>개봉일</td>' +
        '                  <td><input id="released" type="text" value="개봉일"/></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>기본정보</td>' +
        '                  <td><input id="info" type="text" value="기본정보"/></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>시놉시스</td>' +
        '                  <td><textarea name="synopsys" id="synopsys" cols="30" rows="6"></textarea></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>감독 이름</td>' +
        '                  <td><input id="name_director" type="text" value="감독 이름"/></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>감독 사진</td>' +
        '                  <td><input id="pic_director" type="file" /></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>배우 이름</td>' +
        '                  <td><input id="name_actor" type="text" value="배우 이름"/></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>배우 사진</td>' +
        '                  <td><input id="pic_actor" type="file" /></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>영화 프로필 사진</td>' +
        '                  <td><input id="pic_main" type="file" /></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>트레일러 URL</td>' +
        '                  <td><input id="trailer_url" type="text" value="http://youtube.com/"/></td>' +
        '               </tr>' +
        '            </table>' +
        '         </div>' +
        '         <div id="movie_management_btns" style="width:595px;text-align:center" class="abb1_bbs_write_btns">' +
        '            <input id="cancel" type="button" class="abb1_bbs_write_cancel" value="취소"/>' +
        '            <input id="update" type="button" class="abb1_bbs_write_confirm" style="background-color: black;color: white;" value="완료"/>' +
        '         </div>' +
        '      </div>';
}

function adminBbsNoticeView() {
    return '      <div id="notice_table">' +
        '      <div>공지글 관리</div>' +
        '      <div id="notice_write_wrapper" style="margin-left:22px;">' +
        '      <div>' +
        '         <input id="write" type="button" value="등록" />' +
        '      </div>' +
        '      <table>' +
        '         <colgroup>' +
        '            <col />' +
        '            <col />' +
        '            <col />' +
        '            <col />' +
        '         </colgroup>' +
        '         <tr id="notice_tr">' +
        '            <th>순번</th>' +
        '            <th>제목</th>' +
        '            <th>작성시간</th>' +
        '            <th>삭제</th>' +
        '         </tr>' +
        '      </table>' +
        '      </div>' +
        '   </div>';
}

function adminBbsNoticeWriteView() {
    return '<div id="notice_write">' +
        '   <table style="margin-left: 30px;">' +
        '      <colgroup>' +
        '         <col />' +
        '         <col />' +
        '      </colgroup>' +
        '         <tr>' +
        '            <td>제목</td>' +
        '            <td>' +
        '               <input id="notice_title" type="text" name="title" maxlength="50"/>' +
        '            </td>' +
        '         </tr>' +
        '         <tr>' +
        '            <td>내용</td>' +
        '            <td>' +
        '               <textarea name="contents" id="bbs_write_notice" cols="30" rows="10"></textarea>' +
        '            </td>' +
        '         </tr>' +
        '         <tr>' +
        '            <td>첨부파일</td>' +
        '            <td>' +
        '               <input id="attach" type="text" name="attach" maxlength="50"/>' +
        '               <span>jpg, jpeg, png, bmp, pdf (2MB × 1개)</span>' +
        '            </td>' +
        '         </tr>' +
        '      </table>' +
        '      <div style="width: 1050px;">' +
        '         <a href="javascript:void(0)"><input id="cancel" type="button" value="취소"/></a>' +
        '         <a href="javascript:void(0)"><input id="confirm" type="button" value="확인"/></a>' +
        '      </div>' +
        '</div>';
}

function adminBbsFaqView() {
    return '         <div id="faq_table">' +
        '         <div>문의글 관리</div>' +
        '         <div id="faq_write_wrapper" style="margin-left:22px;width: 544px;">' +
        '            <table>' +
        '            <colgroup>' +
        '               <col />' +
        '               <col />' +
        '               <col />' +
        '               <col />' +
        '               <col />' +
        '               <col />' +
        '            </colgroup>' +
        '               <tr id="faq_tr">' +
        '                  <th>순번</th>' +
        '                  <th>제목</th>' +
        '                  <th>작성자</th>' +
        '                  <th>작성시간</th>' +
        '                  <th>문답여부</th>' +
        '                  <th>삭제</th>' +
        '               </tr>' +
        '            </table>' +
        '            <div id="faq_pagination" style="text-align: center;width: 100%;padding-left: 207px;">' +
        '              </div>' +
        '         </div>' +
        '         </div>';
}

function adminBbsFaqPaginationView() {
    return '<table>' +
        '                  <tr>' +
        '                     <td>' +
        '                        <a id="goFirstPage" href="javascript:void(0)"><img src="' + $.context() + '/resources/img/pagination/prev_all.gif" alt="" /></a>' +
        '                        <a id="goPrevPage" href="javascript:void(0)"><img src="' + $.context() + '/resources/img/pagination/prev.gif" alt="" /></a>' +
        '                     </td>' +
        '                     <td>' +
        '                        <h4 id="pages">' +
        '                        <a href="javascript:void(0)">1</a>' +
        '                        <a href="javascript:void(0)">2</a>' +
        '                        <a href="javascript:void(0)">3</a>' +
        '                        <a href="javascript:void(0)">4</a>' +
        '                        <a href="javascript:void(0)">5</a>' +
        '                        <a href="javascript:void(0)">6</a>' +
        '                        <a href="javascript:void(0)">7</a>' +
        '                        <a href="javascript:void(0)">8</a>' +
        '                        <a href="javascript:void(0)">9</a>' +
        '                        <a href="javascript:void(0)">10</a>' +
        '                        </h4>' +
        '                     </td>' +
        '                     <td>' +
        '                        <a id="goNextPage" href="javascript:void(0)"><img src="' + $.context() + '/resources/img/pagination/next.gif" alt="" /></a>' +
        '                        <a id="goLastPage" href="javascript:void(0)"><img src="' + $.context() + '/resources/img/pagination/next_all.gif" alt="" /></a>' +
        '                     </td>' +
        '                  </tr>' +
        '               </table>';
}

function reservationMainView() {
    return '<div id="reservation">' +
        '      <div id="reservation_main_form">' +
        '<div style="background-color: #efebdb;">' +
        '<div class="calendar" style="margin: 0 auto;width: 670px;text-align: center;padding: 25px;">' +
        '    <div id="calendor_year" style="text-align: left;font-size: 20px;margin-bottom: 14px;margin-left: 94px;">' +
        '    	<span id="year">2017</span>' +
        '    </div>' +
        '    <div id="calendor_day">' +
        '    	 <img id="" src="' + $.image() + '/icon/btn_m_prev_on.png" style="margin-right: 25px;" width="20px" height="40px" alt="" />' +
        '    	 <input id="day0" style="width: 60px;font-size: 17px;margin: 5px;" class="abb1_calendar_day btn btn-default" name="day" type="button" value="5/28"/>' +
        '        <input id="day1" style="width: 60px;font-size: 17px;margin: 5px;" class="abb1_calendar_day btn btn-default"  name="day" type="button" value="5/29"/>' +
        '        <input id="day2" style="width: 60px;font-size: 17px;margin: 5px;" class="abb1_calendar_day btn btn-default"  name="day" type="button" value="5/30"/>' +
        '        <input id="day3" style="width: 60px;font-size: 17px;margin: 5px;" class="abb1_calendar_day btn btn-default"  name="day" type="button" value="5/31"/>' +
        '        <input id="day4" style="width: 60px;font-size: 17px;margin: 5px;" class="abb1_calendar_day btn btn-default"  name="day" type="button" value="6/1"/>' +
        '        <input id="day5" style="width: 60px;font-size: 17px;margin: 5px;" class="abb1_calendar_day btn btn-default"  name="day" type="button" value="6/2"/>' +
        ' 		 <img id="" src="' + $.image() + '/icon/btn_m_next_on.png" style="margin-left: 25px;" width="20px" height="40px" alt="" />' +
        '    </div>' +
        '	</div>' +
        '</div>' +
        '      <table id="reservation_multiplex">' +
        '         <colgroup>' +
        '            <col />' +
        '            <col />' +
        '         </colgroup>' +
        '         <tr>' +
        '            <td><span>영화관</span></td>' +
        '            <td><span>영화</span></td>' +
        '         </tr>' +
        '         <tr>' +
        '            <td>' +
        '               <div id="reservation_tab_scroll">' +
        '                  <ul>' +
        '                     <li>' +
        '                        <span><a id="reservation_tab_cont" href="javascript:void(0)">서울(<em>8</em>)</a></span>' +
        '                        <div id="reservation_area_list">' +
        '                        <ul>' +
        '                           <li><a href="javascript:void(0)" class="on">가산디지털</a></li>' +
        '                           <li><a class="noAction" href="javascript:void(0)">가양</a></li>' +
        '                           <li><a class="noAction" href="javascript:void(0)">강동</a></li>' +
        '                           <li><a class="noAction" href="javascript:void(0)">건대입구</a></li>' +
        '                           <li><a class="noAction" href="javascript:void(0)">김포공항</a></li>' +
        '                           <li><a class="noAction" href="javascript:void(0)">노원</a></li>' +
        '                           <li><a class="noAction" href="javascript:void(0)">독산</a></li>' +
        '                           <li><a class="noAction" href="javascript:void(0)">브로드웨이(신사)</a></li>' +
        '                           <li><a class="noAction" href="javascript:void(0)">서울대입구</a></li>' +
        '                        </ul>' +
        '                        </div>' +
        '                     </li>' +
        '                  </ul>' +
        '                  <br />' +
        '                  <div id="reservation_area">' +
        '                  <ul>' +
        '                     <li><a class="noAction" href="javascript:void(0)">경기/인천</a></li>' +
        '                     <li><a class="noAction" href="javascript:void(0)">충청/대전</a></li>' +
        '                     <li><a class="noAction" href="javascript:void(0)">전라/광주</a></li>' +
        '                     <li><a class="noAction" href="javascript:void(0)">경북/대구</a></li>' +
        '                     <li><a class="noAction" href="javascript:void(0)">경남/부산/울산</a></li>' +
        '                     <li><a class="noAction" href="javascript:void(0)">강원</a></li>' +
        '                     <li><a class="noAction" href="javascript:void(0)">제주</a></li>' +
        '                  </ul>' +
        '                  </div>' +
        '               </div>' +
        '            </td>' +
        '            <td>' +
        '               <ul id="reservation_movielist">' +
        '               </ul>' +
        '            </td>' +
        '         </tr>' +
        '         <tr>' +
        '            <td colspan="2">' +
        '            <div id="reservation_confirm">' +
        '               <div>' +
        '                  <h3><span>상영시간</span></h3>' +
        '               </div>' +
        '            </div>' +
        '            <div id="reservation_time">' +
        '               <h4>가산디지털</h4>' +
        '            </div>' +
        '            </td>' +
        '         </tr>' +
        '      </table>' +
        '      </div>' +
        '   </div>';
}

function reservationMainTimetableView(movSeq, timetable_list) {
    var view = '<div id="movie_time_line"><div><span id="movieTitle' + movSeq + '"><strong id="movieName"></strong></span>' +
        '<a id="movieDetail" href="javascript:void(0)"><img src="' + $.context() + '/resources/img/icon/movieLink.png" alt="" /></a>' +
        '</div><ul id="movie_timeline_ul">';
    for (var i = 0; i < timetable_list.length; i++) {
        if (movSeq == timetable_list[i].movSeq) {
            var seq = timetable_list[i].shoSeq;
            view += '<a id="rv' + seq + '" class="goReservation" href="javascript:void(0)"><li><table>' +
                '   <tr>' +
                '      <td id="theaterName' + seq + '"></td>' +
                '   </tr>' +
                '   <tr>' +
                '      <td><strong id="startTime' + seq + '"></strong></td>' +
                '   </tr>' +
                '   <tr>' +
                '      <td id="seatCount' + seq + '"> 석 / 석</td>' +
                '   </tr>' +
                '   </table></li></a>';
        }
    }
    view += '</ul></div>';
    return view;
}

function reservationSeatView() {
    return '<div id="seat">' +
        '    <div id="reservation_seat_form">' +
        '      <div>' +
        '         <div style="padding: 30px 0;">' +
        '            <span>좌석 선택</span>' +
        '         </div>' +
        '      <div>' +
        '         <span>Screen</span>' +
        '      </div>' +
        '      <div id="seat_area">' +
        '         <div>' +
        '            <table id="seat_area_table">' +
        '            </table>' +
        '         </div>' +
        '         <div>' +
        '            <img src="' + $.context() + '/resources/img/reservation/seat_info.png" alt=""/>' +
        '         </div>' +
        '      </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>';
}

function reservationSeatTicketingTableView() {
    return '  <div id="ticketing">' +
        '    <div>' +
        '    <div>' +
        '      <table>' +
        '        <tr id="ticketing_tr1">' +
        '          <td>' +
        '            <div>영화</div>' +
        '          </td>' +
        '          <td>' +
        '            <div>예매정보</div>' +
        '          </td>' +
        '          <td><div>총 결제 금액</div></td>' +
        '        </tr>' +
        '        <tr id="ticketing_tr2">' +
        '        </tr>' +
        '     </table>' +
        '      </div>' +
        '    </div>' +
        '  </div>';
}

function reservationSeatInfoView() {
    return '<td>' +
        '     <table>' +
        '        <tr>' +
        '           <td><img id="moviePoster" src="" alt="" width="127px" height="170px"/></td>' +
        '           <td>' +
        '                   <div id="ticketing_movie_title">아빠는 딸</div>' +
        '                   <div id="ticketing_movie_type">2D</div>' +
        '                   <div id="movGrade">15세이상관람가</div>' +
        '           </td>' +
        '        </tr>' +
        '     </table>' +
        '     </td>' +
        '     <td>' +
        '             <table>' +
        '           <tr>' +
        '              <td>상영일</td>' +
        '              <td id="showdate">2017-04-27(목)</td>' +
        '           </tr>' +
        '           <tr>' +
        '              <td>상영시간</td>' +
        '              <td id="runningTime">19:00~21:00</td>' +
        '           </tr>' +
        '           <tr>' +
        '              <td>상영관</td>' +
        '              <td id="multiplexName">가산디지털 1관</td>' +
        '           </tr>' +
        '           <tr>' +
        '              <td>좌석</td>' +
        '              <td id="seatNum">A1</td>' +
        '           </tr>' +
        '           <tr>' +
        '              <td id="ticketing_cost" colspan="2">9,000원</td>' +
        '           </tr>' +
        '        </table>' +
        '     </td>' +
        '     <td id="ticketing_paying">' +
        '             <div id="ticketing_cost_total">9,000원</div>' +
        '             <a id="doReservation" href="javascript:void(0)"><input type="button" value="결제하기"/></a>' +
        '     </td>';
}

function indexMovieRank(obj) {
    return '<li><a id="movie' + obj.movie.seq + '" class="goMovie" href="javascript:void(0)"><em style="padding: 0 5px;">' + (obj.i + 1) + '. </em>' +
        '<span class="abb1_rank_grade" style="background: url(resources/img/movie/grade_' + obj.movie.grade + '.png);"></span>' +
        '<span class="abb1_rank_moviename">' + obj.movie.title + '</span>' +
        '</a>' +
        '<em>' + (obj.count / obj.total * 100).toFixed(1) + '%</em>' +
        '</li>';
}

function indexSlideView() {
    return '<div class="abb1_width_100 abb1_text_center">' +
        '		<ul class="abb1_slidePoster">' +
        indexSlideLi() +
        '		</ul>' +
        '	</div>';
}

function indexSlideLi() {
    return '<li class="abb1_slideBtn"><a id="prev"><img src="resources/img/common/prev.png" alt=""></a></li>' +
        '<li><a id="slide0" class="goMovieDetail" href="javascript:void(0)"><img src="' + $.image() + '/movie/movie_poster_0.png" alt="" width="188px" height="274px"></a></li>' +
        '<li><a id="slide1" class="goMovieDetail" href="javascript:void(0)"><img src="' + $.image() + '/movie/movie_poster_1.png" alt="" width="188px" height="274px"></a></li>' +
        '<li><a id="slide2" class="goMovieDetail" href="javascript:void(0)"><img src="' + $.image() + '/movie/movie_poster_2.png" alt="" width="188px" height="274px"></a></li>' +
        '<li><a id="slide3" class="goMovieDetail" href="javascript:void(0)"><img src="' + $.image() + '/movie/movie_poster_3.png" alt="" width="188px" height="274px"></a></li>' +
        '<li class="abb1_slideBtn"><a id="next"><img src="resources/img/common/next.png" alt=""></a></li>';
}

function movieMainView() {
    return '<div id="movieMain">' +
        '      <div>' +
        '        <ul>' +
        '          <li><a href="javascript:void(0)">현재상영작</a></li>' +
        '          <li><a id="future" href="javascript:void(0)">상영예정작</a></li>' +
        '        </ul>' +
        '      </div>' +
        '      <div id="order">' +
        '         <ul>' +
        '            <li><a id="order_by_rate" href="javascript:void(0)">예매순</a></li>' +
        '            <li><a id="order_by_gpa" href="javascript:void(0)">평점순</a></li>' +
        '         </ul>' +
        '      </div>' +
        '      <div>' +
        '         <div id="movieList"></div>' +
        '         <div id="movieList2"></div>' +
        '      </div>' +
        '   </div>';
}

function movieMainList(movie_list, i, gpa, total) {
    return '<li>' +
        '         <table>' +
        '            <tr>' +
        '               <td><a id="movie' + i + '" class="goMovie" href="javascript:void(0)"><img src="' + $.image() + '/movie/' + movie_list[i].pic_main + '" width="228px" height="333.99px" alt="..."></a></td>' +
        '            </tr>' +
        '            <tr>' +
        '               <td><a id="movie' + i + '" class="goMovie" href="javascript:void(0)">' + movie_list[i].title + '</a></td>' +
        '            </tr>' +
        '            <tr>' +
        '               <td>예매율 ' + (movie_list[i].count / total * 100).toFixed(1) + '% | 관람평점 ' + gpa.toFixed(1) + '</td>' +
        '            </tr>' +
        '         </table>' +
        '      </li>';
}

function movieDetailView(rank, rate, m, gpa) {
    return '<div id="movieDetail">' +
        '      <div id="movieTrailer">' +
        '      <iframe width="784px" height="453px" src="' + m.trailer_url + '?autoplay=1"></iframe>' +
        '      </div>' +
        '      <div id="movieInfo">' +
        '         <div>' +
        '         <ul>' +
        '         <li>' +
        '            <table>' +
        '               <tr>' +
        '                  <td>' +
        '                     <img src="' + $.context() + '/resources/img/movie/' + m.pic_main + '" width="228px" height="333.99px" alt="...">' +
        '                  </td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td></td>' +
        '               </tr>' +
        '            </table>' +
        '         </li>' +
        '         <li>' +
        '            <table>' +
        '               <tr>' +
        '                  <td colspan="4"><h3><strong>' + m.title + '</strong></h3></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td><strong>예매율</strong></td>' +
        '                  <td><span>' + rank + '</span> <span>위, ' + rate + '% </span></td>' +
        '                  <td><strong>관람평점</strong></td>' +
        '                  <td>'+ gpa.toFixed(1)+' </td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td><strong>등급</strong></td>' +
        '                  <td colspan="3">' + calcGrade(m) + '관람가</td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td><strong>개봉일</strong></td>' +
        '                  <td colspan="3">' + m.released + '</td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td><strong>기본정보</strong></td>' +
        '                  <td colspan="3">' + m.info + '</td>' +
        '               </tr>' +
        '            </table>' +
        '         </li>' +
        '      </ul>' +
        '      </div>' +
        '      <div>' +
        '         <table>' +
        '            <tr>' +
        '               <td colspan="4"><h3><strong>시놉시스</strong></h3></td>' +
        '            </tr>' +
        '            <tr>' +
        '               <td colspan="4">' + m.synopsys + '</td>' +
        '            </tr>' +
        '         </table>' +
        '      </div>' +
        '      <div id="donutchart"></div>' +
        '      </div>' +
        '      <div id="movie_actor">' +
        '         <div>' +
        '            <h3>감독 및 출연</h3>' +
        '         </div>' +
        '         <div>' +
        '            <ul>' +
        '               <li><img src="' + $.context() + '/resources/img/movie/' + m.pic_director + '" alt="" />' +
        '                  <br><br>' + m.name_director + '<br>감독' +
        '               </li>' +
        '               <li><img src="' + $.context() + '/resources/img/movie/' + m.pic_actor + '" alt="" />' +
        '                  <br><br>' + m.name_actor + '<br>배우' +
        '               </li>' +
        '            </ul>' +
        '         </div>' +
        '      </div>';
}

function movieDetailWriteReviewView() {
    return '<div>' +
        '         <div>' +
        '            <table>' +
        '               <tr>' +
        '                  <td colspan="4"><h3>평점 및 영화 리뷰</h3></td>' +
        '                  <td colspan="2">(한글 150자/영문300자)</td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td>' +
        '                     <span><strong>평점</strong></span>' +
        '                     <div>' +
        '                        <span>' +
        '                             <span>' +
        '                               <input type="radio" name="star-input" id="p1" value="1"><label for="p1">1</label>' +
        '                               <input type="radio" name="star-input" id="p2" value="2"><label for="p2">2</label>' +
        '                               <input type="radio" name="star-input" id="p3" value="3"><label for="p3">3</label>' +
        '                               <input type="radio" name="star-input" id="p4" value="4"><label for="p4">4</label>' +
        '                               <input type="radio" name="star-input" id="p5" value="5"><label for="p5">5</label>' +
        '                               <input type="radio" name="star-input" id="p6" value="6"><label for="p6">6</label>' +
        '                               <input type="radio" name="star-input" id="p7" value="7"><label for="p7">7</label>' +
        '                               <input type="radio" name="star-input" id="p8" value="8"><label for="p8">8</label>' +
        '                               <input type="radio" name="star-input" id="p9" value="9"><label for="p9">9</label>' +
        '                               <input type="radio" name="star-input" id="p10" value="10"><label for="p10">10</label>' +
        '                           </span><br>' +
        '                             <output for="star-input"><b>0</b><strong>점</strong></output>' +
        '                        </span>' +
        '                     </div>' +
        '                  </td>' +
        '                  <td colspan="4">' +
        '                     <textarea name="" id="content" cols="100" rows="5" placeholder="영화 리뷰는 로그인 후에 작성하실 수 있습니다."></textarea>' +
        '                  </td>' +
        '                  <td><a id="insert" href="javascript:void(0)"><span>입력</span></a></td>' +
        '               </tr>' +
        '            </table>' +
        '         </div>' +
        '    <div>';
}

function boardMainView() {
    return '<div id="board_main">' +
        '<div><strong>고객센터</strong></div>' +
        '<div>' +
        '<div id="board_main_ddl">' +
        '<select name="city">' +
        '<option value="" selected>지역전체</option>' +
        '<option value="seoul">서울</option>' +
        '</select>' +
        '<select name="theater">' +
        '<option value="" selected>영화관전체</option>' +
        '<option value="gasan">가산디지털</option>' +
        '</select>' +
        '<select name="search">' +
        '<option value="title" selected>제목</option>' +
        '<option value="content">내용</option>' +
        '<option value="both">제목+내용</option>' +
        '</select>' +
        '<input id="board_main_find_keyword" type="text" placeholder="내용 입력"/>' +
        '<input id="board_main_find_search" type="button" value="검색"/>' +
        '<span>총 <strong id="bbs_count"></strong>개의 게시물이 있습니다.</span>' +
        '</div>' +
        '<div id="board_main_table" style="margin-top:50px"><table>' +
        '<colgroup>' +
        '<col style="width: 11%" />' +
        '<col style="width: 14%" />' +
        '<col style="width: 60%" />' +
        '<col style="width: 30%" />' +
        '<col style="width: 30%" />' +
        '</colgroup>' +
        '<thead>' +
        '<tr>' +
        '<th>번호</th>' +
        '<th>영화관</th>' +
        '<th>제목</th>' +
        '<th>등록일</th>' +
        '<th>조회수</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>';
}

function boardMainBottomView() {
    return '<a class="goLastPage" href="javascript:void(0)"><img src="' + $.context() + '/resources/img/pagination/next_all.gif" alt="" /></a>' +
        '               </td>' +
        '            </tr>' +
        '         </table>' +
        '      </div>' +
        '      <div id="board_main_btn" style="text-align: right">' +
        '         <a id="write" href="#"><input type="button" value="글쓰기"/></a>' +
        '      </div>' +
        '      </div>' +
        '   </div>';
}

function boardMainSomeView() {
    return '<div id="board_main">' +
        '<div><strong>고객센터</strong></div>' +
        '<div>' +
        '<div id="board_main_ddl">' +
        '<select name="city">' +
        '<option value="" selected>지역선택</option>' +
        '<option value="seoul">서울</option>' +
        '<option value="gyunggi">경기</option>' +
        '<option value="daejeon">대전</option>' +
        '</select>' +
        '<select name="theater">' +
        '<option value="" selected>영화관선택</option>' +
        '<option value="gasan">가산디지털</option>' +
        '<option value="gayang">가양</option>' +
        '<option value="gangdong">강동</option>' +
        '</select>' +
        '<select name="search">' +
        '<option value="title" selected>제목</option>' +
        '<option value="content">내용</option>' +
        '<option value="both">제목+내용</option>' +
        '</select>' +
        '<input id="board_main_find_keyword" type="text" placeholder="내용 입력"/>' +
        '<input id="board_main_find_search" type="button" value="검색"/>' +
        '<span>검색 결과 <strong id="bbs_count"></strong>개의 게시물이 있습니다.</span>' +
        '</div>' +
        '<div id="board_main_table" style="margin-top:50px"><table>' +
        '<colgroup>' +
        '<col style="width: 11%" />' +
        '<col style="width: 14%" />' +
        '<col style="width: 60%" />' +
        '<col style="width: 30%" />' +
        '<col style="width: 30%" />' +
        '</colgroup>' +
        '<thead>' +
        '<tr>' +
        '<th>번호</th>' +
        '<th>영화관</th>' +
        '<th>제목</th>' +
        '<th>등록일</th>' +
        '<th>조회수</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody id="table_body">' +
        '     </tbody>' +
        '         </table>' +
        '      </div>' +
        '      <div id="board_main_btn" style="text-align: right">' +
        '         <a id="write" href="javascript:void(0)"><input type="button" value="글쓰기"/></a>' +
        '      </div>' +
        '      </div>' +
        '   </div>';
}

function boardNoticeDetailView(notice, attach) {
    return '<div id="board_notice_detail">' +
        '      <div><strong>고객센터</strong></div>' +
        '      <div>' +
        '	      <table id="board_notice_detail_table">' +
        '	         <tr>' +
        '	            <td>' +
        '	               <h3>[공지]' + notice.title + '</h3>' +
        '	               <ul>' +
        '	                  <li>' +
        '	                     <strong>영화관 : </strong><span> 전체</span>' +
        '	                  </li>' +
        '	                  <li>' +
        '	                     <strong>등록일 : </strong><span> ' + notice.reg_date + '</span>' +
        '	                  </li>' +
        '	                  <li>' +
        '	                     <strong>조회수 : </strong><span> ' + notice.hits + '</span>' +
        '	                  </li>' +
        '	               </ul>' +
        '	            </td>' +
        '	         </tr>' +
        '	         <tr>' +
        '	            <td colspan="2">' +
        attach +
        '	            <div id="board_notice_content" style="padding: 20px;">' + notice.content + '</div>' +
        '	            </td>' +
        '	         </tr>' +
        '	      </table>' +
        '     </div>' +
        '   <div id="board_notice_detail_btn">' +
        '         <a id="goBMain" href="javascript:void(0)"><input type="button" value="목록"/></a>' +
        '      </div>' +
        '   </div>';
}

function boardWriteView() {
    return '<div id="board_write">' +
        '      <div><strong>문의내용</strong></div>' +
        '      <div>      ' +
        '      	<span><span>*</span> 표시항목은 필수 입력 항목입니다.</span>' +
        '      </div>' +
        '      <table id="board_write_table">' +
        '	      <colgroup>' +
        '	      	<col style="width:15%"/>' +
        '	      	<col style="width:80%"/>' +
        '	      </colgroup>' +
        '         <tr>' +
        '            <td>문의종류 <span>*</span></td>' +
        '            <td id="board_write_radio">' +
        '               <input type="radio" name="kind" value="1" checked="checked"/><span>문의</span>' +
        '               <input type="radio" name="kind" value="2" /><span>칭찬</span>' +
        '               <input type="radio" name="kind" value="3" /><span>불만</span>' +
        '               <input type="radio" name="kind" value="4" /><span>건의</span>' +
        '            </td>' +
        '         </tr>' +
        '         <tr>' +
        '            <td>영화관 <span>*</span></td>' +
        '            <td><input id="board_write_select_multiplex" type="button" value="영화관 선택"/></td>' +
        '         </tr>' +
        '         <tr>' +
        '            <td>제목 <span>*</span></td>' +
        '            <td>' +
        '               <input id="board_write_title" type="text" name="title" maxlength="50"/>' +
        '            </td>' +
        '         </tr>' +
        '         <tr>' +
        '            <td>내용 <span>*</span></td>' +
        '            <td>' +
        '               <textarea name="contents" id="board_write_content" cols="30" rows="10"></textarea>' +
        '            </td>' +
        '         </tr>' +
        '         <tr>' +
        '            <td>첨부파일</td>' +
        '            <td>' +
        '               <input type="file" id="file" name="file" value="파일 찾기"/>' +
        '               <span>jpg, jpeg, png, bmp, pdf (2MB × 1개)</span>' +
        '            </td>' +
        '         </tr>' +
        '      </table>' +
        '      <div id="board_write_btns">' +
        '         <a href="javascript:void(0)"><input id="board_write_cancel" type="button" value="취소"/></a>' +
        '         <a href="javascript:void(0)"><input id="board_wrtie_confirm" type="button" value="확인"/></a>' +
        '      </div>' +
        '   </div>';
}

function boardDetailView(article) {
    return '<div id="bbs_detail">' +
        '      <div><strong>' + article.article_type + '사항</strong></div>' +
        '      <div>' +
        '      <table id="bbs_detail_table">' +
        '         <tr>' +
        '            <td>' +
        '               <h3>' + article.title + '</h3>' +
        '               <ul class="abb1_view_info">' +
        '                  <li>' +
        '                     <strong>카테고리 : </strong><span> ' + article.article_type + '</span>' +
        '                  </li>' +
        '                  <li>' +
        '                     <strong>등록일 : </strong><span> ' + article.reg_date + '</span>' +
        '                  </li>' +
        '                  <li>' +
        '                     <strong>조회수 : </strong><span> ' + article.hits + '</span>' +
        '                  </li>' +
        '               </ul>' +
        '            </td>' +
        '         </tr>' +
        '         <tr>' +
        '            <td colspan="2">' +
        '            <div id="bbs_detail_content" style="padding: 0 35px;">' +
        '            	<span>' + article.content + '</span>' +
        '            </div>' +
        '            </td>' +
        '         </tr>';
}

function boardDetailCommentView() {
    return '         <tr>' +
        '            <td>' +
        '            <div>' +
        '            <ul id="bbs_detail_review_ul">' +
        '            </ul>' +
        '            </div>' +
        '            </td>' +
        '         </tr>' +
        '         <tr>' +
        '            <td>' +
        '            <table id="bbs_detail_reply">' +
        '               <colgroup>' +
        '	               <col style="width:90%"/>' +
        '	               <col style="width:10%"/>' +
        '               </colgroup>' +
        '               <tr>' +
        '                  <td><textarea name="bbs_review_contents" id="bbs_review_contents" cols="30" rows="5"  placeholder="Write a comment..."></textarea></td>' +
        '                  <td><input id="bbs_review_contents_submit" type="submit" value="입력"/></td>' +
        '               </tr>' +
        '            </table>' +
        '            </td>' +
        '         </tr>' +
        '      </table>' +
        '      </div>' +
        '      <div class="abb1_bbs_write_btns">' +
        '         <a id="goBMain" href="javascript:void(0)"><input type="button" value="목록" class="abb1_bbs_write_confirm"/></a>' +
        '      </div>' +
        '</div>';
}

function multiplexMainInfo(o) {
    return '<div>' +
        '   <img src="' + $.context() + '/resources/img/multiplex/theater.jpg" alt="" />' +
        '   </div>' +
        '   <div id="multiplex_info">' +
        '      <h2><strong>' + o.multiplex_name + '</strong></h2>' +
        '      <table id="multiplex_info_table">' +
        '         <tr>' +
        '            <td>' + o.multiplex_addr + ' </td>' +
        '            <td><strong>총 상영관수</strong></td>' +
        '            <td>' + o.count + '개관</td>' +
        '            <td><strong>총 좌석수</strong></td>' +
        '            <td>' + o.seat_total + '석</td>' +
        '         </tr>' +
        '      </table>' +
        '   </div>' +
        '   <div id="multiplex_info_btn">' +
        '      <ul>' +
        '      <li><a class="goMain" href="javascript:void(0)"><strong>상영시간표</strong></a></li>' +
        '      <li><a class="goMap" href="javascript:void(0)"><strong>위치정보</strong></a></li>' +
        '      </ul>' +
        '   </div>';
}

function multiplexMainCalendarView() {
    return '<div id="multiplex_calendar">' +
        '      <span id="calendar_date" class="abb1_calendar">' + getTodayValue() + '</span></a>' +
        '   </div>' +
        '<div id="movie_time_line"></div>';
}

function multiplexMainForLoopView(o) {
    var i = o.i * 1;
    return '	<a id="' + o.timetable_list[i].movSeq + 'rv' + o.infoIdResTime + '" class="goR" href="javascript:void(0)"><li><table>' +
        '		<tr>' +
        '		<td>' + o.timetable_list[i].theName + '</td>' +
        '		</tr>' +
        '		<tr>' +
        '		<td><strong>' + o.timetable_list[i].shoStartTime + '</strong></td>' +
        '		</tr>' +
        '		<tr>' +
        '		<td> ' + o.res_count + '석 / ' + o.timetable_list[i].theTotalSeat + '석</td>' +
        '		</tr>' +
        '	</table></li></a>';
}

function multiplexMapView() {
    return '<div>' +
        '	<img src="' + $.context() + '/resources/img/multiplex/theater.jpg" alt="" />' +
        '	</div>' +
        '	<div id="multiplex_map_title">' +
        '	<h2><strong>가산디지털 위치정보</strong></h2>' +
        '	</div>' +
        '	<div id="multiplex_info_btn">' +
        '	<ul>' +
        '		<li><a class="goMain" href="javascript:void(0)"><strong>상영시간표</strong></a></li>' +
        '		<li><a><strong>위치정보</strong></a></li>' +
        '	</ul>' +
        '	</div>' +
        '<div id="multiplex_map_api">' +
        '<div><div id="map">' +
        '	</div></div>';
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
        '	       <img src="' + $.context() + '/resources/img/reservation/exit_bottom.png" alt="" />' +
        '	    </td>' +
        '	 </tr>';
    return seat_area_table;
}

function adminLoginView() {
    return '<div id="signupSuccess">' +
        '		<div id="signup_success">' +
        '			<div>' +
        '				<table>' +
        '		         <tr>' +
        '		         	<td>' +
        '			         	<h3><strong>관리자</strong><span>님 환영합니다!</span></h3>' +
        '		         	</td>' +
        '		         </tr>' +
        '		         <tr>' +
        '			         <td>' +
        '			         <ul>' +
        '						 <li>' +
        '							<a href="${context}/admin/index"><input type="button" value="관리자 페이지 GO"/></a>' +
        '						 </li>' +
        '					 </ul>' +
        '					 </td>' +
        '		         </tr>' +
        '		      	</table>' +
        '			</div>' +
        '		</div>' +
        '	</div>';
}

function customerLoginView() {
    return '<div id="customer_login_form">' +
        '	<div>' +
        '      <h2>로그인</h2>' +
        '      <table id="login_table">' +
        '         <tr>' +
        '         	<td><strong>아이디</strong></td>' +
        '            <td><input id="customer_id" name="customer_id" tabindex="1" type="text"></td>' +
        '            <td id="td_login" rowspan="2">' +
        '            	<a id="a_login" href="${context}"><input id="login_btn" type="submit" tabindex="3" value="로그인"></a>' +
        '            </td>' +
        '         </tr>' +
        '         <tr>' +
        '         	 <td><strong>비밀번호</strong></td>' +
        '           <td><input id="customer_pw" name="customer_pw" tabindex="2" type="password"></td>' +
        '         </tr>' +
        '      </table>' +
        '      <table id="find_table">' +
        '             <tr>' +
        '                <td style="text-align:left; padding-left: 30px;"><input id="remember" name="remember" type="checkbox"/> 아이디저장</td>' +
        '             </tr>' +
        '             <tr>' +
        '               <td>' +
        '                  <a id="findId" href="javascript:void(0)">아이디 찾기</a>' +
        '                  <a id="findPw" href="javascript:void(0)">비밀번호 찾기</a>' +
        '	    	   </td>' +
        '            </tr>' +
        '        </table>' +
        '	</div>' +
        '	<div id="login_footer">' +
        '	   <table>' +
        '	      <tr>' +
        '		      <td>회원가입시 온라인/모바일을 편리하게 이용할 수 있습니다. </td>' +
        '		      <td><a id="register2" href="javascript:void(0)"><input type="button" value="회원가입" /></a></td>' +
        '	      </tr>' +
        '	   </table>' +
        '	</div>' +
        '</div>';
}

function customerSignUpView() {
    return '<div id="signUp">' +
        '       <div>' +
        '         <h2>회원가입</h2>' +
        '         <div id="signup_tables">' +
        '            <table style="margin-top:30px;">' +
        '               <tr>' +
        '                  <td><input id="id" name="id" type="text" placeholder="아이디"></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td id="result_id_msg" style="height: 30px;text-align: left;padding-left: 12px;"></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td><input id="pw" name="pw" type="password" placeholder="비밀번호"></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td id="result_pw_msg" style="height: 30px;text-align: left;padding-left: 12px;"></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td><input id="check_pw" type="password" placeholder="비밀번호 확인"></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td id="check_pw_msg" style="height: 30px;text-align: left;padding-left: 12px;"></td>' +
        '               </tr>' +
        '            </table>' +
        '            <table style="margin-top:0px;">' +
        '               <tr>' +
        '                  <td><input id="name" name="name" type="text" placeholder="이름"></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td id="result_name_msg" style="height: 30px;text-align: left;padding-left: 12px;"></td>' +
        '               </tr>' +
        '               <tr>' +
        '                  <td><input id="birth" name="birth" type="text" placeholder="생년월일(2017-01-01)"></td>' +
        '            </tr>' +
        '            <tr>' +
        '                  <td id="result_birth_msg" style="height: 30px;text-align: left;padding-left: 12px;"></td>' +
        '            </tr>' +
        '            <tr>' +
        '               <td><input id="phone" name="phone" type="text" placeholder="휴대폰 번호(010-1234-5678)"></td>' +
        '            </tr>' +
        '            <tr>' +
        '                  <td id="result_phone_msg" style="height: 30px;text-align: left;padding-left: 12px;"></td>' +
        '            </tr>' +
        '         </table>' +
        '         <table style="margin-top:0px;">' +
        '            <tr id="gender_selection">' +
        '            </tr>' +
        '         </table>' +
        '         <table style="margin-top:30px;">' +
        '            <tr>' +
        '               <td><input id="address" type="text" placeholder="주소" ></td>' +
        '               <td>' +
        '                  <input id="find_postcode" type="button" value="우편번호 검색" type="submit">' +
        '               </td>' +
        '            </tr>' +
        '           <tr>' +
        '               <td colspan="2" id="result_address_msg" style="height: 30px;text-align: left;padding-left: 12px;"></td>' +
        '           </tr>' +
        '            <tr>' +
        '              <td colspan="2"><input id="detail_address" type="text" placeholder="상세주소"></td>' +
        '           </tr>' +
        '         </table>' +
        '         <table style="margin-top:30px;">' +
        '            <tr>' +
        '               <td colspan="2"><input id="email" name="email" type="text" placeholder="이메일(abc@gmail.com)" ></td>' +
        '               <td>' +
        '                  <input id="send_code" type="button" value="인증번호 발송" type="submit">' +
        '               </td>' +
        '            <tr>' +
        '               <td colspan="3" id="result_email_msg" style="height: 30px;text-align: left;padding-left: 12px;"></td>' +
        '            </tr>' +
        '            </tr>' +
        '            <tr>' +
        '               <td colspan="3"><input id="check_email" type="text" placeholder="인증번호 입력"></td>' +
        '            </tr>' +
        '            <tr>' +
        '               <td colspan="3" id="check_email_msg" style="height: 30px;text-align: left;padding-left: 12px;"></td>' +
        '            </tr>' +
        '         </table>' +
        '            <a href="#"><input id="signup_finish" style="width: 165px;margin: 0 auto;" type="button" value="가입하기"/></a>' +
        '         </div>' +
        '      </div> ' +
        '   </div>';
}

function customerUpdateInfoView() {
    return '<div id="signUp">' +
        '	    <div>' +
        '	      <h2><strong>회원정보변경</strong></h2>' +
        '			<div id="updateInfo">' +
        '				<table>' +
        '					<tr>' +
        '						<td style="text-align: left;padding-left: 15px;"><strong>아이디</strong></td>' +
        '						<td id="id" style="text-align: left;padding-left: 47px;">yheisun</td>' +
        '					</tr>' +
        '					<tr>' +
        '						<td style="text-align: left;padding-left: 15px;"><strong>비밀번호</strong></td>' +
        '						<td style="padding-left: 33px;"><input id="pw" type="password" placeholder="비밀번호"><span id="result_pw_msg"></span><input id="check_pw" type="password" placeholder="비밀번호 확인"><span id="check_pw_msg"></span></td>' +
        '					</tr>' +
        '					<tr>' +
        '						<td style="text-align: left;padding-left: 15px;"><strong>성명</strong></td>' +
        '						<td id="name" style="text-align: left;padding-left: 47px;">염혜선</td>' +
        '					</tr>' +
        '					<tr>' +
        '						<td style="text-align: left;padding-left: 15px;"><strong>생년</strong></td>' +
        '						<td id="birth" style="text-align: left;padding-left: 47px;">1992-10-15</td>' +
        '					</tr>' +
        '					<tr>' +
        '						<td style="text-align: left;padding-left: 15px;"><strong>성별</strong></td>' +
        '						<td id="gender" style="text-align: left;padding-left: 47px;">여자</td>' +
        '					</tr>' +
        '					<tr>' +
        '						<td style="text-align: left;padding-left: 15px;"><strong>이메일</strong></td>' +
        '						<td id="email" style="text-align: left;padding-left: 47px;">yheisun@gmail.com</td>' +
        '					</tr>' +
        '					<tr>' +
        '					<tr>' +
        '						<td style="text-align: left;padding-left: 15px;"><strong>전화번호</strong></td>' +
        '						<td style="padding-left: 33px;"><input id="phone" type="text" placeholder="010"><span id="result_phone_msg"></td>' +
        '					</tr>' +
        '</table>' +
        '<table>' +
        '					<tr>' +
        '						<td style="text-align: left;padding-left: 15px;"><strong style="padding-right: 79px;">주소</strong></td>' +
        '						<td><input id="address" type="text" placeholder="주소"></td>' +
        '						<td><input id="find_postcode" type="button" value="우편번호 검색" style="padding: 2px;"></td>' +
        '					</tr>' +
        '					<tr>' +
        '						<td style="text-align: left;padding-left: 15px;"><strong></strong></td>' +
        '						<td colspan="2"><input id="detail_address" type="text" placeholder="상세주소"></td>' +
        '					</tr>' +
        '				</table>' +
        '				<ul>' +
        '					<li>' +
        '						<a href="javascript:void(0)"><input id="cancel" type="button" value="취소"/></a>' +
        '					</li>' +
        '					<li>' +
        '						<a href="javascript:void(0)"><input id="confirm" type="button" value="확인"/></a>' +
        '					</li>' +
        '				</ul>' +
        '			</div>' +
        '		</div>' +
        '	</div>';
}

function customerMypageView() {
    return '<div id="mypage" class="abb1_find_id_container">' +
        '		<div> ' +
        '			<h2><strong>마이시네마</strong></h2><h4><strong>내 포인트</strong>: <span id="point"></span>점</h4>' +
        '		</div>' +
        '		<div id="mypageGnb">' +
        '			<ul>' +
        '				<li>' +
        '					<a id="mypageReservationInfo" class="noHover" href="javascript:void(0)">예매/구매내역</a>' +
        '				</li>' +
        '				<li>' +
        '					<a id="mypageMyInfo" href="javascript:void(0)">나의 정보관리</a>' +
        '				</li>' +
        '			</ul> ' +
        '		</div>' +
        '		<div id="mypage_reservation_content">' +
        '			<ul>' +
        '				<li>' +
        '					<a id="mypageReservationList" href="javascript:void(0)"><strong>예매/구매내역</strong></a>' +
        '				</li>' +
        '				<li>' +
        '					<a id="mypageCancelList" href="javascript:void(0)">취소내역</a>' +
        '				</li>' +
        '			</ul>' +
        '			<div id="mypage_reservation">' +
        '			</div>' +
        '		</div>' +
        '	</div>';

}

function customerMypageReservationTable(i) {
    return '<div id="mypage_table' + i + '">	<table>' +
        '					<tr>' +
        '						<td id="movie_img' + i + '" rowspan="5"><span id="reservation_pic' + i + '"><img id="movie_poster' + i + '" src="" width="115px" height="150px" alt="" /></span></td>' +
        '						<td><span id="reservation_no' + i + '">예매번호</span></td>' +
        '						<td id="reservation_number' + i + '">123456789</td>' +
        '					</tr>' +
        '					<tr>' +
        '						<td>예매일</td>' +
        '						<td colspan="2" id="reservation_date' + i + '">2017-04-21</td>' +
        '					</tr>' +
        '					<tr>' +
        '						<td>사용상태</td>' +
        '						<td id="canceled' + i + '">취소가능</td>' +
        '						<td id="detail_icon' + i + '"><a id="detail_' + i + '" class="abb1_detail_icon" href="javascript:void(0)">상세<img src="' + $.image() + '/icon/downarrow.png" width="3%" height="3%" alt="" /></a></td>' +
        '					</tr>' +
        '					<tr>' +
        '						<td>예매내역</td>' +
        '						<td colspan="2" id="movie_name' + i + '">아빠는 딸</td>' +
        '					</tr>' +
        '					<tr>' +
        '						<td id="price_title' + i + '">총 결제 금액</td>' +
        '						<td colspan="2" id="reservation_price' + i + '">22,000원</td>' +
        '					</tr>' +
        '				</table></div>'
}

function customerFindIdView() {
    return '<div id="customer_find_id">' +
        '		<div> ' +
        '			<h2><strong>회원 ID 찾기</strong></h2>' +
        '		</div>' +
        '		<div id="customer_find_id_div">' +
        '			<div>' +
        '				<table id="customer_find_id_table">' +
        '			         <tr>' +
        '			         	<td><strong>이름</strong></td>' +
        '			            <td colspan="2"><input id="name" type="text"></td>' +
        '			         </tr>' +
        '			         <tr>' +
        '			         	<td><strong>이메일</strong></td>' +
        '			            <td colspan="2"><input id="email" type="text" ></td>' +
        '			         </tr>' +
        '			         <tr>' +
        '			         <td><span></span></td>' +
        '		         <td><span id="result_email_msg">인증번호를 받을 이메일를 입력하세요.</span></td>' +
        '			         <td><input id="customer_send_email" type="button" value="전송"></td>' +
        '			         </tr>' +
        '			         <tr>' +
        '			         	<td><strong>인증번호</strong></td>' +
        '			            <td colspan="2"><input id="check_email" type="text"></td>' +
        '			         </tr>' +
        '		         <tr>' +
        '		            <td colspan="3" id="check_email_msg" style="padding-left: 113px;"></td>' +
        '		         </tr>' +
        '			         <tr>' +
        '			         <td colspan="3" id="customer_find_id_btns">' +
        '			         <ul style="padding: 17px 0 0 70px;">' +
        '						<li>' +
        '							<a id="cancel" href="javascript:void(0)"><input type="button" value="취소"/></a>' +
        '						</li>' +
        '						<li>' +
        '							<a  href="javascript:void(0)"><input id="confirm" type="button" value="확인"  /></a>' +
        '						</li>' +
        '					</ul></td>' +
        '		         	</tr>' +
        '		      	</table>' +
        '			</div>' +
        '		</div>' +
        '	</div>';
}

function customerFindIdSuccessView() {
    return '<div id="customer_find_id">' +
        '		<div> ' +
        '			<h2><strong>회원 ID 찾기</strong></h2>' +
        '		</div>' +
        '		<div id="customer_find_id_result">' +
        '			<div>' +
        '				<table id="customer_find_id_table">' +
        '		         <tr>' +
        '			         <td>' +
        '			         	<h4>회원님의 아이디는 <strong id="customer_id" ></strong>입니다.</h4>' +
        '			         </td>' +
        '		         </tr>' +
        '		         <tr>' +
        '		         	<td>' +
        '			        <ul style="padding-top: 30px;">' +
        '						<li>' +
        '							<a id="confirm" href="javascript:void(0)"><input id="confirm" type="button" value="확인"  /></a>' +
        '						</li>' +
        '					</ul>' +
        '					</td>' +
        '		         </tr>' +
        '		      </table>' +
        '			</div>' +
        '		</div>' +
        '	</div>';
}

function customerFindPwView() {
    return '<div id="customer_find_pw">' +
        '		<div> ' +
        '			<h2><strong>회원 비밀번호 찾기</strong></h2>' +
        '		</div>' +
        '		<div id="customer_find_pw_div">' +
        '			<div>' +
        '				<table id="customer_find_pw_table">' +
        '		         <tr>' +
        '		         	<td><strong>아이디</strong></td>' +
        '		            <td colspan="2"><input id="id" type="text"></td>' +
        '		         </tr>' +
        '		         <tr>' +
        '		         	<td><strong>이메일</strong></td>' +
        '		            <td colspan="2"><input id="email" type="text"></td>' +
        '		         </tr>' +
        '		         <tr>' +
        '			         <td><span></span></td>' +
        '			         <td><span id="result_email_msg">인증번호를 받을 이메일를 입력하세요.</span></td>' +
        '			         <td><input id="customer_send_email" type="button" value="전송"></td>' +
        '		         </tr>' +
        '		         <tr>' +
        '		         	<td><strong>인증번호</strong></td>' +
        '		            <td colspan="2"><input id="check_email" type="text"></td>' +
        '		         </tr>' +
        '		         <tr>' +
        '		            <td colspan="3" id="check_email_msg" style="padding-left: 113px;"></td>' +
        '		         </tr>' +
        '		         <tr>' +
        '		         <td colspan="3" id="customer_find_pw_btns">' +
        '			         <ul style="padding: 50px 0 0 86px;">' +
        '						<li>' +
        '							<a id="cancel" href="javascript:void(0)"><input type="button" value="취소"  /></a>' +
        '						</li>' +
        '						<li>' +
        '							<a id="confirm" href="javascript:void(0)"><input type="button" value="확인"  /></a>' +
        '						</li>' +
        '					</ul>' +
        '				</td>' +
        '		         </tr>' +
        '		      </table>' +
        '			</div>' +
        '		</div>' +
        '	</div>';
}

function customerFindPwSuccessView() {
    return '<div id="customer_find_pw">' +
        '		<div> ' +
        '			<h2><strong>회원 비밀번호 찾기</strong></h2>' +
        '		</div>' +
        '		<div id="customer_find_pw_result">' +
        '			<div>' +
        '				<table id="customer_find_pw_table">' +
        '		         <tr>' +
        '		         	<td><strong>비밀번호</strong></td>' +
        '		            <td colspan="2"><input id="pw" style="margin:0px;" type="password"></td>' +
        '		         </tr>' +
        '<tr>' +
        '		            <td colspan="3" id="result_pw_msg" style="padding-left: 165px;height:40px;"></td>' +
        '		         </tr>' +
        '		         <tr>' +
        '		         	<td><strong>비밀번호 확인</strong></td>' +
        '		            <td colspan="2"><input id="check_pw" type="password"></td>' +
        '</tr>' +
        '<tr>' +
        '		            <td colspan="3" id="check_pw_msg" style="padding-left: 165px;height:40px;"></td>' +
        '		         </tr>' +
        '		         <tr>' +
        '		         	<td colspan="3" id="customer_find_pw_btns">' +
        '			        <ul style="padding: 50px 0 0 86px;">' +
        '					<li>' +
        '						<a id="cancel" href="javascript:void(0)"><input type="button" value="취소"  /></a>' +
        '					</li>' +
        '					<li>' +
        '						<a id="confirm" href="javascript:void(0)"><input type="button" value="확인"  /></a>' +
        '					</li>' +
        '					</ul>' +
        '					</td>' +
        '		         </tr>' +
        '		      </table>' +
        '			</div>' +
        '		</div>' +
        '	</div>';
}

function customerMypageCancelView() {
    return '<div id="mypage">' +
        '		<div> ' +
        '			<h2><strong>마이시네마</strong></h2>' +
        '		</div>' +
        '		<div id="mypageGnb">' +
        '			<ul>' +
        '				<li>' +
        '					<a id="mypageReservationInfo" class="noHover" href="javascript:void(0)">예매/구매내역</a>' +
        '				</li>' +
        '				<li>' +
        '					<a id="mypageMyInfo" href="javascript:void(0)">나의 정보관리</a>' +
        '				</li>' +
        '			</ul> ' +
        '		</div>' +
        '		<div id="mypage_reservation_content">' +
        '			<ul>' +
        '				<li>' +
        '					<a id="mypageReservationList" href="javascript:void(0)">예매/구매내역</a>' +
        '				</li>' +
        '				<li>' +
        '					<a id="mypageCancelList" href="javascript:void(0)"><strong>취소내역</strong></a>' +
        '				</li>' +
        '			</ul>' +
        '			<div id="mypage_reservation">' +
        '				<table>' +
        '					<tr>' +
        '						<td rowspan="4"><span id="reservation_pic"><img src="' + $.context() + '/resources/img/movie/movie_poster_6.png" width="60%" height="60%" alt="" /></span></td>' +
        '						<td><span id="reservation_no">예매번호(예매일)</span></td>' +
        '						<td colspan="2"><span>123456789</span>(2017-04-21)</td>' +
        '					</tr>' +
        '					<tr>' +
        '						<td>사용상태</td>' +
        '						<td>취소완료(2017-04-22)</td>' +
        '					</tr>' +
        '					<tr>' +
        '						<td>예매내역</td>' +
        '						<td colspan="2">아빠는 딸</td>' +
        '					<tr>' +
        '						<td>총 결제 금액</td>' +
        '						<td colspan="2">22,000원</td>' +
        '					</tr>' +
        '				</table>' +
        '			</div>' +
        '		</div>' +
        '	</div>';
}

function customerMypageInfoView() {
    return '<div id="mypage">' +
        '		<div> ' +
        '			<h2><strong>마이시네마</strong></h2>' +
        '		</div>' +
        '		<div id="mypageGnb">' +
        '			<ul>' +
        '				<li>' +
        '					<a id="mypageReservationList" href="javascript:void(0)">예매/구매내역</a>' +
        '				</li>' +
        '				<li>' +
        '					<a class="noHover" class="noHover" href="javascript:void(0)">나의 정보관리</a>' +
        '				</li>' +
        '			</ul> ' +
        '		</div>' +
        '		<div id="mypage_reservation_content">' +
        '			<div>' +
        '				<ul>' +
        '					<li>' +
        '						<a id="updateInfo" href="javascript:void(0)"><input type="button" value="회원정보변경" /></a>' +
        '					</li>' +
        '					<li>' +
        '						<a id="withdrawal" href="javascript:void(0)"><input type="button" value="회원탈퇴" /></a>' +
        '					</li>' +
        '				</ul>' +
        '			</div>' +
        '		</div>' +
        '	</div>';
}

function customerSignUpSuccessView() {
    return '<div id="signupSuccess">' +
        '		<div> ' +
        '			<h2><strong>가입완료</strong></h2>' +
        '		</div>' +
        '		<div id="signup_success">' +
        '			<div>' +
        '				<table>' +
        '		         <tr>' +
        '		         	<td>' +
        '			         	<h3><strong id="customer_name"></strong><span>님 환영합니다!</span></h3>' +
        '		         	</td>' +
        '		         </tr>' +
        '		         <tr>' +
        '			         <td>' +
        '			         <ul>' +
        '						 <li>' +
        '							<input id="go_login" type="button" value="확인"/>' +
        '						 </li>' +
        '					 </ul>' +
        '					 </td>' +
        '		         </tr>' +
        '		      	</table>' +
        '			</div>' +
        '		</div>' +
        '	</div>';
}

function customerUpdateInfoChPwView() {
    return '<div id="updateInfoChPw">' +
        '	<div> ' +
        '	<h2><strong>회원정보변경</strong></h2>' +
        '</div>' +
        '<div id="signup_success">' +
        '	<div>' +
        '		<table>' +
        '         <tr>' +
        '         	<td><strong>아이디</strong></td>' +
        '            <td id="id"></td>' +
        '         </tr>' +
        '         <tr>' +
        '         	<td style="padding-top:10px;"><strong>비밀번호</strong></td>' +
        '            <td style="padding-top:10px;"><input id="pw" type="password"></td>' +
        '         </tr>' +
        '         <tr>' +
        '         	<td colspan="2" style="padding-left: 75px;padding-top: 20px;">' +
        '         	<ul>' +
        '				<li>' +
        '					<a href="javascript:void(0)"><input id="cancel" type="button" value="취소"  /></a>' +
        '				</li>' +
        '				<li class="abb1_page_li_inline">' +
        '					<a href="javascript:void(0)"><input id="go_update_info" type="button" value="확인"  /></a>' +
        '				</li>' +
        '			</ul>' +
        '			</td>' +
        '         </tr>' +
        '      </table>' +
        '	</div>' +
        '</div>' +
        '	</div>';
}

function customerWithdrawalView() {
    return '<div id="mypageWithdrawal">' +
        '<div> ' +
        '	<h2><strong>회원탈퇴</strong></h2>' +
        '</div>' +
        '<div id="withdrawal">' +
        '	<div>' +
        '		<table>' +
        '         <tr>' +
        '         	 <td><h3 id="comment">탈퇴를 하시겠습니까?</h3></td>' +
        '         </tr>' +
        '         <tr>' +
        '	         <td>' +
        '		        <ul id="ul_btn">' +
        '				<li>' +
        '					<a href="javascript:void(0)"><input id="cancel" type="button" value="취소"  /></a>' +
        '				</li>' +
        '				<li>' +
        '					<a href="javascript:void(0)"><input id="withdrawal_btn" type="button" value="확인"  /></a>' +
        '				</li>' +
        '				</ul>' +
        '			</td>' +
        '         </tr>' +
        '      </table>' +
        '	</div>' +
        '</div>' +
        '</div>';
}

function reservationDetailView(i, canceled, info) {
    return '<div id="mypage_table' + i + '" style="margin-top: 5px;margin-bottom: 5px;margin-left: 20px;>	<table>' +
        '	<tr>' +
        '		<td id="movie_img' + i + '" rowspan="5" style="padding-right: 25px;"><span id="reservation_pic' + i + '"><img id="movie_poster' + i + '" src="' + $.image() + '/movie/' + info.movPicMain + '" width="115px" height="150px" alt="" /></span></td>' +
        '		<td><span id="reservation_no' + i + '"><strong>예매번호</strong></span></td>' +
        '		<td id="reservation_number' + i + '">' + info.resId + '</td>' +
        '	</tr>' +
        '	<tr>' +
        '		<td><strong>예매일</strong></td>' +
        '		<td colspan="2" id="reservation_date' + i + '">' + info.resRegDate + '</td>' +
        '	</tr>' +
        '	<tr>' +
        '		<td><strong>사용상태</strong></td>' +
        '		<td id="canceled' + i + '">' + canceled + '</td>' +
        '		<td id="detail_icon' + i + '" style="text-align: right;"><a id="detail_' + i + '" class="abb1_detail_icon" href="javascript:void(0)">상세<img src="' + $.image() + '/icon/downarrow.png" width="3%" height="3%" alt="" /></a></td>' +
        '	</tr>' +
        '	<tr>' +
        '		<td><strong>예매내역</strong></td>' +
        '		<td colspan="2" id="movie_name' + i + '">' + info.movTitle + '</td>' +
        '	</tr>' +
        '	<tr>' +
        '		<td id="price_title' + i + '" style="padding-right: 20px;"><strong>총 결제 금액</strong></td>' +
        '		<td colspan="2" id="reservation_price' + i + '">' + info.resPrice + '</td>' +
        '	</tr>' +
        '</table></div>'
}

function customerMypageCancelView() {
    return '<div id="mypage">' +
        '		<div> ' +
        '			<h2><strong>마이시네마</strong></h2>' +
        '		</div>' +
        '		<div id="mypageGnb">' +
        '			<ul>' +
        '				<li>' +
        '					<a id="mypageReservationInfo" class="noHover" href="javascript:void(0)">예매/구매내역</a>' +
        '				</li>' +
        '				<li>' +
        '					<a id="mypageMyInfo" href="javascript:void(0)">나의 정보관리</a>' +
        '				</li>' +
        '			</ul> ' +
        '		</div>' +
        '		<div id="mypage_reservation_content">' +
        '			<ul>' +
        '				<li>' +
        '					<a id="mypageReservationList" href="javascript:void(0)">예매/구매내역</a>' +
        '				</li>' +
        '				<li>' +
        '					<a id="mypageCancelList" href="javascript:void(0)"><strong>취소내역</strong></a>' +
        '				</li>' +
        '			</ul>' +
        '			<div id="mypage_reservation">' +
        '			</div>' +
        '		</div>' +
        '	</div>';
}

function adminBoardDetailView(article) {
    return '<div id="bbs_detail">' +
        '      <div>' +
        '      <table id="bbs_detail_table">' +
        '         <tr>' +
        '            <td>' +
        '               <h3>' + article.title + '</h3>' +
        '               <ul class="abb1_view_info">' +
        '                  <li>' +
        '                     <strong>카테고리 : </strong><span> ' + article.article_type + '</span>' +
        '                  </li>' +
        '                  <li>' +
        '                     <strong>등록일 : </strong><span> ' + article.reg_date + '</span>' +
        '                  </li>' +
        '                  <li>' +
        '                     <strong>조회수 : </strong><span> ' + article.hits + '</span>' +
        '                  </li>' +
        '               </ul>' +
        '            </td>' +
        '         </tr>' +
        '         <tr>' +
        '            <td colspan="2">' +
        '            <div id="bbs_detail_content" style="padding: 0 35px;">' +
        '            	<span>' + article.content + '</span>' +
        '            </div>' +
        '            </td>' +
        '         </tr>' +
        '         <tr>' +
        '            <td>' +
        '            <table id="bbs_detail_reply">' +
        '               <colgroup>' +
        '	               <col style="width:90%"/>' +
        '	               <col style="width:10%"/>' +
        '               </colgroup>' +
        '               <tr>' +
        '                  <td><textarea name="bbs_review_contents" id="bbs_review_contents" cols="30" rows="5"  placeholder="답변을 작성해주세요"></textarea></td>' +
        '                  <td><input id="bbs_review_contents_submit" type="submit" value="답변작성"/></td>' +
        '               </tr>' +
        '            </table>' +
        '            </td>' +
        '         </tr>' +
        '      </table>' +
        '      </div>' +
        '      <div class="abb1_bbs_write_btns">' +
        '         <a id="cancel" href="javascript:void(0)"><input type="button" value="취소" class="abb1_bbs_write_confirm"/></a>' +
        '      </div>' +
        '</div>';
}