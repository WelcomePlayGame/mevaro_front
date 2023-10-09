import { useState, useEffect, lazy } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, refreshToken } from "../api";
import { CURRENT_USD } from "../cong";
import { Tab } from "../components/tab/Tab";
import { Helmet } from "react-helmet";
import { OrderButton } from "../components/order/OrderButton";
import { StarRating } from "../components/rating/StarRating";
import { SliderProduct } from "../components/Slider/SliderProduct";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { AuxiliaryCharacteristis } from "../components/Auxiliary_Characteristics";

export const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [isZoom, setIsZoom] = useState(false);
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [antiClaw, setAnticlaw] = useState(false);
  const [shouldScrollToComments, setShouldScrollToComments] = useState(false);

  const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M384 304c0 17.67-14.33 32-32 32H122.2C116 344.4 112 354.8 112 365.9C112 393.5 134.5 416 162.1 416h48.64c20.33 0 40.25-8.25 54.63-22.62c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25C283.1 465.3 248.5 480 210.8 480H162.1C99.19 480 48 428.8 48 365.9c0-10.2 1.457-20.23 4.111-29.89H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h65.67c1.568-1.078 3.018-2.295 4.646-3.297L154.7 240H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h229.8C267.1 167.6 272 157.2 272 146.1C272 118.5 249.5 96 221.9 96H173.3C152.9 96 133 104.3 118.6 118.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25C100 46.69 135.5 32 173.3 32h48.64C284.8 32 336 83.19 336 146.1c0 10.2-1.457 20.23-4.111 29.89H352c17.67 0 32 14.33 32 32s-14.33 32-32 32h-65.67c-1.568 1.078-3.018 2.295-4.646 3.297L229.3 272H352C369.7 272 384 286.3 384 304z"/></svg>`;
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
          setTitle(data.category.title);
          setAnticlaw(data.antiClaw);
        } else {
          setUrl("");
          setTitle("");
          setAnticlaw(false);
          console.log(`Category URL not found`);
        }
      })
      .catch((error) => console.error(error));
  }, [id, product.antiClaw]);

  const getPriceText = () => {
    const price = product.money * CURRENT_USD;
    return isNaN(price) ? "Відсутньо" : `${price}`;
  };

  return (
    <section className="product_page">
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
        {/* <div className="row">
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
                  <li className="page_box_li">Категорія: {title}</li>
                  <li className="page_box_li">
                    Щільність: {product.density} г/кв.метр
                  </li>
                  <li className="page_box_li">
                    Тест Мантирдейла: {product.testMater} циклів
                  </li>
                  <li className="page_box_li">
                    Дозволено з котами: {antiClaw ? "так" : "ні"}
                  </li>
                  <div className="page_product_price">
                    <h4 className="page_product_price_h4">
                      Вартість:
                      <span className="page_product_price_h4_span">
                        {getPriceText()}
                      </span>
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
        </div> */}
        <div className="product_box">
          <div className="product_box_top_left" id="first">
            <Breadcrumbs
              crumbs={[
                { label: "Головна", url: `/` },
                { label: "Список тканин", url: `/categories` },
                { label: `${product.title}`, url: `/product/${id}` },
              ]}
              breadcrumps_a={"breadcrumps_a"}
            />
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
            <div className="product_box_left_img">
              <img
                src={product.photoUrl}
                alt={product.title}
                loading="lazy"
                rel="preload"
                className={`product_image ${
                  isZoom ? "product_image_zoom" : ""
                }`}
                onClick={handleClick}
              />
            </div>
          </div>
          <div className="product_box_top_right" id="second">
            <h2 className="product_h2_title">{product.title}</h2>
            <div className="rating_comment">
              <StarRating />
              <span>
                <a
                  href="#comment"
                  onClick={() => setShouldScrollToComments(true)}
                  className="write_comment"
                >
                  Залишити відгук
                </a>
              </span>
            </div>
            <div className="product_box_right_desribe">
              <span className="product_box_right_span">
                Ширина: {product.width}
              </span>
              <span className="product_box_right_span">Категорія: {title}</span>
              <span className="product_box_right_span">
                Щільність: {product.density} г/кв.метр
              </span>
              <span className="product_box_right_span">
                Тест Мантирдейла: {product.testMater} циклів
              </span>
              <span className="product_box_right_span">
                Дозволено з котами: {antiClaw ? "так" : "ні"}
              </span>
              <span className="product_box_right_span">
                Склад: {product.compoud}
              </span>
            </div>
            <span className="coast_product">
              <div className="coast_product_price">{getPriceText()}</div>
              {
                <div
                  className="svg"
                  dangerouslySetInnerHTML={{ __html: SVG }}
                />
              }
            </span>
            <hr />
            <AuxiliaryCharacteristis />
          </div>
          <div className="product_box_bottom_left" id="third">
            <Tab
              product={product}
              shouldScrollToComments={shouldScrollToComments}
              setShouldScrollToComments={setShouldScrollToComments}
            />
          </div>
          <div className="product_box_bottom_right" id="four">
            <OrderButton product={product} />
          </div>
        </div>
      </div>
      <SliderProduct />
    </section>
  );
};
