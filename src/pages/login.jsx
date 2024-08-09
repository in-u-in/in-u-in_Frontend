import { useState } from 'react';
import Header from '../components/Header';
import login from '../assets/icons/login.svg';
import styles from '../styles/login.module.css';
import { Link } from 'react-router-dom';
const Login = () => {
  const [userInfo, setUserInfo] = useState({
    id: '',
    pw: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  {
    /*const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', userInfo);
      if (response.data.success) {
        setMessage('로그인 성공');
        // 로그인 성공 시 필요한 추가 작업
      } else {
        setMessage('로그인 실패: ' + response.data.message);
      }
    } catch (error) {
      setMessage('로그인 실패: 서버 오류');
    }
  };*/
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.img}>
          <img src={login} />
        </div>
        <div className={styles.text}>
          <div className={styles.main}>
            <div className={styles.title}>IN U IN</div>
            <div className={styles.subtitle}>
              인터뷰 희망자와 인터뷰 모집자가 가장 빠르게 연결되는 곳,
            </div>
          </div>
          <div className={styles.box}>
            <input
              type='text'
              name='id'
              value={userInfo.id}
              onChange={handleInputChange}
              placeholder='아이디를 입력해주세요'
            />
          </div>
          <div className={styles.box}>
            <input
              type={showPassword ? 'text' : 'password'}
              name='pw'
              value={userInfo.pw}
              onChange={handleInputChange}
              placeholder='비밀번호를 입력해주세요'
            />
          </div>
          <button
            type='button'
            onClick={toggleShowPassword}
            className={styles.toggleButton}
          >
            {showPassword ? '숨기기' : '보이기'}
          </button>
          <div className={styles.section}>
            <label>
              <input type='checkbox' />
              아이디 저장
            </label>
            <div className={styles.sign}>
              <Link to='/signup'>회원가입하기 </Link>
              <div> 계정정보 찾기</div>
            </div>
          </div>
          <div className={styles.box}>
            <button>로그인</button>
          </div>
          <button>소셜로그인</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
