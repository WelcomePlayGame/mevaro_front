import { useState } from "react"
import {OrderModal} from "./OrderModal"

export const OrderButton = ({product})=> {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOrderOpen = ()=> {
        setIsModalOpen(!isModalOpen);
    }

    const handleOrderClosed = ()=> {
        setIsModalOpen(false)
    }

    return (
        <section>
        <>
        <button onClick={handleOrderOpen} className="order_btn">Додати</button>
        <p className="order_hint">*фото не передає на 100% колір</p>
        <OrderModal isOpen={isModalOpen} closeModal={handleOrderClosed} product={product}/>
        </>            
        </section>
    )
}