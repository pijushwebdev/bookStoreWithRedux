export const statusChange = (status) => {
  return {
    type: "filter/status",
    payload: status,
  };
};
