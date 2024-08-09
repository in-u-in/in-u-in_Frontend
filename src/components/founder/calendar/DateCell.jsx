import styles from '../../../styles/founder/calendar.module.css';

export default function DateCell({ value }) {
  const isToday = (date) => {
    const today = new Date();

    return (
      date.getDate() == today.getDate() &&
      date.getMonth() == today.getMonth() &&
      date.getFullYear() == today.getFullYear()
    );
  };

  return (
    <div
      className={`${styles.dateContainer} ${isToday(value) ? styles.today : styles.nToday}`}
    ></div>
  );
}
