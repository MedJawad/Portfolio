const initialState = {
  isLoading: false,
  education: [],
  work: [],
};

export const formations = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH":
      return { ...state, isLoading: true };

    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        education: [...action.data.education],
        work: [...action.data.work],
      };
    case "FAILURE":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
