import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
    <footer>
        <div className="footer_wrapper">
            <div className="footer_wrapper-item">
                <div className="footer_wrapper-item_logo">
                    <Link to="/">
                        ЛОГО
                    </Link>
                </div>
                <div className="footer_wrapper-item_info">
                    <span>Контактная информация</span>
                </div>
                <div className="footer_wrapper-item_tel">
                    <div className="footer_wrapper-item_tel-icon"></div>
                    <span>8 800 555 33 22</span>
                </div>
                <div className="footer_wrapper-item_adress">
                    <span>149390 Россия, Москва, ул. Набережные челны, д. 123,<br/> корпус 56, строение 88, подъезд 6, офис 987</span>
                </div>
                <div className="footer_wrapper-item_social">
                    <div className="footer_wrapper-item_social_facebook"></div>
                    <div className="footer_wrapper-item_social_email"></div>
                    <div className="footer_wrapper-item_social_instagram"></div>
                </div>
            </div>

            <div className="footer_wrapper-item">
                <div className="footer_cat">
                    <div className="footer_cat-item">
                        <div className="footer_cat-item_heading">
                            <span>Категории</span>
                        </div>
                    </div>
                    <div className="footer_cat-item">
                        <div className="footer_cat-item_list">
                            <ul>
                                <li><span>О нас</span></li>
                                <li><span>Блог</span></li>
                                <li><span>Акции</span></li>
                                <li><span>Контакты</span></li>
                                <li><span>Информация</span></li>
                                <li><span>Хит парад принтеров</span></li>
                            </ul>
                        </div>

                        <div className="footer_cat-item_list">
                            <ul className="footer_cat-item_list-ul">
                                <li><span><a href="/catalog">Каталог</a></span></li>
                                <li><span>Лазерные принтеры</span></li>
                                <li><span>Струйные принтеры</span></li>
                                <li><span>Ч/Б принтеры</span></li>
                                <li><span>Цветные принтеры</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_wrapper-item">
                <div className="footer_cat">
                    <div className="footer_cat-item">
                        <div className="footer_cat-item_heading">
                            <span>Поддержка</span>
                        </div>
                    </div>
                    <div className="footer_cat-item">
                        <div className="footer_cat-item_list">
                            <ul>
                                <li><span>Личный кабинет</span></li>
                                <li><span>Трекинг заказа</span></li>
                                <li><span>Корзина</span></li>
                                <li><span>Категории</span></li>
                                <li><span>Категории</span></li>
                                <li><span>Категории</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer
