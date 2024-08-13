import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import styles from '../styles/signup.module.css';
import login from '../assets/icons/login.svg';
import Step1 from '../components/signup/Step1';
import Step2 from '../components/signup/Step2';
import Step3 from '../components/signup/Step3';
import Step4 from '../components/signup/Step4';
import Step5Interviewer from '../components/signup/Step5Interviewer';
import Step6Interviewer from '../components/signup/Step6Interviewer';
import Step7Interviewer from '../components/signup/Step7Interviewer';
import Step5Interviewee from '../components/signup/Step5Interviewee';
import Step6Interviewee from '../components/signup/Step6Interviewee';
import Step7Interviewee from '../components/signup/Step7Interviewee';
import Step8Interviewee from '../components/signup/Step8Interviewee';
const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', // 이름
    birth: '', // 주민등록번호 앞자리
    sex: '', // 주민등록번호 뒷자리 하나 입력받고 남자 or 여자 (1,3 -> 남자, 2,4-> 여자)
    carrier: '', //통신사 SKT,KT,LG
    phone: '', // 휴대폰 번호
    verificationCode: '', // 인증번호
    id: '', // 아이디
    password: '', // 비밀번호
    confirmPassword: '', // 비밀번호 확인
    role: '', // 인터뷰 모집자 or 인터뷰 참여자
    profileImage: null,
    profileImagePreview: null,
    activityName: '', // 활동명
    startupStatus: '', // '예비창업자' or '기창업자'
    serviceField: '', // 서비스 분야
    serviceName: '', // 서비스명
    serviceDescription: '', // 서비스 소개
    interviewMethod: [], // 원하는 인터뷰 방법
    interviewDuration: '', // 인터뷰 희망 소요 시간
    introduction: '', // 간단 자기소개
    certificateImage: null, // 이미지 업로드
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'file' && files[0]) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
        [`${name}Preview`]: URL.createObjectURL(files[0]),
      }));
    } else if (type === 'checkbox') {
      if (checked) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: [...prevState[name], value],
        }));
      } else {
        setFormData((prevState) => ({
          ...prevState,
          [name]: prevState[name].filter((method) => method !== value),
        }));
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleChanegeCheck = (e) => {
    const selectedRole = e.currentTarget.querySelector(
      'input[type="radio"]'
    ).value;
    setFormData((prevState) => ({
      ...prevState,
      role: selectedRole,
    }));
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}>
        <div className={styles.img}>
          <img src={login} />
        </div>
        {step === 1 && (
          <Step1
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
          />
        )}

        {step === 2 && (
          <Step2
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
          />
        )}

        {step === 3 && (
          <Step3
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
          />
        )}

        {step === 4 && (
          <Step4
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            handleChanegeCheck={handleChanegeCheck}
          />
        )}

        {step === 5 && formData.role === 'interviewer' && (
          <Step5Interviewer
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
          />
        )}

        {step === 6 && formData.role === 'interviewer' && (
          <Step6Interviewer
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
          />
        )}
        {step === 7 && formData.role === 'interviewe  r' && (
          <Step7Interviewer navigate={navigate} />
        )}

        {step === 5 && formData.role === 'interviewee' && (
          <Step5Interviewee
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
          />
        )}

        {step === 6 && formData.role === 'interviewee' && (
          <Step6Interviewee
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
          />
        )}

        {step === 7 && formData.role === 'interviewee' && (
          <Step7Interviewee
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
          />
        )}

        {step === 8 && formData.role === 'interviewee' && (
          <Step8Interviewee navigate={navigate} />
        )}
      </div>
    </div>
  );
};

export default SignUp;
