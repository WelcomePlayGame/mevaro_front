import { useEffect, useState } from "react"
import {getAllArticle} from "../../api"
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';



export const ArticleList = ()=> {

    const [articlies, setArticlies] = useState([])
    
    useEffect(() => {
        getAllArticle().then((data) => {
            setArticlies(data)
        })
    }, []);


    return (
        <section className="container">
                          <Helmet>
        <title>{`Корисні статті для перетяжки тканин. Поради для дому`}</title>
        <meta
          name="description"
          content={`Корисні статті про перетяжку тканин та поради для дому: методи перетягування меблів, вибір тканини, догляд за ними та декор інтер'єру.`}
        />
        <meta
          name="keywords"
          content={`корисні статті, статті по перетяжці, поради по декору, догляд за меблями`}
        />
        <link
          rel="canonical"
          href={`https://mevaro.kiev.ua/article`}
        />
      </Helmet>
            <div className="row">
            {
                articlies.map((article) => (
                    <div className="col-md-6">
                        <div>
                            <img src={article.fileUrl} alt={article.title} className="img_articleList"/>
                        </div>
                        <div>
                            <h2>{article.title}</h2>
                        </div>
                        <div className="article_list_box">
                            <Link to={`/article/${article.id}`} className="article_list_a">Детальніше</Link>
                        </div>
                    </div>
                ))
            }
            </div>

        </section>
    )
}