import React from 'react';
import styles from '../../styles/signup.module.css';

const Step1 = ({ formData, handleInputChange, handleNext }) => (
  <div className={styles.content}>
    <div className={styles.main}>
      <div className={styles.title}>휴대폰 인증</div>
      <div className={styles.subtitle}>최초 1회 휴대폰 인증이 필요합니다.</div>
    </div>
    <div className={styles.box}>
      <input
        className={styles.inputBox}
        type='text'
        name='name'
        value={formData.name}
        onChange={handleInputChange}
        placeholder='이름을 입력해 주세요'
        required
      />
    </div>
    <div className={`${styles.box} ${styles.grid}`}>
      <div>
        <input
          className={styles.inputBox}
          type='text'
          name='birth'
          value={formData.birth}
          onChange={handleInputChange}
          placeholder='주민등록번호 앞자리'
          maxLength={6}
          required
        />
      </div>
      <div>
        <input
          className={styles.inputBox}
          type='text'
          name='sex'
          value={formData.sex}
          onChange={handleInputChange}
          placeholder='주민등록번호 뒷자리'
          maxLength={1}
          required
        />
      </div>
      <div className={styles.masking}>●●●●●●</div>
    </div>
    <div className={styles.box}>
      <select
        className={styles.selectBox}
        name='carrier'
        value={formData.carrier}
        onChange={handleInputChange}
        required
      >
        <option value=''>통신사 선택</option>
        <option value='SKT'>SKT</option>
        <option value='KT'>KT</option>
        <option value='LGU+'>LGU+</option>
      </select>
    </div>
    <div className={styles.box}>
      <input
        className={styles.inputBox}
        type='text'
        name='phone'
        value={formData.phone}
        onChange={handleInputChange}
        placeholder='01012345678'
        maxLength={11}
        required
      />
    </div>
    <div className={styles.box}>
      <button className={styles.buttonBox} type='button' onClick={handleNext}>
        인증번호 보내기
      </button>
    </div>
  </div>
);

export default Step1;
