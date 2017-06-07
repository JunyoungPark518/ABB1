package com.abb1cinema.web.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abb1cinema.web.mapper.Mapper;

@Service
public class DeleteService {
	@Autowired Mapper mapper;
	public int deleteCustomer(Map<?,?> paramMap) throws Exception{
		IDeleteService service=(map)->mapper.deleteCustomer(map);
		return service.execute(paramMap);
	}
	public int delete(Map<?,?> paramMap) throws Exception{
	    IDeleteService service=(map)->mapper.delete(map);
	    return service.execute(paramMap);
	}
}
