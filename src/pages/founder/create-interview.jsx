import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/founder/create-interview.module.css';
import StepBar from '../../components/founder/create-interview/StepBar';

const steps = ['컨셉 기획', '수요 검증', '고도화', '구체화'];

export default function CreateInterviewPage() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);

  const [title, setTitle] = useState('');
  const [step, setStep] = useState('');
  const [purpose, setPurpose] = useState('');
  const [category, setCategory] = useState('');
  const [takenTime, setTakenTime] = useState('');
  const [defaultPrice, setDefaultPrice] = useState('');
  const [extraPrice, setExtraPrice] = useState('');

  const [titleError, setTitleError] = useState('');
  const [stepError, setStepError] = useState('');
  const [purposeError, setPurposeError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [takenTimeError, setTakenTimeError] = useState('');
  const [defaultPriceError, setDefaultPriceError] = useState('');
  const [extraPriceError, setExtraPriceError] = useState('');

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      if (
        title &&
        step &&
        purpose &&
        category &&
        takenTime &&
        defaultPrice &&
        extraPrice &&
        !titleError &&
        !stepError &&
        !purposeError &&
        !categoryError &&
        !takenTimeError &&
        defaultPriceError &&
        extraPriceError
      ) {
        setFormValid(true);
      } else {
        setFormValid(false);
      }
    };
    validateForm();
  }, [
    title,
    step,
    purpose,
    category,
    takenTime,
    defaultPrice,
    extraPrice,
    titleError,
    stepError,
    purposeError,
    categoryError,
    takenTimeError,
    defaultPriceError,
    extraPriceError,
  ]);

  const onTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    if (!value) {
      setTitleError('제목을 입력해주세요');
    } else {
      setTitleError('');
    }
  };

  const onStepChange = (e) => {
    const value = e.target.value;
    setStep(value);
    if (!value) {
      setStepError('단계를 선택해주세요');
    } else {
      setStepError('');
    }
  };

  const onPurposeChange = (e) => {
    const value = e.target.value;
    setPurpose(value);
    if (!value) {
      setPurposeError('목적을 입력해주세요');
    } else {
      setPurposeError('');
    }
  };

  const onCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    if (!value) {
      setCategoryError('인터뷰 유형을 선택해주세요');
    } else {
      setCategoryError('');
    }
  };

  const onTakenTimeChange = (e) => {
    const value = e.target.value;
    setTakenTime(value);
    if (!value) {
      setTakenTimeError('인터뷰 소요 시간을 입력해주세요');
    } else {
      setTakenTimeError('');
    }
  };

  const onDefaultPriceChange = (e) => {
    const value = e.target.value;
    setDefaultPrice(value);
    if (!value) {
      setDefaultPriceError('기본 지급 단가를 입력해주세요');
    } else {
      setDefaultPriceError('');
    }
  };

  const onExtraPriceChange = (e) => {
    const value = e.target.value;
    setExtraPrice(value);
    if (!value) {
      setExtraPriceError('추가 단가를 입력해주세요');
    } else {
      setExtraPriceError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      setTitleError('제목을 입력해주세요');
    }
    if (!step) {
      setStepError('단계를 선택해주세요');
    }
    if (!purpose) {
      setPurposeError('목적을 입력해주세요');
    }
    if (!category) {
      setCategoryError('인터뷰 유형을 선택해주세요');
    }
    if (!takenTime) {
      setTakenTimeError('인터뷰 소요 시간을 입력해주세요');
    }
    if (!defaultPrice) {
      setDefaultPriceError('기본 지급 단가를 입력해주세요');
    }
    if (!extraPrice) {
      setExtraPriceError('추가 단가를 입력해주세요');
    }
    if (formValid) {
      sendDataToServer();
    }
  };

  /*
    const sendDataToServer = () => {
        const formData = {

        };

        axios.post('', formData)
            .then(response => {
                navigate('');
                console.log(response);

            })
            .catch(error => {
                console.error(error);
            });
    };
    */

  return (
    <div>
      <div className={styles.BigTitle}>인터뷰 생성</div>
      <div className={styles.InputContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.InputBox}>
            <div className={styles.SubTitle}>
              <div className={styles.Star}>*</div>
              <div className={styles.Title}>제목</div>
            </div>
            <input
              className={styles.Input1}
              type='text'
              placeholder='제목을 입력하세요'
              onChange={onTitleChange}
            />
            {titleError && (
              <div className={styles.ErrorMessage}>{titleError}</div>
            )}
          </div>
          <div className={styles.InputBox}>
            <div className={styles.SubTitle}>
              <div className={styles.Star}>*</div>
              <div className={styles.Title}>아이디어 단계</div>
            </div>
            <div className={styles.StepBar}>
              <StepBar steps={steps} />
            </div>
          </div>
          <div className={styles.InputBox}>
            <div className={styles.SubTitle}>
              <div className={styles.Star}>*</div>
              <div className={styles.Title}>인터뷰 목적</div>
            </div>
            <input className={styles.Input1} onChange={onPurposeChange} />
            {purposeError && (
              <div className={styles.ErrorMessage}>{purposeError}</div>
            )}
          </div>
          <div className={styles.InputBox}>
            <div className={styles.SubTitle}>
              <div className={styles.Star}>*</div>
              <div className={styles.Title}>인터뷰 유형</div>
            </div>
            <div className={styles.CategoryWrap}>
              <label className={styles.CategoryLabel}>
                <input className={styles.Category} type='checkbox' />
                대면
                <input className={styles.Category1} type='checkbox' />
                화상채팅
                <input className={styles.Category1} type='checkbox' />
                전화
              </label>
            </div>
          </div>
          <div className={styles.InputBox}>
            <div className={styles.SubTitle}>
              <div className={styles.Star}>*</div>
              <div className={styles.Title}>인터뷰 소요시간</div>
            </div>
            <input
              className={styles.Input2}
              type='text'
              onChange={onTakenTimeChange}
              placeholder='분'
            />
            {takenTimeError && (
              <div className={styles.ErrorMessage}>{takenTimeError}</div>
            )}
          </div>

          <div className={styles.InputBox}>
            <div className={styles.SubTitle}>
              <div className={styles.Star}>*</div>
              <div className={styles.Title}>기본 지급 단가</div>
            </div>
            <input
              className={styles.Input2}
              type='text'
              onChange={onDefaultPriceChange}
              placeholder='원'
            />
            {defaultPriceError && (
              <div className={styles.ErrorMessage}>{defaultPriceError}</div>
            )}
          </div>
          <div className={styles.InputBox}>
            <div className={styles.SubTitle}>
              <div className={styles.Star}>*</div>
              <div className={styles.Title}>추가시간 10분당 지급 단가</div>
            </div>
            <input
              className={styles.Input2}
              type='text'
              onChange={onExtraPriceChange}
              placeholder='원'
            />
            {extraPriceError && (
              <div className={styles.ErrorMessage}>{extraPriceError}</div>
            )}
          </div>
          <div className={styles.InputBox}>
            <div className={styles.Title2}>모집 메인글 작성</div>
            <input className={styles.Input3} type='text' />
          </div>
          <div type='submit' className={styles.CreateButton}>
            인터뷰 생성
          </div>
        </form>
      </div>
    </div>
  );
}
