package com.abb1cinema.web.service;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abb1cinema.web.domain.Article;
import com.abb1cinema.web.domain.Comment;
import com.abb1cinema.web.domain.Customer;
import com.abb1cinema.web.domain.Statistic;
import com.abb1cinema.web.domain.Information;
import com.abb1cinema.web.domain.Movie;
import com.abb1cinema.web.domain.Multiplex;
import com.abb1cinema.web.domain.Notice;
import com.abb1cinema.web.domain.Reservation;
import com.abb1cinema.web.domain.Review;
import com.abb1cinema.web.domain.Showing;
import com.abb1cinema.web.domain.Theater;
import com.abb1cinema.web.domain.Timetable;
import com.abb1cinema.web.mapper.Mapper;

@Service
public class GetService {
	@Autowired
	Mapper mapper;
	private static final Logger logger = LoggerFactory.getLogger(GetService.class);

	public Customer getCustomer(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.findCustomer(map);
		return (Customer) service.execute(paramMap);
	}
	
	public Customer findCustomerByName(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.findCustomerByName(map);
		return (Customer) service.execute(paramMap);
	}
	
	public Customer findCustomerById(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.findCustomerById(map);
		return (Customer) service.execute(paramMap);
	}

	public Movie getMovie(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getMovie(map);
		return (Movie) service.execute(paramMap);
	}

	public int checkId(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.existCustomer(map);
		return (int) service.execute(paramMap);
	}
	
	public int existCustomerByName(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.existCustomerByName(map);
		return (int) service.execute(paramMap);
	}
	
	public int existCustomerById(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.existCustomerById(map);
		return (int) service.execute(paramMap);
	}

	public List<Movie> getMovieList(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getMovieList(map);
		return (List<Movie>) service.execute(paramMap);
	}

	public List<Review> getReviewList(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getReviewList(map);
		return (List<Review>) service.execute(paramMap);
	}

	public List<Reservation> getReservationList(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getReservationList(map);
		return (List<Reservation>) service.execute(paramMap);
	}

	public Reservation getMultiplex(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getMultiplex(map);
		return (Reservation) service.execute(paramMap);
	}

	public List<Article> getArticleList(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getArticleList(map);
		return (List<Article>) service.execute(paramMap);
	}

	public List<Notice> getNoticeList(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getNoticeList(map);
		return (List<Notice>) service.execute(paramMap);
	}

	public List<Comment> getCommentList(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getCommentList(map);
		return (List<Comment>) service.execute(paramMap);
	}

	public List<Multiplex> getMultiplexList(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getMultiplexList(map);
		return (List<Multiplex>) service.execute(paramMap);
	}

	public Notice getNotice(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getNotice(map);
		return (Notice) service.execute(paramMap);
	}

	public Article getArticle(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getArticle(map);
		return (Article) service.execute(paramMap);
	}

	public int count(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.count(map);
		return (int) service.execute(paramMap);
	}
	
	public int countSome(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.countSome(map);
		return (int) service.execute(paramMap);
	}
	
	public List<Theater> getTheaterList(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getTheaterList(map);
		return (List<Theater>) service.execute(paramMap);
	}

	public List<Information> getInfoList(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getInfoList(map);
		return (List<Information>) service.execute(paramMap);
	}

	public List<Showing> getDistinctShowingList(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getDistinctShowingList(map);
		return (List<Showing>) service.execute(paramMap);
	}

	public List<Timetable> getTimetableList(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getTimetableList(map);
		return (List<Timetable>) service.execute(paramMap);
	}

	public List<Showing> getShowingList(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getShowingList(map);
		return (List<Showing>) service.execute(paramMap);
	}
	
	public List<Customer> getCustomerFindList(Map<?, ?> paramMap) throws Exception {
		IGetService service = (map) -> mapper.getCustomerFindList(map);
		return (List<Customer>) service.execute(paramMap);
	}
	
	public List<Information> getAdminReservationList(Map<?,?> paramMap) throws Exception{
        IGetService service = (map) -> mapper.getAdminReservationList(map);
        return (List<Information>) service.execute(paramMap);
     }
     
     public List<Timetable> getAdminShowList(Map<?,?> paramMap) throws Exception{
        IGetService service = (map) -> mapper.getAdminShowList(map);
        return (List<Timetable>) service.execute(paramMap);
     }
     
     public Movie getMovieDetail(Map<?,?> paramMap) throws Exception{
        IGetService service = (map) -> mapper.getMovieDetail(map);
        return (Movie) service.execute(paramMap);
     }
     
     public Timetable getTimetable(Map<?,?> paramMap) throws Exception{
    	 IGetService service = (map) -> mapper.getTimetable(map);
    	 return (Timetable) service.execute(paramMap);
     }
     
     public List<Statistic> getStatistic(Map<?,?> paramMap) throws Exception{
    	 IGetService service = (map) -> mapper.getStatistic(map);
    	 return (List<Statistic>) service.execute(paramMap);
     }
     
     public int checkMovieTitle(Map<?,?> paramMap) throws Exception{
        IGetService service = (map) -> mapper.checkMovieTitle(map);
        return (int) service.execute(paramMap);
     }
     
     public int findMovieSeq(Map<?,?> paramMap) throws Exception{
         IGetService service = (map) -> mapper.findMovieSeq(map);
         return (int) service.execute(paramMap);
     }
     public int exist(Map<?,?> paramMap) throws Exception{
         IGetService service = (map) -> mapper.exist(map);
         return (int) service.execute(paramMap);
     }
     public List<Customer> getAdminCustomerList(Map<?,?> paramMap) throws Exception{
         IGetService service = (map) -> mapper.getAdminCustomerList(map);
         return (List<Customer>) service.execute(paramMap);
     }
     public int getSales(Map<?,?> paramMap) throws Exception{
         IGetService service = (map) -> mapper.getSales(map);
         return (int) service.execute(paramMap);
     }
     public Timetable findTimetable(Map<?,?> paramMap) throws Exception{
         IGetService service = (map) -> mapper.findTimetable(map);
         return (Timetable) service.execute(paramMap);
     }
     public Theater getTheater(Map<?,?> paramMap) throws Exception{
         IGetService service = (map) -> mapper.getTheater(map);
         return (Theater) service.execute(paramMap);
     }
     public Showing getShowing(Map<?,?> paramMap) throws Exception{
         IGetService service = (map) -> mapper.getShowing(map);
         return (Showing) service.execute(paramMap);
     }
     public List<String> getGenderMovieRank(Map<?,?> paramMap) throws Exception{
         IGetService service = (map) -> mapper.getGenderMovieRank(map);
         return (List<String>) service.execute(paramMap);
     }
}
