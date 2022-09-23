import React from "react";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please fill out this field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Enter valide Email";
  }
  if (!values.password) {
    errors.password = "Please fill out this field";
  } else if (values.password.length < 8) {
    errors.password = "Please enter 8 digits";
  }

  return errors;
};

function Login({ openTab, openModel }) {
  const formData = {
    email: "",
    password: "",
  };

  const [value, setValue] = useState(formData);

  const formik = useFormik({
    initialValues: value,
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={`${openTab === 1 ? "block " : "hidden"} `} id='link3'>
      <form
        onSubmit={formik.handleSubmit}
        className='flex flex-col items-center justify-center gap-3 h-full mt-5'
      >
        <TextField
          id='standard-basic'
          label='Email*'
          variant='standard'
          name='email'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div className='text-xs text-red-500'>{formik.errors.email}</div>
        ) : null}

        <TextField
          id='standard-basic'
          label='Password*'
          variant='standard'
          name='password'
          type='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div className='text-xs text-red-500'>{formik.errors.password}</div>
        ) : null}

        <Button
          variant='contained'
          color='primary'
          type='submit'
          sx={{ mt: "22px", fontSize: "14px" }}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
