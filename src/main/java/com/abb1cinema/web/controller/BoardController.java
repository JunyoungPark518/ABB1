package com.abb1cinema.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.abb1cinema.web.domain.Article;
import com.abb1cinema.web.domain.Customer;
import com.abb1cinema.web.service.GetService;

@RestController
public class BoardController {
	@Autowired Customer customer;
	@Autowired GetService getService;
	
	@RequestMapping(value = "/board", method = RequestMethod.POST, consumes = "application/json") // spring
	public @ResponseBody Map<?, ?> delete(@RequestBody Map<String, String> paramMap) throws Exception {
		Map<String, Object> map = new HashMap<>();
		map.put("group", "Article");
		int pageNumber = Integer.parseInt(paramMap.get("pageNo"));
		int pagesPerOneBlock = 5, rowsPerOnePage = 5, theNumberOfRows = getService.count(map),
				theNumberOfPages = (theNumberOfRows % rowsPerOnePage == 0) ? theNumberOfRows / rowsPerOnePage
						: theNumberOfRows / rowsPerOnePage + 1,
				startPage = pageNumber - ((pageNumber - 1) % pagesPerOneBlock),
				endPage = ((startPage + rowsPerOnePage - 1) < theNumberOfPages) ? startPage + pagesPerOneBlock - 1
						: theNumberOfPages,
				startRow = (pageNumber - 1) * rowsPerOnePage + 1, endRow = pageNumber * rowsPerOnePage,
				prevBlock = startPage - pagesPerOneBlock, nextBlock = startPage + pagesPerOneBlock;
		List<Article> list = getService.getArticleList(map);
		map.put("list", list);
		map.put("startRow", startRow);
		map.put("endRow", endRow);
		map.put("theNumberOfRows", theNumberOfRows);
		map.put("nextBlock", nextBlock);
		map.put("prevBlock", prevBlock);
		map.put("startPage", startPage);
		map.put("endPage", endPage);
		map.put("pageNumber", pageNumber);
		map.put("result", "SUCCESS");
		return map;
	}
}
