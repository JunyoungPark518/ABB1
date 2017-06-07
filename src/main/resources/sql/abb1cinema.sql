SELECT * FROM Movie;

-- 1
CREATE TABLE Notice(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
file VARCHAR(200),
title VARCHAR(50) NOT NULL,
content VARCHAR(500) NOT NULL,
reg_date VARCHAR(10) NOT NULL,
hits VARCHAR(6) NOT NULL
);
ALTER TABLE Notice AUTO_INCREMENT=1;

-- 2
CREATE TABLE Movie(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
count VARCHAR(5),
grade VARCHAR(4) NOT NULL,
released VARCHAR(10) NOT NULL,
info VARCHAR(40) NOT NULL,
synopsys VARCHAR(500) NOT NULL,
male_p VARCHAR(4) NOT NULL,
female_p VARCHAR(4) NOT NULL,
trailer_url VARCHAR(200) NOT NULL,
trailer_main VARCHAR(1),
pic_main VARCHAR(200) NOT NULL,
pic_director VARCHAR(200),
name_director VARCHAR(50),
pic_actor VARCHAR(200),
name_actor VARCHAR(50)
);
ALTER TABLE Movie AUTO_INCREMENT=1;


-- 4
CREATE TABLE Customer(
id VARCHAR(15) PRIMARY KEY,
pw VARCHAR(15) NOT NULL,
name VARCHAR(15) NOT NULL,
gender VARCHAR(1) NOT NULL,
birth VARCHAR(12) NOT NULL,
phone VARCHAR(13) NOT NULL,
email VARCHAR(30) NOT NULL,
point VARCHAR(5) NOT NULL,
address VARCHAR(300) NOT NULL
);

-- 5
CREATE TABLE Review(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
spectator VARCHAR(8) NOT NULL,
gpa VARCHAR(2) NOT NULL,
content VARCHAR(300) NOT NULL,
reg_date VARCHAR(10) NOT NULL,
customer_id VARCHAR(15),
movie_seq INT,
FOREIGN KEY(customer_id) REFERENCES Customer(id),
FOREIGN KEY(movie_seq) REFERENCES Movie(seq)
);
ALTER TABLE Review AUTO_INCREMENT=1;

-- 6
CREATE TABLE Multiplex(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(20) NOT NULL,
address VARCHAR(40) NOT NULL,
axis VARCHAR(40) NOT NULL
);
ALTER TABLE Multiplex AUTO_INCREMENT=1;

-- 7
CREATE TABLE Theater(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(4) NOT NULL,
total_seat VARCHAR(3) NOT NULL,
multiplex_seq INT,
FOREIGN KEY(multiplex_seq) REFERENCES Multiplex(seq)
);
ALTER TABLE Theater AUTO_INCREMENT=1;

-- 8
CREATE TABLE Article(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
article_type VARCHAR(4) NOT NULL,
title VARCHAR(50) NOT NULL,
content VARCHAR(500),
file VARCHAR(200),
reg_date VARCHAR(10) NOT NULL,
hits VARCHAR(4) NOT NULL,
answer VARCHAR(1),
customer_id VARCHAR(15),
multiplex_seq INT,
FOREIGN KEY(customer_id) REFERENCES Customer(id),
FOREIGN KEY(multiplex_seq) REFERENCES Multiplex(seq)
);
ALTER TABLE Article AUTO_INCREMENT=1;

-- 9
CREATE TABLE Comment(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
reg_date VARCHAR(10) NOT NULL,
content VARCHAR(300) NOT NULL,
customer_id VARCHAR(15),
article_seq INT,
FOREIGN KEY(customer_id) REFERENCES Customer(id),
FOREIGN KEY(article_seq) REFERENCES Article(seq)
);
ALTER TABLE Comment AUTO_INCREMENT=1;


-- 10
CREATE TABLE Showing(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
start_time VARCHAR(5) NOT NULL,
end_time VARCHAR(5) NOT NULL,
show_date VARCHAR(10) NOT NULL,
price VARCHAR(5) NOT NULL,
movie_seq INT,
theater_seq INT,
FOREIGN KEY(movie_seq) REFERENCES Movie(seq),
FOREIGN KEY(theater_seq) REFERENCES Theater(seq)
);
ALTER TABLE Showing AUTO_INCREMENT=1;

-- 11
CREATE TABLE Reservation(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
id VARCHAR(30) NOT NULL,
reg_date VARCHAR(10) NOT NULL,
canceled VARCHAR(1),
price VARCHAR(10),
hcount  VARCHAR(10),
customer_id VARCHAR(15),
showing_seq INT,
FOREIGN KEY(customer_id) REFERENCES Customer(id),
FOREIGN KEY(showing_seq) REFERENCES Showing(seq)
);
ALTER TABLE Reservation AUTO_INCREMENT=1;



CREATE VIEW Information AS
SELECT r.id AS resId,
r.seq AS resSeq,
r.reg_date AS resRegDate,
r.canceled AS resCanceled,
r.price AS resPrice,
r.hcount AS resHcount,
r.customer_id AS cusId,
c.pw AS cusPw,
c.name AS cusName,
c.gender AS cusGender,
c.birth AS cusBirth,
c.phone AS cusPhone,
c.email AS cusEmail,
c.point AS cusPoint,
c.address AS cusAddress,
r.showing_seq AS shoSeq,
s.start_time AS shoStartTime,
s.end_time AS shoEndTime,
s.show_date AS shoShowDate,
s.price AS shoPrice,
s.movie_seq AS movSeq,
mov.title AS movTitle,
mov.count AS movCount,
mov.grade AS movGrade,
mov.released AS movReleased,
mov.info AS movInfo,
mov.synopsys AS movSynopsys,
mov.male_p AS movMaleP,
mov.female_p AS movFemaleP,
mov.trailer_url AS movTrailerUrl,
mov.pic_main AS movPicMain,
mov.pic_director AS movPicDirector,
mov.name_director AS movNameDirector,
mov.pic_actor AS movPicActor,
mov.name_actor AS movNameActor,
mov.trailer_main AS movTrailerMain,
s.theater_seq AS theSeq,
t.name AS theName,
t.total_seat AS theTotalSeat,
t.multiplex_seq AS mulSeq,
mul.name AS mulName,
mul.address AS mulAddress,
mul.axis AS mulAxis
FROM  Multiplex mul, Theater t, Movie mov ,Reservation r, Showing s, Customer c 
WHERE r.showing_seq=s.seq AND r.customer_id=c.id AND s.movie_seq=mov.seq AND s.theater_seq=t.seq AND t.multiplex_seq=mul.seq;

