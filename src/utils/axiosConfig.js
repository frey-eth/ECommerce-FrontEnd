export const baseUrl = "https://amazune-api.onrender.com/api/";

export const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : null
    }`,
    Accept: "application/json",
  },
};
