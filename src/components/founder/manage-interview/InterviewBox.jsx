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
      className={`${type == 'big' ? styles.bigInterviewBoxContainer : type == 'mid' ? styles.interviewBoxContainer : styles.smallInterviewBoxContainer}`}
    >
      <div
        className={`${type == 'big' ? styles.bigTopBox : type == 'mid' ? styles.topBox : styles.smallTopBox}`}
      />
      <div
        className={`${type == 'big' ? styles.bigInterviewBoxTitle : type == 'mid' ? styles.interviewBoxTitle : styles.smallInterviewBoxTitle}`}
      >
        {title}
      </div>
      <div
        className={`${styles.first_details} ${type == 'big' ? styles.bigDetails : type == 'mid' ? styles.details : styles.smallDetails}`}
      >
        <div
          className={`${type == 'big' ? styles.big_first_detailBox : type == 'mid' ? styles.first_detailBox : styles.small_first_detailBox}`}
        >{`현재까지 ${applicant}명 지원`}</div>

        <div
          className={`${type == 'big' ? styles.big_first_detailBox : type == 'mid' ? styles.first_detailBox : styles.small_first_detailBox}`}
        >{`${wating}명 승인 대기`}</div>
        <div
          className={`${type == 'big' ? styles.big_first_detailBox : type == 'mid' ? styles.first_detailBox : styles.small_first_detailBox}`}
        >
          {moment(deadline).format('YYYY.MM.DD~')}
        </div>
      </div>
      <img
        className={`${type == 'big' ? styles.bigImage : type == 'mid' ? styles.image : styles.smallImage}`}
        src={image}
      />
      <div
        className={`${styles.second_details} ${type == 'big' ? styles.bigDetails : type == 'mid' ? styles.details : styles.smallDetails}`}
      >
        <div
          className={`${type == 'big' ? styles.big_second_detailBox : type == 'mid' ? styles.second_detailBox : styles.small_second_detailBox}`}
        >{`${time}분`}</div>
        <div
          className={`${type == 'big' ? styles.big_second_detailBox : type == 'mid' ? styles.second_detailBox : styles.small_second_detailBox}`}
        >{`${cost}원`}</div>
        <div
          className={`${type == 'big' ? styles.big_second_detailBox : type == 'mid' ? styles.second_detailBox : styles.small_second_detailBox}`}
        >{`${way} 선호`}</div>
        <div
          className={`${type == 'big' ? styles.big_second_detailBox : type == 'mid' ? styles.second_detailBox : styles.small_second_detailBox}`}
        >
          {compensate}
        </div>
      </div>
    </Link>
  );
}
