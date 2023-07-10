import './style.scss';
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div className="footer__inner" 
        initial='hidden'
        whileInView='visible'
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
        }}
        transition={{duration: 1}}
        >
          <div className="footer__col-one"
    
          >
            <h2 className="footer__title">Контактная информация</h2>
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link mail" href="/">
                  test@test.ru
                </a>
              </li>

              <li className="footer__item">
                <a className="footer__link phone" href="/">
                  +8 777 555 66 99
                </a>
              </li>

              <li className="footer__item">
                <a className="footer__link location" href="/">
                  Москва, Бульвар Ленина 33
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col-two"
       
          
          >
            <h2 className="footer__title">Основные ссылки</h2>
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="/">
                  Главная
                </a>
              </li>

              <li className="footer__item">
                <a className="footer__link" href="/">
                  Наши проекты
                </a>
              </li>

              <li className="footer__item">
                <a className="footer__link" href="/">
                  Наши услуги
                </a>
              </li>

              <li className="footer__item">
                <a className="footer__link" href="/">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col-three">
            <h2 className="footer__title">Наши проекты</h2>
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="/">
                  РосНано
                </a>
              </li>

              <li className="footer__item">
                <a className="footer__link" href="/">
                  Сколково
                </a>
              </li>

              <li className="footer__item">
                <a className="footer__link" href="/">
                  Проект “Восток
                </a>
              </li>

              <li className="footer__item">
                <a className="footer__link" href="/">
                  ТЭЦ Калининграда
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col-four">
            <h2 className="footer__title">Социальные сети</h2>
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="/">
                  VK.com
                </a>
              </li>

              <li className="footer__item">
                <a className="footer__link" href="/">
                  Instagram
                </a>
              </li>

              <li className="footer__item">
                <a className="footer__link" href="/">
                  Facebook
                </a>
              </li>

              <li className="footer__item">
                <a className="footer__link" href="/">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
        <span className="border"></span>

        <p className="footer__copyright">(с) 2019. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
