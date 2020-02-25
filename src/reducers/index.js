import {
  FETCH_CHARS_START,
  FETCH_CHARS_SUCCESS,
  FETCH_CHARS_FAIL
} from "../actions";

const initialState = {
  characters: [],
  error: null,
  isLoading: false
  // Array characters, Boolean fetching, null error.
};

function charsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_CHARS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false
      };
    case FETCH_CHARS_FAIL:
      return {
        ...state,
        error: action.payload
      };

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
}

export default charsReducer;
