import React, { useState } from 'react';
import '../../../styles/founder/ApplyCalendar.module.css';

const ApplyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 7, 1)); // 2024년 8월로 설정 (월은 0부터 시작)

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<td key={`empty-${i}`}></td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(<td key={day}>{day}</td>);
    }

    return days;
  };

  const renderCalendar = () => {
    const days = renderDays();
    const rows = [];
    let cells = [];

    days.forEach((day, index) => {
      if (index % 7 !== 0 || index === 0) {
        cells.push(day);
      } else {
        rows.push(<tr key={index}>{cells}</tr>);
        cells = [];
        cells.push(day);
      }
    });

    rows.push(<tr key={days.length}>{cells}</tr>);

    return rows;
  };

  return (
    <div className='calendar-container'>
      <div className='calendar-header'>
        <button onClick={handlePrevMonth}>{'<'}</button>
        <span>
          {currentDate.getFullYear()}.
          {String(currentDate.getMonth() + 1).padStart(2, '0')}
        </span>
        <button onClick={handleNextMonth}>{'>'}</button>
      </div>
      <table className='calendar-table'>
        <thead>
          <tr>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
            <th>일</th>
          </tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </table>
    </div>
  );
};

export default ApplyCalendar;
