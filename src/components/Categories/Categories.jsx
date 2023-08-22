import { useState, useEffect } from "react"
import { getAllCategories } from '../../api'
import { CategoriesList } from '../Categories/CategoriesList'



export const Categories = () => {
    const [categories, setCategories] = useState([]);
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        getAllCategories(token).then((data) => {
            setCategories(data);
        })
    }, [token]);

    return <>
        <CategoriesList categories={categories} />
    </>

}