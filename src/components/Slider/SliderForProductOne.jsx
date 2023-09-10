import { useEffect, useState } from "react"
import {getProductBySlider, refreshToken} from "../../api"
import {FaEye} from "react-icons/fa";

export const SliderForProductOne = ()=> {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        refreshToken()
        .then(()=> getProductBySlider(sessionStorage.getItem("authToken")))
        .then((data)=>setProducts(data))
        .catch((error)=> console.error(error))
    }, []);
    const newProducts = products.slice(0,1)







    return (
        <>
        <section className="sliderforproductone">
            <h4 className="sliderforproductone_h4">Можливо Вас закацікавить!</h4>
            <span><FaEye className="faeye"/></span>
        {
            newProducts.map((product)=> (
                <div key={product.id}>
                    <div className="sliderforproductone_box">
                    <img src={product.photoUrl}  alt={product.title} className="sliderforproductone_img"/>
                    <div className="sliderforproductone_title_box">
                    <h5 className="sliderforproductone_title_h5">{product.title}</h5>
                    <a href={`/${product.category.url}/${product.id}` } className="sliderforproductone_a" title={`Дізнатися про тканину ${product.title}`}>Детальніше</a>
                    </div>
                    </div>
                </div>
            ))
        }
        </section>
        </>
    )
}