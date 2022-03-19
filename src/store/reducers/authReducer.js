import { SIGN_IN, SIGN_OUT } from "../actions/authActions";

const initialState = {
  auth: false,
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_IN:
      state.auth = payload;
      return state;
    case SIGN_OUT:
      state.auth = payload;
      return state;
    default:
      return state;
  }
}
