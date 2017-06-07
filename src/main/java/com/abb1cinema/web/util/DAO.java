package com.abb1cinema.web.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DAO {
	public static void main(String[] args) {
		Date d = new Date();
        
        String s = d.toString();
        System.out.println("현재날짜 : "+ s);
        
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        System.out.println("현재날짜 : "+ sdf.format(d));
	}
}
