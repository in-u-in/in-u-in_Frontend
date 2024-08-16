import styles from '../../../styles/founder/manage-interviewee.module.css';

export default function Modal({ closeModal }) {
  return (
    <div className={styles.modalContainer} onClick={() => closeModal()}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        {/*이벤트 전파 막음 */}
        <div className={styles.question}>
          인터뷰를 정말로 거절하시겠습니까? <br />
          거절할 시에, 지원자에게 다시 인터뷰 제안 이후 수락을 받아야 인터뷰
          진행이 가능합니다.
        </div>
        <div className={styles.button} onClick={() => closeModal()}>
          인터뷰 거절하기
        </div>
      </div>
    </div>
  );
}
