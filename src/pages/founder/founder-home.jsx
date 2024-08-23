import React from 'react';
import IntervieweeBox from '../../components/interviewee/interviewee-home/IntervieweeBox';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../styles/founder/founder-home.module.css';
import axios from 'axios';

export default function FounderHomePage({ id }) {
  const [data, setData] = useState();
  const [wholeInterviewee, setWholeInterviewee] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5173/data/interview.json'
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interview = data?.interview?.find((item) => item.id === id);
    if (interview) {
      setWholeInterviewee(interview.interviewee);
    }
  }, [data, id]);

  return (
    <div className={styles.FounderHomeContainer}>
      <div className={styles.Title}>
        <div>당신의 서비스를 발전시켜줄, 인터뷰 지원자를 만나보세요</div>
      </div>
      <div className={styles.FounderBox}>
        <div className={styles.SubTitle}>오늘의 추천 인터뷰이</div>
        <div className={styles.IntervieweeContainer}>
          {wholeInterviewee?.map((item, i) => (
            <IntervieweeBox
              key={i}
              name={item.name}
              job={item.job}
              subject={item.subject}
            />
          ))}
        </div>
      </div>
      <div className={styles.FounderBox}>
        <h2 className={styles.SubTitle}>더 많은 인터뷰이를 확인해보세요.</h2>
        <div className={styles.IntervieweeContainer}>
          {wholeInterviewee?.map((item, i) => (
            <IntervieweeBox
              key={i}
              name={item.name}
              job={item.job}
              subject={item.subject}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
