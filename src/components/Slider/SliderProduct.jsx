import React, { useEffect, useState } from "react";
import { getProductBySlider, refreshToken } from "../../api";
import { Preloader } from "../Preloader";

export const SliderProduct = () => {
  const [productList, setProducts] = useState([]);
  useEffect(() => {
    refreshToken()
      .then(() => getProductBySlider(sessionStorage.getItem("authToken")))
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <section className="slider_product">
        <h5 className="slider_product_h5">Тканини для перетяжки</h5>
        <div className="slider_product_wrapper">
          {productList.map((product) => (
            <div key={product.id} className="slider_product_box">
              <img
                src={product.photoUrl}
                alt={product.title}
                className="slider_product_img"
                loading="lazy"
              />
              <span className="slider_product_text">
                {product.title.slice(0, 20)} ...
              </span>
              <a
                href={`/${product.category.url}/${product.id}`}
                className="slider_product_a"
              >
                Ознайомитись
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
