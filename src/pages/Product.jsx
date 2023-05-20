import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '../api'
import { CURRENT_USD } from '../cong'
import { Tab } from '../components/tab/Tab'
import { Helmet } from 'react-helmet';
import {findUrlCategoriesViaIdByProduct} from '../api'
import { OrderButton } from '../components/order/OrderButton'
import { StarRating } from '../components/rating/StarRating'




export const Product = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const [isZoom, setIsZoom] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsZoom(!isZoom)
    }


    useEffect(() => {
        getProductById(id).then((data) => setProduct(data))
    }, [id]);

    const [categoryUrl, setCategoryUrl] = useState('');

    useEffect(()=>{
      findUrlCategoriesViaIdByProduct(id).then((data)=>{setCategoryUrl(data)})
    });


    return (

        <section>
            <Helmet>
                <title>{`✅ Тканина ${product.title} прекрасно підійде для Ваших меблів`}</title>
                <meta name="description" content={`Оберіть для себе якісну тканину. Мебельна тканина ${product.title} зі щільностью ${product.density} гр/м2 та тестом Мантердейла ${product.test_mater}. Широкий вибір ткани на любий смак.`} />
                <link rel="canonical" href={`https://mevaro.kiev.ua/categories//${categoryUrl}/${id}`} />
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="page_product">
                        <div className="back">
                            <button onClick={() => { navigate(-1) }} className="back_btn">  Назад</button>
                        </div>
                        <div className="page_box">
                            <div className="page_box_img">
                                <img rel="preload" as="image" src={product.photoUrl} alt={product.title} className={`product_image ${isZoom ? 'product_image_zoom' : ''}`} onClick={handleClick}/>
                            </div>
                            <div className="page_box_describe">
                                <StarRating/>
                                <h3 className='page_box_h3'>{product.title}</h3>
                                <ul className='page_box_ul' >
                                    <li className='page_box_li'>Ширина: {product.width} см</li>
                                    <li className='page_box_li'>Склад: {product.compoud}</li>
                                    <li className='page_box_li'>Щільність: {product.density} г/кв.метр</li>
                                    <li className='page_box_li'>Тест Мантирдейла: {product.test_mater} циклів</li>
                                    <div className="page_product_price">
                                        <h4 className='page_product_price_h4'>Вартість: <spna className='page_product_price_h4_span'>{product.money * CURRENT_USD}</spna> грн</h4>
                                    </div>
                                    <div>
                                        <OrderButton product={product}/>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="box-tab">
                        <Tab />
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}
