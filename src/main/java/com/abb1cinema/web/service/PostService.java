package com.abb1cinema.web.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abb1cinema.web.mapper.Mapper;

@Service
public class PostService {
	@Autowired Mapper mapper;
	public int registerCustomer(Map<?,?>paramMap) throws Exception{
		IPostService service=(map)->mapper.registerCustomer(map);
		return service.execute(paramMap);
	}
	
	public int doReservation(Map<?,?>paramMap) throws Exception{
		IPostService service=(map)->mapper.postReservation(map);
		return service.execute(paramMap);
	}
	
	public int writeArticle(Map<?,?>paramMap) throws Exception{
		IPostService service=(map)->mapper.writeArticle(map);
		return service.execute(paramMap);
	}
	
	public int writeComment(Map<?,?>paramMap) throws Exception{
		IPostService service=(map)->mapper.writeComment(map);
		return service.execute(paramMap);
	}
	
	public int writeReview(Map<?,?>paramMap) throws Exception{
		IPostService service=(map)->mapper.writeReview(map);
		return service.execute(paramMap);
	}
	
	public int registerMovie(Map<?,?>paramMap) throws Exception{
		IPostService service=(map)->mapper.registerMovie(map);
		return service.execute(paramMap);
	}
	
	public int registerNotice(Map<?,?>paramMap) throws Exception{
		IPostService service=(map)->mapper.registerNotice(map);
		return service.execute(paramMap);
	}
	
    public int registerShowing(Map<?,?>paramMap) throws Exception{
       IPostService service=(map)->mapper.registerShowing(map);
       return service.execute(paramMap);
    }
}
