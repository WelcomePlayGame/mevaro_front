import {  useState } from 'react'
import {URL, UPDATE, CONFIRM, ORDERS} from '../../cong'
import {refreshToken} from "../../api"

export const UpdateConfirmOrder = ({order})=> {

const [isConfirm, setConfirmButton] = useState('Підвердити?');
const [confirm, setConfirm] = useState(order.confirm);


const updateConfirmOrder = async (e)=> {
    e.preventDefault();
    refreshToken();
    if(order.confirm===true) {
        setConfirm(!order.confirm)
    } else {
        setConfirm(!order.confirm)
    }
    if(order.confirm===true) {
        setConfirmButton('Ok')
    } else {
        setConfirmButton(`Ні`)
    }
    
    const formData = new FormData();
    formData.append('confirm', confirm);
    console.log(order.confirm)

    try{
        const response = await fetch(`${URL}${ORDERS}${UPDATE}${CONFIRM}${order.id}`, {
            method: "PATCH",
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("authToken")}`
            },
            body:formData
        });

        if(!response.ok) {
            return new Error(`Response not ok - ${URL}${UPDATE}${CONFIRM}${order.id}`)
        }
        return response;

    } catch(error) {
        console.error(error)
        return error;
    }

}

    return (
        <section>
            <button className={`${order.confirm === false ? "order_button_false" : "order_button_true"}`} onClick={updateConfirmOrder}>
                                 <span>{isConfirm}</span>
            </button>
        </section>
    )
}