import styles from '../../../styles/founder/manage-interview.module.css';
import moment from 'moment';

export default function InterviewBox({
  title,
  applicant,
  wating,
  deadline,
  image,
  time,
  cost,
  way,
  compensate,
}) {
  return (
    <div className={styles.interviewBoxContainer}>
      <div className={styles.topBox} />
      <div className={styles.interviewBoxTitle}>{title}</div>
      <div className={`${styles.details} ${styles.first_details}`}>
        <div
          className={styles.first_detailBox}
        >{`현재까지 ${applicant}명 지원`}</div>

        <div className={styles.first_detailBox}>{`${wating}명 승인 대기`}</div>
        <div className={styles.first_detailBox}>
          {moment(deadline).format('YYYY.MM.DD~')}
        </div>
      </div>
      <img className={styles.image} src={image} />
      <div className={`${styles.details} ${styles.second_details}`}>
        <div className={styles.second_detailBox}>{`${time}분`}</div>
        <div className={styles.second_detailBox}>{`${cost}원`}</div>
        <div className={styles.second_detailBox}>{`${way} 선호`}</div>
        <div className={styles.second_detailBox}>{compensate}</div>
      </div>
    </div>
  );
}
