import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProductsByCategoriesUrl, refreshToken } from '../api'
import { Category } from '../components/Category'

export const CategoryByUrl = () => {
  const { url } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    refreshToken()
    .then(()=>getProductsByCategoriesUrl(url, sessionStorage.getItem('authToken')))
    .then((data)=> setProducts(data.products))
  }, [url])

  return (
    <section className='list_products'>
      <>
        <Category products={products} />
      </>
    </section>
  )
}
