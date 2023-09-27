import {
  URL,
  CATEGORIES,
  PRODUCTS,
  CATEGORY,
  ORDERS,
  UPDATE,
  CONFIRM,
  COMMENTS,
  PRODUCT,
  ORDERBYMEBEL,
  ARTICLE,
  BYSLIDE,
  LOGIN,
  headers,
  body,
} from "./cong";

export const getAllCategories = async (token) => {
  const response = await fetch(`${URL}${CATEGORIES}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(token);
  const data = response.json();
  return await data;
};

export const getAllProducts = async (token) => {
  try {
    const response = await fetch(`${URL}${PRODUCTS}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return await data;
    } else {
      throw new Error(
        `Server responded with ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductBySlider = async (token) => {
  try {
    const response = await fetch(`${URL}${PRODUCTS}${BYSLIDE}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Server responded with ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllOrderByMebel = async (token) => {
  try {
    const response = await fetch(`${URL}${ORDERBYMEBEL}`, {
      method: `GET`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return await data;
    } else {
      throw new Error(
        `Server responded with ${response.status} ${response.statusText}`
      );
    }
  } catch (e) {
    console.error(e);
  }
};

export const getAllOrders = async (token) => {
  try {
    const response = await fetch(`${URL}${ORDERS}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Server responded with ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductsByCategoriesUrl = async (url, token) => {
  try {
    const response = await fetch(`${URL}${CATEGORIES}${url}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Response not ok");
    }
    console.table(response);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getProductById = async (id, token) => {
  try {
    const response = await fetch(`${URL}${PRODUCTS}${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Server responded with ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
  }
};

export const findUrlCategoriesViaIdByProduct = async (id, token) => {
  try {
    const response = await fetch(`${URL}${CATEGORIES}${CATEGORY}${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      return new Error(`Response ont ok - ${URL}${CATEGORIES}${CATEGORY}${id}`);
    }
    return response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateConfirmOrder = async (id, token) => {
  try {
    const response = await fetch(`${URL}${UPDATE}${CONFIRM}${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      return new Error(`Response not ok - ${URL}${UPDATE}${CONFIRM}${id}`);
    }
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getListCommentByProduct = async (id, token) => {
  try {
    const response = await fetch(`${URL}${COMMENTS}${PRODUCT}${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Response not ok");
    }
    console.table(response);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllArticle = async (token) => {
  try {
    const response = await fetch(`${URL}${ARTICLE}`, {
      method: `GET`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return new Error(`Response not ok - ${URL}${ARTICLE}`);
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getAllArticleById = async (id, token) => {
  try {
    const response = await fetch(`${URL}${ARTICLE}${id}`, {
      method: `GET`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      return new Error(`Response not ok - ${URL}${ARTICLE}${id}`);
    }
    return response.json();
  } catch (e) {
    console.error(e);
  }
};

export const getArtilceSlider = async (token) => {
  try {
    const response = await fetch(`${URL}${ARTICLE}${BYSLIDE}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Server responded with ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
  }
};

export const refreshToken = async () => {
  try {
    const response = await fetch(`${URL}${LOGIN}`, {
      method: "POST",
      headers: headers,
      body: body,
    });
    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem("authToken", data.token);
    } else {
      console.log("Error access");
    }
  } catch (error) {
    throw Error;
  }
};

export const selectCategory = async (token) => {
  try {
    const response = await fetch(`${URL}${CATEGORIES}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("Error Access");
    }
  } catch (error) {
    throw Error(error);
  }
};
