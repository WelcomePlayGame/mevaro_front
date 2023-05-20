import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Success = () => {

    const location = useLocation();
    const data = location.state;
    const [id, setId] = useState(data.id);
    const [name , setName] = useState(data.name);
    const [title, setTitle] = useState(data.title);
    return (
        <div className="container">
            <div className="row">
                <div className="success">
                    <h3 className='success_h3'>{name} Ваше замовлення на тканину {title} прийнято.</h3>
                    <div className='success_info'>
                    <span className='success_span'>Ми з Вами скоро свяжемся для уточнення</span>
                    </div>
                </div>
            </div>
        </div>
    )
}