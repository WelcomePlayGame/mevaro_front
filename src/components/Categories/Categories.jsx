import React, { useState, useEffect, useCallback } from "react";
import { getAllProducts, refreshToken } from "../../api";
import { ListProduct } from "./ListProduct";
import InfiniteScroll from "react-infinite-scroll-component";
import { Preloader } from "../Preloader";
import { CategorySelect } from "../admin/post/CategorySelect";

export const Categories = () => {
  const [originalProducts, setOriginalProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [minMoney, setMinMoney] = useState(300);
  const [maxMoney, setMaxMoney] = useState();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [test, setTest] = useState("");
  const [isFilter, setIsFilter] = useState(true);
  const [filterName, setFilterName] = useState("Відкрити фільтр");
  const [isLoading, setIsLoading] = useState(false);

  const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const handleFilter = () => {
    if (isFilter) {
      setIsFilter(false);
      setFilterName("Закрити фільтр");
    } else {
      setFilterName("Відкрити фільтр");
      setIsFilter(true);
    }
  };

  useEffect(() => {
    const savedProduct = JSON.parse(localStorage.getItem("products"));
    if (savedProduct) {
      setOriginalProducts(savedProduct);
      console.log("Load from localStorage");
    } else {
      refreshToken()
        .then(() => getAllProducts(sessionStorage.getItem("authToken")))
        .then((data) => {
          setOriginalProducts(data);
          saveData("products", data);
          console.log("load from backend");
        })
        .catch((error) => console.error(error));
    }
  }, []);

  useEffect(() => {
    // Фильтруем оригинальные продукты при изменении критериев фильтрации
    setIsLoading(true);

    let filteredData = [...originalProducts];

    if (title) {
      const lowercaseTitle = title.toLowerCase();
      filteredData = filteredData.filter((product) =>
        product.title.toLowerCase().includes(lowercaseTitle)
      );
    }

    setIsLoading(false);
    setFilteredProducts(filteredData);
    saveData("filter", filteredData);
  }, [originalProducts, title]);

  const clearFilter = () => {
    setTitle("");
    setCategory("");
    setMinMoney(0);
    setMaxMoney(0);

    const savedProduct = JSON.parse(localStorage.getItem("products"));
    if (savedProduct) {
      setFilteredProducts(savedProduct);
      console.log("Original products");
    }
  };

  const loading = () => {
    setVisibleProducts((pre) => pre + 3);
  };

  return (
    <InfiniteScroll
      dataLength={visibleProducts}
      next={loading}
      hasMore={visibleProducts < filteredProducts.length}
      loader={<Preloader />}
      scrollThreshold="100px"
      onScroll={null}
      style={{ overflowX: "hidden" }}
    >
      <section>
        <form
          className={`all_product_filter ${
            isFilter ? "all_product_filter_no_active" : ""
          }`}
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   applyFilter();
          // }}
        >
          <div className="all_product_filter_inputs">
            <div className="all_product_filter_box">
              <label htmlFor="minmoney" className="form_label">
                Мінімальна вартість
              </label>
              <input
                type="number"
                value={minMoney}
                id="minmoney"
                onChange={(e) => setMinMoney(e.target.value)}
                className="all_product_filter_input"
              />
            </div>
            <div className="all_product_filter_box">
              <label htmlFor="maxmoney" className="form_label">
                Максимальна вартість
              </label>
              <input
                type="number"
                value={maxMoney}
                onChange={(e) => setMaxMoney(e.target.value)}
                id="maxmoney"
                className="all_product_filter_input"
              />
            </div>
            <div className="all_product_filter_box">
              <label htmlFor="test" className="form_label">
                Тест Мантирдейла
              </label>
              <input
                type="number"
                value={test}
                onChange={(e) => setTest(e.target.value)}
                id="test"
                className="all_product_filter_input"
              />
            </div>
            <div className="all_product_filter_box">
              <label htmlFor="title" className="form_label">
                Назва Тканини
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                className="all_product_filter_input"
              />
            </div>
            <div className="all_product_filter_box">
              <label htmlFor="category" className="form_label">
                Категорії
              </label>
              <CategorySelect
                onChange={(e) => setCategory(e.target.value)}
                id="category"
              />
            </div>
          </div>
          <button type="submit" className="all_product_filter_btn">
            Пошук
          </button>
        </form>
        <div
          className={`product_filter_btn ${
            isFilter ? "product_filter_btn_no" : ""
          }`}
        >
          <button onClick={handleFilter}>{filterName}</button>
          <button onClick={clearFilter}>Clear</button>
        </div>
        <div className={`all_product ${isFilter ? "all_product_no" : ""}`}>
          {filteredProducts.slice(0, visibleProducts).map((product) => (
            <ListProduct key={product.id} product={product} />
          ))}
        </div>
      </section>
    </InfiniteScroll>
  );
};
