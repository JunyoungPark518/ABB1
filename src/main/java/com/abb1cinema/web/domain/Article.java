package com.abb1cinema.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Article {
	String seq, article_type, title, content, file, reg_date, hits, answer, customer_id, multiplex_seq;
}
