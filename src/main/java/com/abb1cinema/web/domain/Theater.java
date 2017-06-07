package com.abb1cinema.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Theater {
	String seq, name, total_seat, show_date, start_time, end_time, price, multiplex_seq, movie_seq;
}
