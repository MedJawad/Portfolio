const request = () => {
  return { type: "FETCH" };
};
const success = (data) => {
  return { type: "SUCCESS", data };
};
const failure = (error) => {
  return { type: "FAILURE", error };
};

export const fetchData = () => {
  return (dispatch, getState, api) => {
    dispatch(request());
    return api
      .get("/")
      .then((res) => {
        return dispatch(success(res.data));
      })
      .catch((err) => dispatch(failure(err)));
  };
};
