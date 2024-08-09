import React from 'react';
import { useState } from 'react';
import styles from '../../../styles/founder/StepBar.module.css';

export default function StepBar({ steps }) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className={styles.StepBarContainer}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={styles.LabelContainer}>
            <div
              className={`${styles.Step} ${index <= currentStep ? styles.Completed : ''}`}
              onClick={() => handleStepClick(index)}
            />
            <div className={styles.StepLabel}>{step}</div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`${styles.StepLine} ${index < currentStep ? styles.Completed : ''}`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
