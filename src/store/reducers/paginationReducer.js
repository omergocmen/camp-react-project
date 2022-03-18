import { CHANGE_PAGE } from "../actions/paginationActions";
import { CHANGE_TOTEL_PAGE } from "../actions/paginationActions";

const initialState = {
  selectedPage: 1,
  totelPage: null,
  range: 10,
};

export default function paginationReducer(
  state = initialState,
  { type, payload }) 
  {
  switch (type) {
    case CHANGE_PAGE:
      state.selectedPage = payload;
      return state;
    case CHANGE_TOTEL_PAGE:
      state.totelPage = payload;
      return state;
    default:
      return state;
  }
}
