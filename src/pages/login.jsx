import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pwError, setPwError] = useState('');

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailValue)) {
      setEmailError('올바른 이메일 형식을 입력하세요');
    } else {
      setEmailError('');
    }
  };

  const handlePwChange = (e) => {
    const pwValue = e.target.value;
    setPw(pwValue);
    const pwRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!pwRegex.test(pwValue)) {
      setPwError(
        '비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다'
      );
    } else {
      setPwError('');
    }
  };

  return (
    <div>
      <div>로그인</div>
      <div>
        <input
          type='email'
          placeholder='이메일을 입력하세요'
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      {emailError && email.length > 0 && (
        <span style={{ color: 'red' }}>{emailError}</span>
      )}
      <div>
        <input
          type='password'
          placeholder='비밀번호를 입력하세요'
          value={pw}
          onChange={handlePwChange}
        />
      </div>
      {pwError && pw.length > 0 && (
        <span style={{ color: 'red' }}>{pwError}</span>
      )}
      <div>비밀번호 찾기</div>
      <div>
        <button>이메일로 로그인</button>
      </div>
      <div>
        {/*<Link to='signup'>회원가입</Link>*/}
        <div>이메일 찾기</div>
      </div>
    </div>
  );
};

export default Login;
