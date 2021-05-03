import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  FormHelperText,
  InputAdornment,
  IconButton,
  Button,
} from "@material-ui/core";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Link } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Formik } from "formik";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import * as Yup from "yup";

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
    texttDecoration: "none",
  },
});

export default function Login() {
  const classes = useStyles();
  const [passwordShown, setPasswordShown] = useState(false);

  const validationSchema = Yup.object().shape({
    mobileNumber: Yup.string()
      .required("Mobile no is Required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(11, "Must be exactly 11 digits")
      .max(11, "Must be exactly 11 digits"),
    password: Yup.string()
      .min(2, "Minimum 2 character")
      .max(100, "Maximum 100 character")
      .required("Password is required"),
  });
  const initData = {
    phonenNumber: "",
    password: "",
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initData}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {}}
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
            <form>
              <Typography variant="h4">Create a new account</Typography>
              <TextField
                id="outlined-full-width"
                style={{
                  backgroundColor: "#ddeedd",
                  textAlign: "center",
                }}
                placeholder="Phone Number(Required)"
                fullWidth
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SmartphoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormHelperText className={classes.emailError}></FormHelperText>
              <TextField
                id="outlined-full-width"
                style={{
                  backgroundColor: "#ddeedd",
                  textAlign: "center",
                }}
                placeholder="Name"
                fullWidth
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SmartphoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormHelperText className={classes.emailError}></FormHelperText>
              <TextField
                id="outlined-full-width"
                style={{
                  backgroundColor: "#ddeedd",
                  textAlign: "center",
                }}
                placeholder="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SmartphoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormHelperText className={classes.emailError}></FormHelperText>

              <TextField
                id="outlined-full-width"
                style={{
                  backgroundColor: "#ddeedd",
                  textAlign: "center",
                }}
                placeholder="Password"
                fullWidth
                margin="normal"
                variant="outlined"
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
                            onClick={() => setPasswordShown(!passwordShown)}
                          />
                        ) : (
                          <VisibilityOff
                            onClick={() => setPasswordShown(!passwordShown)}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <FormHelperText className={classes.emailError}>
                {/* {errors.password && errors.password.message} */}
              </FormHelperText>
              <Button
                type="submit"
                variant="outlined"
                className={classes.customButton}
                color="black"
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
