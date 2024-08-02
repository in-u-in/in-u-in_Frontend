import React from 'react';
import styles from './styles/FounderBox.module.css';
import tourism from './tourism.jpg';

export default function FounderBox() {
    return (
        <div className={styles.IntervieweeBoxWrap}>
            <div className={styles.FounderImg}>
                <img src={tourism} alt="Tourism" />
            </div>
            <div className={styles.BoxContainer}>
                <div className={styles.InfoWrap}>
                    <div className={styles.SmallFounderImg}>
                        <img src={tourism} alt="Tourism"/>
                    </div>
                    <div className={styles.FounderName}>월드투어리즘</div>
                </div>
                <div className={styles.FounderInfo}>
                    베트남 여행 경험자의 이야기를 들려주세요
                </div>
            </div>
        </div>
    );
}
