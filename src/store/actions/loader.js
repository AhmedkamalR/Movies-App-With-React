import { SET_LOADER } from "./types";

export const setLoader = (payload) => {
  return {
    type: SET_LOADER,
    payload,
  };
};
