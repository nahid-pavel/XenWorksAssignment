import { toast } from "react-toastify";
import * as requestFromServer from "./api";

import { authSlice } from "./slice";
const { actions: slice } = authSlice;

export const registerActions = (payload, setLoading, cb) => {
  setLoading(true);
  return requestFromServer
    .registerAPI(payload)
    .then((res) => {
      const { status } = res;
      if (status === 200) {
        setLoading(false);
        toast.success("Successfully Created Account");
        cb();
      }
    })
    .catch((err) => {
      setLoading(false);
      toast.warn(err?.response?.data?.message || "Something went wrong");
    });
};
export const loginActions = (payload, setLoading, cb) => (dispatch) => {
  setLoading(true);
  return requestFromServer
    .loginAPI(payload)
    .then((res) => {
      const { status, data } = res;
      if (status === 200) {
        setLoading(false);
        dispatch(slice.setLogin(data));
        toast.success("Successfully Logged In");
        cb();
      }
    })
    .catch((err) => {
      setLoading(false);
      toast.warn(err?.response?.data?.message || "Something went wrong");
    });
};

export const verifyActions = (payload, setLoading, cb) => (dispatch) => {
  setLoading(true);
  return requestFromServer
    .verifyAPI(payload)
    .then((res) => {
      const { status } = res;
      if (status === 200) {
        setLoading(false);
        cb();
      }
    })
    .catch((err) => {
      setLoading(false);
      toast.warn(err?.response?.data?.message || "Something went wrong");
    });
};

export const verifyOtpActions = (payload, setLoading, cb) => (dispatch) => {
  setLoading(true);
  return requestFromServer
    .verifyOtpAPI(payload)
    .then((res) => {
      const { status } = res;
      if (status === 200) {
        setLoading(false);
        toast.success('Successfully Logged In');
        cb();
      }
    })
    .catch((err) => {
      setLoading(false);
      toast.warn(err?.response?.data?.message || "Something went wrong");
    });
};

