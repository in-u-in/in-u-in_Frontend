import styles from '../../../styles/founder/calendar.module.css';

export default function Modal() {
  return (
    <div className={styles.ModalContainer}>
      {date}
      {event}
    </div>
  );
}
