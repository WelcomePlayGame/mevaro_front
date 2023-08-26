import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getProductBySlider } from '../../api'
import { Preloader } from '../Preloader';


export const SliderProduct = () => {
  const [productList, setProducts] = useState([]);
  const [token, setAuthToken] = useState(localStorage.getItem('authToken'))
  useEffect(()=> {
    getProductBySlider(token).then((data)=> {
      setProducts(data)
    })
  }, [token])

  return (
   <>
   {
    productList.length > 0 ? (
      <Swiper
      breakpoints={{
        375: { slidesPerView: 1, spaceBetween: 20 },
        576: { slidesPerView: 1, spaceBetween: 20 },
        767: { slidesPerView: 1, spaceBetween: 20 },
        991: { slidesPerView: 1, spaceBetween: 10 },
        1200: { slidesPerView: 2, spaceBetween: 20 },
        1500: { slidesPerView: 3, spaceBetween: 20 },
      }}
      pagination={{ clickable: true }}
    >
      {
      productList.map((props) => (
          <SwiperSlide key={props.id} className='SliderProduct'>
            <div className='slider_box'>
              <div>
              <img src={props.photoUrl} alt={props.title} className='mySwiperImg' loading='lazy' />

              </div>
              <div>
              <div className='slide_product_box_a'>
              
              <a href={`/${props.category.url}/${props.id}`} className='slide_product_a'>
                <span className='slide_product_a_span'>Докладніше</span>
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