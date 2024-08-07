import styles from '../../../styles/founder/calendar.module.css';
import Arrow from '../../../assets/icons/arrow.svg';
import { useState } from 'react';

//Calendar 헤더
export default function Toolbar(toolbar) {
  const { date } = toolbar;
  const [isMonth, setIsMonth] = useState(true);
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const enMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const handleYearChange = (e) => {
    const newDate = new Date(date);
    newDate.setFullYear(e.target.value);
    toolbar.onNavigate('DATE', newDate);
  };

  const handleMonthChange = (e) => {
    const newDate = new Date(date);
    newDate.setMonth(e.target.value);
    toolbar.onNavigate('DATE', newDate);
  };

  const renderYearOptions = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 5; year <= currentYear + 5; year++) {
      years.push(
        <li
          key={year}
          value={year}
          className={styles.option}
          onClick={handleYearChange}
        >
          {year}
        </li>
      );
    }
    return years;
  };

  const renderMonthOptions = () => {
    const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return months.map((month) => (
      <li
        key={month}
        value={month}
        className={styles.option}
        onClick={handleMonthChange}
      >
        {enMonths[month]}
      </li>
    ));
  };

  return (
    <div className={styles.toolbar}>
      <div
        className={styles.selectBox}
        style={{
          width: '80px',
          backgroundImage: `url(${Arrow})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '12px',
          backgroundPosition: '57px 10px',
        }}
        onClick={() => setIsYearOpen(!isYearOpen)}
      >
        {new Date(date).getFullYear()}
        {isYearOpen ? (
          <ul className={styles.optionBox} value={date.getFullYear()}>
            {renderYearOptions()}
          </ul>
        ) : (
          <></>
        )}
      </div>
      <div
        className={styles.selectBox}
        style={{
          width: '70px',
          backgroundImage: `url(${Arrow})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '12px',
          backgroundPosition: '47px 10px',
        }}
        onClick={() => setIsMonthOpen(!isMonthOpen)}
      >
        {enMonths[new Date(date).getMonth()]}
        {isMonthOpen ? (
          <ul className={styles.optionBox} value={date.getMonth()}>
            {renderMonthOptions()}
          </ul>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.checkBox}>
        <div
          className={
            isMonth
              ? `${styles.clickedMonth} ${styles.checkOption}`
              : `${styles.month} ${styles.checkOption}`
          }
          onClick={() => setIsMonth(true)}
        >
          Month
        </div>
        <div
          className={
            isMonth
              ? `${styles.year} ${styles.checkOption}`
              : `${styles.clickedYear} ${styles.checkOption}`
          }
          onClick={() => setIsMonth(false)}
        >
          Year
        </div>
      </div>
    </div>
  );
}
