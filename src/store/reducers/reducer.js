import { ADD_FAV } from "../actions/types";
import { REMOVE_FAV } from "../actions/types";

const INITIAL_STATE = [];

export default function favouritesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_FAV:
      if (state.find((item) => item.id == action.payload.id)) return state;
      return [{...action.payload,favourite:true}].concat(state);
    case REMOVE_FAV:
      {
        return state.filter((item) => {
          return item.id !== action.payload;
        });
      }
      return;

    default:
      return state;
  }
}
// const INITIAL_STATE = {
//     moviesName: [],
//     favNumber:0
//   };
  
//   export function MovieReducer(state = INITIAL_STATE, action) {
//     switch (action.type) {
//       case "DELETE_MOVIE":
//           for (let index = 0; index < state.moviesName.length; index++) {
//               if(state.moviesName[index].id === action.payload.id){
//                   state.moviesName.splice(index,1);
//                   state.favNumber = state.favNumber - 1;
//               }
//           }
//         return {
//           ...state,
//         };
//       case "ADD_MOVIE":
//           state.moviesName.push(action.payload);
//           state.favNumber = state.favNumber + 1;
//         return {
//           ...state
//         };
//       default:
//         return state;
//     }
//   }
