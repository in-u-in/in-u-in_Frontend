import Header from '../../components/Header';
import styles from '../../styles/interviewee/intervieweeApplication.module.css';
import ProfileSkeletonImage from '../../assets/skeletonImage/profileCardSkeletonImage.png';
import useModal from '../../hooks/useModal';
import { useNavigate } from 'react-router-dom';
export const Chip = ({ content }) => {
  return (
    <div className={styles.ProfileChip}>
      <span className={styles.ProfileText}>{content}</span>
    </div>
  );
};
const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.content}>{children}</div>
        <button className={styles.closeButton} onClick={closeModal}>
          닫기
        </button>
      </div>
    </div>
  );
};

function IntervieweeApplicationpage() {
  const navigate = useNavigate(); // useNavigate를 이용해 navigate 정의
  const { isOpen, openModal, closeModal } = useModal();
  const handleCancle = () => {
    navigate('/intervieweeApply');
  };
  const handleApply = () => {
    openModal(); // 신청하기 버튼을 누르면 모달을 열기
  };
  return (
    <>
      <Header />
      <div className={styles.RootContainer}>
        <div className={styles.Column}>
          <span className={styles.ApplyTitle}>희망 인터뷰 조건 설정하기</span>
          <span className={styles.ApplyMaintitle}>
            보다 편한 인터뷰를 위해 인터뷰에 대한 추가 정보를 입력해 주세요.
          </span>
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
        </div>
        <div className={styles.Column}>
          <div className={styles.FormContainer}>
            <span className={styles.FormContainerTitle}>
              원하는 인터뷰 방법
            </span>
            <div className={styles.CheckboxContainer}>
              <input type='checkbox' id='face' name='face' />
              <label for='face' className={styles.Checkbox}>
                대면
              </label>
              <input type='checkbox' id='onlinemeet' name='onlinemeet' />
              <label for='onlinemeet' className={styles.Checkbox}>
                화상채팅
              </label>
              <input type='checkbox' id='call' name='call' />
              <label for='call' className={styles.Checkbox}>
                전화
              </label>
            </div>
          </div>
          <div className={styles.FormContainer2}>
            <span className={styles.FormContainerTitle}>
              희망인터뷰 소요시간
            </span>
            <div className={styles.Column}>
              <div className={styles.CheckboxContainer}>
                <input type='checkbox' id='less30' name='less30' />
                <label for='less30' className={styles.Checkbox}>
                  30분 미만
                </label>
                <input type='checkbox' id='less60' name='less60' />
                <label for='less60' className={styles.Checkbox}>
                  1시간 미만
                </label>
              </div>
              <div className={styles.CheckboxContainer}>
                <input type='checkbox' id='less180' name='less180' />
                <label for='less180' className={styles.Checkbox}>
                  3시간 미만
                </label>
                <input type='checkbox' id='noproblem' name='noproblem' />
                <label for='noproblem' className={styles.Checkbox}>
                  상관없음
                </label>
              </div>
            </div>
          </div>
          <div className={styles.FormContainer3}>
            <span className={styles.FormContainerTitle}>
              추가시간 보상 단가
            </span>
            <div className={styles.Column}>
              <div className={styles.CheckboxContainer}>
                <input type='checkbox' id='1000' name='1000' />
                <label for='1000' className={styles.Checkbox}>
                  1000원
                </label>
                <input type='checkbox' id='2000' name='2000' />
                <label for='2000' className={styles.Checkbox}>
                  2000원
                </label>
              </div>
              <div className={styles.CheckboxContainer}>
                <input type='checkbox' id='3000' name='3000' />
                <label for='3000' className={styles.Checkbox}>
                  3000원
                </label>
                <input type='checkbox' id='4000' name='4000' />
                <label for='4000' className={styles.Checkbox}>
                  4000원
                </label>
              </div>
            </div>
          </div>
          <div className={styles.Row}>
            <button className={styles.CancleButton} onClick={handleCancle}>
              취소
            </button>
            <button className={styles.RealApplyButton} onClick={handleApply}>
              신청하기
            </button>
          </div>
        </div>
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <h2>인터뷰 지원을 완료했습니다!</h2>
          <p>
            인터뷰 모집자가 인터뷰 수락 시 인터뷰 모집자로부터 이메일 또는 SNS로
            연락이 갈 예정입니다!
          </p>
          <p>인터뷰 완료 시, 등록하신 계좌로 인터뷰 대가가 지급될 것입니다.</p>
        </Modal>
      </div>
    </>
  );
}

export default IntervieweeApplicationpage;
