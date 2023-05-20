import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProductsByCategoriesUrl } from '../api'
import { Category } from '../components/Category'

export const CategoryByUrl = () => {
  const { url } = useParams()
  const [products, setProducts] = useState([])


  useEffect(() => {
    getProductsByCategoriesUrl(url).then(data => setProducts(data.products))
  }, [url])

  return (
    <section className='list_products'>
      <>
        <Category products={products} />
      </>
    </section>
  )
}
