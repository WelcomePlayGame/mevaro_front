import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, refreshToken } from "../api";
import { CURRENT_USD } from "../cong";
import { Tab } from "../components/tab/Tab";
import { Helmet } from "react-helmet";
import { OrderButton } from "../components/order/OrderButton";
import { StarRating } from "../components/rating/StarRating";

export const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [isZoom, setIsZoom] = useState(false);
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const handleClick = () => {
    setIsZoom(!isZoom);
  };

  useEffect(() => {
    refreshToken()
      .then(() => getProductById(id, sessionStorage.getItem("authToken")))
      .then((data) => {
        setProduct(data);
        if (data.category && data.category.url) {
          setUrl(data.category.url);
        } else {
          setUrl("");
          console.log(`Category URL not found`);
        }
      })
      .catch((error) => console.error(error));
  }, [id]);

  const getPriceText = () => {
    const price = product.money * CURRENT_USD;
    return isNaN(price) ? "Відсутньо" : `${price}`;
  };

  return (
    <section>
      <Helmet>
        <title>{`✅ Тканина ${product.title} прекрасно підійде для Ваших меблів`}</title>
        <meta
          name="description"
          content={`Оберіть для себе якісну тканину. Мебельна тканина ${product.title} зі щільностью ${product.density} гр/м2 та тестом Мантердейла ${product.test_mater}. Широкий вибір ткани на любий смак.`}
        />
        <meta
          name="keywords"
          content={`тканини для дивану, тканина ${product.title} для вашого дивану, ${product.title} якісні тканини`}
        />
        <link
          rel="canonical"
          href={`https://mevaro.kiev.ua/categories/${url}/${id}`}
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "${product.title}",
              "image": "${product.photoUrl}",
              "description": "${product.description}",
              "brand": {
                "@type": "Brand",
                "name": "Mevaro"
              },
              "offers": {
                "@type": "Offer",
                "price": ${product.price}, // Убедитесь, что значение цены указано без кавычек
                "priceCurrency": "UAH",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "Mevaro"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": ${product.rating}, // Убедитесь, что значение рейтинга указано без кавычек
                "reviewCount": ${product.reviewCount} // Убедитесь, что значение количества отзывов указано без кавычек
              }
            }
          `}
        </script>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="page_product">
            <div className="back">
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="back_btn"
              >
                Назад
              </button>
            </div>
            <div className="page_box">
              <div className="page_box_img">
                <img
                  rel="preload"
                  as="image"
                  src={product.photoUrl}
                  alt={product.title}
                  className={`product_image ${
                    isZoom ? "product_image_zoom" : ""
                  }`}
                  onClick={handleClick}
                />
              </div>
              <div className="page_box_describe">
                <StarRating />
                <h2 className="page_box_h3">{product.title}</h2>
                <ul className="page_box_ul">
                  <li className="page_box_li">Ширина: {product.width} см</li>
                  <li className="page_box_li">Склад: {product.compoud}</li>
                  <li className="page_box_li">
                    Щільність: {product.density} г/кв.метр
                  </li>
                  <li className="page_box_li">
                    Тест Мантирдейла: {product.testMater} циклів
                  </li>
                  <li className="page_box_li">
                    Дозволено з котами: {product.antiClaw ? "антикіготь" : "ні"}
                    {console.log(product)}
                  </li>
                  <div className="page_product_price">
                    <h4 className="page_product_price_h4">
                      Вартість:{" "}
                      <span className="page_product_price_h4_span">
                        {getPriceText()}
                      </span>{" "}
                      грн
                    </h4>
                  </div>
                </ul>
                <div>
                  <OrderButton product={product} />
                </div>
              </div>
            </div>
            <div className="box-tab">
              <Tab product={product} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
