import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ORDERS, URL, ADD, SELECT, USER, PASSWORD } from "../../cong";
import { sendOrderToTelegram } from "../../telegram";
export const OrderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [poshta, setPoshta] = useState("");
  const [product_id] = useState(data.id);
  const [price] = useState(+parseInt(data.price));
  const [meter] = useState(+parseInt(data.meter));
  const [title] = useState(data.title);
  const credentials = `${USER}:${PASSWORD}`;

  const addOrder = async (e) => {
    e.preventDefault();

    const orderData = {
      name: name,
      phone: phone,
      product: title,
    };
    sendOrderToTelegram(orderData);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("city", city);
    formData.append("poshta", poshta);
    formData.append("product_id", product_id);
    formData.append("price", price);
    formData.append("meter", meter);
    formData.append("title", title);

    try {
      const response = await fetch(`${URL}${ORDERS}${SELECT}${ADD}`, {
        method: "POST",
        headers: {
          Authorization: `Basic ${btoa(credentials)}`,
        },
        body: formData,
      });
      return response;
    } catch (error) {
      console.error(error);
    }

    navigate("/success", {
      state: {
        id: product_id,
        name: name,
        title: title,
      },
    });
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="ordered_box">
            <div className="ordered_box_form">
              <form className="ordered_form" onSubmit={addOrder}>
                <div className="ordered_box_input">
                  <label className="ordered_label">
                    Напишить Імя та Призвіще
                  </label>
                  <input
                    className="ordered_input"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Імя та Призвіще"
                    minLength={5}
                    pattern="^[А-Яа-яЁёA-Za-z]+$"
                    title="Введіть Ваше Імя та Призвіще"
                    required
                  />
                </div>
                <div className="ordered_box_input">
                  <label className="ordered_label">
                    Напишить мобільний номер
                  </label>
                  <input
                    className="ordered_input"
                    type="text"
                    name="mobile"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+380_ _ _ _ _"
                    pattern="[0-9]*"
                    maxLength={10}
                    minLength={10}
                    title="Напишиіть мобільний номер"
                    required
                  />
                </div>
                <div className="ordered_box_input">
                  <label className="ordered_label">Місто для Відправки</label>
                  <input
                    className="ordered_input"
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Укажіть місто"
                    pattern="^[А-Яа-яЁёA-Za-z]+$"
                    minLength={3}
                    title="Введіть назву населенного пункту"
                    required
                  />
                </div>
                <div className="ordered_box_input">
                  <label>Номер Нової Почти</label>
                  <input
                    className="ordered_input"
                    type="text"
                    name="poshta"
                    value={poshta}
                    onChange={(e) => setPoshta(e.target.value)}
                    placeholder="№"
                    pattern="[0-9]*"
                    minLength={1}
                    maxLength={4}
                    title="Введіть Номер Нової Почти"
                    required
                  />
                </div>
                <button type="submit" className="ordered_btn">
                  Оформити
                </button>
              </form>
            </div>
            <div className="ordered_box_list">
              <img
                src={data.photo}
                alt={data.title}
                className="ordered_box_image"
              />
              <ul className="ordered_ul">
                <li className="ordered_li">Замовленна Тканина: {title}</li>
                <li className="ordered_li">Загальна Вартість: {price} грн</li>
                <li className="ordered_li">Загальний метраж: {meter} метрів</li>
                <li className="ordered_li">Імя та Призвіще: {name}</li>
                <li className="ordered_li">Мобільний Номер: +38{phone}</li>
                <li className="ordered_li">Місто для Відправки: {city}</li>
                <li className="ordered_li">Номер Нової Почти: {poshta}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
