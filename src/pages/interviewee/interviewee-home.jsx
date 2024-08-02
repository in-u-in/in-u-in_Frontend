import React from 'react';
import { useState } from 'react';
import FounderBox from '../../components/founder/founder-home/FounderBox';
import styles from '../../styles/interviewee/interviewee-home.module.css';

export default function IntervieweeHomePage() {
  /* api로 정보 가져오기 

    const [recommandFounder, setRecommandFounder] = useState([]);
    const [wholeFounder, setWholeFounder] = useState([]);

    const getRecommandFounderData = async () => {
        try {
          const url = ``;
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            setRecommandFounder(data.results);
          }
        } catch (error) {
        
        }
    }

    const getWholeFounderData = async () => {
        try {
          const url = ``;
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            setWholeFounder(data.results);
          }
        } catch (error) {
        
        }
    }

    useEffect(() => {
        getRecommandFounderData();
        getWholeFounderData();
      },[])

*/

  return (
    <div className={styles.FounderHomeContainer}>
      <div className={styles.Title}>
        세상에 나오지 않은 서비스, 혹은 더 발전할 서비스들을 미리 경험하고,
        서비스에 피드백을 주세요
      </div>
      <div className={styles.IntervieweeBox}>
        <div className={styles.SubTitle}>오늘의 추천 인터뷰</div>
        <div className={styles.FounderContainer}>
          {/*recommandFounder.map((item) => (
                        <IntervieweeBox
                            key={item.id}
                        />
                    ))*/}
          <FounderBox />
          <FounderBox />
          <FounderBox />
          <FounderBox />
          <FounderBox />
          <FounderBox />
          <FounderBox />
        </div>
        <h2 className={styles.SubTitle}>더 많은 인터뷰들을 확인해보세요.</h2>
        <div className={styles.FounderContainer}>
          {/*wholeFounder.map((item) => (
                        <IntervieweeBox
                            key={item.id}
                        />
                    ))*/}
          <FounderBox />
          <FounderBox />
          <FounderBox />
          <FounderBox />
          <FounderBox />
          <FounderBox />
          <FounderBox />
        </div>
      </div>
    </div>
  );
}
