import React from "react";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Please fill out this field";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Please fill out this field";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Please fill out this field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Please fill out this field";
  } else if (values.password.length < 8) {
    errors.password = "Please Enter 8 digits";
  }
  if (!values.mobile) {
    errors.mobile = "Please fill out this field";
  } else if (
    !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/.test(
      values.mobile
    )
  ) {
    errors.mobile = "Invalide mobile number";
  }
  return errors;
};

const Register = ({ openTab }) => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const formik = useFormik({
    initialValues: value,
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleField = () => {
    setValue({
      firstName: "",
      lastName: "",
      email: "",
    });
  };
  return (
    <div
      className={`${openTab === 2 ? "block " : "hidden"} relative`}
      id='link3'
    >
      <form
        onSubmit={formik.handleSubmit}
        className='flex flex-col items-center justify-center gap-0 h-full'
      >
        <TextField
          id='standard-basic'
          label='First Name*'
          variant='standard'
          name='firstName'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          sx={{ fontSize: "10px" }}
        />
        {formik.errors.firstName ? (
          <div className='text-xs text-white bg-gray-900 rounded-lg p-2 absolute top-14  left-14'>
            {formik.errors.firstName}
          </div>
        ) : null}

        <TextField
          id='standard-basic'
          label='Last Name*'
          variant='standard'
          name='lastName'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />

        {formik.errors.lastName ? (
          <div className='text-xs text-white bg-gray-900 rounded-lg p-2 absolute top-[100px]  left-14'>
            {formik.errors.lastName}
          </div>
        ) : null}

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
          <div className='text-xs text-white bg-gray-900 rounded-lg p-2 absolute top-[150px]  left-14'>
            {formik.errors.email}
          </div>
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
          <div className='text-xs text-white bg-gray-900 rounded-lg p-2 absolute top-[200px]  left-14'>
            {formik.errors.password}
          </div>
        ) : null}

        <TextField
          id='standard-basic'
          label='Mobile No*'
          variant='standard'
          name='mobile'
          type='number'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mobile}
        />
        {formik.errors.mobile ? (
          <div className='text-xs text-white bg-gray-900 rounded-lg p-2 absolute top-[244px] z-10 left-14'>
            {formik.errors.mobile}
          </div>
        ) : null}

        <Button
          variant='contained'
          color='primary'
          type='submit'
          sx={{ mt: "22px", fontSize: "14px" }}
          onClick={() => handleField()}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
