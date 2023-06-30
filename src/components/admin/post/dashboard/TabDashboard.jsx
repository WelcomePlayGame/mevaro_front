import { useState } from "react"
import { CategoriesTable } from "./info_dasboard/CategoriesTable";
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
        Замовлення
    </button>
    <button
    className={`btn_dashboard ${isActive==="reports"? "button_dashbroad_active" : ""}`}
    onClick={()=> {handleTabClick('reports')}}>
        Звітність
    </button>
</div>

<div className="tab_dashboard">
{isActive === "categories" && <p className="tab-content_dashboard"><CategoriesTable/></p>}
</div>
</>
)


}