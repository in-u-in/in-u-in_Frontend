import React from 'react';
import styles from '../../styles/signup.module.css';

const Step3 = ({ formData, handleInputChange, handleNext }) => {
  return (
    <div className={styles.content}>
      <div className={styles.main}>
        <div className={styles.title}>계정 정보 입력</div>
        <div className={styles.subtitle}>
          사용할 아이디와 패스워드를 입력하세요.
        </div>
      </div>
      <div className={styles.box}>
        <input
          className={styles.inputBox}
          type='text'
          name='id'
          value={formData.id}
          onChange={handleInputChange}
          placeholder='아이디를 입력해주세요'
          required
        />
      </div>
      <div className={styles.box}>
        <input
          className={styles.inputBox}
          type='password'
          name='password'
          value={formData.password}
          onChange={handleInputChange}
          placeholder='비밀번호를 입력해주세요'
          required
        />
      </div>
      <div className={styles.box}>
        <input
          className={styles.inputBox}
          type='password'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder='비밀번호를 재입력해주세요'
          required
        />
      </div>
      <div className={styles.box}>
        <button className={styles.buttonBox} type='button' onClick={handleNext}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Step3;
