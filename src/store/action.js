export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const addToFavourites = (payload) => {
  return {
    type: ADD_FAV,
    payload,
  };
};

export const deletefromFavourites = (payload) => {
  return {
    type: REMOVE_FAV,
    payload,
  };
};
