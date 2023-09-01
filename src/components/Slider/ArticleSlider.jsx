import { useEffect, useState } from "react"
import {getArtilceSlider} from "../../api"
export const ArticleSlider = ()=> {
    const [token] = useState(localStorage.getItem('authToken'));
    const [articles, setArticles] = useState([]);

    useEffect(()=> {
        getArtilceSlider(token)
        .then((data)=> {
            setArticles(data)}).catch((error)=>console.log(error))
    }, []);
    return (
        <section className="">
            <h5 className="article_wrapper_slider_h5">Корисні статті для Вас</h5>
            <div className="article_wrapper_slider">

            {
                articles.map((article)=> (
                    <div key={article.id} className="article_box">
                        <img src={article.fileUrl} alt={article.title} className="article_slide_img"/>
                        <span className="article_slide_title">{article.title.slice(0,20)} ...</span>
                        <hr className="article_slide_hr"/>
                        <a href={`/article/${article.id}`} className="article_slide_a">Читати далі</a>
                    </div>
                ))
            }
              </div>
        </section>
    )
    
}