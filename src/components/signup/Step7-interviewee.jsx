import React from 'react';
import styles from '../../styles/signup.module.css';
const Step7Interviewee = ({ formData, handleInputChange, handleNext }) => {
  return (
    <div className={styles.content}>
      <div className={styles.main}>
        {' '}
        <div className={styles.subtitle}>이게 마지막이에요!</div>
        <div className={styles.title}>
          00님이 자신있는 인터뷰를 알려주세요!(선택)
        </div>
      </div>
      <div className={styles.bigbox}>
        <div>자격증 이미지 업로드</div>
        <input
          type='file'
          name='certificateImage'
          onChange={handleInputChange}
          multiple
          required
        />
      </div>
      <div className={styles.box}>
        <button className={styles.buttonBox} type='button' onClick={handleNext}>
          제출
        </button>
      </div>
    </div>
  );
};

export default Step7Interviewee;
