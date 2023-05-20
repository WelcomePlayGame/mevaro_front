import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {ImPhone} from 'react-icons/im'


export function Header() {

    const location = useLocation();
    const isCategories = location.pathname.startsWith('/categories');
    const isNotCategories = !isCategories;
    const [isOpen, setIsOpen] = useState(false)


    const toggleMenu = () => {
        setIsOpen(!isOpen)
        console.log('1')
    }



    return (
        <header>
            <nav>
                <div className="container">
                    <ul className={`menu ${isOpen ? 'menu_active' : ''}`} onClick={toggleMenu}>
                        {isNotCategories && (
                            <li className="menu_item"><a href="/#reasons" className="menu_link" title="Переваги перетяжки меблі">Переваги</a></li>
                        )}
                        {isCategories && (
                            <li className="menu_item"><a href="/" className="menu_link" title="Переваги перетяжки меблі">Перетяжка меблів Київ</a></li>
                        )}
                        {isNotCategories && (
                            <li className="menu_item"><a href="/#comment_id" className="menu_link" title="Відгуки о Меваро">Відгуки</a></li>
                        )}
                        {isNotCategories && (
                            <li className="menu_item"><a href="/#box_slider" className="menu_link" title="Зразки робот від Меваро">Наші роботи</a></li>
                        )}
                        <li className="menu_item"><Link to="/categories" className="menu_link" title="Тканини які використовує Меваро">Зразки тканин</Link></li>
                        <li className="menu_item"><Link to="https://mevaro.kiev.ua/#pruj" className="menu_link" title="Контакти компанії Меваро">Замінити Пружинний Блок</Link></li>
                    </ul>
                </div>
                <div className={`hamburger ${isOpen ? 'hamburger_active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            <div className="subheader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <a href="/" className="subheader_logo">
                                <img className="subheader_logo_img"
                                 src="../logo/logo.png" 
                                 alt="Логотип Меваро"
                                 loading='lazy'
                                 cache-control="max-age=86400"
                                 /></a>
                            <div className="subheader_text"><h1>Перетяжка меблів Київ</h1></div>
                        </div>
                        <div className="col-md-4">
                            <div className="subheader_call">Телефонуйте кожний день</div>
                            <a href="tel: +380957162677" className="subheader_phone"><span>{<ImPhone className='subheader_phone_number' color='black'/>}</span> 0957162677</a>
                        </div>
                        {isCategories && (
                            <div className="col-md-4">
                                <div className="box_subheader_btn">
                                   <a className="subheader_btn" href='viber://chat?number=%2B380957162677' title="Відправка фото меблів на Вайбер">Написати Меваро</a>
                                </div>
                            </div>
                        )}

                        {isNotCategories && (
                            <div className="col-md-4">
                                <div className='box_subheader_btn'>
                                    <a className="subheader_btn" href='viber://chat?number=%2B380957162677' title="Відправка фото меблів на Вайбер">Написати Меваро</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>


        </header>
    )
}