CREATE VIEW Timetable AS
SELECT 
s.seq AS shoSeq,
s.start_time AS shoStartTime,
s.end_time AS shoEndTime,
s.show_date AS shoShowDate,
s.price AS shoPrice,
s.movie_seq AS movSeq,
mov.title AS movTitle,
mov.count AS movCount,
mov.grade AS movGrade,
mov.released AS movReleased,
mov.info AS movInfo,
mov.synopsys AS movSynopsys,
mov.male_p AS movMaleP,
mov.female_p AS movFemaleP,
mov.trailer_url AS movTrailerUrl,
mov.pic_main AS movPicMain,
mov.pic_director AS movPicDirector,
mov.name_director AS movNameDirector,
mov.pic_actor AS movPicActor,
mov.name_actor AS movNameActor,
mov.trailer_main AS movTrailerMain,
s.theater_seq AS theSeq,
t.name AS theName,
t.total_seat AS theTotalSeat,
t.multiplex_seq AS mulSeq,
mul.name AS mulName,
mul.address AS mulAddress,
mul.axis AS mulAxis
FROM  Multiplex mul, Theater t, Movie mov , Showing s
WHERE s.movie_seq=mov.seq AND s.theater_seq=t.seq AND t.multiplex_seq=mul.seq;

CREATE VIEW Statistic AS
SELECT r.seq AS revSeq, 
r.spectator AS revSpectator, 
r.gpa AS revGpa, 
r.content AS revContent, 
r.reg_date AS revRegDate, 
r.movie_seq AS revMovieSeq, 
mov.title AS movTitle,
mov.count AS movCount,
mov.grade AS movGrade,
mov.released AS movReleased,
mov.info AS movInfo,
mov.synopsys AS movSynopsys,
mov.male_p AS movMaleP,
mov.female_p AS movFemaleP,
mov.trailer_url AS movTrailerUrl,
mov.pic_main AS movPicMain,
mov.pic_director AS movPicDirector,
mov.name_director AS movNameDirector,
mov.pic_actor AS movPicActor,
mov.name_actor AS movNameActor,
mov.trailer_main AS movTrailerMain 
FROM Review r, Movie mov WHERE r.movie_seq = mov.seq;

INSERT INTO Notice(file, title, content, reg_date, hits) VALUES ('notice_sample.jpg','개인정보 이용내역 안내','롯데시네마 개인정보 이용내역 안내드립니다.','2017-05-29','185');
INSERT INTO Notice(file, title, content, reg_date, hits) VALUES ('default','2017 DU - ATHLON RACE 개최에 따른 교통 통제 안내','안녕하십니까, 롯데시네마 인천아시아드관입니다.<br/><br/>항상 저희 인천아시아드관을 사랑해 주시는 고객 여러분께 진심으로 감사드립니다.<br/><br/>2017 DU - ATHLON RACE 'AWAKEN INCHEON' 경기 일정으로 <br/><br/>2017년 5월 28일 (일)  09:10 ~ 10:00 까지 롯데시네마 주차장 진입로가 통제됩니다.<br/><br/>참고하시어 이용에 불편 없으시길 바랍니다.<br/><br/>아울러 통제가 끝나는 10:00 이후부터 영화 상영이 시작되오니 참고 부탁드립니다.<br/><br/>경기는 13:00까지 진행될 예정이오니 통제가 끝난 후 다소 혼잡하더라도<br/><br/>고객 여러분들의 너른 양해 부탁드립니다.<br/><br/>감사합니다.','2017-06-01','235');

INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, trailer_main, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('보안관','11','15','2017-05-03','드라마','과잉 수사로 잘리고 낙향한 전직 형사 대호(이성민)<br/>보안관을 자처하며 바다만큼 드넓은 오지랖으로 고향 ‘기장’ 을 수호한다.<br/>평화롭던 동네에 비치타운 건설을 위해 성공한 사업가 종진(조진웅)이 서울에서 내려온 그때,<br/>인근 해운대에 마약이 돌기 시작한다.<br/>종진의 모든 행보가 의심스러운 대호는 그를 마약사범으로 의심해 처남 덕만(김성균)을 조수로 ‘나 홀로 수사’에 나서지만 민심은 돈 많고 세련된 종진에게로 옮겨간 지 오래…<br/><br/>두고 봐라, 이래 당하고만 있겠나. 게임은 인자 시작이다!','0','0','https://www.youtube.com/embed/nRVuV8nuOmQ','0','movie_poster_0.png','director_0.jpg','김형주','actor_0.png','이성민');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, trailer_main, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('특별시민','10','12','2017-04-26','드라마','사람들이 믿게 만드는 것. 그게 바로 선거야<br/><br/>오직 서울만 사랑하는, 발로 뛰는 서울시장 ‘변종구’(최민식)<br/>하지만 실은 어느 정치인보다도 최고 권력을 지향하며 이미지 관리에 철저한 정치 9단이다. 선거 공작의 일인자인 선거대책본부장 ‘심혁수’(곽도원)를 파트너로 삼고, 겁없이 선거판에 뛰어든 젊은 광고 전문가 ‘박경’(심은경)까지 새롭게 영입한 변종구는 차기 대권을 노리며, 헌정 사상 최초의 3선 서울시장에 도전한다. 하지만 상대 후보들의 치열한 공세에 예기치 못했던 사건들까지 일어나며 변종구의 3선을 향한 선거전에 위기가 거듭되는데...','0','0','https://www.youtube.com/embed/tKu6j2ApB58','0','movie_poster_1.png','director_1.jpg','박인제','actor_1.png','최민식');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, trailer_main, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('분노의 질주: 더 익스트림','9','15','2017-04-12','스릴러','마침내 평화로운 일상으로 돌아온 리더 ‘도미닉’(빈 디젤)과 멤버들.<br>그러던 어느 날, 멤버들은 도미닉이 첨단 테러 조직의 리더 ‘사이퍼’(샤를리즈 테론)와 함께 사상 최악의 테러를 계획하고 있음을 알게 된다. 리더의 배신으로 위기에 놓인 멤버들은 한때 팀을 모두 전멸시키려 했던 ‘데카드 쇼’(제이슨 스타뎀)까지 영입해 최악의 적이 되어버린 도미닉과의 피할 수 없는 대결을 앞두게 되는데…','0','0','https://www.youtube.com/embed/fToB05kz3Eg','1','movie_poster_2.png','director_2.jpg','F.게리 그레이','actor_2.png','빈 디젤');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, trailer_main, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('공각기동대: 고스트 인 더 쉘','8','all','2017-03-29','액션/모험/SF','인간과 로봇의 경계가 무너진 가까운 미래,<br/>강력 범죄와 테러 사건을 담당하는 엘리트 특수부대 섹션9.<br/>인간과 인공지능이 결합해 탄생한 특수요원이자 섹션9을 이끄는 메이저(스칼렛 요한슨)는 세계를 위협하는 음모를 지닌 범죄 테러 조직을 저지하라는 임무를 받는다. 첨단 사이버 기술을 보유한 ‘한카 로보틱스’를 파괴하려는 범죄 테러 조직을 막기 위해 엘리트 특수부대 섹션9이 나서기 시작하고 사건을 깊이 파고들수록 메이저는 자신의 과거와 존재에 대한 의문을 갖게 되는데...!<br/><br/>','0','0','https://www.youtube.com/embed/eWMBQhdcCTo','0','movie_poster_3.png','director_3.jpg','루퍼트 샌더슨','actor_3.png','스칼렛 요한슨');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, trailer_main, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('임금님의 사건수첩','7','15','2017-04-12','스릴러','모든 사건은 직접 파헤쳐야 직성이 풀리는 총명한 왕 ‘예종’(이선균).<br/>그를 보좌하기 위해 학식, 가문, 외모(?)는 물론 한 번 본 것은 절대 잊지 않는 비상한 재주까지 겸비한 신입사관 ‘이서’가 임명된다. 하지만 의욕과 달리 어리바리한 행동을 일삼던 이서는 예종의 따가운 눈총을 한 몸에 받으며 고된 궁궐 생활을 시작한다.<br/>때마침 한양에 괴이한 소문이 돌기 시작하고, 예종은 모든 소문과 사건이 심상치 않음을 직감한다. 예종과 이서는 모든 과학적 지식과 견문을 총동원, 괴소문의 실체를 파헤치기 위해 나서는데…!','0','0','https://www.youtube.com/embed/9Yemv2RlWnA','0','movie_poster_4.png','director_4.jpg','문현성','actor_4.png','이선균');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, trailer_main, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('가디언즈 오브 더 갤럭시2','6','12','2017-04-12','액션/모험/SF','최강 빌런 ‘타노스’에 맞서 은하계를 구하고 최고의 해결사로 등극한 ‘가.오.갤’ 멤버들.<br/>하지만 외계 여사제 ‘아이샤’가 맡긴 임무를 수행하던 중 실수로 또 다시 쫓기는 신세로 전락한다. 한편 자신에게 숨겨진 힘의 원천에 대해 고민하던 리더 ‘스타로드’는 갑작스레 나타난 아버지로 인해 또 다른 위기에 빠지게 되는데…','0','0','https://www.youtube.com/embed/SFGlghyeMuQ','0','movie_poster_5.png','director_5.jpg','제임스 건','actor_5.png','크리스 프랫');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, trailer_main, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('아빠와 딸','5','12','2017-04-12','드라마','공부, 공부, 공부하라는 잔소리를 입에 달고 사는 만년 과장 아빠.<br/>세상 다 싫지만 선배만은 넘나 좋은 여고생 딸.<br/><br/>딸이 꿈꾸던 첫 데이트가 현실이 되던 찰나,<br/>아빠가 절실한 승진의 기회를 잡나 싶던 그때<br/>두 사람의 몸이 바뀌는 청천벽력 같은 일이 벌어진다!<br/><br/>서로의 몸으로 살아야 하는 아빠와 딸.<br/>첫사랑 사수 vs 직장 사수를 위해 상상을 초월한 노력을 하지만 상황은 오히려 꼬여만 가고, 사생활은 물론 마음까지 엿보게 되면서 서로 몰랐던 점을 점점 알아가게 되는데...','0','0','https://www.youtube.com/embed/IatA5g1nXeo','0','movie_poster_6.png','director_6.jpg','김형협','actor_6.png','윤제문');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, trailer_main, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('미녀와 야수','4','all','2017-03-16','멜로/애정','똑똑하고 아름다운 ‘벨(엠마 왓슨)’은 아버지와 살고 있는 작은 마을에서 벗어나 운명적인 사랑과 모험을 꿈꾼다. 어느 날 행방불명된 아버지를 찾아 폐허가 된 성에 도착한 벨은 저주에 걸린 ‘야수’(댄 스티븐스)를 만나 아버지 대신 성에 갇히고, 야수 뿐 아니라 성 안의 모든 이들이 신비로운 장미의 마지막 꽃잎이 떨어지기 전에 저주를 풀지 못하면 영원히 인간으로 돌아올 수 없는 운명임을 알게 된다. 성에서 도망치려던 벨은 위험한 상황에서 자신을 보호해 준 야수의 진심을 알게 되면서 차츰 마음을 열어가기 시작하는데…','0','0','https://www.youtube.com/embed/n7LZA4Er7_g','0','movie_poster_7.png','director_7.jpg','빌 콘돈','actor_7.png','엠마 왓슨');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, trailer_main, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('보스베이비','3','all','2017-05-03','애니메이션','어느 날 굴러들어온 아기 동생에게 엄빠의 사랑을 모두 빼앗겨 버린 ‘팀’<br/>평소엔 앙증맞은 베이비, 알고 보니 ‘베이비 주식회사’의 카리스마 보스<br/>‘보스 베이비’는 비밀 임무를 수행하기 위해 파견근무 중!<br/><br/>팀은 엄빠의 사랑을 되찾기 위해<br/>보스 베이비는 라이벌 ‘퍼피 주식회사’를 무찌르기 위해<br/>원치 않는 공조를 시작한다','0','0','https://www.youtube.com/embed/Hsb8l0B5X-c','0','movie_poster_8.png','director_8.jpg','톰 맥그래스','actor_8.png','알렉 볼드윈');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, trailer_main, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('캐리비안의 해적: 죽은 자는 말이 없다', '2', '12', '2017-05-24', '액션/모험/SF', '<b>죽음마저 집어삼킨 복수가 시작된다!</b><br><br>전설적인 해적 캡틴 ‘잭 스패로우’(조니 뎁)의 눈 앞에 죽음마저 집어삼킨 바다의 학살자 ‘살라자르’(하비에르 바르뎀)가 복수를 위해 찾아온다. 둘 사이에 숨겨진 엄청난 비밀…<br>잭은 자신과 동료들의 죽음에 맞서 살아남기 위해 사투를 시작하는데…<br><br><b>지금, 모든 것을 압도할 거대한 전투가 펼쳐진다!</b>', '0', '0', 'https://www.youtube.com/embed/57GUPDM1KUk', '1', 'movie_poster_9.jpg','director_9.jpg','요아킴 뢰닝','actor_9.jpg', '조니 뎁');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, trailer_main, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('노무현입니다', '1', '12', '2017-05-25', '드라마', '국회의원, 시장 선거 등 출마하는 선거마다 번번이 낙선했던 만년 꼴찌 후보 노무현이 2002년 대선 당시 대한민국 정당 최초로 도입된 새천년민주당 국민참여경선에 당당히 출사표를 던진다. 제주를 시작으로 전국 16개 도시에서 치러진 대국민 이벤트. 쟁쟁한 후보들과 엎치락뒤치락하며 제주 경선 3위, 울산 1위, 그리고 광주까지 석권한 지지율 2%의 꼴찌 후보 노무현이 전국을 뒤흔들기 시작한다.<br><br><b>지지율 2%의 꼴찌 후보에서 대선후보 1위, 국민의 대통령이 되기까지 <br>2002년 전국을 뒤흔들었던 노무현, 그 기적의 역전 드라마</b>', '0', '0', 'https://www.youtube.com/embed/PmMwsM7FW-U', '0', 'movie_poster_10.jpg','director_10.jpg','이창재','actor_10.jpg', '노무현');







INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point, address) VALUES ('admin','abb1','관리자','M','1992-10-15','010-4050-2695','yheisun@abb1.com','10000','서울/아파트');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point, address) VALUES ('babungv1','1234','박준용','M','1990-05-18','010-2206-8900','babungv@gmail.com','0','서울/아파트');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point, address) VALUES ('babungv2','1234','박준용','M','1990-05-18','010-2206-8900','babungv@gmail.com','0','서울/아파트');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point, address) VALUES ('babungv3','1234','박준용','M','1990-05-18','010-2206-8900','babungv@gmail.com','0','서울/아파트');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point, address) VALUES ('babungv4','1234','박준용','M','1990-05-18','010-2206-8900','babungv@gmail.com','0','서울/아파트');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point, address) VALUES ('babungv5','1234','박준용','M','1990-05-18','010-2206-8900','babungv@gmail.com','0','서울/아파트');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point, address) VALUES ('t','1','테스트','M','1990-05-18','010-2206-8900','babungv@gmail.com','0','서울/아파트');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point, address) VALUES ('a','1','테스트','M','1990-05-18','010-2206-8900','babungv@gmail.com','0','서울/아파트');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point, address) VALUES ('b','1','테스트','F','1990-05-18','010-2206-8900','babungv@gmail.com','0','서울/아파트');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point, address) VALUES ('c','1','테스트','M','1990-05-18','010-2206-8900','babungv@gmail.com','0','서울/아파트');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point, address) VALUES ('d','1','테스트','M','1990-05-18','010-2206-8900','babungv@gmail.com','0','서울/아파트');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point, address) VALUES ('test','1','test','M','1990-05-18','010-2206-8900','babungv@gmail.com','0','서울/아파트');


INSERT INTO Multiplex(name, address, axis) values ('가산디지털','서울 금천구 가산동,60-8','37.477633/126.889149');

INSERT INTO Theater(name, total_seat, multiplex_seq) VALUES ('1관','100', 1);
INSERT INTO Theater(name, total_seat, multiplex_seq) VALUES ('2관','80', 1);
INSERT INTO Theater(name, total_seat, multiplex_seq) VALUES ('3관','110', 1);
INSERT INTO Theater(name, total_seat, multiplex_seq) VALUES ('4관','90', 1);


INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('18:00', '18:10', '2017-05-29', '10000', 1, 1); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('19:00', '19:10', '2017-05-29', '10000', 1, 1); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('20:00', '20:10', '2017-05-29', '10000', 1, 2); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('21:00', '21:10', '2017-05-30', '10000', 1, 2);  
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('18:00', '18:10', '2017-05-30', '10000', 1, 3); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('19:00', '19:10', '2017-05-30', '10000', 1, 1); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('20:00', '20:10', '2017-05-31', '10000', 1, 4); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('10:00', '10:10', '2017-05-31', '10000', 2, 1);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('11:00', '11:10', '2017-05-31', '10000', 2, 2); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('12:00', '12:10', '2017-06-01', '10000', 2, 3);  
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('13:00', '13:10', '2017-06-01', '10000', 2, 1); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('14:00', '14:10', '2017-05-29', '10000', 2, 2); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('15:00', '15:10', '2017-05-30', '10000', 2, 2);  
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('16:00', '16:10', '2017-05-30', '10000', 2, 1); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('18:00', '18:10', '2017-05-30', '10000', 3, 2); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('18:00', '18:10', '2017-05-29', '10000', 3, 2);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('19:00', '19:10', '2017-05-29', '10000', 3, 2);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('20:00', '20:10', '2017-05-30', '10000', 3, 2);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('21:00', '21:10', '2017-05-30', '10000', 3, 2);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('22:00', '22:10', '2017-05-30', '10000', 3, 2);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('23:00', '23:10', '2017-05-31', '10000', 3, 2);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('24:00', '24:10', '2017-06-01', '10000', 3, 2);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('19:00', '19:10', '2017-05-29', '10000', 4, 2); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('18:00', '18:10', '2017-05-29', '10000', 5, 3); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('18:00', '18:10', '2017-05-29', '10000', 6, 4); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('19:00', '19:10', '2017-05-29', '10000', 6, 1);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('20:00', '20:10', '2017-05-29', '10000', 7, 2); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('21:00', '21:10', '2017-05-29', '10000', 8, 3); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('13:00', '13:10', '2017-05-29', '10000', 9, 1); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('14:00', '14:10', '2017-05-29', '10000', 10, 2); 
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('15:00', '15:10', '2017-05-29', '10000', 9, 3);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('19:00', '19:10', '2017-05-30', '10000', 4, 2);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('18:00', '18:10', '2017-05-30', '10000', 5, 3);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('18:00', '18:10', '2017-05-30', '10000', 6, 4);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('19:00', '19:10', '2017-05-30', '10000', 6, 1);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('20:00', '20:10', '2017-05-30', '10000', 7, 2);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('21:00', '21:10', '2017-05-30', '10000', 8, 3);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('13:00', '13:10', '2017-05-30', '10000', 9, 1);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('14:00', '14:10', '2017-05-30', '10000', 9, 2);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('15:00', '15:10', '2017-05-30', '10000', 9, 3);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('19:00', '19:10', '2017-05-31', '10000', 4, 2);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('18:00', '18:10', '2017-05-31', '10000', 5, 3);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('18:00', '18:10', '2017-05-31', '10000', 6, 4);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('19:00', '19:10', '2017-05-31', '10000', 6, 1);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('20:00', '20:10', '2017-05-31', '10000', 7, 2);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('21:00', '21:10', '2017-05-31', '10000', 8, 3);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('13:00', '13:10', '2017-05-31', '10000', 9, 1);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('14:00', '14:10', '2017-05-31', '10000', 9, 2);
INSERT INTO Showing(start_time, end_time, show_date, price, movie_seq, theater_seq) VALUES ('15:00', '15:10', '2017-05-31', '10000', 9, 3);

update Showing set show_date='2017-06-05' where show_date='2017-05-29';


