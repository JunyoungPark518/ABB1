package com.abb1cinema.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

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

@Repository
public interface Mapper {
   // CREATE
   public int registerCustomer(Map<?,?> map) throws Exception;
   public int postReservation(Map<?,?> map) throws Exception;
   public int writeArticle(Map<?,?> map) throws Exception;
   public int writeComment(Map<?,?> map) throws Exception;
   public int writeReview(Map<?,?> map) throws Exception;
   public int registerNotice(Map<?,?> map) throws Exception;
   public int registerMovie(Map<?,?> map) throws Exception;
   public int registerShowing(Map<?,?> map) throws Exception;
   
   // READ ONE
   public Customer findCustomer(Map<?,?> map) throws Exception;
   public Multiplex getMultiplex(Map<?,?> map)throws Exception;
   public Movie getMovie(Map<?,?> map) throws Exception;
   public Notice getNotice(Map<?,?> map) throws Exception;
   public Article getArticle(Map<?,?> map) throws Exception;
   public Customer findCustomerByName(Map<?,?> map) throws Exception;
   public Customer findCustomerById(Map<?,?> map) throws Exception;
   public Movie getMovieDetail(Map<?,?> map) throws Exception;
   public Timetable getTimetable(Map<?,?> map) throws Exception;
   public Timetable findTimetable(Map<?,?> map) throws Exception;
   public Theater getTheater(Map<?,?> map) throws Exception;
   public Showing getShowing(Map<?,?> map) throws Exception;
   
   // READ SOME
   public List<Reservation> getReservationList(Map<?,?> map)throws Exception;
   public List<Movie> getMovieList(Map<?,?> map) throws Exception;
   public List<Review> getReviewList(Map<?,?> map) throws Exception;
   public List<Article> getArticleList(Map<?,?> map) throws Exception;
   public List<Notice> getNoticeList(Map<?,?> map) throws Exception;
   public List<Comment> getCommentList(Map<?,?> map) throws Exception;
   public List<Multiplex> getMultiplexList(Map<?,?> map) throws Exception;
   public List<Theater> getTheaterList(Map<?,?> map) throws Exception;
   public List<Information> getInfoList(Map<?,?> map) throws Exception;
   public List<Showing> getDistinctShowingList(Map<?,?> map) throws Exception;
   public List<Timetable> getTimetableList(Map<?,?> map) throws Exception;
   public List<Showing> getShowingList(Map<?,?> map) throws Exception;
   public List<Customer> getCustomerFindList(Map<?,?> map) throws Exception;
   public List<Information> getAdminReservationList(Map<?,?> map) throws Exception;
   public List<Timetable> getAdminShowList(Map<?,?> map) throws Exception;
   public List<Statistic> getStatistic(Map<?,?> map) throws Exception;
   public List<Customer> getAdminCustomerList(Map<?,?> map) throws Exception;
   //혜선
   public List<Information> getGenderMovieRank(Map<?,?> map) throws Exception;
   
   // UPDATE
   public int updateCustomer(Map<?,?> map) throws Exception;
   public int updateReservation(Map<?,?> map) throws Exception;
   public int updateHits(Map<?,?> map) throws Exception;
   public int updateCount(Map<?,?> map) throws Exception;
   public int updateNotice(Map<?,?> map) throws Exception;
   public int updateAdminMovie(Map<?,?> map) throws Exception;
   public int updateArticleAdminReply(Map<?,?> map) throws Exception;
   public int updateArticle(Map<?,?> map) throws Exception;
   public int updateMainMovie(Map<?,?> map) throws Exception;
   public int updateShowing(Map<?,?> map) throws Exception;
   
   // DELETE
   public int deleteCustomer(Map<?,?> map) throws Exception;
   public int delete(Map<?,?> map) throws Exception;
   
   // UTIL(COUNT, EXIST, SUM...)
   public int existCustomer(Map<?,?> map) throws Exception;
   public int count(Map<?,?> map) throws Exception;
   public int existCustomerByName(Map<?,?> map) throws Exception;
   public int existCustomerById(Map<?,?> map) throws Exception;
   public int countSome(Map<?,?> map) throws Exception;
   public int checkMovieTitle(Map<?,?> map) throws Exception;
   public int findMovieSeq(Map<?,?> map) throws Exception;
   public int exist(Map<?,?> map) throws Exception;
   public int getSales(Map<?,?> map) throws Exception;
}