import React from "react";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { purple } from "@mui/material/colors";
import styled from "styled-components";

const BookAppointment = () => {
  const MyButton = styled(Button)({
    background: "#01579b",
    border: 0,
    borderRadius: 3,

    color: "white",
  });
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const formik = useFormik({
    initialValues: value,
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
    <>
      <div className='w-full h-full '>
        <div
          className={`flex bg-[#000000] bg-opacity-80 justify-center cursor-default  fixed top-0 right-0 left-0 z-20 w-full md:inset-0 h-modal md:h-full`}
        >
          <div className='relative pt-4 w-7/12 h-full md:h-auto mt-20  '>
            <div className='relative bg-white shadow '>
              <div
                className='flex justify-between p-8 items-start   text-white text-xl bg-[#a21caf] '
                // onClick={() => closeModal()}
              >
                <h3>Book an Appointment</h3>
              </div>

              <div className=' pt-5 pb-0 mb-0 '>
                <div className='flex flex-wrap'>
                  <div className='w-full h-full'>
                    <div className='relative flex flex-col  break-words bg-white w-full mb-6  rounded '>
                      <div className='px-4  flex-auto'>
                        <div className='tab-content tab-space'>
                          <form
                            onSubmit={formik.handleSubmit}
                            className='flex flex-col justify-start items-start gap-2 h-full'
                          >
                            <TextField
                              id='standard-basic'
                              label='DoctorName'
                              variant='standard'
                              name='firstName'
                              type='text'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.firstName}
                              sx={{ fontSize: "10px" }}
                            />

                            <TextField
                              id='standard-basic'
                              label='doctor picker inline*'
                              variant='standard'
                              name='lastName'
                              type='date'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.lastName}
                            />

                            <TextField
                              id='standard-basic'
                              label='Time slot'
                              variant='standard'
                              name='email'
                              type='time'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.email}
                            />

                            <TextField
                              id='standard-basic'
                              label='Medical history'
                              variant='standard'
                              name='password'
                              type='password'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.password}
                            />

                            <TextField
                              id='standard-basic'
                              label='Symptoms'
                              variant='standard'
                              name='mobile'
                              type='text'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.mobile}
                            />

                            {/* <button type='submit'>Submit</button> */}
                            <MyButton
                              variant='contained'
                              type='submit'
                              sx={{ mt: "22px", fontSize: "14px" }}
                              onClick={() => handleField()}
                            >
                              Book Appointment
                            </MyButton>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
