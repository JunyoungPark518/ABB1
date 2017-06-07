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
import com.abb1cinema.web.service.PutService;

@RestController
public class PutController {
	private static final Logger logger = LoggerFactory.getLogger(PutController.class);
	@Autowired PutService putService;
	
	@RequestMapping(value="/put/customer", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> updateCustomer(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("PutController updateCustomer() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		logger.info("updateCustomer() 전달받은 pw: {}",paramMap.get("pw"));
		map.put("id", paramMap.get("id"));
		map.put("pw", paramMap.get("pw"));
		map.put("phone", paramMap.get("phone"));
		map.put("address", paramMap.get("address"));
		Integer result = putService.updateCustomer(map);
		map.put("result", result);
		return map;
	}
	
	@RequestMapping(value="/put/canceled", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> putCanceled(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("PutController putCanceled() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		logger.info("putCanceled() 넘어온 id: {}",paramMap.get("id"));
		map.put("id", paramMap.get("id"));
		Integer result = putService.updateReservation(map);
		map.put("result", result);
		return map;
	}
	
	@RequestMapping(value="/put/article", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> updateArticle(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("PutController updateArticle() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		Integer result = putService.updateArticle(paramMap);
		map.put("result", result);
		return map;
	}
	
	@RequestMapping(value="/put/admin/article", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> updateArticleAdminReply(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("PutController updateArticleAdminReply() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		Integer result = putService.updateArticleAdminReply(paramMap);
		map.put("result", result);
		return map;
	}
	
	@RequestMapping(value="/put/hits", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> updateHits(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("PutController updateHits() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		map.put("group", paramMap.get("group"));
		map.put("hits", paramMap.get("hits"));
		map.put("seq", paramMap.get("seq"));
		Integer result = putService.updateHits(map);
		map.put("result", result);
		return map;
	}
	
	@RequestMapping(value="/put/movie/count", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> movieCount(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("PutController movieCount() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		map.put("group", "Movie");
		map.put("count", paramMap.get("count"));
		map.put("seq", paramMap.get("seq"));
		Integer result = putService.updateCount(map);
		map.put("result", result);
		return map;
	}
	
	@RequestMapping(value="/put/admin/movie", method=RequestMethod.POST, consumes="application/json")
	   public @ResponseBody Map<?,?> putAdminMovie(@RequestBody Map<String,String> paramMap) throws Exception {
	      logger.info("PutController putAdminMovie() {}","ENTER");
	      Map<String,Object> map = new HashMap<>();
	      map.put("seq",paramMap.get("seq"));
	      map.put("title",paramMap.get("title"));
	      map.put("grade",paramMap.get("grade"));
	      map.put("released",paramMap.get("released"));
	      map.put("info",paramMap.get("info"));
	      map.put("synopsys",paramMap.get("synopsys"));
	      map.put("name_director",paramMap.get("name_director"));
	      map.put("name_actor",paramMap.get("name_actor"));
	      map.put("trailer_url",paramMap.get("trailer_url"));
	      Integer update=putService.updateAdminMovie(map);
	      map.clear();
	      map.put("update", update);
	      return map;
	   }
	
	@RequestMapping(value="/put/admin/main/movie", method=RequestMethod.POST, consumes="application/json")
    public @ResponseBody Map<?,?> putAdminMainMovie(@RequestBody Map<String,String> paramMap) throws Exception {
       logger.info("PutController putAdminMainMovie() {}","ENTER");
       Map<String,Object> map = new HashMap<>();
       if(paramMap.get("value1").equals("1")){
          map.put("value1", "1");
          map.put("key", "seq");
          map.put("value2", paramMap.get("seq"));
       }else{
          map.put("value1", "0");
          map.put("key", "trailer_main");
          map.put("value2", "1");
       }
       Integer result=putService.updateMainMovie(map);
       map.put("result", result);
       return map;
	}

	@RequestMapping(value="/put/admin/customer", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> putAdminCustomer(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("PutController putAdminMainMovie() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		map.put("id", paramMap.get("id"));
		map.put("pw", paramMap.get("pw"));
		map.put("name", paramMap.get("name"));
		map.put("birth", paramMap.get("birth"));
		map.put("phone", paramMap.get("phone"));
		map.put("gender", paramMap.get("gender"));
		map.put("email", paramMap.get("email"));
		Integer result=putService.updateCustomer(map);
		map.put("result", result);
		return map;
	}

	@RequestMapping(value="/put/notice", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> putNotice(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("PutController putAdminMainMovie() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		map.put("seq", paramMap.get("seq"));
		map.put("content", paramMap.get("content"));
		map.put("reg_date", paramMap.get("reg_date"));
		map.put("title", paramMap.get("title"));
		map.put("file", paramMap.get("file"));
		Integer result=putService.updateNotice(map);
		map.put("result", result);
		return map;
	}

	@RequestMapping(value="/put/customer/point", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> putCustomerPoint(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("PutController putAdminMainMovie() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		map.put("id", paramMap.get("customer_id"));
		int point=0;
		if(paramMap.get("sum").equals("true")){
			point=Integer.parseInt(paramMap.get("point"))+100;
		}else{
			point=Integer.parseInt(paramMap.get("point"))-100;
		}
		map.put("point", String.valueOf(point));
		Integer result=putService.updateCustomer(map);
		map.put("point", String.valueOf(point));
		map.put("result", result);
		return map;
	}

	@RequestMapping(value="/put/admin/showing", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> putAdminShowing(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("PutController putAdminMainMovie() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		map.put("showDate", paramMap.get("showDate"));
		map.put("startTime", paramMap.get("startTime"));
		map.put("endTime", paramMap.get("endTime"));
		map.put("seq", paramMap.get("seq"));
		Integer result=putService.updateShowing(map);
		map.put("result", result);
		return map;
	}
	
}
