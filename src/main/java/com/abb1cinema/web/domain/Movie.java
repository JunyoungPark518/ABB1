package com.abb1cinema.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Movie {
	String seq, title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, trailer_main, pic_main, pic_director, name_director, pic_actor, name_actor;
}
