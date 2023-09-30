import { useEffect, useState } from "react";
import { getAllCategories, refreshToken } from "../../../../../api";
import { Link } from "react-router-dom";
export const CategoriesTable = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    refreshToken()
      .then(() => getAllCategories(sessionStorage.getItem("authToken")))
      .then((data) => setCategories(data))
      .catch((error) => {
        throw Error(error);
      });
  }, []);

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={100} className="th_table">
                  <span className="th_table_span">Список Категорій</span>
                </th>
              </tr>
              <tr>
                <th>№</th>
                <th>Назва</th>
                <th>URl</th>
                <th>Кількість товарів</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="td_table">{category.id}</td>
                  <td className="td_table">{category.title}</td>
                  <td className="td_table">
                    <Link to={`/categories/${category.url}`}>
                      {category.url}
                    </Link>
                  </td>
                  <td>{category.products.length}</td>
                  <td className="td_table">
                    <button className="">
                      <Link to={`/admin/category/editor/${category.id}`}>
                        Редагувати
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
