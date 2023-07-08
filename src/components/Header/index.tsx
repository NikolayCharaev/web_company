import React from 'react';
import Button from '../custom/Button/Button';

import './style.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
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
          </nav>
          <span className="border"></span>
        </div>
        <div className="slogan">
          <div className="slogan__inner">
            <p className="slogan__top">Передовая IT студия</p>
            <h1 className="slogan__title">Мы создаем легкие решения сложных задач и проблем</h1>
            <Button>Наши проекты</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
