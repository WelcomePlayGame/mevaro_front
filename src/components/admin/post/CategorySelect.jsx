import { useState, useEffect } from "react";
import { URL, CATEGORIES } from "../../../cong";
import { refreshToken, selectCategory } from "../../../api";

export const CategorySelect = ({ onChange }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    refreshToken()
      .then(() => selectCategory(sessionStorage.getItem("authToken")))
      .then((data) => setCategories(data))
      .catch((error) => {
        throw Error(error);
      });
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <select onChange={onChange}>
      <option value="">Обрати Категорію</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.title}
        </option>
      ))}
    </select>
  );
};
