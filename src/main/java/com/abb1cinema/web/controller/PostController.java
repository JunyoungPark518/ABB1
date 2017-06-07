package com.abb1cinema.web.controller;

import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.abb1cinema.web.service.PostService;

@RestController
public class PostController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired PostService postService;
	
	@RequestMapping(value="/post/reservation", method=RequestMethod.POST, consumes="application/json") 
	public @ResponseBody Map<?,?> doReservation(@RequestBody Map<String, String> paramMap) throws Exception {
		logger.info("PostController registerCustomer() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		map.put("id", paramMap.get("id"));
		map.put("reg_date", paramMap.get("reg_date"));
		map.put("canceled", paramMap.get("canceled"));
		map.put("price", paramMap.get("price"));
		map.put("hcount", paramMap.get("hcount"));
		map.put("customer_id", paramMap.get("customer_id"));
		map.put("showing_seq", paramMap.get("showing_seq"));
		Integer result=postService.doReservation(map);
		map.put("result", result);
		return map;
	}


	@RequestMapping(value="/post/article", method=RequestMethod.POST, consumes="application/json") 
	public @ResponseBody Map<?,?> writeArticle(@RequestBody Map<String, String> paramMap) throws Exception {
		logger.info("PostController writeArticle() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		map.put("article_type", paramMap.get("article_type"));
		map.put("title", paramMap.get("title"));
		map.put("content", paramMap.get("content"));
		map.put("file", paramMap.get("file"));
		map.put("reg_date", paramMap.get("reg_date"));
		map.put("hits", paramMap.get("hits"));
		map.put("customer_id", paramMap.get("customer_id"));
		map.put("multiplex_seq", paramMap.get("multiplex_seq"));
		Integer result=postService.writeArticle(map);
		map.put("result", result);
		return map;
	}
	
	@RequestMapping(value="/post/comment", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> writeComment(@RequestBody Map<String, String> paramMap) throws Exception {
		logger.info("PostController writeComment() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		map.put("reg_date", paramMap.get("reg_date"));
		map.put("content", paramMap.get("content"));
		map.put("customer_id", paramMap.get("customer_id"));
		map.put("article_seq", paramMap.get("article_seq"));
		Integer result=postService.writeComment(map);
		map.put("result", result);
		return map;
	}
	
	@RequestMapping(value="/post/review", method=RequestMethod.POST, consumes="application/json") 
	public @ResponseBody Map<?,?> writeReview(@RequestBody Map<String, String> paramMap) throws Exception {
		logger.info("PostController writeReview() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		map.put("spectator", paramMap.get("spectator"));
		map.put("content", paramMap.get("content"));
		map.put("reg_date", paramMap.get("reg_date"));
		map.put("customer_id", paramMap.get("customer_id"));
		map.put("movie_seq", paramMap.get("movie_seq"));
		map.put("gpa", paramMap.get("gpa"));
		Integer result=postService.writeReview(map);
		map.put("result", result);
		return map;
	}
	
	@RequestMapping(value="/post/admin/movie", method=RequestMethod.POST, consumes="application/json") // spring p291
	public @ResponseBody Map<?,?> registerMovie(@RequestBody Map<String, String> paramMap) throws Exception {
	    logger.info("PostController registerMovie() {}","ENTER");
	    Map<String,Object> map = new HashMap<>();
	    map.put("title", paramMap.get("title"));
	    map.put("grade", paramMap.get("grade"));
	    map.put("released", paramMap.get("released"));
	    map.put("info", paramMap.get("info"));
	    map.put("synopsys", paramMap.get("synopsys"));
	    map.put("name_director", paramMap.get("name_director"));
	    map.put("pic_director", paramMap.get("pic_director"));
	    map.put("name_actor", paramMap.get("name_actor"));
	    map.put("pic_actor", paramMap.get("pic_actor"));
	    map.put("pic_main", paramMap.get("pic_main"));
	    map.put("trailer_url", paramMap.get("trailer_url"));
	    map.put("trailer_main", paramMap.get("trailer_main"));
	    Integer result=postService.registerMovie(map);
	    map.clear();
	    map.put("result", result);
	    return map;
	}
	
	@RequestMapping(value="/post/notice", method=RequestMethod.POST, consumes="application/json") // spring p291
	public @ResponseBody Map<?,?> registerNotice(@RequestBody Map<String, String> paramMap) throws Exception {
		logger.info("PostController registerMovie() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		map.put("file", paramMap.get("file"));
		map.put("title", paramMap.get("title"));
		map.put("content", paramMap.get("content"));
		map.put("reg_date", paramMap.get("reg_date"));
		Integer result=postService.registerNotice(map);
		map.put("result", result);
		return map;
	}
	
    @RequestMapping(value="/post/customer", method=RequestMethod.POST, consumes="application/json") // spring p291
    public @ResponseBody Map<?,?> registerCustomer(@RequestBody Map<String, String> paramMap) throws Exception {
       logger.info("PostController registerCustomer() {}","ENTER");
       Map<String,Object> map = new HashMap<>();
       map.put("id", paramMap.get("id"));
       map.put("pw", paramMap.get("pw"));
       map.put("name", paramMap.get("name"));
       map.put("birth", paramMap.get("birth"));
       map.put("phone", paramMap.get("phone"));
       map.put("gender", paramMap.get("gender"));
       map.put("email", paramMap.get("email"));
       map.put("address", paramMap.get("address"));
       Integer result=postService.registerCustomer(map);
       logger.info("registerCustomer map: {}",map);
       map.put("result", result);
       return map;
    }
    
    @RequestMapping(value="/post/admin/showing", method=RequestMethod.POST, consumes="application/json")
    public @ResponseBody Map<?,?> postAdminShowing(@RequestBody Map<String,String> paramMap) throws Exception {
       logger.info("PostController postAdminShowing() {}","ENTER");
       Map<String,Object> map = new HashMap<>();
       map.put("theater_seq", paramMap.get("theaterSeq"));
       map.put("show_date", paramMap.get("showDate"));
       map.put("start_time", paramMap.get("startTime"));
       map.put("end_time", paramMap.get("endTime"));
       map.put("movie_seq", paramMap.get("movieSeq"));
       map.put("price", paramMap.get("price"));
       Integer result=postService.registerShowing(map);
       logger.info("postAdminShowing() result {}",result);
       map.put("result", result);
       return map;
    }
	
}


