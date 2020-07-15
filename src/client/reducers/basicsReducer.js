const initialState = {
  isLoading: false,
  name: "Aatafay Mohamed Jawad",
  picture: "",
  label: "",
  headline: "",
  summary: "",
  website: null,
  username: "MedJawad",
  region: "Morocco, Agadir",
  phone: "",
  profiles: [],
};

export const basics = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH":
      return { ...state, isLoading: true };

    case "SUCCESS":
      const {
        name,
        picture,
        label,
        headline,
        summary,
        website,
        username,
        region,
        phone,
        profiles,
      } = action.data.basics;
      return {
        ...state,
        isLoading: false,
        name,
        picture,
        label,
        headline,
        summary,
        website,
        username,
        region,
        phone,
        profiles,
      };
    case "FAILURE":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
