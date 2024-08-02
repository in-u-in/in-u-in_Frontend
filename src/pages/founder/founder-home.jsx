import React from 'react';
import IntervieweeBox from '../../components/founder/founder-home/FounderBox';
import { useState } from 'react';
import styles from '../../styles/founder/founder-home.module.css';

export default function FounderHomePage() {
  /* api로 정보 가져오기

    const [recommandInerviewee, setRecommandInterviewee] = useState([]);
    const [wholeInterviewee, setWholeInterviewee] = useState([]);

    const getRecommandIntervieweeData = async () => {
        try {
          const url = ``;
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            setRecommandInterviewee(data.results);
          }
        } catch (error) {
        
        }
    }

    const getWholeIntervieweeData = async () => {
        try {
          const url = ``;
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            setWholeInterviewee(data.results);
          }
        } catch (error) {
        
        }
    }

    useEffect(() => {
        getRecommandIntervieweeData();
        getWholeIntervieweeData();
      },[])

*/

  return (
    <div className={styles.FounderHomeContainer}>
      <div className={styles.Title}>
        <div>인터뷰 희망자와 인터뷰 모집자가 가장 빨리 연결되는 곳,</div>
        <div>IN U IN</div>
      </div>
      <div className={styles.FounderBox}>
        <div className={styles.SubTitle}>오늘의 추천 인터뷰이</div>
        <div className={styles.IntervieweeContainer}>
          {/*recommandInerviewee.map((item) => (
                            <IntervieweeBox
                                key={item.id}
                            />
                        ))*/}
          <IntervieweeBox />
          <IntervieweeBox />
          <IntervieweeBox />
          <IntervieweeBox />
          <IntervieweeBox />
          <IntervieweeBox />
          <IntervieweeBox />
        </div>
        <h2 className={styles.SubTitle}>더 많은 인터뷰이를 확인해보세요.</h2>
        <div className={styles.IntervieweeContainer}>
          {/*wholeInterviewee.map((item) => (
                            <IntervieweeBox
                                key={item.id}
                            />
                        ))*/}
          <IntervieweeBox />
          <IntervieweeBox />
          <IntervieweeBox />
          <IntervieweeBox />
          <IntervieweeBox />
          <IntervieweeBox />
          <IntervieweeBox />
        </div>
      </div>
    </div>
  );
}
