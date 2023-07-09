import Title from '../custom/Title/Title';
import Button from '../custom/Button/Button';
import works from '../../assets/works.png';

import { motion } from 'framer-motion';
import './style.scss';

const OurWorks = () => {
  return (
    <div className="works">
      <div className="container">
        <div className="works__inner">
          <motion.div
            initial="hidden"
            viewport={{ once: true, amount: 0.5 }}
            whileInView="visible"
            variants={{
              hidden: {
                opacity: 0,
                y: 120,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="works__top">
            <Title style={{ color: 'var(--white)', textAlign: 'left', maxWidth: '540px' }}>
              Наши работы, на которых мы специализируемся
            </Title>
            <Button>Все услуги</Button>
          </motion.div>
          <motion.ul
            className="works__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
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
            }}>
            <motion.li
              className="works__item"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}>
              <img className="works__img" src={works} alt="" />
              <div className="works__item-content">
                <h3 className="works__item-title">
                  <span>01.</span> Исследование и упаковка
                </h3>
                <p className="works__item-text">
                  Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem
                  Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                </p>
                <a className="works__item-link" href="/">
                  Подробнее
                </a>
              </div>
            </motion.li>

            <motion.li
              className="works__item"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}>
              <img className="works__img" src={works} alt="" />
              <div className="works__item-content">
                <h3 className="works__item-title">
                  <span>01.</span> Исследование и упаковка
                </h3>
                <p className="works__item-text">
                  Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem
                  Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                </p>
                <a className="works__item-link" href="/">
                  Подробнее
                </a>
              </div>
            </motion.li>
            <motion.li
              className="works__item"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}>
              <img className="works__img" src={works} alt="" />
              <div className="works__item-content">
                <h3 className="works__item-title">
                  <span>01.</span> Исследование и упаковка
                </h3>
                <p className="works__item-text">
                  Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem
                  Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                </p>
                <a className="works__item-link" href="/">
                  Подробнее
                </a>
              </div>
            </motion.li>
          </motion.ul>
        </div>
        <span className="border"></span>
      </div>
    </div>
  );
};

export default OurWorks;
