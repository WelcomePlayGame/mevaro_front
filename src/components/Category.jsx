import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { ProductByCategory } from './ProductByCategory';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Preloader } from './Preloader';

export const Category = ({ products = [] }) => {
  const { url } = useParams();
  const [title, setTitle] = useState(`✅ Знайдіть ідеальну тканину для вашої меблі - каталог мебельних тканин`);
  const location = useLocation();
  const currentUrl = `https://mevaro.kiev.ua${location.pathname}`;
  const navigate = useNavigate();

  const [visibleProducts, setVisibleProducts] = useState(4); // Количество видимых продуктов
  const [isLoading, setIsLoading] = useState(false); // Состояние загрузки данных

  useEffect(() => {
    setTitle(`Каталог мебельных тканей - ${url}`);
  }, [url]);

  const fetchMoreData = () => {
    // Увеличиваем количество видимых продуктов при загрузке дополнительных данных
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 4);
  };

  const handleLoading = () => {
    setIsLoading(true); // Устанавливаем состояние загрузки в true
    setTimeout(() => {
      setIsLoading(false); // Симулируем окончание загрузки после задержки
    }, 2000);
  };

  return (
    <section className='container'>
      <div className="back">
        <button onClick={() => { navigate(-1) }} className="back_btn_categories">Назад</button>
      </div>
      <>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={`Мебельні тканини - це важливий компонент будь-яких меблів. Наш каталог пропонує великий вибір мебельних тканин, які підійдуть для різних типів меблів, від диванів та крісел до стільців та пуфів.`} />
          <link rel="canonical" href={currentUrl} />
        </Helmet>
      </>

      <InfiniteScroll
        dataLength={visibleProducts}
        next={fetchMoreData}
        hasMore={visibleProducts < products.length}
        loader={<Preloader/>} // Индикатор загрузки
        scrollThreshold="10px" // Порог прокрутки для загрузки данных
        endMessage={<div>Больше нет тканей</div>} // Сообщение, когда все продукты загружены
        onScroll={null} 
        style={{ overflowX: 'hidden' }}
      >
        <div className="row products_overflow">
          {products.slice(0, visibleProducts).map(product => (
            <ProductByCategory key={product.id} product={product} />
          ))}
        </div>
      </InfiniteScroll>
    </section>
  );
};
