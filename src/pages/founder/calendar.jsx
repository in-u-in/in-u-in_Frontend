import { useState } from 'react';
import { Calendar, DateLocalizer, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'; //시간관리 라이브러리
import styles from '../../styles/founder/calendar.module.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Toolbar from '../../components/founder/calendar/ToolBar';
import useModal from '../../hooks/useModal';
import Modal from '../../components/founder/calendar/Modal';

export default function CalendarPage() {
  const localizer = momentLocalizer(moment); //현재 시간
  const allViews = ['month']; //선택 가능한 캘린더 종류
  const { isOpen, closeModal, openModal } = useModal();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedEvent, setSelectedEvent] = useState([]);
  //조회한 스케줄 담을 state
  const [events, setEvents] = useState([
    {
      id: '',
      start: '',
      end: '',
      title: '',
      start: '2024-08-01T12:00:00',
      end: '2024-08-05T12:00:00',
      title: 'schedule1',
      calendarType: 0,
    },
    {
      start: '2024-08-01T12:00:00',
      end: '2024-08-05T12:00:00',
      title: 'schedule2',
      calendarType: 0,
    },
    {
      start: '2024-08-01T12:00:00',
      end: '2024-08-05T12:00:00',
      title: 'schedule3',
      calendarType: 0,
    },
    {
      start: '2024-08-01T12:00:00',
      end: '2024-08-05T12:00:00',
      title: 'schedule4',
      calendarType: 0,
    },
    {
      start: '2024-08-01T12:00:00',
      end: '2024-08-05T12:00:00',
      title: 'schedule5',
      calendarType: 0,
    },
    {
      start: '2024-08-10T00:00:00',
      end: '2024-08-10T12:00:00',
      title: 'schedule3',
      calendarType: 0,
    },
  ]);
  const CalendarData = events?.map((data) => ({
    start: new Date(data.start),
    end: new Date(data.end),
    title: data.title,
    calendarType: data.calendarType,
  }));

  const handleSelectSlot = ({ start }) => {
    const selectedDate = moment(start);
    const eventsOnSelectedDate = events.filter((event) => {
      //event 체크
      const startTime = moment(event.start).startOf('day'); //00:00:00로
      const endTime = moment(event.end).endOf('day'); //23:59:49로
      return selectedDate.isBetween(startTime, endTime);
    });
    setSelectedDate(selectedDate);
    setSelectedEvent(eventsOnSelectedDate);
    onclick(openModal());
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Title}>인터뷰 캘린더</div>
      <div className={styles.Calendars}>
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
            onSelectSlot={handleSelectSlot}
            components={{
              toolbar: Toolbar,
            }}
          />
        </div>
        {isOpen ? <Modal /> : <></>}
      </div>
    </div>
  );
}
