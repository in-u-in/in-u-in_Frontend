import React from 'react';
import styles from '../../styles/home.module.css';

export default function Box3() {
  return (
    <div class={styles.container_page4_box}>
      <div className={styles.container_page4_title}>
        <h3>특화된 인터뷰 컨설팅</h3>
      </div>
      <div className={styles.container_page4_detail_price}>별도문의</div>
      <div className={styles.container_page4_description1}>
        <ul>
          <li> 정성적 인터뷰</li>
          <br />
          <li> 동행 컨설팅</li>
          <br />
          <li> 제공 가능</li>
        </ul>
      </div>
      <div className={styles.container_page4_description2_3}>
        1년 장기 계약시 5% 할인
      </div>
    </div>
  );
}
