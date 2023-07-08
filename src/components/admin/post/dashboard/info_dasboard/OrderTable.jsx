
import { useEffect, useState } from 'react'
import {getAllOrders} from '../../../../../api'
export const OrderTable = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getAllOrders().then((data)=>{
            setOrders(data)
        });
    }, []);


    return (

        <section className="container">
        <div className="row">
         <div className="col-md-12">
          <table className="table">
             <thead>
                 <tr>
                     <th colSpan={100}>Список Продуктів</th>
                 </tr>
                 <tr>
                     <th>№</th>
                     <th>Назва</th>
                     <th>Телефон</th>
                     <th>Загальна Вартість</th>
                 </tr>
             </thead>  
             <tbody>
                 {
                     orders.map((order) => (
                         <tr key={order.id}>
                             <td className="td_table">{order.number_order}</td>
                             <td className="td_table">{order.title}</td>
                             <td className="td_table">{order.phone}</td>
                             <td className="td_table">{order.price}</td>
                             <td className="td_table">{order.meter}</td>
                             <td className="td_table">{order.city}</td>
                             <td className="td_table">{order.poshta}</td>
                             <td>
                                <button className={`${order.confirm ===     false ? "order_button_false" : "order_button_true"}`}>
                                <p>Підтвердити?</p>
                                </button>
                             </td>
                         </tr>
                     ))
                 }
             </tbody>  
         </table>
         </div>
        </div>
     </section>

    )
}