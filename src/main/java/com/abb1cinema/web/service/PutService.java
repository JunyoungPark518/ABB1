package com.abb1cinema.web.service;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abb1cinema.web.mapper.Mapper;

@Service
public class PutService {
	@Autowired Mapper mapper;
	private static final Logger logger=LoggerFactory.getLogger(PutService.class);
	public int updateCustomer(Map<?,?> paramMap) throws Exception{
		logger.info("PutService updateCustomer() {}","ENTER");
		IPutService service=(map)->mapper.updateCustomer(map);
		return service.execute(paramMap);
	}
	
	public int updateReservation(Map<?,?> paramMap) throws Exception{
		logger.info("PutService updateCustomer() {}","ENTER");
		IPutService service=(map)->mapper.updateReservation(map);
		return service.execute(paramMap);
	}
	
	public int updateHits(Map<?,?> paramMap) throws Exception{
		logger.info("PutService updateHits() {}","ENTER");
		IPutService service=(map)->mapper.updateHits(map);
		return service.execute(paramMap);
	}
	
	public int updateCount(Map<?,?> paramMap) throws Exception{
		logger.info("PutService updateCount() {}","ENTER");
		IPutService service=(map)->mapper.updateCount(map);
		return service.execute(paramMap);
	}
	
	public int updateAdminMovie(Map<?,?> paramMap) throws Exception{
	      logger.info("PutService updateAdminMovie() {}","ENTER");
	      IPutService service=(map)->mapper.updateAdminMovie(map);
	      return service.execute(paramMap);
	   }
	
	public int updateArticle(Map<?,?> paramMap) throws Exception{
		logger.info("PutService updateArticle() {}","ENTER");
		IPutService service=(map)->mapper.updateArticle(map);
		return service.execute(paramMap);
	}
	
	public int updateArticleAdminReply(Map<?,?> paramMap) throws Exception{
		logger.info("PutService updateArticle() {}","ENTER");
		IPutService service=(map)->mapper.updateArticleAdminReply(map);
		return service.execute(paramMap);
	}
	
	public int updateMainMovie(Map<?,?> paramMap) throws Exception{
		logger.info("PutService updateArticle() {}","ENTER");
		IPutService service=(map)->mapper.updateMainMovie(map);
		return service.execute(paramMap);
	}
	
	public int updateNotice(Map<?,?> paramMap) throws Exception{
		logger.info("PutService updateNotice() {}","ENTER");
		IPutService service=(map)->mapper.updateNotice(map);
		return service.execute(paramMap);
	}
	
	public int updateShowing(Map<?,?> paramMap) throws Exception{
		logger.info("PutService updateNotice() {}","ENTER");
		IPutService service=(map)->mapper.updateShowing(map);
		return service.execute(paramMap);
	}
}
