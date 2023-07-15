export const AddFAQ = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="box_faq">
            <div className="box_faq_info">
              <figure>
                <blockquote className="box_faq_blockquote">
                  <h3 className="box_faq_h3">
                    Чому Ви берете передоплату 100% при покупці тканини?
                  </h3>
                </blockquote>
              </figure>
              <div className="box_faq_des">
                <span className="box_faq_span">
                  Тканина це відрізний матеріал і його повернути не можливо
                  згідно законодавству України (Відповідно до Постанови Кабінету
                  Міністрів України від 19 березня 1994 р. № 172 "Про реалізацію
                  окремих положень Закону України "Про захист прав споживачів"),
                  тому берется 100% від вартість замовлення.
                </span>
              </div>
            </div>
            <div className="box_faq_info">
              <figure>
                <blockquote className="box_faq_blockquote">
                  <h3 className="box_faq_h3">
                    Як Ви робите Доставку тканини до замовника?
                  </h3>
                </blockquote>
              </figure>
              <div className="box_faq_des">
                <span className="box_faq_span">
                  Доставку тканини до Замовника ми робимо через Нову Пошту.
                  Також є можливість забрати у нас за адресою вул.Єскаваторна
                  37.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
