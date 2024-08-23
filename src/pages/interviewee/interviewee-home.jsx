import React, { useState, useEffect } from 'react';
import FounderBox from '../../components/founder/founder-home/FounderBox';
import styles from '../../styles/interviewee/interviewee-home.module.css';
import axios from 'axios';

export default function IntervieweeHomePage() {
  const [wholeFounder, setWholeFounder] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5173/data/interview.json'
        );
        console.log(response.data);
        setWholeFounder(response.data.interview);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.FounderHomeContainer}>
      <div className={styles.Title}>
        세상에 나오지 않은 서비스, 혹은 더 발전할 서비스들을 미리 경험하고,
        서비스에 피드백을 주세요
      </div>
      <div className={styles.IntervieweeBox}>
        <div className={styles.SubTitle}>오늘의 추천 인터뷰</div>
        <div className={styles.FounderContainer}>
          {wholeFounder?.map((item, i) => (
            <FounderBox
              key={i}
              founderId={item.id}
              time={item.time}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className={styles.IntervieweeBox}>
        <h2 className={styles.SubTitle}>더 많은 인터뷰들을 확인해보세요.</h2>
        <div className={styles.FounderContainer}>
          {wholeFounder?.map((item, i) => (
            <FounderBox
              key={i}
              founderId={item.id}
              time={item.time}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
