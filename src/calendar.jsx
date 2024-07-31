import { useState } from 'react';
import { Calendar, DateLocalizer, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'; //시간관리 라이브러리
import styles from '../src/styles/calendar.module.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function CalendarPage() {
  const localizer = momentLocalizer(moment); //현재 시간
  const allViews = ['month']; //선택 가능한 캘린더 종류
  //조회한 스케줄 담을 state
  const [events, setEvents] = useState([
    {
      id: '',
      start: '',
      end: '',
      title: '',
      calendarType: 0,
    },
  ]);
  const CalendarData = events?.map((data) => ({
    start: new Date(data.start),
    end: new Date(data.end),
    title: data.title,
    calendarType: data.calendarType,
  }));

  return (
    <div className={styles.Container}>
      <div className={styles.Title}>인터뷰 캘린더</div>
      <div className={styles.Calendar}>
        <Calendar
          selectable //날짜 드래그해서 영역지정 가능
          localizer={localizer}
          events={CalendarData}
          defaultView='month'
          views={allViews}
          defaultDate={new Date()}
          startAccessor='start'
          endAccessor='end'
          titleAccessor='title'
        />
      </div>
    </div>
  );
}
