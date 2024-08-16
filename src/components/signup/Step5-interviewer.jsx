import React from 'react';
import styles from '../../styles/signup.module.css';
const Step5Interviewer = ({ formData, handleInputChange, handleNext }) => {
  return (
    <div className={styles.content}>
      <div className={styles.main}>
        <div className={styles.title}>인터뷰 모집자로 가입하고 있어요.</div>
        <div className={styles.subtitle}>
          설정한 프로필은 인터뷰 희망자에게 보여져요.
        </div>
      </div>
      <div className={styles.profileUploadContainer}>
        <div className={styles.profileImageWrapper}>
          {formData.profileImagePreview ? (
            <img
              src={formData.profileImagePreview}
              alt='profileImage Preview'
              className={styles.profileImage}
            />
          ) : (
            <div className={styles.defaultProfileImage} />
          )}
          <input
            type='file'
            name='profileImage'
            onChange={handleInputChange}
            required
            className={styles.fileInput}
          />
        </div>
      </div>
      <div className={styles.box}>
        <input
          className={styles.inputBox}
          type='text'
          name='activityName'
          value={formData.activityName}
          onChange={handleInputChange}
          placeholder='활동명을 입력해주세요'
          required
        />
      </div>
      <div className={`${styles.box} ${styles.gird}`}>
        <button
          className={styles.roleButton}
          name='startupStatus'
          value={formData.startupStatus}
          onClick={() =>
            setFormData({ ...formData, startupStatus: '예비창업자' })
          }
          required
        >
          예비창업자
        </button>
        <button
          className={styles.roleButton}
          name='startupStatus'
          value={formData.startupStatus}
          onClick={() =>
            setFormData({ ...formData, startupStatus: '기창업자' })
          }
          required
        >
          기창업자
        </button>
      </div>
      <div className={styles.box}>
        <button className={styles.buttonBox} type='button' onClick={handleNext}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Step5Interviewer;
