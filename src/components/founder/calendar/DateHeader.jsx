import styles from '../../../styles/founder/calendar.module.css';

export default function CustomHeader({ date, label }) {
  const isToday = (date) => {
    const today = new Date();
    return (
      today.getDate() == date.getDate() &&
      today.getMonth() == date.getMonth() &&
      today.getFullYear() == date.getFullYear()
    );
  };

  return (
    <div
      className={`${styles.headerContainer} ${isToday(date) ? styles.todayHeader : ''}`}
    >
      {label}
    </div>
  );
}
