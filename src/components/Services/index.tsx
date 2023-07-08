import React from 'react';
import Button from '../custom/Button/Button';
import Title from '../custom/Title/Title';
import { motion } from 'framer-motion';
import './style.scss';

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services__inner">
          <Title style={{ marginBottom: '35px', maxWidth: '740px' }}>
            Мы создаем мобильные приложения для крупных корпораций
          </Title>
          <p className="services__description">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
            является стандартной "рыбой" для текстов на латинице с начала XVI века.{' '}
          </p>

          <motion.ul
            initial="hidden"
            // animate="visible"
            whileInView="visible"
            variants={{
              hidden: { opacity: 1, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2,
                },
              },
            }}
            className="services__list">


<motion.li
       
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
              className="services__item">
              <div className="services__item-left">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_351)">
                    <path
                      d="M39.3326 0H9.33267C8.9645 0 8.666 0.298499 8.666 0.666665V10.6666H9.99933V1.33333H38.6659V37.9999C38.6724 38.3505 38.4019 38.6442 38.0519 38.6666C37.9946 38.6666 37.9373 38.6619 37.8799 38.6606C37.7619 38.6573 37.6439 38.6546 37.5279 38.6426C37.5179 38.6426 37.5086 38.6426 37.4986 38.6386C35.3213 38.4006 33.6014 36.6823 33.3613 34.5053C33.3613 34.4959 33.358 34.4859 33.3566 34.4766C33.3405 34.3182 33.3325 34.1591 33.3326 33.9999V32.6666C33.3326 32.2984 33.0341 31.9999 32.666 31.9999H9.99933V20H8.666V31.9999H3.33268C2.96452 31.9999 2.66602 32.2984 2.66602 32.6666V33.9999C2.66968 37.3121 5.35384 39.9962 8.666 39.9999H38.0659C39.1478 39.9716 40.0076 39.0821 39.9993 37.9999V0.666665C39.9993 0.298499 39.7008 0 39.3326 0ZM8.666 38.6666C6.08993 38.6637 4.00226 36.576 3.99935 33.9999V33.3333H31.9993V33.9999C32.0002 34.2198 32.0129 34.4394 32.0373 34.6579C32.0433 34.7159 32.0546 34.7719 32.0626 34.8293C32.0846 34.9906 32.1113 35.1513 32.1466 35.3093C32.1586 35.3646 32.174 35.4193 32.188 35.4746C32.2286 35.6353 32.2746 35.7933 32.328 35.9493C32.3433 35.9939 32.3593 36.0379 32.376 36.0826C32.4366 36.2479 32.5053 36.4093 32.5806 36.5686C32.5966 36.6013 32.6113 36.6353 32.6273 36.6653C32.7109 36.8342 32.8026 36.9983 32.9026 37.1579C32.916 37.1793 32.928 37.2013 32.9413 37.2246C33.05 37.3948 33.1673 37.5595 33.2926 37.7179L33.314 37.7466C33.4595 37.9293 33.6153 38.1036 33.7806 38.2686C33.9242 38.4108 34.073 38.5442 34.2273 38.6686L8.666 38.6666Z"
                      fill="#4985FF"
                    />
                    <path
                      d="M22 18.6667C22.1768 18.6667 22.3463 18.5963 22.4713 18.4713L25.1379 15.8047C25.3982 15.5443 25.3982 15.1223 25.1379 14.862L22.4713 12.1953C22.3463 12.0703 22.1768 12 22 12H3.33333C1.49241 12 0 13.4924 0 15.3333C0 17.1742 1.49241 18.6667 3.33333 18.6667H22ZM21.828 13.4373L23.7239 15.3333L21.828 17.2293L21.354 15.3333L21.828 13.4373ZM5.33332 13.3333H20.48L20.1466 14.6667H6.66665V16H20.1466L20.48 17.3333H5.33332V13.3333ZM1.33333 15.3333C1.33333 14.2287 2.22875 13.3333 3.33333 13.3333H3.99999V17.3333H3.33333C2.22875 17.3333 1.33333 16.4379 1.33333 15.3333Z"
                      fill="#4985FF"
                    />
                    <path
                      d="M15.3325 28.6666H35.3325C35.7007 28.6666 35.9992 28.3681 35.9992 27.9999V7.99999C35.9991 7.63183 35.7006 7.33341 35.3323 7.3335C35.1556 7.3335 34.9862 7.40375 34.8612 7.52866L14.8612 27.5286C14.6009 27.789 14.601 28.2111 14.8614 28.4714C14.9864 28.5964 15.1558 28.6666 15.3325 28.6666ZM34.6658 9.60932V11.3333H33.3325V12.6666H34.6658V14H33.3325V15.3333H34.6658V16.6666H33.3325V18H34.6658V19.3333H33.3325V20.6666H34.6658V22H33.3325V23.3333H34.6658V24.6666H33.3325V25.9999H34.6658V27.3333H33.3325V25.9999H31.9992V27.3333H30.6658V25.9999H29.3325V27.3333H27.9992V25.9999H26.6659V27.3333H25.3325V25.9999H23.9992V27.3333H22.6659V25.9999H21.3325V27.3333H19.9992V25.9999H18.6659V27.3333H16.9419L34.6658 9.60932Z"
                      fill="#4985FF"
                    />
                    <path
                      d="M24.9907 24.6667H31.3341C31.7022 24.6667 32.0007 24.3682 32.0007 24V17.6567C32.0007 17.2886 31.7022 16.9902 31.3339 16.9902C31.1572 16.9902 30.9877 17.0605 30.8627 17.1854L24.5194 23.5287C24.2591 23.7891 24.2592 24.2112 24.5196 24.4715C24.6446 24.5965 24.814 24.6667 24.9907 24.6667ZM30.6674 19.2667V23.3334H26.6007L30.6674 19.2667Z"
                      fill="#4985FF"
                    />
                    <path d="M30.6673 4H17.334V5.33333H30.6673V4Z" fill="#4985FF" />
                    <path d="M32.6673 6.6665H15.334V7.99983H32.6673V6.6665Z" fill="#4985FF" />
                    <path d="M15.334 20.6665H11.334V21.9998H15.334V20.6665Z" fill="#4985FF" />
                    <path d="M14.0006 23.3335H11.334V24.6668H14.0006V23.3335Z" fill="#4985FF" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_351">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="services__item-content">
                <h4 className="services__item-title">Создание сайтов</h4>
                <p className="services__item-description">
                  Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.
                </p>
              </div>
            </motion.li>

            <motion.li
      
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
              className="services__item">
              <div className="services__item-left">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_351)">
                    <path
                      d="M39.3326 0H9.33267C8.9645 0 8.666 0.298499 8.666 0.666665V10.6666H9.99933V1.33333H38.6659V37.9999C38.6724 38.3505 38.4019 38.6442 38.0519 38.6666C37.9946 38.6666 37.9373 38.6619 37.8799 38.6606C37.7619 38.6573 37.6439 38.6546 37.5279 38.6426C37.5179 38.6426 37.5086 38.6426 37.4986 38.6386C35.3213 38.4006 33.6014 36.6823 33.3613 34.5053C33.3613 34.4959 33.358 34.4859 33.3566 34.4766C33.3405 34.3182 33.3325 34.1591 33.3326 33.9999V32.6666C33.3326 32.2984 33.0341 31.9999 32.666 31.9999H9.99933V20H8.666V31.9999H3.33268C2.96452 31.9999 2.66602 32.2984 2.66602 32.6666V33.9999C2.66968 37.3121 5.35384 39.9962 8.666 39.9999H38.0659C39.1478 39.9716 40.0076 39.0821 39.9993 37.9999V0.666665C39.9993 0.298499 39.7008 0 39.3326 0ZM8.666 38.6666C6.08993 38.6637 4.00226 36.576 3.99935 33.9999V33.3333H31.9993V33.9999C32.0002 34.2198 32.0129 34.4394 32.0373 34.6579C32.0433 34.7159 32.0546 34.7719 32.0626 34.8293C32.0846 34.9906 32.1113 35.1513 32.1466 35.3093C32.1586 35.3646 32.174 35.4193 32.188 35.4746C32.2286 35.6353 32.2746 35.7933 32.328 35.9493C32.3433 35.9939 32.3593 36.0379 32.376 36.0826C32.4366 36.2479 32.5053 36.4093 32.5806 36.5686C32.5966 36.6013 32.6113 36.6353 32.6273 36.6653C32.7109 36.8342 32.8026 36.9983 32.9026 37.1579C32.916 37.1793 32.928 37.2013 32.9413 37.2246C33.05 37.3948 33.1673 37.5595 33.2926 37.7179L33.314 37.7466C33.4595 37.9293 33.6153 38.1036 33.7806 38.2686C33.9242 38.4108 34.073 38.5442 34.2273 38.6686L8.666 38.6666Z"
                      fill="#4985FF"
                    />
                    <path
                      d="M22 18.6667C22.1768 18.6667 22.3463 18.5963 22.4713 18.4713L25.1379 15.8047C25.3982 15.5443 25.3982 15.1223 25.1379 14.862L22.4713 12.1953C22.3463 12.0703 22.1768 12 22 12H3.33333C1.49241 12 0 13.4924 0 15.3333C0 17.1742 1.49241 18.6667 3.33333 18.6667H22ZM21.828 13.4373L23.7239 15.3333L21.828 17.2293L21.354 15.3333L21.828 13.4373ZM5.33332 13.3333H20.48L20.1466 14.6667H6.66665V16H20.1466L20.48 17.3333H5.33332V13.3333ZM1.33333 15.3333C1.33333 14.2287 2.22875 13.3333 3.33333 13.3333H3.99999V17.3333H3.33333C2.22875 17.3333 1.33333 16.4379 1.33333 15.3333Z"
                      fill="#4985FF"
                    />
                    <path
                      d="M15.3325 28.6666H35.3325C35.7007 28.6666 35.9992 28.3681 35.9992 27.9999V7.99999C35.9991 7.63183 35.7006 7.33341 35.3323 7.3335C35.1556 7.3335 34.9862 7.40375 34.8612 7.52866L14.8612 27.5286C14.6009 27.789 14.601 28.2111 14.8614 28.4714C14.9864 28.5964 15.1558 28.6666 15.3325 28.6666ZM34.6658 9.60932V11.3333H33.3325V12.6666H34.6658V14H33.3325V15.3333H34.6658V16.6666H33.3325V18H34.6658V19.3333H33.3325V20.6666H34.6658V22H33.3325V23.3333H34.6658V24.6666H33.3325V25.9999H34.6658V27.3333H33.3325V25.9999H31.9992V27.3333H30.6658V25.9999H29.3325V27.3333H27.9992V25.9999H26.6659V27.3333H25.3325V25.9999H23.9992V27.3333H22.6659V25.9999H21.3325V27.3333H19.9992V25.9999H18.6659V27.3333H16.9419L34.6658 9.60932Z"
                      fill="#4985FF"
                    />
                    <path
                      d="M24.9907 24.6667H31.3341C31.7022 24.6667 32.0007 24.3682 32.0007 24V17.6567C32.0007 17.2886 31.7022 16.9902 31.3339 16.9902C31.1572 16.9902 30.9877 17.0605 30.8627 17.1854L24.5194 23.5287C24.2591 23.7891 24.2592 24.2112 24.5196 24.4715C24.6446 24.5965 24.814 24.6667 24.9907 24.6667ZM30.6674 19.2667V23.3334H26.6007L30.6674 19.2667Z"
                      fill="#4985FF"
                    />
                    <path d="M30.6673 4H17.334V5.33333H30.6673V4Z" fill="#4985FF" />
                    <path d="M32.6673 6.6665H15.334V7.99983H32.6673V6.6665Z" fill="#4985FF" />
                    <path d="M15.334 20.6665H11.334V21.9998H15.334V20.6665Z" fill="#4985FF" />
                    <path d="M14.0006 23.3335H11.334V24.6668H14.0006V23.3335Z" fill="#4985FF" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_351">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="services__item-content">
                <h4 className="services__item-title">Создание сайтов</h4>
                <p className="services__item-description">
                  Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.
                </p>
              </div>
            </motion.li>

            <motion.li
  
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
              className="services__item">
              <div className="services__item-left">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_351)">
                    <path
                      d="M39.3326 0H9.33267C8.9645 0 8.666 0.298499 8.666 0.666665V10.6666H9.99933V1.33333H38.6659V37.9999C38.6724 38.3505 38.4019 38.6442 38.0519 38.6666C37.9946 38.6666 37.9373 38.6619 37.8799 38.6606C37.7619 38.6573 37.6439 38.6546 37.5279 38.6426C37.5179 38.6426 37.5086 38.6426 37.4986 38.6386C35.3213 38.4006 33.6014 36.6823 33.3613 34.5053C33.3613 34.4959 33.358 34.4859 33.3566 34.4766C33.3405 34.3182 33.3325 34.1591 33.3326 33.9999V32.6666C33.3326 32.2984 33.0341 31.9999 32.666 31.9999H9.99933V20H8.666V31.9999H3.33268C2.96452 31.9999 2.66602 32.2984 2.66602 32.6666V33.9999C2.66968 37.3121 5.35384 39.9962 8.666 39.9999H38.0659C39.1478 39.9716 40.0076 39.0821 39.9993 37.9999V0.666665C39.9993 0.298499 39.7008 0 39.3326 0ZM8.666 38.6666C6.08993 38.6637 4.00226 36.576 3.99935 33.9999V33.3333H31.9993V33.9999C32.0002 34.2198 32.0129 34.4394 32.0373 34.6579C32.0433 34.7159 32.0546 34.7719 32.0626 34.8293C32.0846 34.9906 32.1113 35.1513 32.1466 35.3093C32.1586 35.3646 32.174 35.4193 32.188 35.4746C32.2286 35.6353 32.2746 35.7933 32.328 35.9493C32.3433 35.9939 32.3593 36.0379 32.376 36.0826C32.4366 36.2479 32.5053 36.4093 32.5806 36.5686C32.5966 36.6013 32.6113 36.6353 32.6273 36.6653C32.7109 36.8342 32.8026 36.9983 32.9026 37.1579C32.916 37.1793 32.928 37.2013 32.9413 37.2246C33.05 37.3948 33.1673 37.5595 33.2926 37.7179L33.314 37.7466C33.4595 37.9293 33.6153 38.1036 33.7806 38.2686C33.9242 38.4108 34.073 38.5442 34.2273 38.6686L8.666 38.6666Z"
                      fill="#4985FF"
                    />
                    <path
                      d="M22 18.6667C22.1768 18.6667 22.3463 18.5963 22.4713 18.4713L25.1379 15.8047C25.3982 15.5443 25.3982 15.1223 25.1379 14.862L22.4713 12.1953C22.3463 12.0703 22.1768 12 22 12H3.33333C1.49241 12 0 13.4924 0 15.3333C0 17.1742 1.49241 18.6667 3.33333 18.6667H22ZM21.828 13.4373L23.7239 15.3333L21.828 17.2293L21.354 15.3333L21.828 13.4373ZM5.33332 13.3333H20.48L20.1466 14.6667H6.66665V16H20.1466L20.48 17.3333H5.33332V13.3333ZM1.33333 15.3333C1.33333 14.2287 2.22875 13.3333 3.33333 13.3333H3.99999V17.3333H3.33333C2.22875 17.3333 1.33333 16.4379 1.33333 15.3333Z"
                      fill="#4985FF"
                    />
                    <path
                      d="M15.3325 28.6666H35.3325C35.7007 28.6666 35.9992 28.3681 35.9992 27.9999V7.99999C35.9991 7.63183 35.7006 7.33341 35.3323 7.3335C35.1556 7.3335 34.9862 7.40375 34.8612 7.52866L14.8612 27.5286C14.6009 27.789 14.601 28.2111 14.8614 28.4714C14.9864 28.5964 15.1558 28.6666 15.3325 28.6666ZM34.6658 9.60932V11.3333H33.3325V12.6666H34.6658V14H33.3325V15.3333H34.6658V16.6666H33.3325V18H34.6658V19.3333H33.3325V20.6666H34.6658V22H33.3325V23.3333H34.6658V24.6666H33.3325V25.9999H34.6658V27.3333H33.3325V25.9999H31.9992V27.3333H30.6658V25.9999H29.3325V27.3333H27.9992V25.9999H26.6659V27.3333H25.3325V25.9999H23.9992V27.3333H22.6659V25.9999H21.3325V27.3333H19.9992V25.9999H18.6659V27.3333H16.9419L34.6658 9.60932Z"
                      fill="#4985FF"
                    />
                    <path
                      d="M24.9907 24.6667H31.3341C31.7022 24.6667 32.0007 24.3682 32.0007 24V17.6567C32.0007 17.2886 31.7022 16.9902 31.3339 16.9902C31.1572 16.9902 30.9877 17.0605 30.8627 17.1854L24.5194 23.5287C24.2591 23.7891 24.2592 24.2112 24.5196 24.4715C24.6446 24.5965 24.814 24.6667 24.9907 24.6667ZM30.6674 19.2667V23.3334H26.6007L30.6674 19.2667Z"
                      fill="#4985FF"
                    />
                    <path d="M30.6673 4H17.334V5.33333H30.6673V4Z" fill="#4985FF" />
                    <path d="M32.6673 6.6665H15.334V7.99983H32.6673V6.6665Z" fill="#4985FF" />
                    <path d="M15.334 20.6665H11.334V21.9998H15.334V20.6665Z" fill="#4985FF" />
                    <path d="M14.0006 23.3335H11.334V24.6668H14.0006V23.3335Z" fill="#4985FF" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_351">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="services__item-content">
                <h4 className="services__item-title">Создание сайтов</h4>
                <p className="services__item-description">
                  Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.
                </p>
              </div>
            </motion.li>
          </motion.ul>
          <Button style={{ padding: '13px 56px' }}>Все услуги</Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
