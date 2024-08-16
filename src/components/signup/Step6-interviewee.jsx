import React from 'react';
import styles from '../../styles/signup.module.css';
const Step6Interviewee = ({ formData, handleInputChange, handleNext }) => {
  return (
    <div className={styles.content}>
      <div className={styles.main}>
        <div className={styles.title}>00님이 희망하는 인터뷰를 알려주세요!</div>
        <div className={styles.subtitle}>
          적어주신 내용은 인터뷰 모집자에게 보여져요.
        </div>
      </div>
      <div className={styles.containerBox}>
        <div className={styles.innerBox}>
          <div className={styles.innerText}>
            원하는 인터뷰 방법(중복 선택 가능)
          </div>
          <div className={styles.innerCheckbox}>
            <label>
              <input
                type='checkbox'
                name='interviewMethod'
                value='대면 인터뷰'
                checked={formData.interviewMethod.includes('대면 인터뷰')}
                onChange={handleInputChange}
              />
              대면 인터뷰
            </label>
            <label>
              <input
                type='checkbox'
                name='interviewMethod'
                value='화상 인터뷰'
                checked={formData.interviewMethod.includes('화상 인터뷰')}
                onChange={handleInputChange}
              />
              화상 인터뷰
            </label>
            <label>
              <input
                type='checkbox'
                name='interviewMethod'
                value='톡 인터뷰'
                checked={formData.interviewMethod.includes('톡 인터뷰')}
                onChange={handleInputChange}
              />
              톡 인터뷰
            </label>
            <label>
              <input
                type='checkbox'
                name='interviewMethod'
                value='기타'
                checked={formData.interviewMethod.includes('기타')}
                onChange={handleInputChange}
              />
              기타
            </label>
          </div>
        </div>
        <div className={styles.innerBox}>
          <div className={styles.innerText}>인터뷰 희망 소요 시간</div>
          <div className={styles.innerCheckbox}>
            <label>
              <input
                type='radio'
                name='interviewDuration'
                value='30분 미만'
                checked={formData.interviewDuration === '30분 미만'}
                onChange={handleInputChange}
              />
              30분 미만
            </label>
            <label>
              <input
                type='radio'
                name='interviewDuration'
                value='1시간 미만'
                checked={formData.interviewDuration === '1시간 미만'}
                onChange={handleInputChange}
              />
              1시간 미만
            </label>
            <label>
              <input
                type='radio'
                name='interviewDuration'
                value='3시간 미만'
                checked={formData.interviewDuration === '3시간 미만'}
                onChange={handleInputChange}
              />
              3시간 미만
            </label>
            <label>
              <input
                type='radio'
                name='interviewDuration'
                value='상관없음'
                checked={formData.interviewDuration === '상관없음'}
                onChange={handleInputChange}
              />
              상관없음
            </label>
          </div>
        </div>
        <div className={styles.innerBox}>
          <div className={styles.innerText}>인터뷰 희망 소요 시간</div>
          <input
            className={styles.inputBox}
            type='text'
            name='introduction'
            value={formData.introduction}
            onChange={handleInputChange}
            placeholder='자기소개'
            required
          />
        </div>
      </div>
      <div className={styles.box}>
        <button className={styles.buttonBox} type='button' onClick={handleNext}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Step6Interviewee;
