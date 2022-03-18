import { CHANGE_CATEGORY } from "../actions/categoryActions";


const initialState = {
  selectedCategory:""
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_CATEGORY:
      state.selectedCategory=payload.categoryName;
      return state;
    default:
      return state;
  }
}
