import React from 'react';
import styles from '../../styles/home.module.css';

export default function Box2() {
  return (
    <div class={styles.container_page4_box}>
      <div className={styles.container_page4_title}>
        <h3>구독을 통해 경험해보세요!</h3>
      </div>
      <div className={styles.container_page4_detail_price}>50000/월</div>
      <div className={styles.container_page4_description1}>
        <ul>
          <li> 정성적 인터뷰 자동 기록 가능</li>
          <li> 인터뷰 분석 노트 3개월마다 제공</li>
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
