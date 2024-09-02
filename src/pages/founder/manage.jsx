import styles from '../../styles/founder/manage.module.css';
import IntervieweeBox from '../../components/founder/manage/IntevieweeBox';
import InterviewBox from '../../components/founder/manage-interview/InterviewBox';
import useModal from '../../hooks/useModal';
import RefuseModal from '../../components/founder/manage/RefuseModal';
import AcceptModal from '../../components/founder/manage/AcceptModal';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MoonLoader } from 'react-spinners';
import { RiArrowUpWideLine } from 'react-icons/ri';
import { RiArrowDownWideLine } from 'react-icons/ri';
import 'swiper/css';

export default function ManagePage() {
  const { isOpen, openModal, closeModal } = useModal();
  const [data, setData] = useState({ interview: 'loading' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [acceptedIntervieweeList, setAcceptedIntervieweeList] = useState([]);
  const [nAcceptedIntervieweeList, setNAcceptedIntervieweeList] = useState([]);
  const [swiperDirection, setSwiperDirection] = useState(null);
  const [isAccept, setIsAccept] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5173/data/interview.json'
        );
        setData(response.data);
        setAcceptedIntervieweeList(
          response.data.interview[0]?.interviewee?.filter(
            (item) => item.isAccept == true
          )
        );
        setNAcceptedIntervieweeList(
          response.data.interview[0]?.interviewee?.filter(
            (item) => item.isAccept == false
          )
        );
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    setAcceptedIntervieweeList(
      data?.interview[activeIndex]?.interviewee?.filter(
        (item) => item.isAccept == true
      )
    );
    setNAcceptedIntervieweeList(
      data?.interview[activeIndex]?.interviewee?.filter(
        (item) => item.isAccept == false
      )
    );
  }, [activeIndex]);

  const handlePrev = () => {
    swiperDirection.slidePrev();
  };

  const handleNext = () => {
    swiperDirection.slideNext();
  };

  return (
    <>
      {data?.interview == null ? (
        <div className={styles.nullContainer}>
          인터뷰가 없습니다.
          <br /> 인터뷰를 추가해보세요!
        </div>
      ) : (
        <>
          {data.interview == 'loading' ? (
            <div className={styles.nullContainer}>
              <MoonLoader size={40} color='#2a4ecd' speedMultiplier={1} />
            </div>
          ) : (
            <div className={styles.container}>
              <div className={styles.buttonBox}>
                <div
                  className={`${isAccept ? styles.clickedLeftBtn : styles.leftBtn} ${styles.buttons}`}
                  onClick={() => setIsAccept(true)}
                >
                  수락한 인터뷰 지원자
                </div>
                <div
                  className={`${isAccept ? styles.rightBtn : styles.clickedRightBtn} ${styles.buttons}`}
                  onClick={() => setIsAccept(false)}
                >
                  거절한 인터뷰 지원자
                </div>
              </div>
              <div className={styles.subContainer}>
                <div className={styles.InterviewBox}>
                  <div className={styles.prevDirection} onClick={handlePrev}>
                    <RiArrowUpWideLine size={50} color='#D9D9D9' />
                  </div>
                  <Swiper
                    modules={[Mousewheel]}
                    spaceBetween={10} //아이템 사이 간격
                    slidesPerView={1} //보여질 갯수
                    mousewheel={{
                      enabled: true,
                      forceToAxis: true,
                      sensitivity: 5,
                      thresholdDelta: 1, //한 번 휠에 몇 개 이동
                    }} //축에 맞게 스크롤 적용
                    scrollbar={{
                      draggable: true,
                    }}
                    direction='vertical' //슬라이딩 방향
                    slidesPerGroup={1} //한번에 슬라이딩 될 갯수
                    slidesOffsetBefore={0} //슬라이드 시작 부분 여백
                    onSlideChange={(swiper) => {
                      setActiveIndex(swiper.realIndex);
                      setSwiperDirection(swiper);
                    }} //onSlideChange: 슬라이드가 변경될 때마다 실행되는 함수/ realIndex: 활성화된 슬라이드 index
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
                  <div className={styles.nextDirection} onClick={handleNext}>
                    <RiArrowDownWideLine size={50} color='#D9D9D9' />
                  </div>
                </div>
                <div className={styles.intervieweeBox}>
                  {isAccept ? (
                    acceptedIntervieweeList.length == 0 ? (
                      <div className={styles.nullIntervieweeBox}>
                        허가한 인터뷰 지원자가 없습니다
                      </div>
                    ) : (
                      acceptedIntervieweeList.map((item, idx) => (
                        <IntervieweeBox
                          key={idx}
                          type={'acceptedInterviewee'}
                          profile={item.profile}
                          name={item.name}
                          subject={item.subject}
                          job={item.job}
                          ways={item.ways}
                          openModal={openModal}
                        />
                      ))
                    )
                  ) : nAcceptedIntervieweeList.length == 0 ? (
                    <div className={styles.nullIntervieweeBox}>
                      거절한 인터뷰 지원자가 없습니다
                    </div>
                  ) : (
                    nAcceptedIntervieweeList.map((item, idx) => (
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
                    ))
                  )}
                </div>
                {isAccept
                  ? isOpen && <AcceptModal closeModal={closeModal} />
                  : isOpen && <RefuseModal closeModal={closeModal} />}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
