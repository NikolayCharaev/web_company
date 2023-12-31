import { useState, useEffect } from 'react';
import Button from '../custom/Button/Button';
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';

import './style.scss';

const Header = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="header__inner">
        <div className="container">
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <a className="header__link" href="/">
                  Главная
                </a>
              </li>

              <li className="header__item">
                <a className="header__link" href="/">
                  Наши проекты
                </a>
              </li>

              <li className="header__item">
                <a className="header__link" href="/">
                  Услуги
                </a>
              </li>

              <li className="header__item">
                <a className="header__link" href="/">
                  Новости
                </a>
              </li>

              <li className="header__item">
                <a className="header__link" href="/">
                  Контакты
                </a>
              </li>
            </ul>

            <div className="header__list-mobile">
              {!menuActive ? (
                <AiOutlineMenu size={35} color="white" onClick={() => setMenuActive(true)} />
              ) : (
                <AiOutlineCloseCircle
                  size={35}
                  color="white"
                  onClick={() => setMenuActive(false)}
                />
              )}

              {menuActive && (
                <ul className='header__list-mobile-active'>
                  <li className="header__item">
                    <a className="header__link" href="/">
                      Главная
                    </a>
                  </li>

                  <li className="header__item">
                    <a className="header__link" href="/">
                      Наши проекты
                    </a>
                  </li>

                  <li className="header__item">
                    <a className="header__link" href="/">
                      Услуги
                    </a>
                  </li>

                  <li className="header__item">
                    <a className="header__link" href="/">
                      Новости
                    </a>
                  </li>

                  <li className="header__item">
                    <a className="header__link" href="/">
                      Контакты
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>
        <span className="border"></span>
        <motion.div className="slogan">
          <div className="slogan__inner">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              className="slogan__top">
              Передовая IT студия
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                  x: -100,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1,
                  },
                },
              }}
              className="slogan__title">
              Мы создаем легкие решения сложных задач и проблем
            </motion.h1>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                  x: 50,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1,
                  },
                },
              }}>
              <Button>Наши проекты</Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
