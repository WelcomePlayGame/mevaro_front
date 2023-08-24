
import { useParams } from 'react-router-dom'
import {getAllArticleById} from '../api'
import { useEffect, useState } from 'react';
import {FaBookReader, FaJenkins, FaHandPointDown} from "react-icons/fa";
import { Helmet } from 'react-helmet';
export const ArticlePage = () => {

const {id} =  useParams();
const [product, setProduct] = useState({});
const [token, setAuthToken] = useState(localStorage.getItem("authToken"))


useEffect(() => {
    getAllArticleById(id, token).then((data)=> {
        setProduct(data)
    })
}, [id]);

const createMarkup = (html) => ({ __html: html });
return (
    <section className='listPage'>
              <Helmet>
        <title>{`${product.seoTitle}`}</title>
        <meta
          name="description"
          content={`${product.seoDescribe}`}
        />
        <meta
          name="keywords"
          content={`${product.seoTitle}`}
        />
        <link
          rel="canonical"
          href={`https://mevaro.kiev.ua/article/${id}`}
        />
      </Helmet>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                     <div className='article_box_page'>
                        <div className='article_img_box'> <img src={product.fileUrl} alt={product.title} className='article_img'/></div>
                        <div className='article_icon_reader_box'><span className='reader_icon'><FaBookReader/></span></div>
                        <div className='article_title_box'><h2>{product.title}</h2></div>
                        <div className='article_icon_finger_box'><span className='finger_icon'><FaHandPointDown/></span></div>
                        < div dangerouslySetInnerHTML={createMarkup(product.describe)} className='article_decribe'/> 
                        <div className='article_time_box'><span className='article_time_span'><span className='face_icon'>{<FaJenkins/>}</span>&nbsp;&nbsp; {product.createAt} </span></div>

                     </div>
                </div>
            </div>
        </div>
    </section>
)

}