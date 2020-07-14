const request_admins = () => {
  return { type: "FETCH" };
};
const success_admins = (data) => {
  return { type: "SUCCESS", data };
};
const failure = (error) => {
  return { type: "FAILURE", error };
};

export const fetch = () => {
  return (dispatch, getState, api) => {
    dispatch(request());
    return api
      .get("/admins")
      .then((res) => {
        return dispatch(success(res.data));
      })
      .catch((err) => dispatch(failure(err)));
  };
};
