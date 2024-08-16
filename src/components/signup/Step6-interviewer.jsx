import React from 'react';
import styles from '../../styles/signup.module.css';
const Step6Interviewer = ({ formData, handleInputChange, handleNext }) => {
  return (
    <div className={styles.content}>
      <div className={styles.main}>
        <div className={styles.title}>00님의 서비스를 소개해주세요!</div>
        <div className={styles.subtitle}>
          적어주신 내용은 인터뷰 희망자에게 보여져요.
        </div>
      </div>
      <div className={styles.containerBox}>
        <div className={styles.innerBox}>
          <div className={styles.innerText}> 서비스분야</div>
          <select
            className={styles.inputBox}
            type='text'
            name='serviceField'
            value={formData.serviceField}
            onChange={handleInputChange}
            placeholder='서비스 분야'
            required
          >
            <option value=''>서비스 분야</option>
            <option value='예술'>예술</option>
            <option value='숙박 및 음식점'>숙박 및 음식점</option>
            <option value='교육'>교육</option>
            <option value='커뮤니티'>커뮤니티</option>
            <option value='생활'>생활</option>
            <option value='금융 및 보험업'>금융 및 보험업</option>
            <option value='도매 및 소매업'>도매 및 소매업</option>
            <option value='제조업'>제조업</option>
            <option value='운수업'>운수업</option>
            <option value='브랜딩'>브랜딩</option>
            <option value='가상자산'>가상자산</option>
            <option value='중개업'>중개업</option>
          </select>
        </div>
        <div className={styles.innerBox}>
          <div className={styles.innerText}>서비스명</div>
          <input
            className={styles.inputBox}
            type='text'
            name='serviceName'
            value={formData.serviceName}
            onChange={handleInputChange}
            placeholder='서비스명을 작성해주세요'
            required
          />
        </div>
        <div className={styles.innerBox}>
          <div className={styles.innerText}>서비스 소개</div>
          <input
            className={styles.inputBox}
            type='text'
            name='serviceDescription'
            value={formData.serviceDescription}
            onChange={handleInputChange}
            placeholder='서비스를 간단하게 소개해주세요'
            required
          />
        </div>
      </div>
      <div className={styles.box}>
        <button className={styles.buttonBox} type='button' onClick={handleNext}>
          제출
        </button>
      </div>
    </div>
  );
};

export default Step6Interviewer;
