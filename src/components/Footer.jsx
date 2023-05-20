import { useLocation } from 'react-router-dom';

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
                                <img src="../img/soc/instagram.png"
                                alt="Instagram"
                                loading='lazy'
                                cache-control='max-age=86400'
                                className="img_soc" />
                                <p className="text_soc">Instagram</p>
                            </a>
                        </div>
                        <div className="box_instgram">
                            <a href="https://www.facebook.com/www.mevaro.kiev.ua" rel="noreferrer" target="_blank" >
                                <img 
                                src="../img/soc/facebook.png"
                                alt="Facebook"
                                loading='lazy'
                                cache-control='max-age=86400'
                                className="img_soc" />
                                <p className="text_soc">Facebook</p>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="footer_box_two">
                    <div className="box_adress">
                        <p className='box_adress_p'>Наша Адреса:</p>
                        <p className='box_adress_p'>місто Київ</p>
                        <p className='box_adress_p'>метро Святошино - вул.Єскавторная 37</p>
                    </div>
                </div>

            </div>
        </section>
    )
}