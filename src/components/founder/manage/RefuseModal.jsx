import styles from '../../../styles/founder/manage-interviewee.module.css';

export default function RefuseModal({ closeModal }) {
  return (
    <div className={styles.modalContainer} onClick={() => closeModal()}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        {/*이벤트 전파 막음 */}
        <div className={styles.question}>
          대표님께서 거절하신 인터뷰 참여자에게 인터뷰 참여 제안을 보냈습니다.
          <br />
          인터뷰 수락 시, 수락한 인터뷰 관리 화면에서 결제하실 수 있습니다.
        </div>
        <div className={styles.button} onClick={() => closeModal()}>
          확인
        </div>
      </div>
    </div>
  );
}
