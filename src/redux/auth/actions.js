import { toast } from "react-toastify";
import * as requestFromServer from "./api";

import { authSlice } from "./slice";
const { actions: slice } = authSlice;

export const loginActions = (payload, setLoading, cb) => (dispatch) => {
  setLoading(true);
  return requestFromServer
    .loginAPI(payload)
    .then((res) => {
      const { status, data } = res;
      if (status === 200) {
        setLoading(false);
        dispatch(slice.setLogin(data));
        toast.success(res?.data?.message || "Successfully Created Account");
        cb();
      }
    })
    .catch((err) => {
      setLoading(false);
      toast.warn(err?.response?.data?.message || "Something went wrong");
    });
};
