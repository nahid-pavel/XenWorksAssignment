import React, { useState } from "react";
import { Grid, Typography, InputAdornment, Button } from "@material-ui/core";

import TextInput from "../../common/TextInput";
import { useHistory } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import Divider from "../../common/Divider";
import { Link } from "react-router-dom";
import { verifyActions } from "../../redux/auth/actions";
import { useDispatch } from "react-redux";
import { MailOutline } from "@material-ui/icons";
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

export default function LoginWithEmail() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email  is Required"),
  });
  const initData = {
    email: "",
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initData}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(
          verifyActions(values, setLoading, () => {
            resetForm(initData);
            history.push("/verify/email");
          })
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
              <Typography variant="h4">Log In</Typography>
              <TextInput
                id="outlined-full-width"
                style={{
                  backgroundColor: "#ddeedd",
                  textAlign: "center",
                }}
                placeholder="Enter Your Email"
                name="email"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutline />
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
                Sign In
              </Button>

              {/* {loginError && <Error msg={test} type="danger" />} */}
            </form>
            <Divider>Or</Divider>
            <Button
              onClick={() => history.push("/")}
              type="submit"
              variant="outlined"
              fullWidth
              className={classes.customButton2}
            >
              Sign In wIth Password
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
