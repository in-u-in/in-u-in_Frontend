import React from 'react';
import styles from '../../styles/home.module.css';

export default function Box1() {
  return (
    <div class={styles.container_page4_box}>
      <div className={styles.container_page4_title}>
        <h3>체험을 통해 경험해보세요!</h3>
      </div>
      <div className={styles.container_page4_detail_price}> </div>
      <div className={styles.container_page4_description1_1}>
        <ul>
          <li> 정성적 인터뷰 관련 전자책 증정</li>
          <li> 정성적 인터뷰 관련 컨설팅 1회</li>
        </ul>
      </div>
      <div className={styles.container_page4_description2}>
        <h3>
          매일 오전 11시 & 오후 5시마다
          <br />
          무료 인터뷰 매칭 후보 업데이트
        </h3>
      </div>
    </div>
  );
}
