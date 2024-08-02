// src/App.jsx
import React, { useState } from 'react';
import InterviewModal from './Modal';
import StartInterview from './StartInterview';
import 'antd/dist/reset.css'; // Ant Design 스타일시트를 추가합니다.

function App() {
  const [modalOpened, setModalOpened] = useState(false);

  const handleOk = () => {
    // 확인 버튼 클릭 시 실행되는 함수
    setModalOpened(false);
  };

  const closeModal = () => {
    // 취소 버튼 클릭 시 실행되는 함수
    setModalOpened(false);
  };

  return (
    <>
      <StartInterview />

      <div style={{ padding: 20 }}>
        <button onClick={() => setModalOpened(true)}>인터뷰 지원하기</button>
        <InterviewModal
          modalOpened={modalOpened}
          handleOk={handleOk}
          closeModal={closeModal}
        />
      </div>
    </>
  );
};

export default App;