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
	      random = Math.random()*5;
	      randomDate = nowDate().substring(0, 8) + String.valueOf(Integer.parseInt(nowDate().split("-")[2]) + (int)random);
	      if(Integer.parseInt(nowDate().split("-")[2])<10){
	         randomDate = nowDate().substring(0, 9) + String.valueOf(Integer.parseInt(nowDate().split("-")[2]) + (int)random);
	      }
	      switch (randomDate.substring(5,7)) {
	      case "01": case "03": case "05": case "07": case "08": 
	         if(Integer.parseInt(randomDate.split("-")[2])>31){
	            randomDate = nowDate().substring(0, 6) + String.valueOf(Integer.parseInt(nowDate().substring(5,7))+1) + "-0" + String.valueOf((int)random);
	         }
	         break;
	      case "10": case "12":
	         if(Integer.parseInt(randomDate.split("-")[2])>31){
	            randomDate = nowDate().substring(0, 5) + String.valueOf(Integer.parseInt(nowDate().substring(5,7))+1) + "-0" + String.valueOf((int)random);
	         }
	         break;
	      case "11":
	         if(Integer.parseInt(randomDate.split("-")[2])>30){
	            randomDate = nowDate().substring(0, 5) + String.valueOf(Integer.parseInt(nowDate().substring(5,7))+1) + "-0" + String.valueOf((int)random);
	         }
	         break;
	      case "02":
	         if(Integer.parseInt(randomDate.split("-")[2])>28){
	            randomDate = nowDate().substring(0, 6) + String.valueOf(Integer.parseInt(nowDate().substring(5,7))+1) + "-0" + String.valueOf((int)random);
	         }
	         break;
	      default:
	         if(Integer.parseInt(randomDate.split("-")[2])>30){
	            randomDate = nowDate().substring(0, 6) + String.valueOf(Integer.parseInt(nowDate().substring(5,7))+1) + "-0" + String.valueOf((int)random);
	         }
	         break;
	      }
	      return randomDate;
	   }
}
