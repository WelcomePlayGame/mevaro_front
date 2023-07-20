
import { register } from 'swiper/element/bundle';
import { EffectFade, Navigation, Pagination } from "swiper";
export const Slider = (props) => {


    register();

    return (
        <section className="slider" id="box_slider" title='Роботи Компанії Меваро'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="slide_all">
                            <swiper-container
                                slidesPerView={`3`}
                                spaceBetween={30}
                                effect={"fade"}
                                navigation={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[EffectFade, Navigation, Pagination]}
                                className="mySwiper"
                            >
                                <swiper-slide lazy="true">
                                    <img src="../img/slider/lijkoDO.jpg" alt="" loading="lazy" />
                                    <span className='text_slider'></span>
                                </swiper-slide>
                                <swiper-slide lazy="true">
                                    <img src="../img/slider/lijkoPOSLE.jpg" alt="" loading="lazy" />
                                    <span className='text_slider'></span>
                                </swiper-slide>
                            </swiper-container>
                        </div>
                        <a href="https://www.facebook.com/www.mevaro.kiev.ua/photos" rel="noreferrer" target="_blank" className='a_slider'>Переглянути Всі Роботи</a>
                    </div>
                </div>
            </div>
        </section>
    )
}