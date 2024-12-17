import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const UserForn = () => {
  return (
    <Box>
      <Typography variant="h3">User Data Collection</Typography>

      {/* formik for initial value,validation  and  */}
      <Formik
        initialValues={{
          name: "",
          // age: null,
          // address: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Name is required")
            .trim()
            .max(55, "Name must be of less than 55 characters"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
                border: "1px solid black",
                padding: "1rem",
                minWidth: "400px",
              }}
            >
              {/* FormControl is a type of div */}
              <FormControl>
                <TextField
                  label="User Name"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                ) : null}
              </FormControl>

              <Button variant="contained" color="success" type="Submit">
                Submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default UserForn;
