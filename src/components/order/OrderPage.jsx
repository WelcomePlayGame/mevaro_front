import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ORDERS, URL, ADD,SELECT, USER, PASSWORD } from '../../cong';
export const OrderPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [poshta, setPoshta] = useState('');
    const [product_id] = useState(data.id);
    const [price] = useState(+parseInt(data.price));
    const [meter] = useState(+parseInt(data.meter));
    const [title] = useState(data.title);
    const [number, setNumber] = useState('')
    const credentials = `${USER}:${PASSWORD}`

   const min = 1;
   const max = 10000;
   



    const addOrder = async (e) => {
        e.preventDefault();
        const countOrder = Math.floor(Math.random()*(max-min+1))+min;
        setNumber('№'+countOrder);

        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('city', city);
        formData.append('poshta', poshta);
        formData.append('product_id', product_id);
        formData.append('price', price);
        formData.append('meter', meter);
        formData.append('title', title);
        formData.append('number', number);
        try {
            const response = await fetch(`${URL}${ORDERS}${ADD}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${btoa(credentials)}`
                },
                body: formData
            });
        } catch (error) {
            console.error(error)
        }
        
        navigate('/success', {state: {
            id: product_id,
            name: name,
            title: title
        }})
    }



    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="ordered_box">
                        <div className="ordered_box_form">
                            <form className='ordered_form' onSubmit={addOrder}>
                                <div className="ordered_box_input">
                                    <label className='ordered_label'>Напишить Імя та Призвіще</label>
                                    <input
                                        className='ordered_input'
                                        type='text'
                                        name='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder='Імя та Призвіще'
                                    />
                                </div>
                                <div className="ordered_box_input">
                                    <label className='ordered_label'>Напишить мобільний номер</label>
                                    <input
                                        className='ordered_input'
                                        type='text'
                                        name='mobile'
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder='+380_ _ _ _ _'
                                    />
                                </div>
                                <div className="ordered_box_input">
                                    <label className='ordered_label'>Місто для Відправки</label>
                                    <input
                                        className='ordered_input'
                                        type='text'
                                        name='city'
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder='Укажіть місто'
                                    />
                                </div>
                                <div className="ordered_box_input">
                                    <label>Номер Нової Почти</label>
                                    <input
                                        className='ordered_input'
                                        type='text'
                                        name='poshta'
                                        value={poshta}
                                        onChange={(e) => setPoshta(e.target.value)}
                                        placeholder='№'
                                    />
                                </div>
                                <button type='submit' className='ordered_btn'>Оформити</button>
                            </form>
                        </div>
                        <div className="ordered_box_list">
                            <img src={data.photo} alt={data.title} className='ordered_box_image' />
                            <ul className='ordered_ul'>
                                <li className='ordered_li'>Замовленна Тканина: {title}</li>
                                <li className='ordered_li'>Загальна Вартість: {price} грн</li>
                                <li className='ordered_li'>Загальний метраж: {meter} метрів</li>
                                <li className='ordered_li'>Імя та Призвіще: {name}</li>
                                <li className='ordered_li'>Мобільний Номер: {phone}</li>
                                <li className='ordered_li'>Місто для Відправки: {city}</li>
                                <li className='ordered_li'>Номер Нової Почти: {poshta}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}