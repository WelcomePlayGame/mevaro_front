import { useState, useEffect } from "react"
import { getAllCategories, refreshToken } from '../../api'
import { CategoriesList } from '../Categories/CategoriesList'



export const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        refreshToken()
        .then(()=>getAllCategories(sessionStorage.getItem('authToken')))
        .then((data)=> setCategories(data))
    }, []);

    return <>
        <CategoriesList categories={categories} />
    </>

}