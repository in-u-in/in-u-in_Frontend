import styles from '../../styles/interviewee/intervieweeApply.module.css';
import ProfileSkeletonImage from '../../assets/skeletonImage/profileCardSkeletonImage.png';
import { useNavigate } from 'react-router-dom';
import { Chip } from '../founder/founder-apply';
const IntervieweeApplyPage = () => {
  const navigate = useNavigate(); // useNavigate를 이용해 navigate 정의
  const handleApplication = () => {
    navigate('/intervieweeApplication');
  };
  return (
    <>
      <div className={styles.Root}>
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
                    사업을 하고 있는 야자입니다. 현재 베트남 지역 서비스
                    고도화를 위해 베트남 여행을 1회 이상 다녀오신 분들에게 여행
                    경험 중 타지 교통수단과 관련된 경험에 대해 물어보려고
                    합니다.
                  </span>
                  <span className={styles.Maintitle}>
                    어떤 인터뷰 방식을 선호하시나요?
                  </span>
                  <span className={styles.MainContent}>
                    대면을 가장 선호합니다{' '}
                  </span>
                  <span className={styles.MainContent}>
                    야자 서울 사무실에서 진행해요. 장소는 편하게 조율
                    가능합니다.
                  </span>
                  <span className={styles.Maintitle}>
                    이런 분이시면 좋겠어요
                  </span>
                  <span className={styles.MainContent}>
                    자신의 여행 과정을 블로그, 네이버 카페, SNS 계정, 유튜브에
                    기록하시는 분
                  </span>
                  <span className={styles.MainContent}>
                    1년에 한 번은 꼭 여행 가시는 분여행에 관심 많으신 분
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.ApplyButton} onClick={handleApplication}>
            인터뷰 지원하기
          </button>
        </div>
      </div>
    </>
  );
};
export default IntervieweeApplyPage;
