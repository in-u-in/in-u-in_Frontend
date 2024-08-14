import styles from '../../styles/founder/manage.module.css';
import IntervieweeBox from '../../components/founder/manage/IntevieweeBox';
import Profile from '../../assets/icons/tourism.svg';

export default function ManagePage() {
  return (
    <div className={styles.container}>
      <div className={styles.interviewBox}></div>
      <div className={styles.intervieweeBox}>
        <IntervieweeBox
          type={'refuseInterviewee'}
          profile={Profile}
          name={'혜성'}
          subject={'당신의 일본 여행 경험을 공유해 주세요'}
          job={'백엔드 개발자'}
          ways={['화상통화', '전화', '30분']}
        />
        <IntervieweeBox
          type={'refuseInterviewee'}
          profile={Profile}
          name={'혜성'}
          subject={'당신의 일본 여행 경험을 공유해 주세요'}
          job={'백엔드 개발자'}
          ways={['화상통화', '전화', '30분']}
        />
        <IntervieweeBox
          type={'refuseInterviewee'}
          profile={Profile}
          name={'혜성'}
          subject={'당신의 일본 여행 경험을 공유해 주세요'}
          job={'백엔드 개발자'}
          ways={['화상통화', '전화', '30분']}
        />
        <IntervieweeBox
          type={'refuseInterviewee'}
          profile={Profile}
          name={'혜성'}
          subject={'당신의 일본 여행 경험을 공유해 주세요'}
          job={'백엔드 개발자'}
          ways={['화상통화', '전화', '30분']}
        />
        <IntervieweeBox
          type={'refuseInterviewee'}
          profile={Profile}
          name={'혜성'}
          subject={'당신의 일본 여행 경험을 공유해 주세요'}
          job={'백엔드 개발자'}
          ways={['화상통화', '전화', '30분']}
        />
      </div>
    </div>
  );
}
