import React from 'react';
import styles from '../../styles/signup.module.css';
import interviewee from '../../assets/icons/interviewee.svg';
import founder from '../../assets/icons/founder.svg';
const Step4 = ({
  formData,
  handleInputChange,
  handleNext,
  handleChanegeCheck,
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.main}>
        <div className={styles.title}>원하는 가입 유형을 선택하세요</div>
        <div className={styles.subtitle}>
          유형에 따라 프로필 설정이 달라져요.
        </div>
      </div>
      <div className={styles.rolecontainer}>
        <div className={styles.rolebox} onClick={handleChanegeCheck}>
          <img src={founder} />
          <input
            type='radio'
            name='role'
            value='interviewer'
            checked={formData.role === 'interviewer'}
            onChange={handleInputChange}
            required
          />
          <div className={styles.roletitle}>인터뷰 모집자로 가입할게요.</div>
          <div className={styles.rolesubtitle}>
            인터뷰에 참여할 고객을 찾고있어요.
          </div>
        </div>
        <div className={styles.rolebox} onClick={handleChanegeCheck}>
          <img src={interviewee} />
          <input
            type='radio'
            name='role'
            value='interviewee'
            checked={formData.role === 'interviewee'}
            onChange={handleInputChange}
            required
          />
          <div className={styles.roletitle}>인터뷰 참여자로 가입할게요.</div>
          <div className={styles.rolesubtitle}>
            인터뷰에 참여할 고객을 찾고있어요.
          </div>
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

export default Step4;
