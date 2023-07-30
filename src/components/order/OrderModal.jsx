import { useState } from 'react'
import Modal from 'react-modal'
import { CURRENT_USD } from '../../cong'
import { useNavigate } from 'react-router-dom'

export const OrderModal = ({ isOpen, closeModal, product }) => {

    const [meter, setMeter] = useState(1)
    const navigate = useNavigate();

    const handleDecrement = () => {
        if (meter > 1) {
            setMeter((prevMeter) => prevMeter - 1);
        }
    };

    const handleIncrement = () => {
        setMeter((prevMeter) => prevMeter + 1);
    };


    const handleSale = () => {
        let price = (product.money * CURRENT_USD * meter);
        let minFive = price - price * 0.05
        let minTen = price - price * 0.1
        let minTwenty = price - price * 0.15

        if (meter <= 5) {
            return price;
        } else if (meter < 10) {
            return minFive;
        } else if (meter < 20) {
            return minTen;
        } else {
            return minTwenty;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/order', {state: {
            id : product.id,
            title : product.title,
            photo : product.photoUrl,
            meter : meter,
            price : handleSale()
        }})
    };

    const handleValueMetr = () => {
        let ending = 'метр';
      
        if (meter % 10 === 1 && meter % 100 !== 11) {
          ending = 'метр';
        } else if (
          (meter % 10 === 2 && meter % 100 !== 12) ||
          (meter % 10 === 3 && meter % 100 !== 13) ||
          (meter % 10 === 4 && meter % 100 !== 14)
        ) {
          ending = 'метри';
        } else {
          ending = 'метрів';
        }
      
        return ending;
      };
      

    return (
        <section className='order'>
            <>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    className={`custom_modal ${isOpen ? 'custom_modal_open' : ''}`}
                >
                    <div className="container">
                        <div className="row">
                            <div className="order_form_box">
                                <form
                                    onSubmit={handleSubmit}
                                    className="order_form"
                                    overlayClassName="custom_overlay">
                                    <h4 className='order_form_h4'>{product.title}</h4>
                                    <div className="box_meter">
                                        <button type='button' onClick={handleDecrement}>-</button>
                                        <input type="number"
                                            className='input_text'
                                            name='meter'
                                            value={meter}
                                            onChange={(e) => setMeter(parseInt(e.target.value))}
                                        />
                                        <button type='button' onClick={handleIncrement}>+</button>
                                    <span type="text" className='box_meter_count'>{handleValueMetr()}</span>
                                    </div>
                                    <div className="box_meter_list">
                                        <ul className='box_meter_ul'>
                                            <li className='box_meter_li'>від 5 метрів - 5% знижка</li>
                                            <li className='box_meter_li'>від 10 метрів - 10% знижка</li>
                                            <li className='box_meter_li'>від 20 метрів - 15% знижка</li>
                                        </ul>
                                    </div>
                                        <h5 className='order_form_h5'>Загальна Вартість: {handleSale()} грн</h5>
                                    <button type='submit' className='order_form_btn'>Замовити</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal>
            </>
        </section>
    )
}