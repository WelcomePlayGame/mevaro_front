import { useEffect, useState } from "react"
import {getAllOrderByMebel} from '../../../../../api'

 
export const OrderMebel = ()=> {

    const [order_mebel, setOrder_Mebel] = useState([]);

    useEffect(()=> {
        getAllOrderByMebel().then((data)=> {
            setOrder_Mebel(data)
        })
    }, [])


    return (
        <section>
            <h1>Order</h1>
        </section>
    )
}