import React from 'react';
import styles from '../styles/home.module.css';
import icon1_page2 from '../assets/icons/icon1_page2.svg';
import icon2_page2 from '../assets/icons/icon2_page2.svg';
import icon3_page2 from '../assets/icons/icon3_page2.svg';
import icon_page3 from '../assets/icons/icon_page3.svg';
import icon_page5 from '../assets/icons/icon_page5.svg';

export default function Home() {
  return (
    <div>
      <div class={styles.wrapper_page_head_tail}>
        <div className={styles.title_page1}>
          <h1>
            정성적 인터뷰 매칭을
            <br />
            보다 쉽고
            <br />
            간편하게
          </h1>
        </div>
        <div className={styles.subtitle_page1}>
          <h3>당신의 꿈을 향해 끝까지 함께할 IN U IN</h3>
        </div>
        <div className={styles.input_group}>
          <input type='text' placeholder='이메일 주소를 입력하세요' />
          <button type='button'>무료 체험 시작하기</button>
        </div>
      </div>
      <div className={styles.wrapper_page2}>
        <div className={styles.page2_title}>
          <h1>
            IN U IN이 제공하는 최고의 인터뷰 솔루션을 통해
            <br />내 손안의 인터뷰 관리를 경험 해보세요.
          </h1>
        </div>
        <div className={styles.container_page2}>
          <div className={styles.create_interview}>
            <div className={styles.container_page2_title}>
              <h3>정성적 인터뷰 참여자 모집</h3>
            </div>
            <div className={styles.container_page2_description}>
              <h3>
                정성적 인터뷰에 참여할
                <br />
                인터뷰 희망자를 보다 쉽게
              </h3>
            </div>
            <div class={styles.icon_page2}>
              <img src={icon1_page2} />
            </div>
            <div className={styles.container_page2_button}>
              <button type='button'>인터뷰 생성하기</button>
            </div>
          </div>
          <div className={styles.view_interviewee}>
            <div className={styles.container_page2_title}>
              <h3>인터뷰 제안 기능</h3>
            </div>
            <div className={styles.container_page2_description}>
              <h3>
                자신이 원하는 조건의 인터뷰 희망자
                <br />
                검색 및 인터뷰 신청 가능
              </h3>
            </div>
            <div class={styles.icon_page2}>
              <img src={icon2_page2} />
            </div>
            <div className={styles.container_page2_button}>
              <button type='button'>인터뷰 희망자 보러가기</button>
            </div>
          </div>
          <div className={styles.view_interviewer}>
            <div className={styles.container_page2_title}>
              <h3>참여할 인터뷰 탐색 기능</h3>
            </div>
            <div className={styles.container_page2_description}>
              <h3>
                인터뷰 희망자들은 인터뷰모집자가
                <br />
                생성한 인터뷰에 지원 가능
              </h3>
            </div>
            <div class={styles.icon3_page2}>
              <img src={icon3_page2} />
            </div>
            <div className={styles.container_page2_button}>
              <button type='button'>인터뷰 보러가기</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper_page3}>
        <div className={styles.page3_title}>
          <h1>
            기존보다 <font color='#2A4ECD'>빠르고 정확한</font> 인터뷰 관리
            서비스
          </h1>
        </div>
        <div class={styles.icon_page3}>
          <img src={icon_page3} />
        </div>
        <div className={styles.container_page3}>
          <div class={styles.container_page3_box}>
            <div className={styles.container_page3_title}>
              <h3>맞춤 인터뷰를 편리하게 신청</h3>
            </div>
            <div className={styles.container_page3_description1}>
              <ul>
                <li> 원하는 주제로 인터뷰 희망자 모집 가능</li>
                <li>
                  연령대, 직업, 거주 형태, 라이플 사이클,
                  <br />
                  고객 여부, 인터뷰 형식, 소요 시간에 따라
                  <br />
                  인터뷰이를 검색 및 추천 받기 가능
                </li>
              </ul>
            </div>
          </div>
          <div class={styles.container_page3_box}>
            <div className={styles.container_page3_title}>
              <h3>인터뷰 조건 설정</h3>
            </div>
            <div className={styles.container_page3_description}>
              <ul>
                <li>
                  인터뷰 희망자와 인터뷰 종류 및 시간
                  <br />에 허용 범위 기준 설정 및 합의 가능
                </li>
                <li>10분 추가 인터뷰당 단가 설정 가능</li>
              </ul>
            </div>
          </div>
          <div class={styles.container_page3_box}>
            <div className={styles.container_page3_title}>
              <h3>인터뷰 관리</h3>
            </div>
            <ul className={styles.container_page3_description}>
              <li>나의 구글 캘린더와 인터뷰 일정 연동</li>
              <li>인터뷰 내용 녹음시 자동 정리</li>
              <li>피드백 종합 기록 및 관리 가능</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.wrapper_page4}>
        <div className={styles.page4_title}>
          <h1>인터뷰 관리 서비스</h1>
        </div>
        <div className={styles.container_page4}>
          <div className={styles.container_page4_price}>
            <h3>무료</h3>
            <div className={styles.container_page4_bar}></div>
          </div>
          <div className={styles.container_page4_price}>
            <h3>구독제</h3>
            <div className={styles.container_page4_bar}></div>
          </div>
          <div className={styles.container_page4_price}>
            <h3>인터뷰 컨설팅</h3>
            <div className={styles.container_page4_bar}></div>
          </div>
          <div class={styles.container_page4_box}>
            <div className={styles.container_page4_title}>
              <h3>체험을 통해 경험해보세요!</h3>
            </div>
            <div className={styles.container_page4_detail_price}> </div>
            <div className={styles.container_page4_description1_1}>
              <ul>
                <li> 정성적 인터뷰 관련 전자책 증정</li>
                <li> 정성적 인터뷰 관련 컨설팅 1회</li>
              </ul>
            </div>
            <div className={styles.container_page4_description2}>
              <h3>
                매일 오전 11시 & 오후 5시마다
                <br />
                무료 인터뷰 매칭 후보 업데이트
              </h3>
            </div>
          </div>
          <div class={styles.container_page4_box}>
            <div className={styles.container_page4_title}>
              <h3>구독을 통해 경험해보세요!</h3>
            </div>
            <div className={styles.container_page4_detail_price}>50000/월</div>
            <div className={styles.container_page4_description1}>
              <ul>
                <li> 정성적 인터뷰 자동 기록 가능</li>
                <li> 인터뷰 분석 노트 3개월마다 제공</li>
              </ul>
            </div>
            <div className={styles.container_page4_description2}>
              <h3>
                매일 오전 11시 & 오후 5시마다
                <br />
                무료 인터뷰 매칭 후보 업데이트
              </h3>
            </div>
          </div>
          <div class={styles.container_page4_box}>
            <div className={styles.container_page4_title}>
              <h3>특화된 인터뷰 컨설팅</h3>
            </div>
            <div className={styles.container_page4_detail_price}>별도문의</div>
            <div className={styles.container_page4_description1}>
              <ul>
                <li> 정성적 인터뷰</li>
                <br />
                <li> 동행 컨설팅</li>
                <br />
                <li> 제공 가능</li>
              </ul>
            </div>
            <div className={styles.container_page4_description2_3}>
              1년 장기 계약시 5% 할인
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper_page5}>
        <div className={styles.page5_icon}>
          <div class={styles.icon_page5}>
            <img src={icon_page5} />
          </div>
        </div>
        <div className={styles.page5_contents}>
          <div className={styles.page5_title}>
            <h1>
              편리한 인터뷰 솔루션
              <br />
              인유인으로 시작해보세요
            </h1>
          </div>
          <div className={styles.description}>
            <p>
              인터뷰 참여자 모집의 고민은 이제 그만.
              <br />
              인유인만의 솔루션을 제공해드립니다.
            </p>
          </div>
          <div className={styles.page5_button}>
            <button type='button'>서비스 문의</button>
          </div>
        </div>
      </div>
      <div className={styles.wrapper_page_head_tail}>
        <div className={styles.page6_title}>
          <h1>지금 IN U IN과 함께하기</h1>
        </div>
        <div className={styles.page6_input_info}></div>
        <div className={styles.page5_input_inquiry}></div>
      </div>
    </div>
  );
}
