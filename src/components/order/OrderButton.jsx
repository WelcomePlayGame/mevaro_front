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
        <OrderModal isOpen={isModalOpen} closeModal={handleOrderClosed} product={product}/>
        </>            
        </section>
    )
}