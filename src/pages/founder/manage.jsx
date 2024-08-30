import styles from '../../styles/founder/manage.module.css';
import IntervieweeBox from '../../components/founder/manage/IntevieweeBox';
import InterviewBox from '../../components/founder/manage-interview/InterviewBox';
import Profile from '../../assets/icons/tourism.svg';
import useModal from '../../hooks/useModal';
import RefuseModal from '../../components/founder/manage/RefuseModal';
import AcceptModal from '../../components/founder/manage/AcceptModal';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ManagePage() {
  const { isOpen, openModal, closeModal } = useModal();
  const [data, setData] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [intervieweeList, setIntervieweeList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5173/data/interview.json'
        );
        setData(response.data);
        setIntervieweeList(response.data.interview[0].interviewee);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    setIntervieweeList(data?.interview[activeIndex].interviewee);
  }, [activeIndex]);

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Mousewheel]}
        spaceBetween={0} //아이템 사이 간격
        slidesPerView={1} //보여질 갯수
        mousewheel={{
          enabled: true,
          forceToAxis: true,
          sensitivity: 5,
          thresholdDelta: 1, //한 번 휠에 몇 개 이동
        }} //축에 맞게 스크롤 적용
        direction='vertical' //슬라이딩 방향
        slidesPerGroup={1} //한번에 슬라이딩 될 갯수
        slidesOffsetBefore={18.08549} //슬라이드 시작 부분 여백
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} //realIndex: 활성화된 슬라이드 index
        scrollbar={{
          draggable: true,
        }}
        loop={true}
        roundLengths={true} //슬라이드 너비 및 높이 값 반올림_흐릿한 텍스트, 이미지 방지 위해
        className={styles.swiper}
      >
        <div className={styles.swiperContainer}>
          {data?.interview?.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <InterviewBox
                  type={'big'}
                  title={item.title}
                  applicant={item.applicant}
                  wating={item.wating}
                  deadline={item.deadline}
                  image={item.image}
                  time={item.time}
                  cost={item.cost}
                  way={item.way}
                  compensate={item.compensate}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
      <div className={styles.intervieweeBox}>
        {intervieweeList?.map((item, idx) => (
          <IntervieweeBox
            key={idx}
            type={'refuseInterviewee'}
            profile={item.profile}
            name={item.name}
            subject={item.subject}
            job={item.job}
            ways={item.ways}
            openModal={openModal}
          />
        ))}
      </div>
      {isOpen ? <RefuseModal closeModal={closeModal} /> : <></>}
    </div>
  );
}
