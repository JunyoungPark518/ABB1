package com.abb1cinema.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import com.abb1cinema.web.composite.Complex;
import com.abb1cinema.web.domain.Customer;
import com.abb1cinema.web.mapper.Mapper;
import com.abb1cinema.web.service.IGetService;
@Controller
@SessionAttributes("permission")
public class PermissionController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Mapper mapper;
	@Autowired Customer customer;
	
	/*@RequestMapping(value="/customer/main", method=RequestMethod.POST)
	public String checkLogin(@RequestParam("customer_id") String id, @RequestParam("customer_pw") String pw, Model model) throws Exception{
		logger.info("GetController checkLogin() {}","ENTER");
		model.addAttribute("context",Complex.ContextFactory.create());
		logger.info("넘어온 id,pw:{}, {}",id,pw);
		Map<String,String> map=new HashMap<>();
		map.put("id", id);
		map.put("pw", pw);
		String position="public:customer/login";
		IGetService checkId= new IGetService() {
			@Override
			public Object execute(Map<?,?> map) throws Exception {
				return mapper.existCustomer(map);
			}
		};
		logger.info("map에 들어있는 id,pw {}",id+pw);
		int exist=(int) checkId.execute(map);
		if(exist==1){
			IGetService service= new IGetService() {
				@Override
				public Object execute(Map<?, ?> map) throws Exception {
					return mapper.findCustomer(map);
				}
			};
			customer=(Customer) service.execute(map);
			if(id.equals("admin")&&pw.equals(customer.getPw())){
				position="admin/index";
			}else if(pw.equals(customer.getPw())){
				position="customer/main";
			}
		}
		return position;
	}*/
}
