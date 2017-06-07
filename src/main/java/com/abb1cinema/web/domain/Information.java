package com.abb1cinema.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Information {
   String resSeq, resId, resRegDate, resCanceled, resPrice, resHcount, 
   cusId, cusPw, cusName, cusGender, cusBirth, cusPhone, cusEmail, cusPoint, cusAddress, 
   shoSeq, shoStartTime, shoEndTime, shoShowDate, shoPrice,
   movSeq, movTitle, movCount, movGrade, movReleased, movInfo, movSynopsys, movMaleP, movFemaleP, movTrailerUrl, movPicMain, movPicDirector, movNameDirector, movPicActor, movNameActor, movTrailerMain,
   theSeq, theName, theTotalSeat,
   mulSeq, mulName, mulAddress, mulAxis;
}

/*$.each(data.info_list, function(i, info){
    info_list.push(info); 
    // 영화별 분류를 위한 JSON 생성
    var o = {
   movSeq : info.movSeq,
   title : info.movTitle
    };
    movSeq_list.push(o);
});*/