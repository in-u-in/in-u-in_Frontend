import { Link } from 'react-router-dom';
import styles from '../../../styles/founder/manage-interview.module.css';
import moment from 'moment';

export default function InterviewBox({
  type,
  title,
  applicant,
  wating,
  deadline,
  image,
  time,
  cost,
  way,
  compensate,
  id,
}) {
  return (
    <Link
      to={`/manageInterview/manageInterviewee/${id}`}
      className={`${type == 'big' ? styles.bigInterviewBoxContainer : styles.interviewBoxContainer}`}
    >
      <div
        className={`${type == 'big' ? styles.bigInterviewBoxTitle : styles.interviewBoxTitle}`}
      >
        {title}
      </div>
      <div
        className={`${styles.first_details} ${type == 'big' ? styles.bigDetails : styles.details}`}
      >
        <div
          className={`${type == 'big' ? styles.big_first_detailBox : styles.first_detailBox}`}
        >{`현재까지 ${applicant}명 지원`}</div>

        <div
          className={`${type == 'big' ? styles.big_first_detailBox : styles.first_detailBox}`}
        >{`${wating}명 승인 대기`}</div>
        <div
          className={`${type == 'big' ? styles.big_first_detailBox : styles.first_detailBox}`}
        >
          {moment(deadline).format('YYYY.MM.DD~')}
        </div>
      </div>
      <img
        className={`${type == 'big' ? styles.bigImage : styles.image}`}
        src={image}
      />
      <div
        className={`${type == 'big' ? styles.big_second_details : styles.second_details} ${type == 'big' ? styles.bigDetails : styles.details}`}
      >
        <div
          className={`${type == 'big' ? styles.big_second_detailBox : styles.second_detailBox}`}
        >{`${time}분`}</div>
        <div
          className={`${type == 'big' ? styles.big_second_detailBox : styles.second_detailBox}`}
        >{`${cost}원`}</div>
        <div
          className={`${type == 'big' ? styles.big_second_detailBox : styles.second_detailBox}`}
        >{`${way} 선호`}</div>
        <div
          className={`${type == 'big' ? styles.big_second_detailBox : styles.second_detailBox}`}
        >
          {compensate}
        </div>
      </div>
    </Link>
  );
}
