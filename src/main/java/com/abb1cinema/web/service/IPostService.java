package com.abb1cinema.web.service;

import java.util.Map;

@org.springframework.stereotype.Service
@FunctionalInterface
public interface IPostService {
	public int execute(Map<?,?> map) throws Exception;
}
