const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';
const initialState = [];

const addBook = () => ({
  type: ADDBOOK,
});

const removeBook = () => ({
  type: REMOVEBOOK,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return state;
    case REMOVEBOOK:
      return state;
    default:
      return state;
  }
};

export default reducer;
