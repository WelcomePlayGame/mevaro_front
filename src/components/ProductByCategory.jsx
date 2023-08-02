import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { findUrlCategoriesViaIdByProduct } from '../api';

export const ProductByCategory = ({ product }) => {
  const { id, title, photoUrl } = product;
  const [categoryUrl, setCategoryUrl] = useState('');
  

  useEffect(() => {
    // Создаем асинхронную функцию для использования внутри useEffect
    const fetchData = async () => {
      try {
        const data = await findUrlCategoriesViaIdByProduct(id); // Вызываем асинхронный метод findUrlCategoriesViaIdByProduct
        setCategoryUrl(data); // Устанавливаем значение categoryUrl
        console.log(data); // Выводим значение в консоль
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData(); // Вызываем асинхронную функцию fetchData
  }, [id]); // Указываем зависимость id для повторного вызова useEffect при изменении id

  return (
    <div className="col-md-6">
      <div className="product_card_by_id">
        <div className="product_image_by_id">
          <img rel="preload" src={photoUrl} alt={title} className="products_image" loading='lazy'/>
          <h2 className="product_card_h2">
            <span>{title}</span>
          </h2>
        </div>
        <div className="card_product_action">
          <Link to={`/${categoryUrl}/${id}`} className="products_btn">
            Детальніше
          </Link>
          {console.log(categoryUrl)}
        </div>
      </div>
    </div>
  );
};
