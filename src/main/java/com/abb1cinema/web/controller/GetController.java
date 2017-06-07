package com.abb1cinema.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMessage.RecipientType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.abb1cinema.web.domain.Article;
import com.abb1cinema.web.domain.Comment;
import com.abb1cinema.web.domain.Customer;
import com.abb1cinema.web.domain.Information;
import com.abb1cinema.web.domain.Movie;
import com.abb1cinema.web.domain.Notice;
import com.abb1cinema.web.domain.Reservation;
import com.abb1cinema.web.domain.Review;
import com.abb1cinema.web.domain.Showing;
import com.abb1cinema.web.domain.Theater;
import com.abb1cinema.web.domain.Timetable;
import com.abb1cinema.web.service.GetService;

@RestController
public class GetController {
	private static final Logger logger = LoggerFactory.getLogger(GetController.class);
	@Autowired Customer customer;
	@Autowired Movie movie;
	@Autowired Information information;
	@Autowired Reservation reservation;
	@Autowired GetService getService;
	@Autowired Theater theater;
	@Autowired Showing showing;
	@Autowired private JavaMailSender mailSender;

	@RequestMapping(value="/login", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> checkLogin( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController checkLogin() {}","ENTER");
		Map<String, Object>map=new HashMap<>();
		String id=paramMap.get("id");
		String pw=paramMap.get("pw");
		map.put("id", id);
		map.put("pw", pw);
		logger.info("GetController paramMap 내용 {}",id+pw);
		logger.info("map에 들어있는 id,pw {}",id+pw);
		int exist=getService.checkId(map);
		map.put("exist", String.valueOf(exist));
		logger.info("map 안의 exist {}",map.get("exist"));
		if(exist==1){
			customer=getService.getCustomer(map);
			if(id.equals("admin")&&pw.equals(customer.getPw())){
				logger.info("admin 로그인 if문에 진입");
				map.put("permission", "admin");
			}else if(pw.equals(customer.getPw())){
				logger.info("customer 로그인 if문에 진입");
				map.put("permission", "customer");
				map.put("customer", customer);
			}
		}
		return map;
	}

	@RequestMapping(value="/check/id", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> checkId( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController checkId() {}","ENTER");
		Map<String, Object>map=new HashMap<>();
		map.put("id", paramMap.get("id"));
		int exist=getService.checkId(map);
		map.put("result", exist);
		return map;
	}

	@RequestMapping(value="/get/movie", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getMovie(@RequestParam("seq") int seq) throws Exception {
		logger.info("getMovie() {}","ENTER");
		Map<String, Object> map = new HashMap<>();
		map.put("result", "Succeess!!!!");
		movie = getService.getMovie(map);
		map.put("movie", movie);
		return map;
	}

	@RequestMapping(value="/get/movie/list", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getMovieRank() throws Exception {
		logger.info("getMovieRank() {}","ENTER");
		Map<String, Object> map = new HashMap<>();
		List<Movie> movieList = getService.getMovieList(map);
		List<Review> reviewList = getService.getReviewList(map);
		int movieListSize = movieList.size();
		map.put("movie_list", movieList);
		map.put("review_list", reviewList);
		map.put("list_size", movieListSize);
		map.put("statistic", getService.getStatistic(map));
		return map;
	}

	@RequestMapping(value="/get/reservation", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getReservation() throws Exception {
		logger.info("getReservation() {}","ENTER");
		Map<String, Object> map = new HashMap<>();
		map.put("column1", "movie_seq");
		List<Showing> disShowList = getService.getDistinctShowingList(map);
		map.put("key1", "resCanceled");
		map.put("value1", "N");
		List<Information> infoList= getService.getInfoList(map);
		map.clear();
		map.put("dis_show_list", disShowList);
		map.put("info_list", infoList);
		map.put("timetable_list", getService.getTimetableList(map));
		map.put("success", "SUCCESS!!");
		return map;
	}
	
	@RequestMapping(value="/get/reservation/customer", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getReservationCustomer( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController getReservation() {}","ENTER");
		Map<String, Object>map=new HashMap<>();
		List<Information> infoList=new ArrayList<>();
		String id=paramMap.get("id");
		map.put("key1","cusId");
		map.put("value1",id);
		map.put("key2","resCanceled");
		map.put("value2","N");
		infoList=getService.getInfoList(map);
		logger.info("getReservation() infoList {}",infoList);
		map.clear();
		map.put("infoList", infoList);
		return map;
	}

	@RequestMapping(value="/get/cancel", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getCancel( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController getReservation() {}","ENTER");
		Map<String, Object>map=new HashMap<>();
		List<Information> infoList=new ArrayList<>();
		String id=paramMap.get("id");
		map.put("key1","cusId");
		map.put("value1",id);
		map.put("key2","resCanceled");
		map.put("value2","Y");
		infoList=getService.getInfoList(map);
		logger.info("getReservation() infoList {}",infoList);
		map.clear();
		map.put("infoList", infoList);
		return map;
	}

	@RequestMapping(value="/get/board", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getBoard() throws Exception {
		logger.info("getBoard() {}","ENTER");
		Map<String, Object> map = new HashMap<>();
		map.put("group", "Article");
		int articleCount = getService.count(map);
		map.clear();
		map.put("group", "Notice");
		int noticeCount = getService.count(map);
		List<Article> articleList = getService.getArticleList(map);
		List<Notice> noticeList = getService.getNoticeList(map);
		map.put("article_list", articleList);
		map.put("notice_list", noticeList);
		map.put("article_count", articleCount);
		map.put("notice_count", noticeCount);
		map.put("success", "SUCCESS!!");
		return map;
	}

	@RequestMapping(value="/get/board/find", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getArticleList(@RequestBody Map<String, String> paramMap) throws Exception {
		logger.info("getBoard() {}","ENTER");
		Map<String, Object> map = new HashMap<>();
		int articleCount = 0;
		map.put("group", "Article");
		switch (paramMap.get("search")) {
			case "title":
				map.put("title", paramMap.get("keyword"));
				map.put("articleList", getService.getArticleList(map));
				map.put("key1", "title");
				map.put("value1", paramMap.get("keyword"));
				articleCount = getService.countSome(map);
			break;
			case "content":
				map.put("content", paramMap.get("keyword"));
				map.put("articleList", getService.getArticleList(map));
				map.put("key1", "content");
				map.put("value1", paramMap.get("keyword"));
				articleCount = getService.countSome(map);
			break;
			case "both":
				map.put("both", paramMap.get("keyword"));
				map.put("articleList", getService.getArticleList(map));
				map.put("key2", "title");
				map.put("key3", "content");
				map.put("value2", paramMap.get("keyword"));
				map.put("value3", paramMap.get("keyword"));
				articleCount = getService.countSome(map);
			break;
		}

		map.put("articleCount", articleCount);
		map.put("success", "SUCCESS!!");
		return map;
	}

	@RequestMapping(value="/get/board/{seq}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getBoard(@PathVariable String seq, @RequestBody Map<String, String> paramMap) throws Exception {
		logger.info("getBoard(seq) {}","ENTER");
		Map<String, Object> map = new HashMap<>();
		map.put("seq", seq);
		Article article = getService.getArticle(map);
		List<Comment> commentList = getService.getCommentList(map);
		map.put("article", article);
		map.put("comment_list", commentList);
		map.put("id", paramMap.get("customerId"));
		map.put("customer", getService.getCustomer(map));
		map.put("success", "SUCCESS!!");
		return map;
	}

	@RequestMapping(value="/get/notice/{seq}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getNotice(@PathVariable String seq) throws Exception {
		logger.info("getNotice() {}","ENTER");
		Map<String, Object> map = new HashMap<>();
		map.put("seq", seq);
		map.put("notice", getService.getNotice(map));
		map.put("success", "SUCCESS!!");
		return map;
	}


	@RequestMapping(value="/get/multiplex/{seq}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getMultiplex(@PathVariable String seq) throws Exception {
		logger.info("getMultiplex() {}","ENTER");
		Map<String, Object> map = new HashMap<>();
		map.put("key1", "resCanceled");
		map.put("value1", "N");
		List<Information> infoList= getService.getInfoList(map);
		map.clear();
		map.put("info_list", infoList);
		map.put("column1", "movie_seq");
		List<Showing> disShowList = getService.getDistinctShowingList(map);
		map.put("dis_show_list", disShowList);
		map.put("theater_list", getService.getTheaterList(map));
		map.put("timetable_list", getService.getTimetableList(map));
		map.put("group", "Theater");
		map.put("key", "multiplex_seq");
		map.put("value", seq);
		int theaterCount = getService.count(map);
		map.put("theater_count", theaterCount);
		map.put("success", "SUCCESS!!");
		return map;
	}
	
	@RequestMapping(value="/get/customer/find", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getCustomerFind(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("getCustomerFind() {}","ENTER");
		Map<String, Object> map = new HashMap<>();
		map.put("name", paramMap.get("name"));
		map.put("id", paramMap.get("id"));
		map.put("email", paramMap.get("email"));
		int countByName = getService.existCustomerByName(map);
		Customer c = new Customer();
		if(countByName!=0){
			c = getService.findCustomerByName(map);
		}
		int countById = getService.existCustomerById(map);
		if(countById!=0){
			c = getService.findCustomerById(map);
		}
		map.put("customer", c);
		map.put("countByName", countByName);
		map.put("countById", countById);
		map.put("success", "SUCCESS!!");
		return map;
	}

	@RequestMapping(value="/get/admin/reservation", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getAdminReservation( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController getAdminReservation() {}","ENTER");
		List<Information> reservationList=new ArrayList<>();
		List<Information> cancelList=new ArrayList<>();
		List<Timetable> showList=new ArrayList<>();
		Map<String, Object>map=new HashMap<>();
		logger.info("getAdminReservation() paramMap에서 가져온 data {}",paramMap.get("category")+paramMap.get("value"));
		switch(paramMap.get("category")){
			case "multiplex":
				map.put("key", "mulName");
				map.put("value", paramMap.get("value"));
				map.put("canceled", "N");
				reservationList=getService.getAdminReservationList(map);
				map.put("canceled", "Y");
				cancelList=getService.getAdminReservationList(map);
				showList=getService.getAdminShowList(map);
				map.clear();
				map.put("reservationList", reservationList);
				map.put("cancelList", cancelList);
				map.put("showList", showList);
				break;
			case "movie":
				map.put("key", "movTitle");
				map.put("value", paramMap.get("value"));
				map.put("canceled", "N");
				reservationList=getService.getAdminReservationList(map);
				map.put("canceled", "Y");
				cancelList=getService.getAdminReservationList(map);
				showList=getService.getAdminShowList(map);
				map.clear();
				map.put("reservationList", reservationList);
				map.put("cancelList", cancelList);
				map.put("showList", showList);
				break;
		}
		return map;
	}

	@RequestMapping(value="/get/admin/movie", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getAdminMovie( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController getAdminMovie() {}","ENTER");
		Map<String, Object>map=new HashMap<>();
		map.put("value", paramMap.get("value"));
		int check=getService.checkMovieTitle(map);
		if(check==1){
			movie=getService.getMovieDetail(map);
		}else{
			movie.setTitle("no");
		}
		map.put("movie", movie);
		return map;
	}
	//0529
	@RequestMapping(value="/get/admin/movie/seq", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getAdminMovieSeq( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController getAdminMovieSeq() {}","ENTER");
		Map<String, Object>map=new HashMap<>();
		int seq=Integer.parseInt(paramMap.get("value"));
		int check=0;
		String strSeq="";
		while(check==0){
			seq--;
			logger.info("getAdminMovieSeq() {}",seq);
			strSeq=String.valueOf(seq);
			map.put("seq", strSeq);
			check=getService.findMovieSeq(map);
			map.clear();
		}
		map.put("group","Information");
		map.put("key","movSeq");
		map.put("value",paramMap.get("value"));
		Integer resExist=getService.count(map);
		if(resExist==0){
			map.put("exist","no");
		}else{
			map.put("exist","yes");
		}
		map.put("seq", strSeq);
		return map;
	}

	@RequestMapping(value="/get/admin/customer", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getAdminCustomer( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController getAdminCustomer() {}","ENTER");
		List<Customer>cusList=new ArrayList<>();
		Map<String, Object>map=new HashMap<>();
		map.put("value", paramMap.get("value"));
		map.put("group", "Customer");
		int id=0;
		int name=0;
		map.put("key", "id");
		id=getService.exist(map);
		map.put("key", "name");
		name=getService.exist(map);
		logger.info("getAdminCustomer() name={} id={}",name,id);
		if(id==0){
			logger.info("getAdminCustomer() id가 0일 때 name={} id={}",name,id);
			map.put("key", "name");
			cusList=getService.getAdminCustomerList(map);
		}else if(name==0){
			logger.info("getAdminCustomer() name이 0일 때 name={} id={}",name,id);
			map.put("key", "id");
			cusList=getService.getAdminCustomerList(map);
		}else{
			logger.info("getAdminCustomer() id,name 모두 0일 때 name={} id={}",name,id);
			customer.setId("notExist");
			cusList.add(customer);
		}
		map.put("cusList", cusList);
		return map;
	}

	@RequestMapping(value="/get/admin/customer/info", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getAdminCustomerInfo( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController getAdminCustomerInfo() {}","ENTER");
		Map<String, Object>map=new HashMap<>();
		map.put("id", paramMap.get("value"));
		customer=getService.findCustomerById(map);
		map.put("customer", customer);
		return map;
	}

	@RequestMapping(value="/get/admin/index/info", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getAdminIndexInfo( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController getAdminCustomerInfo() {}","ENTER");
		Map<String, Object>map=new HashMap<>();
		map.put("group", "Reservation");
		map.put("key", "reg_date");
		map.put("value", paramMap.get("date"));
		Integer reservation=getService.exist(map);
		map.clear();
		map.put("group", "Multiplex");
		Integer multiplex=getService.exist(map);
		map.clear();
		map.put("group", "Movie");
		Integer movie=getService.exist(map);
		map.clear();
		map.put("group", "Article");
		map.put("key", "reg_date");
		map.put("value", paramMap.get("date"));
		Integer article=getService.exist(map);

		//구글도넛차트(롯데시네마 전체 성별 예매율)
		//구글지역차트(롯데시네마 전체 연도별 매출)
		map.clear();
		map.put("group", "Information");
		map.put("key", "resCanceled");
		map.put("value", "Y");
		Integer sales=getService.getSales(map);

		map.clear();
		map.put("group", "Information");
		map.put("key", "cusGender");
		map.put("value", "M");
		map.put("key3", "resCanceled");
		map.put("value3", "Y");
		Integer male=getService.exist(map);
		map.put("value", "F");
		Integer female=getService.exist(map);

		map.put("reservation", reservation);
		map.put("multiplex", multiplex);
		map.put("movie", movie);
		map.put("article", article);
		map.put("sales", sales);
		map.put("male", male);
		map.put("female", female);
		return map;
	}

	@RequestMapping(value="/get/admin/statistic", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getAdminStatistic( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController getAdminStatistic() {}","ENTER");
		Map<String, Object>map=new HashMap<>();
		logger.info("getAdminStatistic()로 넘어온 값 체크 {}",paramMap.get("group")+paramMap.get("name"));
		if(paramMap.get("group").equals("multiplex")){
			map.put("group", "Information");
			map.put("key", "mulName");
		}else{
			map.put("group", "Information");
			map.put("key", "movTitle");
		}
		map.put("value", paramMap.get("name"));
		map.put("key2", "cusGender");
		map.put("value2", "M");
		map.put("key3", "resCanceled");
		map.put("value3", "Y");
		double male=getService.exist(map);
		map.put("value2", "F");
		double female=getService.exist(map);
		logger.info("getAdminStatistic() male: {}, female {}",male,female);
		double maleP = 0.0,femaleP=0.0;
		if(male==0&&female==0){
			femaleP=0;
			maleP=0;
		}else if(female==0){
			maleP=100;
			femaleP=0;
		}else if(male==0){
			femaleP=100;
			maleP=0;
		}else{
			maleP=male/(male+female)*100;
			femaleP=female/(male+female)*100;
		}
		logger.info("getAdminStatistic() male: {}, female {}",maleP,femaleP);
		map.put("maleP", maleP);
		map.put("femaleP", femaleP);
		return map;
	}
	
	@RequestMapping(value="/get/admin/notice", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getAdminNotice( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController getAdminStatistic() {}","ENTER");
		Map<String, Object>map=new HashMap<>();
		map.put("noticeList", getService.getNoticeList(map));
		return map;
	}

	@RequestMapping(value="/get/admin/showing/exist", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getAdminShowing( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController getAdminShowing() {}","ENTER");
		Map<String, Object>map=new HashMap<>();
		map.put("group", "Timetable");
		map.put("key", "mulName");
		map.put("value", paramMap.get("multiplex"));
		map.put("key2", "theName");
		map.put("value2", paramMap.get("theater"));
		map.put("key4", "shoStartTime");
		map.put("value4", paramMap.get("startTime"));
		map.put("key5", "shoShowDate");
		map.put("value5", paramMap.get("showDate"));
		Integer result=getService.exist(map);
		if(result==0){
			map.clear();
			map.put("value",paramMap.get("title"));
			movie=getService.getMovieDetail(map);
			map.put("movieSeq", movie.getSeq());//가져온 timetable에서 movSeq추출
			map.put("key", "name");
			map.put("value",paramMap.get("theater"));
			theater=getService.getTheater(map);
			map.put("theaterSeq", theater.getSeq());//가져온 timetable에서 theSeq추출
			map.put("exist","none");
		}else{
			map.put("exist", "exist");
		}
		return map;
	}       

	@RequestMapping(value="/get/admin/showing", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getAdminShowingDetail(@RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController getAdminShowingDetail() {}","ENTER");
		Map<String, Object>map=new HashMap<>();
		List<Timetable> list=new ArrayList<>();
		map.put("key", "name");
		map.put("value", paramMap.get("theater"));
		theater=getService.getTheater(map);
		map.clear();
		map.put("key1", "theName");
		map.put("value1", paramMap.get("theater"));
		map.put("key2", "shoShowDate");
		map.put("value2", paramMap.get("showDate"));
		map.put("key3", "shoStartTime");
		map.put("value3", paramMap.get("startTime"));
		list=getService.getTimetableList(map);
		map.clear();
		logger.info("getAdminShowingDetail() infoList{}",list);
		map.put("list", list);
		return map;
	}

	@RequestMapping(value="/get/movie/statistic", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getMovieStatistic( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController getAdminStatistic() {}","ENTER");
		Map<String, Object>map=new HashMap<>();
		logger.info("getAdminStatistic()로 넘어온 값 체크 {}",paramMap.get("group")+paramMap.get("name"));
		map.put("group", "Information");
		map.put("key", "movSeq");
		map.put("value", paramMap.get("seq"));
		map.put("key2", "cusGender");
		map.put("value2", "M");
		map.put("key3", "resCanceled");
		map.put("value3", "Y");
		double male=getService.exist(map);
		map.put("value2", "F");
		double female=getService.exist(map);
		logger.info("getAdminStatistic() male: {}, female {}",male,female);
		double maleP = 0.0,femaleP=0.0;
		if(male==0&&female==0){
			femaleP=0;
			maleP=0;
		}else if(female==0){
			maleP=100;
			femaleP=0;
		}else if(male==0){
			femaleP=100;
			maleP=0;
		}else{
			maleP=male/(male+female)*100;
			femaleP=female/(male+female)*100;
		}
		logger.info("getAdminStatistic() male: {}, female {}",maleP,femaleP);
		map.put("maleP", maleP);
		map.put("femaleP", femaleP);
		return map;
	}
	
	@RequestMapping(value="/get/email/auth", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> sendMail( @RequestBody String to) throws Exception{
		logger.info("GetController sendMail() {}","ENTER");
		Map<String, Object>map=new HashMap<>();
		String from="abb1cinema@gmail.com";
		String subject="롯데시네마 인증번호";
		String temp1 ="인증번호  [ ";
		String text = String.valueOf(new Random().nextInt(100000) + 10000);// 10000 ~ 99999
		String temp2 =" ] ";
		String emailText = temp1 + text+ temp2 ;
		MimeMessage message =mailSender.createMimeMessage();

		message.setFrom(new InternetAddress(from));
		message.addRecipient(RecipientType.TO, new InternetAddress(to));
		message.setSubject(subject);
		message.setText(emailText,"utf-8","html");

		mailSender.send(message);
		map.put("random", text);
		return map;
	}
	@RequestMapping(value="/get/gender/movie", method=RequestMethod.POST, consumes="application/json")
	   public @ResponseBody Map<?,?> getGenderMovieRank( @RequestBody Map<String,String> paramMap) throws Exception{
	      logger.info("GetController getGenderMovieRank() {}","ENTER");
	      Map<String, Object>map=new HashMap<>();
	      List<String> list=new ArrayList<>();
	      map.put("column1", "movie_seq");
	      map.put("key1", "cusGender");
	      map.put("value1", paramMap.get("gender"));
	      map.put("key2", "resCanceled");
	      map.put("value2", "Y");
	      list=getService.getGenderMovieRank(map);
	      map.clear();
	      map.put("group", "Movie");
	      Integer movieCount=getService.count(map);
	      map.put("list",list); 
	      map.put("movieList", getService.getMovieList(map));
	      map.put("movieCount", movieCount);
	      return map;
	   }
}
