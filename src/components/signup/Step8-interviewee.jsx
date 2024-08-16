import React from 'react';
import styles from '../../styles/signup.module.css';
const Step8Interviewee = ({ navigate }) => {
  return (
    <div className={`${styles.successScreen}`}>
      <div className={styles.successText}>
        <div className={styles.title}>
          IN U IN 인터뷰 희망자 가입에 성공하셨습니다!
        </div>
        <div className={styles.subtitle}>
          환영합니다! 이제 IN U IN에서 인터뷰 희망자로 활동하실 수 있습니다.
        </div>
      </div>
      <div className={styles.successContainer}>
        <button
          className={styles.successButton1}
          onClick={() => navigate('/founder')}
        >
          메인페이지로 이동
        </button>
        <button
          className={styles.successButton2}
          onClick={() => navigate('/login')}
        >
          로그인페이지로 이동
        </button>
      </div>
    </div>
  );
};

export default Step8Interviewee;
