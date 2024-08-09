import styles from '../../styles/founder/founder-apply.module.css';

import ProfileSkeletonImage from '../../assets/skeletonImage/profileCardSkeletonImage.png';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Chip = ({ content }) => {
  return (
    <div className={styles.ProfileChip}>
      <span className={styles.ProfileText}>{content}</span>
    </div>
  );
};

const FounderApplyPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [duration, setDuration] = useState(40);
  const [text, setText] = useState('');

  const handleDurationChange = (e) => {
    const value = Math.round(e.target.value / 10) * 10;
    setDuration(value);
  };
  const handleTextChange = (e) => {
    setText(e.target.value); // 입력된 값을 text 상태에 업데이트
  };

  return (
    <div className={styles.RootContainer}>
      <section className={styles.TitleSectionLayout}>
        <header className={styles.TitleSectionHeaderTypo}>결제하기</header>
        <div className={styles.TitleSectionDescriptionTypo}>
          선택하신 프로필이 맞나요?
        </div>
      </section>
      <section className={styles.ContentSectionContainer}>
        <div className={styles.CardListContainer}>
          <div className={styles.ProfileContainer}>
            <img className={styles.ProfileImage} src={ProfileSkeletonImage} />
            <div className={styles.ProfileDescriptions}>
              <span className={styles.ProfileName}>김지민</span>
              <span className={styles.ProfileJobName}>플로리스트</span>
              <span className={styles.ProfileText}>플로리스트 자격증 보유</span>
              <span className={styles.ProfileText}>
                서울 양재 꽃집 10년째 운영
              </span>
              <div className={styles.ProfileChipContainer}>
                <Chip content={'40분'} />
                <Chip content={'2000원'} />
              </div>
              <span className={styles.ProfileText}>플로리스트 자격증 보유</span>
              <span className={styles.ProfileText}>
                서울 양재 꽃집 10년째 운영
              </span>
            </div>
          </div>
        </div>
        <div className={styles.CardListContainer}>
          <div className={styles.FormCardContainer}>
            <span className={styles.FormCardTitle}>날짜 및 시간 선택</span>
            <div className={styles.FormCardBox}>
              <div className={styles.FormCardContent}>
                <span className={styles.FormCardFont}>인터뷰 날짜</span>
                <DatePicker
                  id='date'
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText='Select date'
                  dateFormat='yyyy/MM/dd'
                  showIcon
                />
              </div>
              <div className={styles.FormCardContent}>
                <span className={styles.FormCardFont}>인터뷰 소요시간</span>
                <input
                  type='number'
                  id='time'
                  value={duration}
                  onChange={handleDurationChange}
                  min='40'
                  max='120'
                  step='10'
                  className={styles.Usetime}
                />
              </div>
            </div>
          </div>
          <div className={styles.FormCardContainer}>
            <span className={styles.FormCardTitle}>요금 세부정보</span>
            <div className={styles.FormCalBox}>
              <span className={styles.CalculateFont}>
                인터뷰 기본 시간(40분)
              </span>
              <span>10000원</span>
            </div>
            <div className={styles.FormCalBox}>
              <span className={styles.CalculateFont}>
                인터뷰 추가시간(10분/2000원)
              </span>
              <span>{(duration - 40) * 200}원</span>
            </div>
            <div className={styles.FormCalBox}>
              <span className={styles.CalculateFont}>총 합계</span>
              <span>{10000 + (duration - 40) * 200}원</span>
            </div>
          </div>
          <div className={styles.FormCardContainer}>
            <span className={styles.FormCardTitle}>요청사항</span>
            <textarea
              id='text-input'
              value={text}
              onChange={handleTextChange}
              placeholder='인터뷰 참여자에게 전달하고 싶은 요청사항 또는 정보를 작성해주세요. ex) 대면 만남 장소, 인터뷰 가능 시간대, 화상채팅 주소 등'
              className={styles.textSize}
            />
          </div>
          <div className={styles.FormCardRefundContainer}>
            <span className={styles.FormCardRefundTitle}>환불정책</span>
            <div className={styles.RefundContent}>
              <input type='checkbox' id='refund' name='fefund' required />
              <label for='refund' className={styles.RefundFont}>
                해당 환불 정책에 동의합니다.
              </label>
            </div>
          </div>
          <button className={styles.PaymentButton}>결제</button>
        </div>
      </section>
    </div>
  );
};

export default FounderApplyPage;
