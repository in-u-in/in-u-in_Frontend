
import React, { useState } from 'react';
import InterviewModal from './InterviewModal';
import StartInterview from './StartInterview';
import 'antd/dist/reset.css';

function App() {

  const handleOk = () => {

    setModalOpened(openModal);
  };

  const closeModal = () => {

    setModalOpened(closeModal);
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