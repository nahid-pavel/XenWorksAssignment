import React, { useState } from "react";
import {
  Grid,
  Typography,
  InputAdornment,
  IconButton,
  Button,
} from "@material-ui/core";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useHistory } from "react-router-dom";
import TextInput from "../../common/TextInput";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Divider from "../../common/Divider";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginActions } from "../../redux/auth/actions";
import Loading from "../../common/Loading";

// import FormikInput from "../../common/FormikInput";
const useStyles = makeStyles({
  root: {
    backgroundColor: "#f3f7f3",
    minHeight: "100vh",
    paddingTop: "50px",
    fontWeight: 500,
  },
  customButton: {
    backgroundColor: "black",
    color: "#fff",
  },
  customButton2: {
    fontWeight: "bold",
  },
  signUp: {
    fontSize: "16px",
    marginTop: "20px",
    textAlign: "center",
    textDecoration: "none",
  },
});

export default function Login() {
  const classes = useStyles();
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required("Phone Number is Required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(11, "Must be exactly 11 digits")
      .max(11, "Must be exactly 11 digits"),
    password: Yup.string()
      .min(2, "Minimum 2 character")
      .max(100, "Maximum 100 character")
      .required("Password is required"),
  });
  const initData = {
    phoneNumber: "",
    password: "",
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initData}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(loginActions(values, setLoading, () => resetForm(initData)));
      }}
    >
      {({
        handleSubmit,
        resetForm,
        values,
        errors,
        touched,
        setFieldValue,
        isValid,
      }) => (
        <Grid container justify="center" className={classes.root}>
          <Grid item xs={8} md={5}>
            <form onSubmit={handleSubmit}>
              {loading && <Loading />}
              <Typography variant="h4">Log In</Typography>
              <TextInput
                id="outlined-full-width"
                style={{
                  backgroundColor: "#ddeedd",
                  textAlign: "center",
                }}
                placeholder="Enter Your Phone Number"
                name="phoneNumber"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SmartphoneIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextInput
                id="outlined-full-width"
                style={{
                  backgroundColor: "#ddeedd",
                  textAlign: "center",
                }}
                placeholder="Password"
                name="password"
                margin="normal"
                type={passwordShown ? "text" : "password"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKeyIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setPasswordShown(!passwordShown)}
                        edge="end"
                      >
                        {passwordShown ? (
                          <Visibility
                          // onClick={() => setPasswordShown(!passwordShown)}
                          />
                        ) : (
                          <VisibilityOff
                          // onClick={() => setPasswordShown(!passwordShown)}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                variant="outlined"
                className={classes.customButton}
                fullWidth
              >
                Sign in with password
              </Button>

              {/* {loginError && <Error msg={test} type="danger" />} */}
            </form>
            <Divider>Or</Divider>
            <Button
              type="submit"
              variant="outlined"
              fullWidth
              className={classes.customButton2}
              onClick={() => history.push("/loginphone")}
            >
              Forgot Password? Sign in via other means instead!
            </Button>
            <div className={classes.signUp}>
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Don’t have an account? Sign Up
              </Link>
            </div>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
}
