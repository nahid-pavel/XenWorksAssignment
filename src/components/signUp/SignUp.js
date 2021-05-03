import React, { useState } from "react";
import {
  Grid,
  Typography,
  InputAdornment,
  IconButton,
  Button,
} from "@material-ui/core";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import { Link } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Formik } from "formik";
import {
  MailOutline,
  PersonOutline,
  Visibility,
  VisibilityOff,
  VpnKey,
} from "@material-ui/icons";
import * as Yup from "yup";
import TextInput from "../../common/TextInput";
import { useDispatch } from "react-redux";
import { registerActions } from "../../redux/auth/actions";
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

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required("Phone Number is Required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(11, "Must be exactly 11 digits")
      .max(11, "Must be exactly 11 digits"),
    username: Yup.string()
      .min(2, "Minimum 2 character")
      .max(20, "Maximum 100 character")
      .required("Name is required"),
  });
  const initData = {
    phoneNumber: "",
    username: "",
    email: "",
    password: "",
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initData}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(
          registerActions(values, setLoading, () => resetForm(initData))
        );
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
              <Typography variant="h4">Create a new account</Typography>
              <TextInput
                id="outlined-full-width"
                style={{
                  backgroundColor: "#ddeedd",
                  textAlign: "center",
                }}
                placeholder="Phone Number(Required)"
                name="phoneNumber"
                value={values?.phoneNumber}
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
                placeholder="Name (Required)"
                name="username"
                value={values?.username}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutline />
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
                placeholder="Email"
                name="email"
                value={values?.email}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutline />
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
                margin="normal"
                name="password"
                value={values?.password}
                type={passwordShown ? "text" : "password"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKey />
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
                variant="contained"
                className={classes.customButton}
                fullWidth
              >
                Sign Up
              </Button>

              {/* {loginError && <Error msg={test} type="danger" />} */}
            </form>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Go back to sign in
            </Link>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
}
