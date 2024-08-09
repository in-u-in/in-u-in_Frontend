import styles from '../../styles/founder/manage-interviewee.module.css';
import IntervieweeBox from '../../components/founder/manage-interviewee/IntervieweeBox';
import Profile from '../../assets/icons/tourism.svg';

export default function ManageIntervieweePage() {
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
        <IntervieweeBox
          profile={Profile}
          name={'혜성'}
          subject={'당신의 일본 여행 경험을 공유해 주세요'}
          job={'백엔드 개발자'}
          ways={['화상통화', '전화']}
          timeRange={'3시간 미만'}
          minCost={2000}
          maxCost={3000}
          state={'승인대기중'}
        />
      </div>
    </div>
  );
}
