package com.abb1cinema.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.abb1cinema.web.service.DeleteService;

@RestController
public class DeleteController {
	private static final Logger logger = LoggerFactory.getLogger(DeleteController.class);
	@Autowired DeleteService deleteService;
	
	@RequestMapping(value="/delete/customer", method=RequestMethod.POST, consumes="application/json") // spring p291
	public @ResponseBody Map<?,?> delete(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("DeleteController delete() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		map.put("id", paramMap.get("id"));
		Integer delete=deleteService.deleteCustomer(map);
		map.put("result", delete);
		return map;
	}
	
	@RequestMapping(value="/delete/article", method=RequestMethod.POST, consumes="application/json") // spring p291
	public @ResponseBody Map<?,?> deleteSeq(@RequestBody Map<String,String> paramMap) throws Exception {
		Map<String,Object> map = new HashMap<>();
		Integer delete = 0;
		map.put("group", "Comment");
		map.put("key", "article_seq");
		map.put("value", paramMap.get("seq"));
		delete=deleteService.delete(map);
		map.clear();
		map.put("group", "Article");
		map.put("key", "seq");
		map.put("value", paramMap.get("seq"));
		delete=deleteService.delete(map);
		map.put("result", delete);
		return map;
	}
	
	@RequestMapping(value="/delete/comment", method=RequestMethod.POST, consumes="application/json") // spring p291
	public @ResponseBody Map<?,?> deleteComment(@RequestBody Map<String,String> paramMap) throws Exception {
		Map<String,Object> map = new HashMap<>();
		Integer delete = 0;
		map.put("group", "Comment");
		map.put("key", "seq");
		map.put("value", paramMap.get("seq"));
		delete=deleteService.delete(map);
		map.put("result", delete);
		return map;
	}
	
	@RequestMapping(value="/delete/review", method=RequestMethod.POST, consumes="application/json") // spring p291
	public @ResponseBody Map<?,?> deleteReview(@RequestBody Map<String,String> paramMap) throws Exception {
		Map<String,Object> map = new HashMap<>();
		Integer delete = 0;
		map.put("group", "Review");
		map.put("key", "seq");
		map.put("value", paramMap.get("seq"));
		delete=deleteService.delete(map);
		map.put("result", delete);
		return map;
	}
	
	@RequestMapping(value="/delete/notice", method=RequestMethod.POST, consumes="application/json") // spring p291
	public @ResponseBody Map<?,?> deleteNotice(@RequestBody Map<String,String> paramMap) throws Exception {
		Map<String,Object> map = new HashMap<>();
		Integer delete = 0;
		map.put("group", "Notice");
		map.put("key", "seq");
		map.put("value", paramMap.get("seq"));
		delete=deleteService.delete(map);
		map.put("result", delete);
		return map;
	}
	
	@RequestMapping(value="/delete/admin/movie", method=RequestMethod.POST, consumes="application/json")
    public @ResponseBody Map<?,?> deleteAdminMovie(@RequestBody Map<String,String> paramMap) throws Exception {
       logger.info("PutController deleteAdminMovie() {}","ENTER");
       Map<String,Object> map = new HashMap<>();
       map.put("value",paramMap.get("value"));
       map.put("key", "movie_seq");
       map.put("group", "Showing");
       Integer deleteShowing=deleteService.delete(map);
       map.clear();
       map.put("value",paramMap.get("value"));
       map.put("key", "seq");
       map.put("group", "Movie");
       Integer delete=deleteService.delete(map);
       map.clear();
       
       map.put("deleteShowing",deleteShowing);
       map.put("delete", delete);
       return map;
    }
}
