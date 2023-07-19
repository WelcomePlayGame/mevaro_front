import { URL, CATEGORIES, PRODUCTS, CATEGORY, USER, PASSWORD, ORDERS, UPDATE, CONFIRM, COMMENTS, PRODUCT} from './cong'
const credentials = `${USER}:${PASSWORD}`

export const getAllCategories = async () => {

    const response = await fetch(`${URL}${CATEGORIES}`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${btoa(credentials)}`
        }
    });
    const data = response.json();
    console.table(data);
    return await data;
}

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${URL}${PRODUCTS}`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${btoa(credentials)}`
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Server responded with ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllOrders = async () => {
  
  try {
    const response = await fetch(`${URL}${ORDERS}`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${btoa(credentials)}`
      }
    });
    if(response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Server responded with ${response.status} ${response.statusText}`);
    }

  } catch (error) {
    console.error(error)
    throw error;
  }

}

export const getProductsByCategoriesUrl = async (url) => {
  try {
    const response = await fetch(`${URL}${CATEGORIES}${url}`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${btoa(credentials)}`
      }
    });
    if (!response.ok) {
      throw new Error('Response not ok');
    }
    console.table(response)
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
  
}


export const getProductById = async (id) => {

  try{
    const response = await fetch(`${URL}${PRODUCTS}${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${btoa(credentials)}`
      }
    }
    )
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
    const response = await fetch(`${URL}${CATEGORIES}${CATEGORY}${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${btoa(credentials)}`
      }
    })
    if(!response.ok) {
      return new Error(`Response ont ok - ${URL}${CATEGORIES}${CATEGORY}${id}`)
    } 
    return response.json();

  } catch(error) {
    console.log(error)
    return error;
  }
  
}
  
export const updateConfirmOrder = async (id) => {

  try {
    const response =  await fetch(`${URL}${UPDATE}${CONFIRM}${id}`, {
      method: "PATCH",
      headers: {
        'Authorization': `Basic ${btoa(credentials)}`
      }
    })
    if(!response.ok) {
      return new Error(`Response not ok - ${URL}${UPDATE}${CONFIRM}${id}`)
    }
    return response;
  } catch (error) {
    console.error(error)
    return error;
  }

}


export const getListCommentByProduct = async (id) => {
  try {
    const response = await fetch(`${URL}${COMMENTS}${PRODUCT}${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${btoa(credentials)}`
      }
    });
    if (!response.ok) {
      throw new Error('Response not ok');
    }
    console.table(response)
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
  
}

