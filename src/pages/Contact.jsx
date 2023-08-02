import { Helmet } from 'react-helmet';


export const Contact = ()=> {





    return (

        <section className="contact" title="Контакти компанії Меваро">
        <Helmet>
        <title>{`Контактна інформація та місцезнаходження компанії Меваро`}</title>
        <meta
          name="description"
          content={`Контактна інформація компанії Меваро, яяка займається перетяжкою меблів в місті Київ`}
        />
        <meta
          name="keywords"
          content={`компанія Меваро`}
        />
        <link
          rel="canonical"
          href={`https://mevaro.kiev.ua/contact`}
        />
      </Helmet>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                    <h3 className="h3_title_company">Компанія Меваро</h3>
                            <p className="p_contact_company"><span className="span_contact_company">Скарги або пропозиції: <a href="mailto:mevarooffice@gmail.com">mevarooffice@gmail.com</a></span></p>
                            <p className="p_contact_company"><span className="span_contact_company">Контактний номер для замовлення консультацій: 095 71 62 677 Роман</span></p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='contact_box'>
                            <blockquote >
                                <div className='blockquoteByMevaro'>

<h3>Основні переваги компанії "Меваро":</h3>
<ul className="ul_blockquoteByMevaro">
    <li className="li_blockquoteByMevaro"><strong>Професійний підхід:</strong> Наша команда здатна зробити будь-яку мебель як нову, використовуючи високоякісні матеріали та сучасні технології.</li>
    <li className="li_blockquoteByMevaro"><strong>Індивідуальний дизайн:</strong> Ми допомагаємо клієнтам вибрати ідеальний дизайн, який відповідає їх смаку та стилю.</li>
    <li className="li_blockquoteByMevaro"><strong>Широкий вибір матеріалів:</strong> Ми пропонуємо різноманіття тканин та шкіри в різних кольорах та текстурах, що задовольнять найвибагливіші смаки.</li>
    <li className="li_blockquoteByMevaro"><strong>Конкурентні ціни:</strong> Ми пропонуємо доступні тарифи та адаптуємося під потреби кожного клієнта.</li>
    <li className="li_blockquoteByMevaro"><strong>Швидка та якісна робота:</strong> Ми дбаємо про терміни виконання замовлень, не компромітуючи якість.</li>
</ul>

<p>Компанія "Меваро" гордиться своєю репутацією надійного та професійного партнера для перетяжки м'якої меблі. Наші клієнти довіряють нам та знають, що звертаючись до нас, вони отримають меблі, які не тільки виглядають чудово, а й забезпечують комфорт та затишок на довгі роки.</p>

                                </div>
                            </blockquote>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='contact_map'>
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.6748414075405!2d30.39443367718619!3d50.44715697159162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdbf8c427727%3A0x8dd5ba36fc0e4ea5!2z0J_QtdGA0LXRgtGP0LbQutCwINC8J9GP0LrQuNGFINC80LXQsdC70ZbQsiAtINCg0LXQvNC-0L3RgiDQvCfRj9C60LjRhSDQvNC10LHQu9GW0LIgKE1ldmFybyk!5e0!3m2!1sru!2sua!4v1690821992636!5m2!1sru!2sua"
                        width="100%"
                        height="500"
                        style={{ border: 1}}
                        allowFullScreen="true"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Місце знаходження компанії Меваро"
                         ></iframe>    
                        </div>
                    </div>
                    <div></div>
                </div>

            </div>

        </section>
    )
}