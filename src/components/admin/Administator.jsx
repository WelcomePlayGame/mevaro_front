import {AddCategories} from './AddCategories'
import {AddPost} from './AddPost'
import {Dashboard} from './post/dashboard/Dashboard'
import {Routes, Route} from 'react-router-dom'
import { Helmet }from 'react-helmet';
import {EditorCategory} from "./post/editor/EditorCategory"
import {EditorProduct} from './post/editor/EditorProduct'
import { AddOrder } from './AddOrder';

import { AddArticle } from './AddArticle';



export const Administator = () => {


    return (
        <section>
            <div>
            <Helmet>
                    <title>Адмін Панель</title>
                    <meta name="description" content="Місце роботи для адміну сайта" />
                </Helmet>
            </div>
            <Routes>
                <Route path='/addcategories' element={<AddCategories/>}/>
                <Route path='/addpost' element={<AddPost/>}/>
                <Route path='/addarticle' element={<AddArticle/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/orderbymwbel' element={<AddOrder/>}/>
                <Route path='/category/editor/:id' element={<EditorCategory/>}/>
                <Route path='/product/editor/:id' element={<EditorProduct/>} />
            </Routes>
        </section>
    )
}