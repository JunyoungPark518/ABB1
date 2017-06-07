package com.abb1cinema.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Statistic {
	String revSeq, revSpectator, revGpa, revContent, revRegDate, revMovieSeq, 
	movTitle, movCount, movGrade, movReleased, movInfo, movSynopsys, movMaleP, movFemaleP, movTrailerUrl, movPicMain, movPicDirector, movNameDirector, movPicActor, movNameActor, movTrailerMain ;
}
