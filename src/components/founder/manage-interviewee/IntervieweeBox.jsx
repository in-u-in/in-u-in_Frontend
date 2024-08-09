import styles from '../../../styles/founder/manage-interviewee.module.css';

export default function IntervieweeBox({
  profile,
  name,
  subject,
  job,
  ways,
  timeRange,
  minCost,
  maxCost,
  state,
  openModal,
}) {
  const maxRange = 3000;
  const minRange = 1000;

  const right = (maxCost) => {
    const ratio = (maxCost - minRange) / (maxRange - minRange);
    const percent = (1 - ratio) * 100;
    return percent;
  };

  const left = (minCost) => {
    const ratio = (minCost - minRange) / (maxRange - minRange);
    const percent = ratio * 100;
    return percent;
  };
  return (
    <div className={styles.intervieweeBoxContainer}>
      <div className={styles.gridBox}>
        <div className={styles.nameFrame}>
          <img className={styles.profile} src={profile} />
          {name}
        </div>
        <div className={styles.frame}>{subject}</div>
        <div className={styles.frame}>{job}</div>
        <div className={styles.frame}>
          {ways.map((way, idx) => (
            <div key={idx} className={styles.way}>
              {way}
            </div>
          ))}
        </div>
        <div className={styles.timeFrame}>
          <div className={styles.timeRange}>{timeRange}</div>
        </div>
        <div className={styles.sliderFrame}>
          <div className={styles.slider}>
            <div className={styles.track}></div>
            <div
              className={styles.range}
              style={{ left: `${left(minCost)}%`, right: `${right(maxCost)}%` }}
            ></div>
            <div
              className={`${styles.thumb} ${styles.thumbLeft}`}
              style={{ left: `${left(minCost)}%` }}
            ></div>
            <div
              className={`${styles.thumb} ${styles.thumbRight}`}
              style={{ right: `${right(maxCost)}%` }}
            ></div>
            <div
              className={`${styles.sliderText} ${styles.textLeft}`}
              style={{ left: `${left(minCost)}%` }}
            >
              {`${minCost}원`}
            </div>
            <div
              className={`${styles.sliderText} ${styles.textRight}`}
              style={{ right: `${right(maxCost)}%` }}
            >
              {`${maxCost}원`}
            </div>
          </div>
        </div>
        <div className={styles.frame}>{state}</div>
        <div className={styles.frame}>
          <div className={styles.workBox}>진행</div>
          <div
            className={`${styles.workBox} ${styles.refuse}`}
            onClick={() => openModal()}
          >
            거절
          </div>
        </div>
      </div>
    </div>
  );
}
