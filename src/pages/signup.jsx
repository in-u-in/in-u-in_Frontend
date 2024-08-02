import React, { useState, useEffect } from 'react';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    allAgree: false,
    ageAgree: false,
    termsAgree: false,
    privacyAgree: false,
    marketingAgree: false,
    name: '',
    id: '',
    pw: '',
    birth: '',
    phone: '',
    email: '',
    age: '',
    sex: '',
    job: '',
    hobby: '',
    howToInterview: '',
    interviewTime: '',
    introduce: '',
    license: '',
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAllChange = (e) => {
    const { checked } = e.target;
    setFormData({
      allAgree: checked,
      ageAgree: checked,
      termsAgree: checked,
      privacyAgree: checked,
      marketingAgree: checked,
    });
  };

  useEffect(() => {
    const { ageAgree, termsAgree, privacyAgree, marketingAgree } = formData;
    const allChecked = ageAgree && termsAgree && privacyAgree && marketingAgree;
    if (formData.allAgree !== allChecked) {
      setFormData((prevState) => ({
        ...prevState,
        allAgree: allChecked,
      }));
    }
  }, [
    formData.ageAgree,
    formData.termsAgree,
    formData.privacyAgree,
    formData.marketingAgree,
  ]);

  {
    /*const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };*/
  }

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <div>인터뷰이 회원가입</div>
      {step === 1 && (
        <div>
          <div>약관 동의</div>
          <div>
            <label>
              <input
                type='checkbox'
                name='allAgree'
                checked={formData.allAgree}
                onChange={handleAllChange}
              />
              전체 동의
            </label>
          </div>
          <label>
            <input
              type='checkbox'
              name='ageAgree'
              checked={formData.ageAgree}
              onChange={handleCheckboxChange}
            />
            만 18세 이상입니다 (필수)
          </label>
          <label>
            <input
              type='checkbox'
              name='termsAgree'
              checked={formData.termsAgree}
              onChange={handleCheckboxChange}
            />
            서비스 이용약관 (필수)
          </label>
          <label>
            <input
              type='checkbox'
              name='privacyAgree'
              checked={formData.privacyAgree}
              onChange={handleCheckboxChange}
            />
            개인정보 수집 및 이용 동의 (필수)
          </label>
          <label>
            <input
              type='checkbox'
              name='marketingAgree'
              checked={formData.marketingAgree}
              onChange={handleCheckboxChange}
            />
            혜택/이벤트 정보 수신 동의 (선택)
          </label>
          <div>
            <button type='button' onClick={handleNext}>
              다음
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <div>정보 입력</div>
          <label>
            이름:
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            아이디:
            <input
              type='text'
              name='text'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            비밀번호:
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            비밀번호 확인:
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            생년월일:
            <input
              type='date'
              name='birth'
              value={formData.birth}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            휴대폰 번호:
            <input
              type='number'
              name='phone'
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            이메일:
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <div>
            <button type='button' onClick={handlePrev}>
              Previous
            </button>
            <button type='button' onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <div>프로필 입력</div>
          <label>
            나이:
            <input
              type='number'
              name='age'
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            성별:
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            직업:
            <input
              type='text'
              name='job'
              value={formData.job}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            취미:
            <input
              type='text'
              name='hobby'
              value={formData.hobby}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            간단한 소개:
            <input
              type='text'
              name='introduce'
              value={formData.introduce}
              onChange={handleInputChange}
              required
            />
          </label>
          <div>
            <button type='button' onClick={handlePrev}>
              Previous
            </button>
            <button type='button' onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <div>자격증 입력(선택)</div>
          <button type='button' onClick={handlePrev}>
            Previous
          </button>
          <button type='button' onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUp;
