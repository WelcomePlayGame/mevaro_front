export const ListProduct = ({ product }) => {
  console.log(product);
  return (
    <>
      <div className="product_list_box">
        <a href={`/product/${product.id}`} className="product_list_a">
          <img
            src={product.photoUrl}
            alt={product.title}
            className="product_list_img"
          />
          <span>
            {product.antiClaw ? (
              <div className="product_antiClaw_box">
                <img
                  src="/img/general/cat.png"
                  alt="антикіготь"
                  className="product_antiClaw_img"
                />
              </div>
            ) : null}
          </span>

          <span className="product_list_title">{product.title}</span>
          <span className="product_list_btn">Детальніше</span>
        </a>
      </div>
    </>
  );
};
