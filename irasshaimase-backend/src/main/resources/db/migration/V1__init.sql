START TRANSACTION;

CREATE TABLE restaurant
(
    id                 BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    food_kind          VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '음식점 종류',
    city               VARCHAR(127) COLLATE utf8mb4_unicode_ci NULL COMMENT '도시',
    region             VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '지역 대분류',
    location           VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '상세 지명',
    store_name         VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '업장명',
    lunch_price        INTEGER                                 NULL COMMENT '런치 금액',
    dinner_price       INTEGER                                 NULL COMMENT '디너 금액',
    corkage_price      INTEGER                                 NULL COMMENT '콜키지 금액',
    phone              VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '전화번호',
    holiday_info       VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '휴일 정보',
    parking            VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '주차여부',
    price_significant  VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '가격특이사항',
    other_significant  VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '기타특이사항',
    shift_info         VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '1부/2부제 여부',
    store_feature      VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '가게특징',
    reservation_method VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '예약방법',
    address            VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '주소',
    latitude           DOUBLE                                  NULL COMMENT '위도(Y)',
    longitude          DOUBLE                                  NULL COMMENT '경도(X)',
    address_position   POINT                                   NULL COMMENT '좌표(X, Y)',
    sns                VARCHAR(255)                            NULL COMMENT 'SNS',
    japanese_writing   VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '일본어 표기',
    store_meaning      VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '업장명 뜻',
    chef_name          VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '쉐프님 성함',
    chef_career        VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '쉐프님 경력',
    drink_note         VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '주류 비고',
    one_portion        VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '1인 스시야 가능 여부',
    group_seat         VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '단체석',
    counter_seat_count VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL COMMENT '다찌 좌석수',
    store_open_day     TIMESTAMP                               NULL COMMENT '업장 오픈일',
    is_zeropay         TINYINT(1)                              NULL COMMENT '제로페이 가능 여부',
    created_at         TIMESTAMP                               NULL COMMENT '등록일자',
    updated_at         TIMESTAMP                               NULL COMMENT '수정일자'
);

CREATE TABLE seasonal_sushi
(
    id               BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name             VARCHAR(127) COLLATE utf8mb4_unicode_ci NULL COMMENT '이름',
    japanese_writing VARCHAR(255) COLLATE utf8mb4_unicode_ci COMMENT '일본 이름'
);

CREATE TABLE season
(
    id                BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    season_date_start TIMESTAMP DEFAULT NULL COMMENT '제철 시작일',
    season_date_end   TIMESTAMP DEFAULT NULL COMMENT '제철 종료일',
    note              VARCHAR(255) COLLATE utf8mb4_unicode_ci COMMENT '비고',
    seasonal_sushi_id BIGINT NULL,
    CONSTRAINT 'season_seasonal_id_fk' FOREIGN KEY (seasonal_sushi_id)
        REFERENCES seasonal_sushi (id) ON UPDATE CASCADE ON DELETE CASCADE
);

COMMIT;
