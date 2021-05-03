import React, { useState } from "react";
import { Grid, Typography,Button } from "@material-ui/core";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import TextInput from "../../common/TextInput";
import { useHistory } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Divider from "../../common/Divider";
import { Link } from "react-router-dom";
import { MailOutline } from "@material-ui/icons";
import { verifyOtpActions } from "../../redux/auth/actions";
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
    texttDecoration: "none",
  },
  headerText: {
    justifyContent: "center",
    display: "flex",
    align: "center",
    alignItems: "center",
  },
});

export default function LoginWithOTP() {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const initData = {
    otp: "",
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initData}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        dispatch(
          verifyOtpActions(values, setLoading, () => resetForm(initData))
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
              {params?.type === "phone" ? (
                <Typography variant="h6" className={classes.headerText}>
                  <SmartphoneIcon style={{ marginRight: 10 }} />
                  <span>OTP has been sent to your PHONE</span>
                </Typography>
              ) : (
                <Typography variant="h6" className={classes.headerText}>
                  <MailOutline style={{ marginRight: 10 }} />
                  <span>OTP has been sent to your EMAIL</span>
                </Typography>
              )}

              <TextInput
                id="outlined-full-width"
                style={{
                  backgroundColor: "#ddeedd",
                  textAlign: "center",
                }}
                placeholder={params?.type === "phone" ? "SMS OTP" : "EMAIL OTP"}
                name="otp"
                margin="normal"
                variant="none"
              />

              <Button
                type="submit"
                variant="outlined"
                className={classes.customButton}
                fullWidth
              >
                Submit
              </Button>

              {/* {loginError && <Error msg={test} type="danger" />} */}
            </form>
            <Divider>Or</Divider>
            {params?.type === "phone" ? (
              <Button
                onClick={() => history.push("/loginEmail")}
                type="submit"
                variant="outlined"
                fullWidth
                className={classes.customButton2}
              >
                Send OTP to my email
              </Button>
            ) : (
              <Button
                onClick={() => history.push("/loginPhone")}
                type="submit"
                variant="outlined"
                fullWidth
                className={classes.customButton2}
              >
                Send OTP to my phone
              </Button>
            )}

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
