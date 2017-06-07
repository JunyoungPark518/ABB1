package com.abb1cinema.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Timetable {
   String shoSeq, shoStartTime, shoEndTime, shoShowDate, shoPrice,
      movSeq, movTitle, movCount, movGrade, movReleased, movInfo, movSynopsys, movMaleP, movFemaleP, movTrailerUrl, movPicMain, movPicDirector, movNameDirector, movPicActor, movNameActor, movTrailerMain,
      theSeq, theName, theTotalSeat,
      mulSeq, mulName, mulAddress, mulAxis, mulAxis2;
}