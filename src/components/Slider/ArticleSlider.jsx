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
        <section className="article_wrapper_slider">
            <>
            {
                articles.map((props)=> (
                    <div key={props.id}>
                        <div>
                            <img src={props.fileUrl}/>
                        </div>
                        <div className="article_box">

                        </div>
                    </div>
                ))
            }
            </>
        </section>
    )
    
}