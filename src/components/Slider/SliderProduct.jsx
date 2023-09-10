import React, { useEffect, useState } from 'react';
import { getProductBySlider, refreshToken } from '../../api'
import { Preloader } from '../Preloader';


export const SliderProduct = () => {
  const [productList, setProducts] = useState([]);
  const [token] = useState(sessionStorage.getItem('authToken'))
  useEffect(() => {
    refreshToken()
      .then(() => getProductBySlider(sessionStorage.getItem('authToken')))
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
   <>
        <section className="slider_product">
        <h5 className='article_wrapper_slider_h5'>Тканини для перетяжки</h5>
          <div className='article_wrapper_slider'>
            {
                productList.map((product)=> (
                    <div key={product.id} className="article_box">
                        <img src={product.photoUrl} alt={product.title} className="article_slide_img"/>
                        <span className="article_slide_title">{product.title.slice(0,20)} ...</span>
                        <hr className="article_slide_hr"/>
                        <a href={`/${product.category.url}/${product.id}`} className="article_slide_a">Читати далі</a>
                    </div>
                ))
            }
            
          </div>
        </section>
   </>  
  );
};