import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import styles from '../styles/signup.module.css';
import login from '../assets/icons/login.svg';
import interviewee from '../assets/icons/interviewee.svg';
import founder from '../assets/icons/founder.svg';

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
    certificateImagePreview: null, // 이미지 미리보기
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
    // Validation for each step
    if (step === 1) {
      if (
        !formData.name ||
        !formData.birth ||
        !formData.sex ||
        !formData.carrier ||
        !formData.phone
      ) {
        alert('모든 를 입력해 주세요.');
        return;
      }
    } else if (step === 2) {
      if (!formData.verificationCode) {
        alert('인증번호를 입력해 주세요.');
        return;
      }
    } else if (step === 3) {
      if (!formData.id || !formData.password || !formData.confirmPassword) {
        alert('아이디와 비밀번호를 입력해 주세요.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }
    } else if (step === 4) {
      if (!formData.role) {
        alert('가입 유형을 선택해 주세요.');
        return;
      }
    } else if (step === 5 && formData.role === 'interviewer') {
      if (!formData.activityName || !formData.startupStatus) {
        alert('활동명과 창업 상태를 입력해 주세요.');
        return;
      }
    } else if (step === 5 && formData.role === 'interviewee') {
      if (!formData.activityName || !formData.profileImage) {
        alert('활동명과 프로필 이미지를 입력해 주세요.');
        return;
      }
    } else if (step === 6 && formData.role === 'interviewer') {
      if (
        !formData.serviceField ||
        !formData.serviceName ||
        !formData.serviceDescription
      ) {
        alert('서비스 정보를 모두 입력해 주세요.');
        return;
      }
    } else if (step === 6 && formData.role === 'interviewee') {
      if (
        !formData.interviewMethod.length ||
        !formData.interviewDuration ||
        !formData.introduction
      ) {
        alert('인터뷰 정보를 모두 입력해 주세요.');
        return;
      }
    }

    setStep(step + 1);
  };

  const requestVerificationCode = () => {
    // 인증번호 요청 로직 추가
    console.log('인증번호 요청:', formData.phone);
    // 성공 시 다음 단계로 이동
    handleNext();
  };

  const verifyCode = () => {
    // 인증번호 확인 로직 추가
    console.log('인증번호 확인:', formData.verificationCode);
    // 성공 시 다음 단계로 이동
    handleNext();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('회원가입 데이터:', formData);
    // 회원가입 처리 로직 추가
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
          <div className={styles.content}>
            <div className={styles.main}>
              <div className={styles.title}>휴대폰 인증</div>
              <div className={styles.subtitle}>
                최초 1회 휴대폰 인증이 필요합니다.
              </div>
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
                  maxLength={6} // 주민등록번호 앞자리는 최대 6글자
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
                  maxLength={1} // 주민등록번호 뒷자리의 첫 번째 숫자만 입력받음
                  required
                />
              </div>
              <div className={styles.te}>●●●●●●</div>
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
              <button
                className={styles.buttonBox}
                type='button'
                onClick={requestVerificationCode}
              >
                인증번호 보내기
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.content}>
            <div className={styles.main}>
              <div className={styles.title}>인증번호 확인</div>
              <div className={styles.subtitle}>
                휴대폰으로 발송한 인증번호를 입력해주세요.
              </div>
            </div>
            <div className={styles.box}>
              <input
                className={styles.inputBox}
                type='text'
                name='verificationCode'
                value={formData.verificationCode}
                onChange={handleInputChange}
                placeholder='인증번호 6자리 입력해주세요'
                required
              />
            </div>
            <div className={styles.box}>
              <span className={styles.subtitle}>인증번호가 오지 않는다면?</span>
              <span>재발송</span>
            </div>
            <div className={styles.box}>
              <button
                className={styles.buttonBox}
                type='button'
                onClick={verifyCode}
              >
                다음
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.content}>
            <div className={styles.main}>
              <div className={styles.title}>계정 정보 입력</div>
              <div className={styles.subtitle}>
                사용할 아이디와 패스워드를 입력하세요.
              </div>
            </div>
            <div className={styles.box}>
              <input
                className={styles.inputBox}
                type='text'
                name='id'
                value={formData.id}
                onChange={handleInputChange}
                placeholder='아이디를 입력해주세요'
                required
              />
            </div>
            <div className={styles.box}>
              <input
                className={styles.inputBox}
                type='password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                placeholder='비밀번호를 입력해주세요'
                required
              />
            </div>
            <div className={styles.box}>
              <input
                className={styles.inputBox}
                type='password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder='비밀번호를 재입력해주세요'
                required
              />
            </div>
            <div className={styles.box}>
              <button
                className={styles.buttonBox}
                type='button'
                onClick={handleNext}
              >
                다음
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className={styles.content}>
            <div className={styles.main}>
              <div className={styles.title}>원하는 가입 유형을 선택하세요</div>
              <div className={styles.subtitle}>
                유형에 따라 프로필 설정이 달라져요.
              </div>
            </div>
            <div className={styles.rolecontainer}>
              <div className={styles.rolebox} onClick={handleChanegeCheck}>
                <img src={founder} />
                <input
                  type='radio'
                  name='role'
                  value='interviewer'
                  checked={formData.role === 'interviewer'}
                  onChange={handleInputChange}
                  required
                />
                <div className={styles.roletitle}>
                  인터뷰 모집자로 가입할게요.
                </div>
                <div className={styles.rolesubtitle}>
                  인터뷰에 참여할 고객을 찾고있어요.
                </div>
              </div>
              <div className={styles.rolebox} onClick={handleChanegeCheck}>
                <img src={interviewee} />
                <input
                  type='radio'
                  name='role'
                  value='interviewee'
                  checked={formData.role === 'interviewee'}
                  onChange={handleInputChange}
                  required
                />
                <div className={styles.roletitle}>
                  인터뷰 참여자로 가입할게요.
                </div>
                <div className={styles.rolesubtitle}>
                  인터뷰에 참여할 고객을 찾고있어요.
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <button
                className={styles.buttonBox}
                type='button'
                onClick={handleNext}
              >
                다음
              </button>
            </div>
          </div>
        )}

        {step === 5 && formData.role === 'interviewer' && (
          <div className={styles.content}>
            <div className={styles.main}>
              <div className={styles.title}>
                인터뷰 모집자로 가입하고 있어요.
              </div>
              <div className={styles.subtitle}>
                설정한 프로필은 인터뷰 희망자에게 보여져요.
              </div>
            </div>
            <div className={styles.box}>프로필</div>
            <div className={styles.box}>
              <input
                className={styles.inputBox}
                type='text'
                name='activityName'
                value={formData.activityName}
                onChange={handleInputChange}
                placeholder='활동명을 입력해주세요'
                required
              />
            </div>
            <div className={`${styles.box} ${styles.gird}`}>
              <button
                name='startupStatus'
                value={formData.startupStatus}
                onClick={() =>
                  setFormData({ ...formData, startupStatus: '예비창업자' })
                }
                required
              >
                예비창업자
              </button>
              <button
                name='startupStatus'
                value={formData.startupStatus}
                onClick={() =>
                  setFormData({ ...formData, startupStatus: '기창업자' })
                }
                required
              >
                기창업자
              </button>
            </div>
            <div className={styles.box}>
              <button
                className={styles.buttonBox}
                type='button'
                onClick={handleNext}
              >
                다음
              </button>
            </div>
          </div>
        )}

        {step === 6 && formData.role === 'interviewer' && (
          <div className={styles.content}>
            <div className={styles.main}>
              <div className={styles.title}>00님의 서비스를 소개해주세요!</div>
              <div className={styles.subtitle}>
                적어주신 내용은 인터뷰 희망자에게 보여져요.
              </div>
            </div>
            <div className={styles.containerBox}>
              <div className={styles.innerBox}>
                <div className={styles.innerText}> 서비스분야</div>
                <select
                  className={styles.inputBox}
                  type='text'
                  name='serviceField'
                  value={formData.serviceField}
                  onChange={handleInputChange}
                  placeholder='서비스 분야'
                  required
                >
                  <option value=''>서비스 분야</option>
                  <option value='예술'>예술</option>
                  <option value='숙박 및 음식점'>숙박 및 음식점</option>
                  <option value='교육'>교육</option>
                  <option value='커뮤니티'>커뮤니티</option>
                  <option value='생활'>생활</option>
                  <option value='금융 및 보험업'>금융 및 보험업</option>
                  <option value='도매 및 소매업'>도매 및 소매업</option>
                  <option value='제조업'>제조업</option>
                  <option value='운수업'>운수업</option>
                  <option value='브랜딩'>브랜딩</option>
                  <option value='가상자산'>가상자산</option>
                  <option value='중개업'>중개업</option>
                </select>
              </div>
              <div className={styles.innerBox}>
                <div className={styles.innerText}>서비스명</div>
                <input
                  className={styles.inputBox}
                  type='text'
                  name='serviceName'
                  value={formData.serviceName}
                  onChange={handleInputChange}
                  placeholder='서비스명을 작성해주세요'
                  required
                />
              </div>
              <div className={styles.innerBox}>
                <div className={styles.innerText}>서비스 소개</div>
                <input
                  className={styles.inputBox}
                  type='text'
                  name='serviceDescription'
                  value={formData.serviceDescription}
                  onChange={handleInputChange}
                  placeholder='서비스를 간단하게 소개해주세요'
                  required
                />
              </div>
            </div>
            <div className={styles.box}>
              <button
                className={styles.buttonBox}
                type='button'
                onClick={handleSubmit}
              >
                제출
              </button>
            </div>
          </div>
        )}
        {step === 7 && formData.role === 'interviewer' && (
          <div className={`${styles.successScreen}`}>
            <div className={styles.successText}>
              <div className={styles.title}>
                IN U IN 인터뷰 모집자 가입에 성공하셨습니다!
              </div>
              <div className={styles.subtitle}>
                환영합니다! 이제 IN U IN에서 인터뷰 모집자로 활동하실 수
                있습니다.
              </div>
            </div>
            <div className={styles.successContainer}>
              <button
                className={styles.successButton1}
                onClick={() => navigate('/founder')}
              >
                메인페이지로 이동
              </button>
              <button
                className={styles.successButton2}
                onClick={() => navigate('/login')}
              >
                로그인페이지로 이동
              </button>
            </div>
          </div>
        )}

        {step === 5 && formData.role === 'interviewee' && (
          <div className={styles.content}>
            <div className={styles.main}>
              <div className={styles.title}>
                인터뷰 희망자로 가입하고 있어요.
              </div>
              <div className={styles.subtitle}>
                설정한 프로필은 인터뷰 모집자에게 보여져요.
              </div>
            </div>
            <div className={styles.box}>
              프로필 이미지:
              <input
                type='file'
                name='profileImage'
                onChange={handleInputChange}
                required
              />
            </div>
            {formData.profileImagePreview && (
              <div>
                <img
                  src={formData.profileImagePreview}
                  alt='profileImage Preview'
                  className={styles.profileImage}
                />
              </div>
            )}
            <div className={styles.box}>
              <input
                className={styles.inputBox}
                type='text'
                name='activityName'
                value={formData.activityName}
                onChange={handleInputChange}
                placeholder='활동명을 입력해주세요'
                required
              />
            </div>
            <div className={styles.box}>
              <button
                className={styles.buttonBox}
                type='button'
                onClick={handleNext}
              >
                다음
              </button>
            </div>
          </div>
        )}

        {step === 6 && formData.role === 'interviewee' && (
          <div className={styles.content}>
            <div className={styles.main}>
              <div className={styles.title}>
                00님이 희망하는 인터뷰를 알려주세요!
              </div>
              <div className={styles.subtitle}>
                적어주신 내용은 인터뷰 모집자에게 보여져요.
              </div>
            </div>
            <div className={styles.containerBox}>
              <div className={styles.innerBox}>
                <div className={styles.innerText}>
                  원하는 인터뷰 방법(중복 선택 가능)
                </div>
                <div className={styles.innerCheckbox}>
                  <label>
                    <input
                      type='checkbox'
                      name='interviewMethod'
                      value='대면 인터뷰'
                      checked={formData.interviewMethod.includes('대면 인터뷰')}
                      onChange={handleInputChange}
                    />
                    대면 인터뷰
                  </label>
                  <label>
                    <input
                      type='checkbox'
                      name='interviewMethod'
                      value='화상 인터뷰'
                      checked={formData.interviewMethod.includes('화상 인터뷰')}
                      onChange={handleInputChange}
                    />
                    화상 인터뷰
                  </label>
                  <label>
                    <input
                      type='checkbox'
                      name='interviewMethod'
                      value='톡 인터뷰'
                      checked={formData.interviewMethod.includes('톡 인터뷰')}
                      onChange={handleInputChange}
                    />
                    톡 인터뷰
                  </label>
                  <label>
                    <input
                      type='checkbox'
                      name='interviewMethod'
                      value='기타'
                      checked={formData.interviewMethod.includes('기타')}
                      onChange={handleInputChange}
                    />
                    기타
                  </label>
                </div>
              </div>
              <div className={styles.innerBox}>
                <div className={styles.innerText}>인터뷰 희망 소요 시간</div>
                <div className={styles.innerCheckbox}>
                  <label>
                    <input
                      type='radio'
                      name='interviewDuration'
                      value='30분 미만'
                      checked={formData.interviewDuration === '30분 미만'}
                      onChange={handleInputChange}
                    />
                    30분 미만
                  </label>
                  <label>
                    <input
                      type='radio'
                      name='interviewDuration'
                      value='1시간 미만'
                      checked={formData.interviewDuration === '1시간 미만'}
                      onChange={handleInputChange}
                    />
                    1시간 미만
                  </label>
                  <label>
                    <input
                      type='radio'
                      name='interviewDuration'
                      value='3시간 미만'
                      checked={formData.interviewDuration === '3시간 미만'}
                      onChange={handleInputChange}
                    />
                    3시간 미만
                  </label>
                  <label>
                    <input
                      type='radio'
                      name='interviewDuration'
                      value='상관없음'
                      checked={formData.interviewDuration === '상관없음'}
                      onChange={handleInputChange}
                    />
                    상관없음
                  </label>
                </div>
              </div>
              <div className={styles.innerBox}>
                <div className={styles.innerText}>인터뷰 희망 소요 시간</div>
                <input
                  className={styles.inputBox}
                  type='text'
                  name='introduction'
                  value={formData.introduction}
                  onChange={handleInputChange}
                  placeholder='자기소개'
                  required
                />
              </div>
            </div>
            <div className={styles.box}>
              <button
                className={styles.buttonBox}
                type='button'
                onClick={handleNext}
              >
                다음
              </button>
            </div>
          </div>
        )}

        {step === 7 && formData.role === 'interviewee' && (
          <div className={styles.content}>
            <div className={styles.main}>
              {' '}
              <div className={styles.subtitle}>이게 마지막이에요!</div>
              <div className={styles.title}>
                00님이 자신있는 인터뷰를 알려주세요!(선택)
              </div>
            </div>
            <div className={styles.box}>
              자격증 이미지:
              <input
                type='file'
                name='certificateImage'
                onChange={handleInputChange}
                required
              />
            </div>
            {formData.certificateImagePreview && (
              <div className={styles.box}>
                <img
                  src={formData.certificateImagePreview}
                  alt='Certificate Preview'
                  className={styles.certificateImage}
                />
              </div>
            )}
            <div className={styles.box}>
              <button
                className={styles.buttonBox}
                type='button'
                onClick={handleSubmit}
              >
                제출
              </button>
            </div>
          </div>
        )}

        {step === 8 && formData.role === 'interviewee' && (
          <div className={`${styles.successScreen}`}>
            <div className={styles.successText}>
              <div className={styles.title}>
                IN U IN 인터뷰 희망자 가입에 성공하셨습니다!
              </div>
              <div className={styles.subtitle}>
                환영합니다! 이제 IN U IN에서 인터뷰 희망자로 활동하실 수
                있습니다.
              </div>
            </div>
            <div className={styles.successContainer}>
              <button
                className={styles.successButton1}
                onClick={() => navigate('/founder')}
              >
                메인페이지로 이동
              </button>
              <button
                className={styles.successButton2}
                onClick={() => navigate('/login')}
              >
                로그인페이지로 이동
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
