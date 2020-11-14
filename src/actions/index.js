import jsonPlaceholder from "../apis/jsonPlaceHolder";

//Action Creator
export const fetchPosts = async () => {
  const response = await jsonPlaceholder.get("/post");

  return {
    type: "FETCH_POST",
    payload: response,
  };
};
