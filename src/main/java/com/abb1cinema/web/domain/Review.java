package com.abb1cinema.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Review {
	String seq, spectator, gpa, content, reg_date, customer_id, movie_seq;
}
