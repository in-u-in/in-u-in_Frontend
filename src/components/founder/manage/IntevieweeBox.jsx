import styles from '../../../styles/founder/manage.module.css';

export default function IntervieweeBox({
  type,
  profile,
  name,
  subject,
  job,
  ways,
  openModal,
}) {
  return (
    <div className={styles.intervieweeBoxContainer}>
      <div className={styles.gridBox}>
        <div className={styles.nameFrame}>
          <img className={styles.profile} src={profile} />
          {name}
        </div>
        <div className={styles.frame}>{subject}</div>
        <div className={styles.frame}>{job}</div>
        <div className={styles.wayFrame}>
          {ways.map((way, idx) => (
            <div key={idx} className={styles.way}>
              {way}
            </div>
          ))}
        </div>
        <div className={styles.frame}>
          <div className={styles.button} onClick={() => openModal()}>
            {type == 'refuseInterviewee' ? '재신청하기' : '인터뷰 확인 완료'}
          </div>
        </div>
      </div>
    </div>
  );
}
