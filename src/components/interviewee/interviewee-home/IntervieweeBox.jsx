import React from 'react';
import styles from '../../../styles/interviewee/IntervieweeBox.module.css';
import tourism from '../../../assets/icons/tourism.svg';

export default function IntervieweeBox({ name, job, subject }) {
  return (
    <div className={styles.FounderBoxWrap}>
      <div className={styles.TimeWrap}>
        <div className={styles.DefaultTime}>40분</div>
        <div className={styles.SmallBox} />
      </div>
      <div className={styles.InfoWrap1}>
        <div className={styles.IntervieweeImg}>
          <img src={tourism} />
        </div>
        <div className={styles.NameJobWrap}>
          <div className={styles.IntervieweeName}>{name}</div>
          <div className={styles.IntervieweeJob}>{job}</div>
        </div>
      </div>
      <div className={styles.InfoWrap2}>
        <div className={styles.IntervieweeInfo}>{subject}</div>
        <div className={styles.InterviewButton}>인터뷰 신청하기</div>
      </div>
    </div>
  );
}
