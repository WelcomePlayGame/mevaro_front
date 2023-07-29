import { Swiper, SwiperSlide } from 'swiper/react';
import { getAllProducts, findUrlCategoriesViaIdByProduct } from '../../api'

// Import Swiper styles
import 'swiper/css';
import { lazy, useEffect, useState } from 'react';
import { Preloader } from '../Preloader';

export const SliderProduct = () => {
  const [productList, setProducts] = useState([]);
  const [categoryUrls, setCategoryUrls] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    const fetchCategoryUrls = async () => {
      const urls = [];
      for (const product of productList) {
        try {
          const categoryInfo = await findUrlCategoriesViaIdByProduct(product.id);
          urls.push(categoryInfo); // Предполагаем, что здесь возвращается строка URL-адреса категории
        } catch (error) {
          console.error(error);
        }
      }
      setCategoryUrls(urls);
    };

    fetchCategoryUrls();
  }, [productList]);

  const firstTenProducts = productList.slice(0, 10);
  return (
   <>
   {
    categoryUrls.length > 0 ? (
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        390: {
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
      {
        firstTenProducts.map((props) => (
          <SwiperSlide key={props.id} className='SliderProduct'>
            <div>
              <div>
              <img src={props.photoUrl} alt={props.title} className='mySwiperImg' loading='lazy' />

              </div>
              <div>
              <div className='slide_product_box_a'>
              
              <a href={`/${categoryUrls[props.id]}/${props.id}`} className='slide_product_a'>
                <span className='slide_product_a_span'> Докладніше</span>
              </a>
              
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
    ) : (
      <div>
        <span><Preloader/></span>
      </div>
    )
   }
   </>
  );
};