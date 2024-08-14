import styles from '../../styles/founder/manage.module.css';
import IntervieweeBox from '../../components/founder/manage/IntevieweeBox';
import Profile from '../../assets/icons/tourism.svg';
import useModal from '../../hooks/useModal';
import RefuseModal from '../../components/founder/manage/RefuseModal';
import AcceptModal from '../../components/founder/manage/AcceptModal';

export default function ManagePage() {
  const { isOpen, openModal, closeModal } = useModal();

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
          openModal={openModal}
        />
        <IntervieweeBox
          type={'refuseInterviewee'}
          profile={Profile}
          name={'혜성'}
          subject={'당신의 일본 여행 경험을 공유해 주세요'}
          job={'백엔드 개발자'}
          ways={['화상통화', '전화', '30분']}
          openModal={openModal}
        />
        <IntervieweeBox
          type={'refuseInterviewee'}
          profile={Profile}
          name={'혜성'}
          subject={'당신의 일본 여행 경험을 공유해 주세요'}
          job={'백엔드 개발자'}
          ways={['화상통화', '전화', '30분']}
          openModal={openModal}
        />
        <IntervieweeBox
          type={'refuseInterviewee'}
          profile={Profile}
          name={'혜성'}
          subject={'당신의 일본 여행 경험을 공유해 주세요'}
          job={'백엔드 개발자'}
          ways={['화상통화', '전화', '30분']}
          openModal={openModal}
        />
        <IntervieweeBox
          type={'refuseInterviewee'}
          profile={Profile}
          name={'혜성'}
          subject={'당신의 일본 여행 경험을 공유해 주세요'}
          job={'백엔드 개발자'}
          ways={['화상통화', '전화', '30분']}
          openModal={openModal}
        />
      </div>
      {isOpen ? <RefuseModal closeModal={closeModal} /> : <></>}
    </div>
  );
}
