import { useState } from 'react';
import { Calendar, DateLocalizer, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'; //시간관리 라이브러리
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from '../../styles/founder/calendar.module.css';
import Toolbar from '../../components/founder/calendar/ToolBar';
import MonthHeader from '../../components/founder/calendar/MonthHeader';
import DateCell from '../../components/founder/calendar/DateCell';
import DateHeader from '../../components/founder/calendar/DateHeader';

export default function CalendarPage() {
  const localizer = momentLocalizer(moment); //현재 시간
  const allViews = ['month']; //선택 가능한 캘린더 종류
  const [events, setEvents] = useState([]); //조회한 스케줄 담을 state

  const CalendarData = events?.map((data) => ({
    start: new Date(data.start),
    end: new Date(data.end),
    title: data.title,
    calendarType: data.calendarType,
  }));

  return (
    <div className={styles.container}>
      <div className={styles.title}>인터뷰 캘린더</div>
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
        components={{
          toolbar: Toolbar,
          dateCellWrapper: DateCell,
          month: {
            header: MonthHeader,
            dateHeader: DateHeader,
          },
        }}
        className={styles.calendarWrapper}
      />
    </div>
  );
}
