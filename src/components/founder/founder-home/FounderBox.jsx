import React, { useState, useEffect } from 'react';
import styles from '../../../styles/founder/FounderBox.module.css';
import tourism from '../../../assets/icons/tourism.svg';
import eyeIcon from '../../../assets/icons/eyeIcon.svg';

export default function FounderBox({ founderId }) {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const storedViewCount = localStorage.getItem(`viewCount_${founderId}`);
    if (storedViewCount) {
      setViewCount(parseInt(storedViewCount, 10)); // 정수로 변환
    }
  }, [founderId]);

  const handleProfileClick = () => {
    const newViewCount = viewCount + 1;
    setViewCount(newViewCount);
    localStorage.setItem(`viewCount_${profileId}`, newViewCount);
  };

  return (
    <div className={styles.IntervieweeBoxWrap} onClick={handleProfileClick}>
      <div className={styles.FounderImg}>
        <img src={tourism} alt='Tourism' />
        <div className={styles.TimeWrap}>
          <div className={styles.DefaultTime}>40분</div>
          <div className={styles.SmallBox} />
        </div>
      </div>
      <div className={styles.InfoContainer}>
        <div className={styles.InfoWrap}>
          <div className={styles.SmallFounderImg}>
            <img src={tourism} alt='Tourism' />
          </div>
          <div className={styles.FounderName}>
            월드투어리즘
            <div className={styles.ViewCount}>
              <img src={eyeIcon} alt='EyeIcon' /> {viewCount}
            </div>
          </div>
        </div>
        <div className={styles.FounderInfo}>
          베트남 여행 경험자의 이야기를 들려주세요
        </div>
      </div>
    </div>
  );
}
