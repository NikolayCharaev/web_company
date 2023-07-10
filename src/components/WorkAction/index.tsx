import React from 'react';
import Title from '../custom/Title/Title';

import actionPreview from '../../assets/workAction.jpg';
import './style.scss';

const WorkAction = () => {
  return (
    <div className="action">
      <div className="container">
        <div className="action__inner">
          <div className="action__top">
            <Title style={{ color: 'var(--white)', marginBottom: '30px' }}>
              Видео о нашей работе
            </Title>
            <p className="action__top-text">Просто посмотрите, как мы работаем</p>
          </div>
          <div className="action__preview">
            <img className="action__preview-image" src={actionPreview} alt="preview" />


            <div className="action__player">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none">
                <g clip-path="url(#clip0_6_101)">
                  <circle cx="30" cy="30" r="30" fill="#4985FF" />
                  <path
                    d="M30 0C13.4317 0 0 13.4314 0 30C0 46.5686 13.4317 60 30 60C46.5683 60 60 46.5686 60 30C60 13.4314 46.5683 0 30 0ZM40.3688 31.5902L25.3687 40.9652C25.0652 41.1547 24.7201 41.25 24.375 41.25C24.0623 41.25 23.7492 41.1722 23.4659 41.0147C22.8698 40.6842 22.5 40.057 22.5 39.375V20.625C22.5 19.943 22.8698 19.3158 23.4659 18.9853C24.0619 18.653 24.7907 18.6731 25.3687 19.0348L40.3688 28.4098C40.9167 28.7531 41.25 29.3537 41.25 30C41.25 30.6463 40.9167 31.247 40.3688 31.5902Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_101">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Смотреть видео
            </button>
          </div>
          </div>
       
        </div>
        <span className="border"></span>
      </div>
    </div>
  );
};

export default WorkAction;
