import AsyncStorage from "@react-native-async-storage/async-storage";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2w2-nVXrTtMwYJx_BM_DMDow9CnDQJXQ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      const errorResponseData = await response.json();
      const errorId = errorResponseData.error.message;
      let message = "Something went wrong";

      if (errorId === "EMAIL_EXISTS") {
        message = "Email already exists";
      }

      throw new Error(message);
    }
    const responseData = await response.json();

    dispatch({ type: SIGNUP, token: responseData.idToken, userId: responseData.localId });
    const expiartionDate = new Date(new Date().getTime() + parseInt(responseData.expiresIn) * 1000);
    saveDataToStorage(responseData.idToken, responseData.localId, expiartionDate);
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2w2-nVXrTtMwYJx_BM_DMDow9CnDQJXQ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      const errorResponseData = await response.json();
      const errorId = errorResponseData.error.message;
      let message = "Something went wrong";

      if (errorId === "EMAIL_NOT_FOUND") {
        message = "Wrong credentials";
      } else if (errorId === "INVALID_PASSWORD") {
        message = "Wrong credentials";
      }

      throw new Error(message);
    }
    const responseData = await response.json();

    dispatch({ type: LOGIN, token: responseData.idToken, userId: responseData.localId });
    const expiartionDate = new Date(new Date().getTime() + parseInt(responseData.expiresIn) * 1000);
    saveDataToStorage(responseData.idToken, responseData.localId, expiartionDate);
  };
};

const saveDataToStorage = (token, userId, expiartionDate) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      userId: userId,
      expiryDate: expiartionDate.toISOString(),
    })
  );
};
