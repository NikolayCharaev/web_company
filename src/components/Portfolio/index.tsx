import React from 'react';
import Title from '../custom/Title/Title';
import portfolioItem from '../../assets/projects-item.png';
import './style.scss';

import { motion } from 'framer-motion';

import Button from '../custom/Button/Button';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio__inner">
          <motion.div
            className="portfolio__top"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -100,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}>
            <Title style={{ textAlign: 'center', color: 'var(--black)', marginBottom: '50px' }}>
              Наши проекты
            </Title>
            <p className="portfolio__top-subtitle">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
              является стандартной "рыбой" для текстов на латинице с начала XVI века.
            </p>
          </motion.div>
          <motion.ul
            className="portfolio__content"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                y: -100,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}>
            <li className="portfolio__item">
              <img className="portfolio__item-img" src={portfolioItem} alt="" />
            </li>

            <li className="portfolio__item">
              <img className="portfolio__item-img" src={portfolioItem} alt="" />
            </li>

            <li className="portfolio__item">
              <img className="portfolio__item-img" src={portfolioItem} alt="" />
            </li>

            <li className="portfolio__item">
              <img className="portfolio__item-img" src={portfolioItem} alt="" />
            </li>
          </motion.ul>
          <Button>Все проекты</Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
