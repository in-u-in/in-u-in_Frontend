import styles from '../../styles/founder/manage-interview.module.css';
import InterviewBox from '../../components/founder/manage-interview/InterviewBox';
import { useState, useEffect } from 'react';
import { MoonLoader } from 'react-spinners';
import axios from 'axios';

export default function ManageInterviewPage() {
  const [data, setData] = useState({ interview: 'loading' });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5173/data/interview.json'
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>인터뷰 관리</div>
      <div className={styles.box}>
        {data?.interview == null ? (
          <div className={styles.waitingContainer}>
            인터뷰가 없습니다.
            <br /> 인터뷰를 추가해보세요!
          </div>
        ) : data.interview == 'loading' ? (
          <div className={styles.waitingContainer}>
            <MoonLoader size={40} color='#2a4ecd' speedMultiplier={1} />
          </div>
        ) : (
          data.interview.map((item, idx) => (
            <InterviewBox
              key={idx}
              type={'mid'}
              title={item.title}
              applicant={item.applicant}
              wating={item.wating}
              deadline={item.deadline}
              image={item.image}
              time={item.time}
              cost={item.cost}
              way={item.way}
              compensate={item.compensate}
              id={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
}
