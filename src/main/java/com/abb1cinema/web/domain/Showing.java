package com.abb1cinema.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Showing {
   String seq, start_time, end_time, show_date, price, movie_seq, theater_seq;
}