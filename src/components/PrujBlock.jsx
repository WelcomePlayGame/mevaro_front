



export const PrujBlock = () => {
    const isLinkActive = sessionStorage.getItem("isLinkActive");


    return (

        <section className={`pruj_block ${isLinkActive ? "active-animation" : ""}`}   title="Заміна пружинного блока" id="pruj" >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                    <div className="pruj_block_all">
                        <div className="pruj_block_box">
                            <h2 className="pruj_block_h2">Заміна Пружинного Блока</h2>
                            <div className="pruj_block_img">
                                <img src="./img/general/block.jpg" className="pruj_block_img_box" alt="Заміна пружинного блока" />
                            </div>
                        </div>
                        <div className="pruj_block_content">
                            <div className="pruj_block_content_col">
                                <h4 className="pruj_block_content_h4">Бюджетний Варіант</h4>
                                <ul className="pruj_block_content_ul">
                                    <li className="pruj_block_content_li pruj_block_content_price"> 4100 грн</li>
                                    <li className="pruj_block_content_li"><span>-</span>  Заміна Пружинного Блока</li>
                                    <li className="pruj_block_content_li"><span>-</span>  Гарантія 12 місяців</li>
                                    <li className="pruj_block_content_li"><span>-</span>  Безкоштовна Доставка</li>
                                </ul>
                            </div>
                            <div className="pruj_block_content_col">
                                <h4 className="pruj_block_content_h4">Середній Варіант</h4>
                                <ul className="pruj_block_content_ul">
                                    <li className="pruj_block_content_li pruj_block_content_price">4700 грн</li>
                                    <li className="pruj_block_content_li"><span>-</span>  Заміна Пружинного Блока</li>
                                    <li className="pruj_block_content_li"><span>-</span>  Гарантія 12 місяців</li>
                                    <li className="pruj_block_content_li"><span>-</span>  Безкоштовна Доставка</li>
                                    <li className="pruj_block_content_li"><span>-</span>  Заміна Поролона</li>
                                    <li className="pruj_block_content_li"><span>-</span>  Заміна Войлока</li>
                                </ul>
                            </div>
                            <div className="pruj_block_content_col">
                                <div className="pruj_block_content_h4_box">
                                <h3 className="pruj_block_content_h4">Люкс Варіант</h3>
                                </div>
                                <ul className="pruj_block_content_ul">
                                    <li className="pruj_block_content_li pruj_block_content_price">5700 +- грн</li>
                                    <li className="pruj_block_content_li"><span>-</span>  Заміна Пружинного Блока</li>
                                    <li className="pruj_block_content_li"><span>-</span>  Гарантія 12 місяців</li>
                                    <li className="pruj_block_content_li"><span>-</span>  Безкоштовна Доставка</li>
                                    <li className="pruj_block_content_li"><span>-</span>  Заміна Поролона</li>
                                    <li className="pruj_block_content_li"><span>-</span>  Заміна Войлока</li>
                                    <li className="pruj_block_content_li"><span>-</span>  Заміна Тканини</li>
                                </ul>
                            </div>
                        </div>
                        <a href='viber://chat?number=%2B380957162677' className="btn_pruj_block">Замовити Заміну Пружинного Блока</a>
                    </div>


                    </div>
                </div>
            </div>
        </section>

    )


}