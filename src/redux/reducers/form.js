const initialState = {
  form: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FORM":
      let items = [...state.form, action.payload];
      return {
        ...state,
        form: items,
      };
    case "REMOVE_LAST":
      state.form.pop();
      return {
        form: state.form,
      };
    default:
      return state;
  }
};

export default formReducer;
