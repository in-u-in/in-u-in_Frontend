import styles from '../../styles/founder/manage-interviewee.module.css';
import IntervieweeBox from '../../components/founder/manage-interviewee/IntervieweeBox';
import Modal from '../../components/founder/manage-interviewee/Modal';
import useModal from '../../hooks/useModal';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ManageIntervieweePage() {
  const { isOpen, closeModal, openModal } = useModal();
  const [data, setData] = useState();
  const [intervieweeList, setIntervieweeList] = useState([]);
  const { id } = useParams();

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

  useEffect(() => {
    const numberId = Number(id);
    const interview = data?.interview?.find((item) => item.id === numberId);
    if (interview) {
      setIntervieweeList(interview.interviewee);
    }
  }, [data]);

  const headerTexts = [
    '이름',
    '인터뷰 주제',
    '직업',
    '선호 방식',
    '희망 소유 범위',
    '희망 10분당 추가금액 범위',
    '상태',
    '작업',
  ];

  const headerWidths = [
    '90px',
    '283.56px',
    '131.89px',
    '148.11px',
    '193.22px',
    '190.75px',
    '103.89px',
    '158px',
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>지원자 관리</div>
        <div className={styles.box}>
          <div className={styles.headerBox}>
            {headerTexts.map((text, idx) => (
              <div
                className={`${styles.headerText} ${idx != 7 && styles.border}`}
                style={{ width: headerWidths[idx] }}
                key={idx}
              >
                {text}
              </div>
            ))}
          </div>
          {/*api 연결 시, 변경 */}
          {intervieweeList?.map((item, idx) => (
            <IntervieweeBox
              key={idx}
              profile={item.profile}
              name={item.name}
              subject={item.subject}
              job={item.job}
              ways={item.ways}
              timeRange={item.timeRange}
              minCost={item.minCost}
              maxCost={item.maxCost}
              state={item.state}
              openModal={openModal}
            />
          ))}
        </div>
      </div>
      {isOpen && <Modal closeModal={closeModal} />}
    </>
  );
}
