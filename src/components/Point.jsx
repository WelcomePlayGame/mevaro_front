import { PrujBlock } from "./PrujBlock";


export function Point() {



    return (
        <section className="point" title="Переваги перетяжки меблів в місті Київ від Меваро" id="reasons">
            <div className="container">
                <div className="point_liner"></div>
                <h2 className="point_header" title="Переваги перетяжки меблів Київ">Переваги перетяжки меблів</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="point_block">
                            <div className="point_block_logo"><img src="./logo/correct.png" alt="Єкономія Ваших сімейних коштів" className="point_logo_img" /></div>
                            <div className="point_block_des">Єкономія Ваших сімейних коштів</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="point_block">
                            <div className="point_block_logo"><img src="./logo/correct.png" alt="Єкономія Ваших сімейних коштів" className="point_logo_img" /></div>
                            <div className="point_block_des">Широкий вибір тканин для Ваших меблів</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="point_block">
                            <div className="point_block_logo"><img src="./logo/correct.png" alt="Єкономія Ваших сімейних коштів" className="point_logo_img" /></div>
                            <div className="point_block_des">Широкий вибір тканин для Ваших меблів</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="point_block">
                            <div className="point_block_logo"><img src="./logo/correct.png" alt="Єкономія Ваших сімейних коштів" className="point_logo_img" /></div>
                            <div className="point_block_des">Доставка/Вивіз по місту Київ Безкоштовна</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="point_block">
                            <div className="point_block_logo"><img src="./logo/correct.png" alt="Єкономія Ваших сімейних коштів" className="point_logo_img" /></div>
                            <div className="point_block_des">Можливість обрати антикіготь для меблів</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="point_block">
                            <div className="point_block_logo"><img src="./logo/correct.png" alt="Єкономія Ваших сімейних коштів" className="point_logo_img" /></div>
                            <div className="point_block_des">Гарантія 12 місяців по Договору</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="point_liner_two"></div>
                    <div className="point_text">
                        <p> Перетяжку меблів варто замовляти, якщо Ви маєте згоду хоч з одною ремаркою. По-перше потрібно розуміти, якої якості у Вас каркас, так як раніше якості виробу приділяли набагато більше уваги.</p>
                        <p>Можливість обрати більш якісну тканину, так як в профільних магазинах використовують завжди бюджетні тканини. </p>
                        <p>Обираючи якісну тканину Ви отримуєте якісний виріб та прекрасний вигляд Вашого інтерьєру
                            майбутнього інтерьєру. Компанія Меваро використовує якісні турецьки тканини, які своєю якістью завоюють сердце навіть смамого вибагливого покупця.</p>
                        <p> Також з разом з перетяжкою Меваро може провести ремонт, замінити поролон, ДВП або фанеру.</p>
                    </div>
                </div>
            </div>
            <>
            <PrujBlock/>
            </>
            <div className="point_plus">
                <div className="container">
                    <div className="col-md-12">
                        <h3 className="point_plus_header">Меваро проводить Додаткові роботи:</h3>
                        <div className="block_plus_li">
                            <blockquote className="point_plus_li">+ Заміна поролона (ППУ) в виробі</blockquote>
                            <blockquote className="point_plus_li">+ Заміна ДВП, фанери або ДСП</blockquote>
                            <blockquote className="point_plus_li">+ Заміна пружинного блока</blockquote>
                            <blockquote className="point_plus_li">+ Заміна або ремонту механізму розкладки</blockquote>
                            <blockquote className="point_plus_li">+ Виговтолення подушек за Вашими розмірами</blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}