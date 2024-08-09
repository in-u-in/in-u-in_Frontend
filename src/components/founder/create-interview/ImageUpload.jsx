import React, { useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from '../../../styles/founder/create-interview.module.css';
import uploadIcon from '../../../assets/icons/uploadIcon.svg';

export default function ImageUpload() {
  const [preview, setPreview] = useState(null);
  const [isVideo, setIsVideo] = useState(false); // 동영상 여부 확인
  const [videoFile, setVideoFile] = useState(null); // 업로드된 동영상 파일 저장
  const fileInputRef = useRef(null);
  const videoRef = useRef(null); // 비디오 태그에 대한 참조

  const onDrop = (acceptedFiles) => {
    handleFiles(acceptedFiles);
  };

  const handleFiles = (files) => {
    if (files.length > 0) {
      const file = files[0];

      if (file.type.startsWith('video/')) {
        const videoUrl = URL.createObjectURL(file);
        setPreview(videoUrl);
        setIsVideo(true);
        setVideoFile(file);
      } else {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
          setIsVideo(false);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleFileChange = (event) => {
    handleFiles(event.target.files);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const { getRootProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpg', '.eps'],
      'video/*': ['.mp4', '.mov'],
    },
  });

  return (
    <div {...getRootProps({ className: styles.Container })}>
      {!preview && (
        <>
          <div className={styles.UploadIcon}>
            <img src={uploadIcon} alt='UploadIcon' />
          </div>
          <div className={styles.UploadTextBox}>
            <div className={styles.UploadText}>
              인터뷰에 적절한 이미지를 업로드 해주세요.
            </div>
            <div className={styles.UploadText2}>
              이미지는 .jpg, .png 형식이어야 합니다.
            </div>
            <div className={styles.UploadText2}>
              동영상은 .mp4, .mov 형식이어야 합니다.
            </div>
            <div className={styles.UploadText2}>
              <span className={styles.BlueText}>이미지</span>나
              <span className={styles.BlueText}> 동영상</span>에 대한 자세한
              요구사항은 지원센터에 문의하세요.
            </div>
          </div>
          <label htmlFor='file'>
            <div
              onClick={(event) => {
                event.preventDefault();
                handleButtonClick();
              }}
              className={styles.Button}
            >
              <img src={uploadIcon} alt='UploadIcon' />
              이미지 업로드
            </div>
          </label>
          <input
            ref={fileInputRef}
            type='file'
            name='file'
            id='file'
            accept='image/*,video/*'
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </>
      )}
      <div className={styles.Dropzone}>
        {!preview && !isVideo && (
          <div>
            {isDragActive ? (
              <p>파일을 여기에 드롭하세요...</p>
            ) : (
              <p>또는 여기에 끌어서 놓기</p>
            )}
          </div>
        )}
        {preview && (
          <div className={styles.PreviewContainer}>
            {isVideo ? (
              <video
                ref={videoRef}
                src={preview}
                className={styles.VideoThumbnail}
                onLoadedData={() => {
                  videoRef.current.currentTime = 0;
                  videoRef.current.pause(); // 첫 프레임에서 멈춤
                }}
              />
            ) : (
              <img src={preview} alt='Preview' className={styles.Image} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
