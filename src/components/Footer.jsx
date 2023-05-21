import { useLocation } from 'react-router-dom';
import {FaInstagram, FaFacebookSquare} from "react-icons/fa";
export const Footer = () => {

    const location = useLocation();
    const isAdminPage = location.pathname.startsWith('/admin');

    if (isAdminPage) {
        return null;
    }


    return (

        <section className="footer" title="Контакти Компанії Меваро">
            <div className="footer_box">

                <div className="footer_box_one">
                    <p className='box_soc_p'>Ми в соціальних мережах:</p>
                    <div className="box_soc">
                        <div className="box_instgram">
                            <a href="https://www.instagram.com/mevaro_peretyajka/" rel="noreferrer" target="_blank" >
                                <FaInstagram className='box_soc_icon'/>
                                <p className="text_soc">Instagram</p>
                            </a>
                        </div>
                        <div className="box_instgram">
                            <a href="https://www.facebook.com/www.mevaro.kiev.ua" rel="noreferrer" target="_blank" >
                                <FaFacebookSquare className='box_soc_icon'/>
                                <p className="text_soc">Facebook</p>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="footer_box_two">
                    <div className="box_adress">
                        <p className='box_adress_p'>Наша Адреса:</p>
                        <p className='box_adress_p'>місто Київ</p>
                        <p className='box_adress_p'>метро Святошино - вул.Экскаваторная 37</p>
                    </div>
                </div>

            </div>
        </section>
    )
}