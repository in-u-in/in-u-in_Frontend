import styles from '../../../styles/founder/manage-interviewee.module.css';

export default function AcceptModal({ closeModal }) {
  return (
    <div className={styles.modalContainer} onClick={() => closeModal()}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        {/*이벤트 전파 막음 */}
        <div className={styles.question}>
          인터뷰 완료 확인 버튼을 누를 시, 결제하신 대금이 인터뷰 참여자에게
          송금됩니다.
          <br />
          인터뷰 완료하신 것이 맞으신 경우에만 확인 버튼을 눌러주세요.
        </div>
        <div className={styles.button} onClick={() => closeModal()}>
          확인
        </div>
      </div>
    </div>
  );
}
