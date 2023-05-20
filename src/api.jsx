import { URL, CATEGORIES, PRODUCTS, CATEGORY} from './cong'
export const getAllCategories = async () => {

    const response = await fetch(`${URL}${CATEGORIES}`, {
        
    });
    return await response.json();
}
export const getProductsByCategoriesUrl = async (url) => {
    try {
      const response = await fetch(`${URL}${CATEGORIES}${url}`);
      if (!response.ok) {
        throw new Error('Response not ok');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }


export const getProductById = async (id) => {

  try{
    const response = await fetch(`${URL}${PRODUCTS}${id}`)
    if(!response.ok) {
      throw new Error('Response not ok')
    }
    return response.json();

  } catch(error) {
    console.error(error)
    return error
  }
}  

export const  findUrlCategoriesViaIdByProduct = async (id)=> {

  try{
    const response = await fetch(`${URL}${CATEGORIES}${CATEGORY}${id}`)
    if(!response.ok) {
      return new Error('Response not ok - `${URL}${id}`')
    } 
    return response.json();

  } catch(error) {
    console.log(error)
    return error;
  }


}
  