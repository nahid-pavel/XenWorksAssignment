import { TextField } from "@material-ui/core";
import React from "react";
import { useField } from "formik";

export default function TextInput({ name, ...otherProps }) {
  const [field, meta] = useField(name);
  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };
  if (meta && meta.error && meta.touched) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  return <TextField {...configTextField} />;
}
