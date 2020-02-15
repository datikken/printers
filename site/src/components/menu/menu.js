import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Menu = () => (
  <div className="menu">
    <div className="menu_wrapper">
      <div className="menu_wrapper-item">
        <div className="menu_wrapper-item_hamburger">
          <img src={'/menu/hamburger.svg'} alt=""/>
        </div>
        <div className="menu_wrapper-item_secondary">
          <div className="menu_Wrapper-item_secondary-item">
            <ul className="menu_Wrapper-item_secondary-item_list">
              <li className="menu_Wrapper-item_secondary-item_list-item">
                <Link to="/catalog">
                  <span className="menu_Wrapper-item_secondary-item_list-item-text">Каталог</span>
                </Link>
              </li>
              <li className="menu_Wrapper-item_secondary-item_list-item">
                <span className="menu_Wrapper-item_secondary-item_list-item-text">Акции</span>
              </li>
              <li className="menu_Wrapper-item_secondary-item_list-item">
                <span className="menu_Wrapper-item_secondary-item_list-item-text">О нас</span>
              </li>
              <li className="menu_Wrapper-item_secondary-item_list-item">
                <span className="menu_Wrapper-item_secondary-item_list-item-text">Блог</span>
              </li>
              <li className="menu_Wrapper-item_secondary-item_list-item">
                <Link to="/contacts">
                  <span className="menu_Wrapper-item_secondary-item_list-item-text">Контакты</span>
                </Link>
              </li>
              <li className="menu_Wrapper-item_secondary-item_list-item">
                <Link to="/information">
                  <span className="menu_Wrapper-item_secondary-item_list-item-text">Информация</span>
                </Link>
              </li>
              <li className="menu_Wrapper-item_secondary-item_list-item">
                <span className="menu_Wrapper-item_secondary-item_list-item-text">Хит - парад принтеров</span>
              </li>
              <li className="menu_Wrapper-item_secondary-item_list-item">
                <span className="menu_Wrapper-item_secondary-item_list-item-text">Трекинг заказа</span>
              </li>
              <li className="menu_Wrapper-item_secondary-item_list-item">
                <span className="menu_Wrapper-item_secondary-item_list-item-text">Личный кабинет</span>
              </li>
              <li className="menu_Wrapper-item_secondary-item_list-item">
                <span className="menu_Wrapper-item_secondary-item_list-item-text">Корзина</span>
              </li>
              <li className="menu_Wrapper-item_secondary-item_list-item">
                <span className="menu_Wrapper-item_secondary-item_list-item-text">
                    <span className="menu_Wrapper-item_secondary-item_list-item-text_inner">
                        <span>+7 (495) 775 50 53</span>
                        <span>пн-пт 10:00 - 19:00</span>
                    </span>
                </span>
              </li>
              <li className="menu_Wrapper-item_secondary-item_list-item">
                <span className="menu_Wrapper-item_secondary-item_list-item-text">kakayatopochta@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu_wrapper-item_menuText">
            <span className="menu_wrapper-item_menuText-header">
                МЕНЮ
                <ul className="menu_wrapper-item-main_menu-item-text_secondary">
                    <li className="menu_wrapper-item-main_menu-item-text_secondary-text"><span>Оплата</span></li>
                    <li className="menu_wrapper-item-main_menu-item-text_secondary-text"><span>Доставка</span></li>
                    <li className="menu_wrapper-item-main_menu-item-text_secondary-text"><span>Гарантия</span></li>
                </ul>

                <ul className="menu_wrapper-item-main_menu">
                    <li className="menu_wrapper-item-main_menu-item-overlay"></li>
                    <li className="menu_wrapper-item-main_menu-item">
                        <span className="menu_wrapper-item-main_menu-item-text">
                            <Link to="/catalog">Каталог</Link>
                        </span>
                    </li>
                    <li className="menu_wrapper-item-main_menu-item">
                        <span className="menu_wrapper-item-main_menu-item-text">
                            О нас
                        </span>
                    </li>
                    <li className="menu_wrapper-item-main_menu-item">
                        <span className="menu_wrapper-item-main_menu-item-text">
                            Хит парад принтеров
                        </span>
                    </li>
                    <li className="menu_wrapper-item-main_menu-item">
                        <span className="menu_wrapper-item-main_menu-item-text">
                            Акции
                        </span>
                    </li>
                    <li className="menu_wrapper-item-main_menu-item">
                        <span className="menu_wrapper-item-main_menu-item-text">
                            Блог
                        </span>
                    </li>
                    <li className="menu_wrapper-item-main_menu-item">
                        <span className="menu_wrapper-item-main_menu-item-text">
                            <Link to="/information">Информация</Link>
                        </span>
                    </li>
                    <li className="menu_wrapper-item-main_menu-item">
                        <span className="menu_wrapper-item-main_menu-item-text">
                            Контакты
                        </span>
                    </li>
                    <li className="menu_wrapper-item-main_menu-item">
                        <span className="menu_wrapper-item-main_menu-item-text">
                            Еще какое-то меню
                        </span>
                    </li>
                </ul>
            </span>
        </div>
      </div>
      <div className="menu_wrapper-item">
        <div className="menu_wrapper-item_search">
          <div className="menu_wrapper-item_search_input">
            <input type="search" name="" placeholder="Введите модель принтера или артикул картриджа"/>
          </div>
          <div className="menu_wrapper-item_search_button">
            <img src={'/menu/zoomin.svg'} alt=""/>
          </div>
        </div>
      </div>
      <div className="menu_wrapper-item">
        <div className="menu_wrapper-item_tracking">
          <div className="menu_wrapper-item_tracking_icon">
            <img src={'/menu/tracking.svg'} alt=""/>
          </div>
          <div className="menu_wrapper-item_tracking_text"><span>Трекинг заказа</span></div>
        </div>
      </div>
      <div className="menu_wrapper-item">
        <div className="menu_wrapper-item_personal">
          <div className="menu_wrapper-item_personal_icon">
            <img src={'/menu/login.svg'} alt=""/>
          </div>
          <div className="menu_wrapper-item_personal_text"><span>Личный кабинет</span></div>
        </div>
      </div>
      <div className="menu_wrapper-item">
        <div className="menu_wrapper-item_cart">

          <Link to="/cart">
            <div className="menu_wrapper-item_cart_icon">
              <img src={'/menu/cart.svg'} alt=""/>
              <span className="menu_wrapper-item_cart_icon-amount">88</span>
            </div>
            <div className="menu_wrapper-item_cart_value">56834</div>
            <div className="menu_wrapper-item_cart_currency">
              <img src={'/menu/rub.svg'} alt=""/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

Menu.propTypes = {
  siteTitle: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
}

export default Menu
