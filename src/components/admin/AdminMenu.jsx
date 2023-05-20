import { Link, useLocation } from "react-router-dom";


export const AdminMenu = () => {


    const location = useLocation()
    const isAdminMenu = location.pathname.startsWith('/admin');

    if (!isAdminMenu) {
        return null;
    }

    return (

        <section className="header_admin">
            <nav>
                <div className="container">
                    <div className="row">
                        <ul className="menu_admin">
                            <li className="li_admin"><Link to="/" className="a_admin" target="_blanck">Сайт</Link></li>
                            <li className="li_admin"><Link to="/admin/addcategories" className="a_admin">Додати Категорію</Link></li>
                            <li className="li_admin"><Link to="/admin/addpost" className="a_admin">Додати товар</Link></li>
                            <li className="li_admin"><Link to="/admin/dashboard" className="a_admin">Панель</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </section>

    )
}