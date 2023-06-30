import {AddCategories} from './AddCategories'
import {AddPost} from './AddPost'
import {Dashboard} from './post/dashboard/Dashboard'
import {Routes, Route} from 'react-router-dom'
import { Helmet }from 'react-helmet';

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
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </section>
    )
}