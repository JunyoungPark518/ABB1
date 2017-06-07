package com.abb1cinema.web.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abb1cinema.web.mapper.Mapper;

@Service
public class PutService {
	@Autowired Mapper mapper;
	public int updateCustomer(Map<?,?> paramMap) throws Exception{
		IPutService service=(map)->mapper.updateCustomer(map);
		return service.execute(paramMap);
	}
	
	public int updateReservation(Map<?,?> paramMap) throws Exception{
		IPutService service=(map)->mapper.updateReservation(map);
		return service.execute(paramMap);
	}
	
	public int updateHits(Map<?,?> paramMap) throws Exception{
		IPutService service=(map)->mapper.updateHits(map);
		return service.execute(paramMap);
	}
	
	public int updateCount(Map<?,?> paramMap) throws Exception{
		IPutService service=(map)->mapper.updateCount(map);
		return service.execute(paramMap);
	}
	
	public int updateAdminMovie(Map<?,?> paramMap) throws Exception{
      IPutService service=(map)->mapper.updateAdminMovie(map);
      return service.execute(paramMap);
	}
	
	public int updateArticle(Map<?,?> paramMap) throws Exception{
		IPutService service=(map)->mapper.updateArticle(map);
		return service.execute(paramMap);
	}
	
	public int updateArticleAdminReply(Map<?,?> paramMap) throws Exception{
		IPutService service=(map)->mapper.updateArticleAdminReply(map);
		return service.execute(paramMap);
	}
	
	public int updateMainMovie(Map<?,?> paramMap) throws Exception{
		IPutService service=(map)->mapper.updateMainMovie(map);
		return service.execute(paramMap);
	}
	
	public int updateNotice(Map<?,?> paramMap) throws Exception{
		IPutService service=(map)->mapper.updateNotice(map);
		return service.execute(paramMap);
	}
	
	public int updateShowing(Map<?,?> paramMap) throws Exception{
		IPutService service=(map)->mapper.updateShowing(map);
		return service.execute(paramMap);
	}
	
	public int updateShowDate(Map<?,?> paramMap) throws Exception{
		IPutService service=(map)->mapper.updateShowDate(map);
		return service.execute(paramMap);
	}
	
	public int updateRegDate(Map<?,?> paramMap) throws Exception{
		IPutService service=(map)->mapper.updateRegDate(map);
		return service.execute(paramMap);
	}
}
