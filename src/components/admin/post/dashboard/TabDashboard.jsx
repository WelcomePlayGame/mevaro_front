import { useState } from "react"
import { CategoriesTable } from "./info_dasboard/CategoriesTable";
import {ProductsTable} from './info_dasboard/ProductsTable'
import { OrderTable } from "./info_dasboard/OrderTable";
import { OrderMebel } from "./info_dasboard/OrderMebel";
export const TabDashboard = ()=> {

    const [isActive, setActive] = useState('categories')

const handleTabClick = (tabName)=> {
    setActive(tabName)
};



return (
<>
<div className="tab_buttons_dashbroad">
    <button 
    className={`btn_dashboard ${isActive==="categories"? "button_dashbroad_active" : ""}`}
    onClick={()=>{handleTabClick('categories')}}>
        Категорії
    </button>
    <button
    className={`btn_dashboard ${isActive==="products"? "button_dashbroad_active" : ""}`}
    onClick={()=> {handleTabClick('products')}}>
        Товари
    </button>
    <button
    className={`btn_dashboard ${isActive==="orders"? "button_dashbroad_active" : ""}`}
    onClick={()=> {handleTabClick('orders')}}>
        Замовлення на Тканину
    </button>
    <button
    className={`btn_dashboard ${isActive==="reports"? "button_dashbroad_active" : ""}`}
    onClick={()=> {handleTabClick('reports')}}>
        Звітність
    </button>
    <button
    className={`btn_dashboard ${isActive==="order_mebel"? "button_dashbroad_active" : ""}`}
    onClick={()=> {handleTabClick('order_mebel')}}>
        Замовлення на Перетяжку
    </button>
</div>

<div className="tab_dashboard">
{isActive === "categories" && <p className="tab-content_dashboard"><CategoriesTable/></p>}
{isActive === "products" && <p className="tab-content_dashboard"><ProductsTable/></p>}
{isActive === "orders" && <p className="tab-content_dashboard"><OrderTable/></p>}
{isActive === "order_mebel" && <p className="tab-content_dashboard"><OrderMebel/></p>}
</div>
</>
)


}