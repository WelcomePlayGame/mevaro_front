export const AuxiliaryCharacteristis = () => {
  return (
    <section>
      <div className="auxiliary__product_box">
        <div className="auxiliary_box">
          <img
            src="/img/icon_aux/do-not-wash.png"
            alt="Не прати"
            className="auxiliary_img"
          />
          <h6 className="auxiliary_h6_text">Не прати</h6>
        </div>
        <div className="auxiliary_box">
          <img
            src="/img/icon_aux/no-iron.png"
            alt="Не прасувати"
            className="auxiliary_img"
          />

          <h6 className="auxiliary_h6_text">Не прасувати</h6>
        </div>
        <div className="auxiliary_box">
          <img
            src="/img/icon_aux/thermometer.png"
            alt="Не розміщувати біля нагрівачів"
            className="auxiliary_img"
          />
          <h6 className="auxiliary_h6_text">Не підпалювати</h6>
        </div>
      </div>
    </section>
  );
};
