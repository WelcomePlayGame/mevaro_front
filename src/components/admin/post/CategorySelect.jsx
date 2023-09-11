
import { useState, useEffect } from "react"
import {URL, CATEGORIES} from '../../../cong'
import {refreshToken} from "../../../api"


export const CategorySelect=({ onChange }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
   

  
    useEffect(() => {
      refreshToken();
      const fetchData = async() => {
        try {
          const response = await fetch(`${URL}${CATEGORIES}`, {
            method: "GET",
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem("authToken")}`
            }
          });
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
  