import { useEffect, useState } from "react";
import { getAllCategories } from "../../../../../api";
import {Link} from "react-router-dom"
export const CategoriesTable = ()=> {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            setCategories(data);
        })
    }, []);



    return (

      <section className="container">
        <div className="row">
            <div className="col-md-12">
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan={100} className="th_table">
                        <span className="th_table_span">Список Категорій</span>
                        </th>
                    </tr>
                    <tr>
                        <th>№</th>
                        <th>Назва</th>
                        <th>URl</th>
                        <th>Кількість товарів</th>
                    </tr>
                </thead>
                <tbody>
                {
                    categories.map((category)=>(
                        <tr key={category.id}>
                            <td className="td_table">{category.id}</td>
                            <td className="td_table">{category.title}</td>
                            <td className="td_table">{category.url}</td>
                            <td>{category.products.length}</td>
                            <td className="td_table">
                                <button>
                                    <Link to={`/admin/category/editor/${category.id}`}>Редагувати</Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
      </section>
    )

}