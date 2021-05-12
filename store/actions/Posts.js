export const SET_POSTS = "SET_POSTS";

export const fetchPosts = () => {
  return async (dispatch) => {
    const userId = "u1";
    try {
      // async code can be done here
      const response = await fetch("https://shop-app-c0256-default-rtdb.firebaseio.com/posts.json");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();
      const loadedProducts = [];

      for (const key in responseData) {
        loadedProducts.push(new Product(key, responseData[key].ownerId, responseData[key].title, responseData[key].imageUrl, responseData[key].description, responseData[key].price));
      }

      dispatch({ type: SET_PRODUCTS, products: loadedProducts, userProducts: loadedProducts.filter((prod) => prod.ownerId === userId) });
    } catch (error) {
      throw error;
    }
  };
};
