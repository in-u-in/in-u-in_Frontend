import styles from '../../../styles/founder/calendar.module.css';

export default function MonthHeader({ label }) {
  const Days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const compare = (label) => {
    if (label == 'Sun') {
      return Days[0];
    }
    if (label == 'Mon') {
      return Days[1];
    }
    if (label == 'Tue') {
      return Days[2];
    }
    if (label == 'Wed') {
      return Days[3];
    }
    if (label == 'Thu') {
      return Days[4];
    }
    if (label == 'Fri') {
      return Days[5];
    }
    if (label == 'Sat') {
      return Days[6];
    }
  };
  return <div className={styles.monthHeaderContainer}>{compare(label)}</div>;
}
