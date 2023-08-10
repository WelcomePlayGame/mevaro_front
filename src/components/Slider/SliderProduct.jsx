import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { getAllProducts, findUrlCategoriesViaIdByProduct } from '../../api';
import { Preloader } from '../Preloader';

export const SliderProduct = () => {
  const [productList, setProducts] = useState([]);
  const [categoryUrls, setCategoryUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getAllProducts();
        setProducts(products);

        const categoryPromises = products.map(async (product) => {
          try {
            const categoryInfo = await findUrlCategoriesViaIdByProduct(product.id);
            return categoryInfo;
          } catch (error) {
            console.error(error);
            return null;
          }
        });

        const categories = await Promise.all(categoryPromises);
        setCategoryUrls(categories.filter((category) => category !== null));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Preloader />
      </div>
    );
  }

  const firstTenProducts = productList.slice(0, 3);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1500: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {firstTenProducts.map((product) => (
        <SwiperSlide key={product.id} className='SliderProduct'>
          <div>
            <div>
              <img src={product.photoUrl} alt={product.title} className='mySwiperImg' />
            </div>
            <div>
              <div className='slide_product_box_a'>
                <a href={`/${categoryUrls[product.id]}/${product.id}`} className='slide_product_a' rel="preload" as="image">
                  <span className='slide_product_a_span'> Докладніше</span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderProduct;
