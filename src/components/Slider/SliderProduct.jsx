import { useEffect, useState } from 'react';
import {getAllProducts} from '../../api'
import { register } from 'swiper/element/bundle';
import { EffectFade, Navigation, Pagination } from "swiper";


export const SliderProduct = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      getAllProducts().then((data) => {
        setProducts(data);
      });
    }, []);
  
    useEffect(() => {
      register();
    }, []);
  
    const displayedProducts = products.slice(0, 3); // Ограничение до 3 товаров
  
    return (
      <>
        <swiper-container
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
            clickable: true,
            }}
             modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
        >
          {displayedProducts.map((product) => (
            <swiper-slide key={product.id}>
              <img src={product.photoUrl} alt={product.title} />
            </swiper-slide>
          ))}
        </swiper-container>
      </>
    );
  }
  