import React from 'react';
import styles from '../../styles/signup.module.css';

const Step2 = ({ formData, handleInputChange, handleNext }) => {
  return (
    <div className={styles.content}>
      <div className={styles.main}>
        <div className={styles.title}>인증번호 확인</div>
        <div className={styles.subtitle}>
          휴대폰으로 발송한 인증번호를 입력해주세요.
        </div>
      </div>
      <div className={styles.box}>
        <input
          className={styles.inputBox}
          type='text'
          name='verificationCode'
          value={formData.verificationCode}
          onChange={handleInputChange}
          placeholder='인증번호 6자리 입력해주세요'
          required
        />
      </div>
      <div className={styles.box}>
        <span className={styles.subtitle}>인증번호가 오지 않는다면?</span>
        <span>재발송</span>
      </div>
      <div className={styles.box}>
        <button className={styles.buttonBox} type='button' onClick={handleNext}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Step2;
