import { CategoriesItem } from "./CategoriesItem"
import { Helmet }from 'react-helmet';


export const CategoriesList = ({ categories = [] }) => {
  

    return (
        
        <div className="categories">

                <Helmet>
                    <title>✅ Знайдіть ідеальну тканину для вашої меблі - каталог мебельних тканин</title>
                    <meta name="description" content="Мебельні тканини - це важливий компонент будь-якої меблів. Наш каталог пропонує великий вибір мебельних тканин, які підійдуть для різних типів меблів, від диванів та крісел до стільців та пуфів." />
                    <link rel="canonical" href="https://mevaro.kiev.ua/categories" /> 
                </Helmet>
            <div className="list"><h2 className="h2_categories">Меблеві тканини та фурнітура</h2></div>
            <div className="container">
                <div className="row">
                        {categories.map(el => (
                            <CategoriesItem key={el.id} {...el} />
                        ))}
                   
                </div>
            </div>
        </div>
    )
}