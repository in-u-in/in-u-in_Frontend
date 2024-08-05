import React from 'react';
import styles from '../../../styles/interviewee/IntervieweeBox.module.css';
import tourism from '../../../assets/icons/tourism.svg';

export default function IntervieweeBox() {
  return (
    <div className={styles.FounderBoxWrap}>
      <div className={styles.DefaultTime}>40분</div>
      <div className={styles.InfoWrap1}>
        <div className={styles.IntervieweeImg}>
          <img src={tourism} />
        </div>
        <div className={styles.NameJobWrap}>
          <div className={styles.IntervieweeName}>인유인</div>
          <div className={styles.IntervieweeJob}>플로리스트</div>
        </div>
      </div>
      <div className={styles.InfoWrap2}>
        <div className={styles.IntervieweeInfo}>플로리스트 자격증 보유</div>
        <div className={styles.InterviewButton}>인터뷰 신청하기</div>
      </div>
    </div>
  );
}
