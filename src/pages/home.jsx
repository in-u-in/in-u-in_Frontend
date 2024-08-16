import React from 'react';
import styles from '../styles/home.module.css';
import icon1_page2 from '../assets/icons/icon1_page2.svg';
import icon2_page2 from '../assets/icons/icon2_page2.svg';
import icon3_page2 from '../assets/icons/icon3_page2.svg';
import icon_page3 from '../assets/icons/icon_page3.svg';
import icon_page5 from '../assets/icons/icon_page5.svg';
import Price1_cliked from '../components/home/Price1Cliked';
import Box1 from '../components/home/box1';
import Box1_cliked from '../components/home/Box1Cliked';
import Price2_cliked from '../components/home/Price2Cliked';
import Box2 from '../components/home/box2';
import Box2_cliked from '../components/home/Box2Cliked';
import Price3_cliked from '../components/home/Price3Cliked';
import Box3 from '../components/home/box3';
import Box3_cliked from '../components/home/Box3Cliked';
import { useState } from 'react';

export default function Home() {
  const [box1, setBox1] = useState(2);
  const [box2, setBox2] = useState(1);
  const [box3, setBox3] = useState(1);

  const clickPrice1 = (n) => {
    setBox1(n);
  };

  const clickBox1 = (n) => {
    setBox1(n);
  };

  const clickPrice2 = (n) => {
    setBox2(n);
  };

  const clickBox2 = (n) => {
    setBox2(n);
  };

  const clickPrice3 = (n) => {
    setBox3(n);
  };

  const clickBox3 = (n) => {
    setBox3(n);
  };

  const selectPrice1 = {
    1: null,
    2: <Price1_cliked />,
  };

  const selectBox1 = {
    1: <Box1 />,
    2: <Box1_cliked />,
  };

  const selectPrice2 = {
    1: null,
    2: <Price2_cliked />,
  };

  const selectBox2 = {
    1: <Box2 />,
    2: <Box2_cliked />,
  };

  const selectPrice3 = {
    1: null,
    2: <Price3_cliked />,
  };

  const selectBox3 = {
    1: <Box3 />,
    2: <Box3_cliked />,
  };

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
            <button
              onClick={() => {
                clickPrice1(2);
                clickPrice2(1);
                clickPrice3(1);
              }}
            >
              무료
            </button>
            {box1 && <div>{selectPrice1[box1]}</div>}
          </div>
          <div className={styles.container_page4_price}>
            <button
              onClick={() => {
                clickPrice2(2);
                clickPrice1(1);
                clickPrice3(1);
              }}
            >
              구독제
            </button>
            {box1 && <div>{selectPrice2[box2]}</div>}
          </div>
          <div className={styles.container_page4_price}>
            <button
              onClick={() => {
                clickPrice3(2);
                clickPrice1(1);
                clickPrice2(1);
              }}
            >
              인터뷰 컨설팅
            </button>
            {box1 && <div>{selectPrice3[box3]}</div>}
          </div>
          <button
            class={styles.container_page4_box}
            onClick={() => {
              clickBox1(2);
              clickBox2(1);
              clickBox3(1);
            }}
          >
            {box2 && <div>{selectBox1[box1]}</div>}
          </button>
          <button
            class={styles.container_page4_box}
            onClick={() => {
              clickBox2(2);
              clickBox1(1);
              clickBox3(1);
            }}
          >
            {box2 && <div>{selectBox2[box2]}</div>}
          </button>
          <button
            class={styles.container_page4_box}
            onClick={() => {
              clickBox3(2);
              clickBox1(1);
              clickBox2(1);
            }}
          >
            {box3 && <div>{selectBox3[box3]}</div>}
          </button>
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
        <div className={styles.page6_input_group}>
          <div className={styles.page6_input_info_group}>
            <div className={styles.page6_input_title}>
              <h1>회사명/이름</h1>
            </div>
            <div className={styles.page6_input_info}>
              <input
                type='text'
                placeholder='인터뷰 희망자실 경우에 이름만 입력해주세요.'
              />
            </div>
            <div className={styles.page6_input_title}>
              <h1>이메일</h1>
            </div>
            <div className={styles.page6_input_info}>
              <input type='text' placeholder='예) inuin@email.com' />
            </div>
            <div className={styles.page6_input_title}>
              <h1>전화번호</h1>
            </div>
            <div className={styles.page6_input_info}>
              <input type='text' placeholder='예) 010-1234-5678' />
            </div>
          </div>
          <div className={styles.page6_input_inquiry_group}>
            <div className={styles.page6_input_checkbox_group}>
              <div className={styles.page6_input_checkbox1}>
                <input id='checkbox1' type='checkbox' />
                <label>서비스 문의</label>
              </div>
              <div className={styles.page6_input_checkbox2}>
                <input id='checkbox2' type='checkbox' />
                <label>컨설팅 신청</label>
              </div>
            </div>
            <div className={styles.page6_inqury_bar}></div>
            <div className={styles.page6_inqury_title}>문의내용</div>
            <div className={styles.page6_inqury_input}>
              <input type='text' />
            </div>
          </div>
        </div>
        <div className={styles.page6_button}>
          <button type='button'>문의하기</button>
        </div>
      </div>
    </div>
  );
}
