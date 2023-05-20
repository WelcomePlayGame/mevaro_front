import { useState, useEffect } from "react"
import { getAllCategories } from '../../api'
import { CategoriesList } from '../Categories/CategoriesList'



export const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            setCategories(data);
        })
    }, []);

    return <>
        <CategoriesList categories={categories} />
    </>

}