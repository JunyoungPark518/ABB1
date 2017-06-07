package com.abb1cinema.web.util;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Service;

@Service
public class Util {
	public static String nowDate() {
		return new SimpleDateFormat("yyyy-MM-dd").format(new Date());
	}
	
	public static String nowTime() {
		return new SimpleDateFormat("yyyy년 MM월 dd일 a hh:mm:ss").format(new Date());
	}
	
	public static String randomDate(){
		double random = 0.0;
		String randomDate = "";
		if(Integer.parseInt(nowDate().split("-")[2])<27){
			random = Math.random()*5;
			randomDate = nowDate().substring(0, 8) + String.valueOf(Integer.parseInt(nowDate().split("-")[2]) + (int)random);
		}
		return randomDate;
	}
	
	public static void main(String[] args) {
		for(int i=0; i<10; i++)
		System.out.println(randomDate());
	}
}
