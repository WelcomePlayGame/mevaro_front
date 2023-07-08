import { useEffect, useState} from "react"
import {getAllProducts} from '../../../../../api'
import {Link} from 'react-router-dom'
export const ProductsTable = () => {

const [products, setProducts] = useState([]);

useEffect(() => {
    getAllProducts().then((data)=>{
        setProducts(data)
    });
}, []);



return (
    <section className="container">
       <div className="row">
        <div className="col-md-12">
         <table className="table">
            <thead>
                <tr>
                    <th colSpan={100} className="th_table">Список Продуктів</th>
                </tr>
                <tr>
                    <th>№</th>
                    <th>Назва</th>
                </tr>
            </thead>  
            <tbody>
                {
                    products.map((product) => (
                        <tr key={product.id}>
                            <td className="td_table">{product.id}</td>
                            <td className="td_table">{product.title}</td>
                            <td className="td_table">
                                <button >
                                <Link to={`/admin/product/editor/${product.id}`}>Редагувати</Link>
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