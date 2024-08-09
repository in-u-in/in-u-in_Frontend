import { useNavigate } from 'react-router-dom';
import styles from '../styles/header.module.css';
const Header = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  };
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo} onClick={handleHome}>
          IN U IN
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.headerItem}>고객 문의</div>
        <div className={styles.headerItem}>서비스 소개</div>
        <div className={styles.headerItem}>자주 묻는 질문</div>
        <div className={styles.headerItem}>
          <button className={styles.button} onClick={handleLogin}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
