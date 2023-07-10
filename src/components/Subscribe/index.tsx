import React from 'react';
import Title from '../custom/Title/Title';

import './style.scss';

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe__inner">
        <div className="container">
          <div className="subscribe__top">
            <Title style={{ fontSize: '18px' }}>Подпишитесь на нашу рассылку</Title>
            <p className="subscribe__text">
              Полезные статьи, акции, новости - получите все это сейчас!
            </p>
          </div>
          <form className="subscribe__form">
          <input className="subscribe__form-input" type="text" placeholder="Ваш e-mail" />
          <button type="submit" className="subscribe__form-button"  >Подписаться</button>
        </form>
        <p className="subscribe__message">Мы не шлем спам, и передаем никому ваши данные.</p>
        </div>
       
      </div>
    </div>
  );
};

export default Subscribe;
