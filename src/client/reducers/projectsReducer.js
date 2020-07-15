const initialState = {
  isLoading: false,
  items: [],
};

export const projects = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH":
      return { ...state, isLoading: true };

    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        items: action.data.projects,
      };
    case "FAILURE":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
