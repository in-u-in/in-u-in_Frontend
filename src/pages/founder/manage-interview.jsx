import styles from '../../styles/founder/manage-interview.module.css';
import InterviewBox from '../../components/founder/manage-interview/InterviewBox';
import Image from '../../assets/icons/tourism.svg';

export default function ManageInterviewPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>인터뷰 관리</div>
      <div className={styles.box}>
        <InterviewBox
          title={'당신의 베트남 여행을 공유해주세요.'}
          applicant={12}
          wating={2}
          deadline={'2024-08-01T12:00:00'}
          image={Image}
          time={40}
          cost={12000}
          way={'대면'}
          compensate={'플랫폼 내 포인트 추가 보상'}
        />
        <InterviewBox
          title={'당신의 베트남 여행을 공유해주세요.'}
          applicant={12}
          wating={2}
          deadline={'2024-08-01T12:00:00'}
          image={Image}
          time={40}
          cost={12000}
          way={'대면'}
          compensate={'플랫폼 내 포인트 추가 보상'}
        />
        <InterviewBox
          title={'당신의 베트남 여행을 공유해주세요.'}
          applicant={12}
          wating={2}
          deadline={'2024-08-01T12:00:00'}
          image={Image}
          time={40}
          cost={12000}
          way={'대면'}
          compensate={'플랫폼 내 포인트 추가 보상'}
        />
        <InterviewBox
          title={'당신의 베트남 여행을 공유해주세요.'}
          applicant={12}
          wating={2}
          deadline={'2024-08-01T12:00:00'}
          image={Image}
          time={40}
          cost={12000}
          way={'대면'}
          compensate={'플랫폼 내 포인트 추가 보상'}
        />
        <InterviewBox
          title={'당신의 베트남 여행을 공유해주세요.'}
          applicant={12}
          wating={2}
          deadline={'2024-08-01T12:00:00'}
          image={Image}
          time={40}
          cost={12000}
          way={'대면'}
          compensate={'플랫폼 내 포인트 추가 보상'}
        />
      </div>
    </div>
  );
}