-- 남성 예매 
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A01','2017-05-29','N','10000', '1','a',1);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A02','2017-05-29','N','10000', '1','a',1);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A03','2017-05-29','N','10000', '1','a',1);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A04','2017-05-29','N','10000', '1','a',1);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A05','2017-05-29','N','10000', '1','a',1);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A06','2017-05-29','N','10000', '1','a',1);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-B01','2017-05-29','N','10000', '1','a',1);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-C05','2017-05-29','N','10000', '1','a',1);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-C06','2017-05-29','N','10000', '1','a',1);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-C07','2017-05-29','N','10000', '1','a',1);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-C08','2017-05-29','N','10000', '1','a',1);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-C09','2017-05-29','N','10000', '1','a',1); -- 1 12개
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A01','2017-05-30','N','10000', '1','a',15);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A02','2017-05-30','N','10000', '1','a',15);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A03','2017-05-30','N','10000', '1','a',15);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A04','2017-05-30','N','10000', '1','a',15);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A05','2017-05-30','N','10000', '1','a',15);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A06','2017-05-30','N','10000', '1','a',15);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A07','2017-05-30','N','10000', '1','a',15);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A08','2017-05-30','N','10000', '1','a',15);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A09','2017-05-30','N','10000', '1','a',15);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-C01','2017-05-30','N','10000', '1','a',15); -- 15 10개
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A01','2017-05-29','N','10000', '1','a',23);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A01','2017-05-29','N','10000', '1','a',23);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A02','2017-05-29','N','10000', '1','a',23);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A03','2017-05-29','N','10000', '1','a',23);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A04','2017-05-29','N','10000', '1','a',23);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A05','2017-05-29','N','10000', '1','a',23);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A06','2017-05-29','N','10000', '1','a',23);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A07','2017-05-29','N','10000', '1','a',23); -- 23 8개
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-B01','2017-05-29','N','10000', '1','a',24);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-B02','2017-05-29','N','10000', '1','a',24);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-B03','2017-05-29','N','10000', '1','a',24);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-B04','2017-05-29','N','10000', '1','a',24);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-B05','2017-05-29','N','10000', '1','a',24);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-B06','2017-05-29','N','10000', '1','a',24); -- 24 6개
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A01','2017-05-29','N','10000', '1','a',25);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A02','2017-05-29','N','10000', '1','a',25);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A03','2017-05-29','N','10000', '1','a',25); -- 25 3개
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2000-A01','2017-05-29','N','10000', '1','a',27);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2000-A02','2017-05-29','N','10000', '1','a',27);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2000-A03','2017-05-29','N','10000', '1','a',27);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2000-A04','2017-05-29','N','10000', '1','a',27); -- 27 4개
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2100-A01','2017-05-29','N','10000', '1','a',28);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2100-A02','2017-05-29','N','10000', '1','a',28); -- 28 2개
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1300-A01','2017-05-29','N','10000', '1','a',29); -- 29 1개
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-A01','2017-05-29','N','10000', '1','a',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-A02','2017-05-29','N','10000', '1','a',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-A03','2017-05-29','N','10000', '1','a',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-A04','2017-05-29','N','10000', '1','a',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-A05','2017-05-29','N','10000', '1','a',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-A06','2017-05-29','N','10000', '1','a',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-A06','2017-05-29','N','10000', '1','a',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-A07','2017-05-29','N','10000', '1','a',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-A08','2017-05-29','N','10000', '1','a',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-A09','2017-05-29','N','10000', '1','a',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-F10','2017-05-29','N','10000', '1','a',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-D10','2017-05-29','N','10000', '1','a',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-B10','2017-05-29','N','10000', '1','a',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-A10','2017-05-29','N','10000', '1','a',30); -- 30 13개
-- 여성 예매
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1000-A05','2017-05-31','N','10000', '1','b',8);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1000-A06','2017-05-31','N','10000', '1','b',8);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1000-A07','2017-05-31','N','10000', '1','b',8);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1000-A08','2017-05-31','N','10000', '1','b',8);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1000-A09','2017-05-31','N','10000', '1','b',8);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1000-A10','2017-05-31','N','10000', '1','b',8);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1000-E05','2017-05-31','N','10000', '1','b',8);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1000-F05','2017-05-31','N','10000', '1','b',8);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1000-G05','2017-05-31','N','10000', '1','b',8);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1000-H05','2017-05-31','N','10000', '1','b',8);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1000-I05','2017-05-31','N','10000', '1','b',8);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1000-B02','2017-05-31','N','10000', '1','b',8);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1000-B03','2017-05-31','N','10000', '1','b',8); -- 8 13개 
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A01','2017-05-29','N','10000', '1','b',24);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A02','2017-05-29','N','10000', '1','b',24);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A03','2017-05-29','N','10000', '1','b',24);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A04','2017-05-29','N','10000', '1','b',24);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A05','2017-05-29','N','10000', '1','b',24);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A06','2017-05-29','N','10000', '1','b',24);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A07','2017-05-29','N','10000', '1','b',24);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A08','2017-05-29','N','10000', '1','b',24);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-A09','2017-05-29','N','10000', '1','b',24); -- 24 9개
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-B01','2017-05-29','N','10000', '1','b',25);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-B02','2017-05-29','N','10000', '1','b',25);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-B03','2017-05-29','N','10000', '1','b',25);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1800-B04','2017-05-29','N','10000', '1','b',25); -- 25 4개
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2000-B01','2017-05-29','N','10000', '1','b',27);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2000-C01','2017-05-29','N','10000', '1','b',27);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2000-D01','2017-05-29','N','10000', '1','b',27); -- 27 3개
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2100-B01','2017-05-29','N','10000', '1','b',28);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2100-B02','2017-05-29','N','10000', '1','b',28);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2100-B03','2017-05-29','N','10000', '1','b',28);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2100-B04','2017-05-29','N','10000', '1','b',28);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2100-B05','2017-05-29','N','10000', '1','b',28);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2100-B06','2017-05-29','N','10000', '1','b',28);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2100-B07','2017-05-29','N','10000', '1','b',28);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2100-B08','2017-05-29','N','10000', '1','b',28);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2100-B09','2017-05-29','N','10000', '1','b',28);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2100-B10','2017-05-29','N','10000', '1','b',28);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2100-C01','2017-05-29','N','10000', '1','b',28);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2100-C02','2017-05-29','N','10000', '1','b',28);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2100-C03','2017-05-29','N','10000', '1','b',28);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-2100-C04','2017-05-29','N','10000', '1','b',28); -- 28 14개
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1300-B01','2017-05-29','N','10000', '1','b',29);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1300-B01','2017-05-29','N','10000', '1','b',29); -- 29 2개
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-E10','2017-05-29','N','10000', '1','b',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-E09','2017-05-29','N','10000', '1','b',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-E08','2017-05-29','N','10000', '1','b',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-E07','2017-05-29','N','10000', '1','b',30);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1400-E06','2017-05-29','N','10000', '1','b',30); -- 30 5개
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1900-A05','2017-05-29','N','10000', '1','b',2);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1900-A07','2017-05-29','N','10000', '1','b',2);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1900-C07','2017-05-29','N','10000', '1','b',2);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1900-D07','2017-05-29','N','10000', '1','b',2);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1900-A08','2017-05-29','N','10000', '1','b',2);
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id, showing_seq) VALUES ('1-1-1900-A09','2017-05-29','N','10000', '1','b',2); -- 2 6개

INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','7','재밌게 봤어요','2017-05-10','a', 1);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','8','재밌게 봤어요','2017-05-10','a', 1);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','9','재밌게 봤어요','2017-05-10','a', 1);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','7','재밌게 봤어요','2017-05-11','a', 1);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','8','재밌게 봤어요','2017-05-11','babungv5', 1);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','5','재밌게 봤어요','2017-05-12','babungv1', 1);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','10','재밌게 봤어요','2017-05-12','babungv2', 1);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','7','재밌게 봤어요','2017-05-12','babungv3', 2);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','10','재밌게 봤어요','2017-05-12','babungv4', 2);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','4','재밌게 봤어요','2017-05-12','babungv5', 3);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','3','재밌게 봤어요','2017-05-12','babungv1', 4);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','5','재밌게 봤어요','2017-05-12','babungv2', 5);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','9','재밌게 봤어요','2017-05-12','babungv3', 6);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','8','재밌게 봤어요','2017-05-12','babungv4', 7);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','7','재밌게 봤어요','2017-05-12','babungv5', 8);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','6','재밌게 봤어요','2017-05-12','babungv5', 9);



INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','진주관 리뉴얼 안내','<p><strong>안녕하십니까, 롯데시네마 동성로관입니다.<br>&nbsp;<br>항상 저희 동성로관을 사랑해 주시는 고객 여러분께 진심으로 감사드립니다.<br>&nbsp;<br>'2017 컬러풀대구페스티벌' 일정으로 <br>&nbsp;<br></strong><strong><font color="#ff0000">2017년 5월 27일 (토) ~28 (일)&nbsp; 11:00 ~ 24:00 까지 롯데시네마 주차장 진입로가 통제됩니다.<br></font>&nbsp;<br>주차장 이용이 불가하오니, 지하철 이용을 권장해드립니다. </strong></p>','','2017-05-10','123','babungv1',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','성남관 리뉴얼 공사 안내','<p><strong>안녕하십니까, 롯데시네마 동성로관입니다.<br>&nbsp;<br>항상 저희 동성로관을 사랑해 주시는 고객 여러분께 진심으로 감사드립니다.<br>&nbsp;<br>'2017 컬러풀대구페스티벌' 일정으로 <br>&nbsp;<br></strong><strong><font color="#ff0000">2017년 5월 27일 (토) ~28 (일)&nbsp; 11:00 ~ 24:00 까지 롯데시네마 주차장 진입로가 통제됩니다.<br></font>&nbsp;<br>주차장 이용이 불가하오니, 지하철 이용을 권장해드립니다. </strong></p>','','2017-05-11','234','babungv2',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','오케이캐시백 시스템 점검 안내','<p>안녕하십니까, 롯데시네마입니다.</p><br><p><br>항상 저희 롯데시네마를 사랑해주시는 고객님들께 감사 드립니다.</p><br><p><br>기프티쇼 시스템 점검 작업이 아래와 같이 진행되오니 이용에 참고하시기 바랍니다.</p><br><p>&nbsp;</p><br><p>● 일시 : 2017년 5월 25일(목) 00시 00분 ~ 08시 00분 (총 8시간)</p><br><p><br>● 내용 :&nbsp; 기프티쇼 시스템 업그레이드 및 서비스 점검</p><br><p><br>● 이용 제한 내용 <br>&nbsp;&nbsp; - 기프티쇼 Web, Mobile Web, App 서비스 접속 중단<br>&nbsp;&nbsp; - 기프티쇼 구매, 발송, 취소, 환불, 교환 중단<br>&nbsp;&nbsp; - 기 발송된 기프티쇼의 사용 여부 조회 및 사용 중단<br>&nbsp;&nbsp; - 롯데시네마 전 영화관에서 기프티쇼 상품 교환 불가</p><br><p>● 기타 <br>&nbsp;&nbsp; - 유효기간 5월 25일로 표기된 기프티쇼 교환권은 6월 1일까지 교환 가능</p><br><p><br>관련 문의사항은 기프티쇼 고객센터 1588-6474으로 연락 바랍니다.</p><br><p>감사합니다.<br></p>','','2017-05-12','345','babungv3',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','시스템 점검 안내','<p>안녕하십니까, 롯데시네마입니다.</p><br><p><br>항상 저희 롯데시네마를 사랑해주시는 고객님들께 감사 드립니다.</p><br><p><br>기프티쇼 시스템 점검 작업이 아래와 같이 진행되오니 이용에 참고하시기 바랍니다.</p><br><p>&nbsp;</p><br><p>● 일시 : 2017년 5월 25일(목) 00시 00분 ~ 08시 00분 (총 8시간)</p><br><p><br>● 내용 :&nbsp; 기프티쇼 시스템 업그레이드 및 서비스 점검</p><br><p><br>● 이용 제한 내용 <br>&nbsp;&nbsp; - 기프티쇼 Web, Mobile Web, App 서비스 접속 중단<br>&nbsp;&nbsp; - 기프티쇼 구매, 발송, 취소, 환불, 교환 중단<br>&nbsp;&nbsp; - 기 발송된 기프티쇼의 사용 여부 조회 및 사용 중단<br>&nbsp;&nbsp; - 롯데시네마 전 영화관에서 기프티쇼 상품 교환 불가</p><br><p>● 기타 <br>&nbsp;&nbsp; - 유효기간 5월 25일로 표기된 기프티쇼 교환권은 6월 1일까지 교환 가능</p><br><p><br>관련 문의사항은 기프티쇼 고객센터 1588-6474으로 연락 바랍니다.</p><br><p>감사합니다.<br></p>','','2017-05-13','456','babungv4',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','롯데시네마 영등포관 정전 사과문','ㅎㅎㅎㅎ','','2017-05-14','567','babungv4',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','롯데시네마 양산관 영업 종료 안내','ㅎㅎㅎㅎ','','2017-05-15','5','babungv1',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','개인정보취급방침 변경에 따른 안내','ㅎㅎㅎㅎ','','2017-05-16','123','babungv1',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','OK 캐쉬백 시스템 점검 안내','ㅎㅎㅎㅎ','','2017-05-17','123','babungv2',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','대영관 오픈기념 경품 이벤트 당첨 안내','ㅎㅎㅎㅎ','','2017-05-17','123','babungv3',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','신한카드 청주/서청주관 S-Choice 제휴 체크카드 확대 적용 안내','ㅎㅎㅎㅎ','','2017-05-17','123','babungv4',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','청량리관 리뉴얼 및 운영 안내','ㅎㅎㅎㅎ','','2017-05-18','123','babungv4',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','영화 <사일런스> 관객과의 대화 예매 오픈 안내','ㅎㅎㅎㅎ','','2017-05-19','123','babungv3',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','진주관 리뉴얼 안내','ㅎㅎㅎㅎ','','2017-05-20','123','babungv1',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','성남관 리뉴얼 공사 안내','ㅎㅎㅎㅎ','','2017-05-21','234','babungv2',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','오케이캐시백 시스템 점검 안내','ㅎㅎㅎㅎ','','2017-05-22','345','babungv3',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','시스템 점검 안내','ㅎㅎㅎㅎ','','2017-05-23','456','babungv4',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','롯데시네마 영등포관 정전 사과문','ㅎㅎㅎㅎ','','2017-05-24','567','babungv1',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','롯데시네마 양산관 영업 종료 안내','ㅎㅎㅎㅎ','','2017-05-25','678','babungv2',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','개인정보취급방침 변경에 따른 안내','ㅎㅎㅎㅎ','','2017-05-26','789','babungv3',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','OK 캐쉬백 시스템 점검 안내','ㅎㅎㅎㅎ','','2017-05-27','890','babungv2',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','대영관 오픈기념 경품 이벤트 당첨 안내','ㅎㅎㅎㅎ','','2017-05-27','901','babungv3',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','신한카드 청주/서청주관 S-Choice 제휴 체크카드 확대 적용 안내','ㅎㅎㅎㅎ','','2017-05-27','1123','babungv4',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','청량리관 리뉴얼 및 운영 안내2','ㅎㅎㅎㅎ','','2017-05-28','2123','babungv1',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','영화 <사일런스> 관객과의 대화 예매 오픈 안내2','ㅎㅎㅎㅎ','','2017-05-29','3123','babungv1',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','진주관 리뉴얼 안내3','ㅎㅎㅎㅎ','','2017-05-30','123','babungv1',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','성남관 리뉴얼 공사 안내3','ㅎㅎㅎㅎ','','2017-06-01','234','babungv2',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','오케이캐시백 시스템 점검 안내3','ㅎㅎㅎㅎ','','2017-06-02','345','babungv3',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','시스템 점검 안내3','ㅎㅎㅎㅎ','','2017-06-03','456','babungv4',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','롯데시네마 영등포관 정전 사과문3','ㅎㅎㅎㅎ','','2017-06-04','567','babungv1',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','롯데시네마 양산관 영업 종료 안내3','ㅎㅎㅎㅎ','','2017-06-05','678','babungv2',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','개인정보취급방침 변경에 따른 안내3','ㅎㅎㅎㅎ','','2017-06-06','789','babungv1',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','OK 캐쉬백 시스템 점검 안내3','ㅎㅎㅎㅎ','','2017-06-07','890','babungv3',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','대영관 오픈기념 경품 이벤트 당첨 안내3','ㅎㅎㅎㅎ','','2017-06-07','901','babungv3',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','신한카드 청주/서청주관 S-Choice 제휴 체크카드 확대 적용 안내3','ㅎㅎㅎㅎ','','2017-06-07','1123','babungv4',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','청량리관 리뉴얼 및 운영 안내3','ㅎㅎㅎㅎ','','2017-06-08','2123','babungv1',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','영화 <사일런스> 관객과의 대화 예매 오픈 안내3','ㅎㅎㅎㅎ','','2017-06-09','3123','babungv1',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','영화 <사일런스> 관객과의 대화 예매 오픈 안내4','ㅎㅎㅎㅎ','','2017-06-10','3115','babungv1',1);
INSERT INTO Article(answer, article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('N','문의','영화 <사일런스> 관객과의 대화 예매 오픈 안내5','ㅎㅎㅎㅎ','','2017-06-11','3118','babungv1',1);

INSERT INTO Comment(reg_date, content, customer_id, article_seq) VALUES ('2017-05-19','코멘트 입니다ㅋㅋㅋㅋ','babungv2',38);
INSERT INTO Comment(reg_date, content, customer_id, article_seq) VALUES ('2017-05-21','코멘트 입니다ㅎㅎㅎㅎ','babungv2',38);
INSERT INTO Comment(reg_date, content, customer_id, article_seq) VALUES ('2017-05-23','코멘트 입니다!!!','a',38);
INSERT INTO Comment(reg_date, content, customer_id, article_seq) VALUES ('2017-05-25','코멘트 입니다...','a',38);
INSERT INTO Comment(reg_date, content, customer_id, article_seq) VALUES ('2017-05-27','코멘트 입니다#@#','b',38);
INSERT INTO Comment(reg_date, content, customer_id, article_seq) VALUES ('2017-05-29','코멘트 입니다$$$','babungv3',37);
INSERT INTO Comment(reg_date, content, customer_id, article_seq) VALUES ('2017-05-19','코멘트 입니다~!!','babungv4',36);
INSERT INTO Comment(reg_date, content, customer_id, article_seq) VALUES ('2017-05-21','코멘트 입니다!@','babungv1',35);
INSERT INTO Comment(reg_date, content, customer_id, article_seq) VALUES ('2017-05-23','코멘트 입니다!!','babungv2',34);
INSERT INTO Comment(reg_date, content, customer_id, article_seq) VALUES ('2017-05-25','코멘트 입니다ㅜㅜㅜ','babungv1',33);

show tables;

DROP TABLE Reservation CASCADE;
DROP TABLE Showing CASCADE;
DROP TABLE Comment CASCADE;
DROP TABLE Article CASCADE;
DROP TABLE Theater CASCADE;
DROP TABLE Multiplex CASCADE;
DROP TABLE Review CASCADE;
DROP TABLE Customer CASCADE;
DROP TABLE Movie CASCADE;
DROP TABLE Notice CASCADE;

DROP VIEW Information;
DROP VIEW Timetable;
DROP VIEW Statistic;



delete from reservation where seq='118';

select * from Showing where movie_seq='17'

select * from movie; where title='겟 아웃';

delete from movie where seq='16';

select * from Information where movTitle='겟 아웃';


select trailer_main from movie;

update movie set trailer_main=1 where seq=8;


SELECT * FROM CUSTOMER WHERE ID='yhs9292'