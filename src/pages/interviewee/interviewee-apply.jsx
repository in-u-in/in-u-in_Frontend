import styles from '../../styles/interviewee/intervieweeApply.module.css';
import ProfileSkeletonImage from '../../assets/skeletonImage/profileCardSkeletonImage.png';
import { Chip } from '../founder/founder-apply';

const IntervieweeApply = () => {
  return (
    <>
      <section className={styles.Headerbar}></section>
      <div className={styles.RootContainer}>
        <section className={styles.EmptyContainer}></section>
        <div className={styles.Container}>
          <div className={styles.TitleContainer}>
            <span className={styles.Title}>
              당신의 베트남 여행을 공유해 주세요
            </span>
            <div className={styles.ContentContainer}>
              <div className={styles.ChipImageContainer}>
                <img className={styles.Image} src={ProfileSkeletonImage} />
                <div className={styles.ChipContainer}>
                  <Chip content={'40분'} />
                  <Chip content={'12000원'} />
                  <Chip content={'대면선호'} />
                  <Chip content={'플랫폼 내 포인트 추가 보상'} />
                </div>
              </div>
              <div className={styles.MainContentContainer}>
                <span className={styles.Maintitle}>
                  어떤 인터뷰를 하실 것인가요?
                </span>
                <span className={styles.MainContent}>
                  안녕하세요, 저희는 해외 여행 교통 수단 XXX 솔루션 플랫폼
                  사업을 하고 있는 야자입니다. 현재 베트남 지역 서비스 고도화를
                  위해 베트남 여행을 1회 이상 다녀오신 분들에게 여행 경험 중
                  타지 교통수단과 관련된 경험에 대해 물어보려고 합니다.
                </span>
                <span className={styles.Maintitle}>
                  어떤 인터뷰를 하실 것인가요?
                </span>
                <span className={styles.MainContent}>
                  안녕하세요, 저희는 해외 여행 교통 수단 XXX 솔루션 플랫폼
                  사업을 하고 있는 야자입니다. 현재 베트남 지역 서비스 고도화를
                  위해 베트남 여행을 1회 이상 다녀오신 분들에게 여행 경험 중
                  타지 교통수단과 관련된 경험에 대해 물어보려고 합니다.
                </span>
                <span className={styles.Maintitle}>
                  어떤 인터뷰를 하실 것인가요?
                </span>
                <span className={styles.MainContent}>
                  안녕하세요, 저희는 해외 여행 교통 수단 XXX 솔루션 플랫폼
                  사업을 하고 있는 야자입니다. 현재 베트남 지역 서비스 고도화를
                  위해 베트남 여행을 1회 이상 다녀오신 분들에게 여행 경험 중
                  타지 교통수단과 관련된 경험에 대해 물어보려고 합니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default IntervieweeApply;
