
import { useState, useEffect } from "react"
import {URL, CATEGORIES} from '../../../cong'


export const CategorySelect=({ onChange }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);


  
    useEffect(() => {
      const fetchData = async() => {
        try {
          const response = await fetch(`${URL}${CATEGORIES}`);
          const data = await response.json();
          setCategories(data);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <select onChange={onChange}>
        <option value="">Обрати Категорію</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.title}
          </option>
        ))}
      </select>
    );
  }
  