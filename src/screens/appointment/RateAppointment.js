import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { TextField, Box } from "@mui/material";

function RateAppointment() {
  const [value, setValue] = useState();
  const MyButton = styled(Button)({
    background: "#01579b",
    border: 0,
    borderRadius: 3,

    color: "white",
  });
  return (
    <div className='w-full h-full '>
      <div
        className={`flex rounded-rounded bg-[#000000] bg-opacity-80 justify-center cursor-default  fixed top-0 right-0 left-0 z-20 w-full md:inset-0 h-modal md:h-full`}
      >
        <div className='relative pt-4 w-5/12 rounded-full h-full md:h-auto mt-20  '>
          <div className='relative bg-white shadow '>
            <div className='flex justify-between p-5 items-start    text-white text-xl bg-[#a21caf] '>
              <h3>Appointment Rate</h3>
            </div>

            <div className=' pt-5 pb-0 mb-0 '>
              <div className='flex flex-wrap'>
                <div className='w-full h-full'>
                  <div className='relative flex flex-col  break-words bg-white w-full mb-6  rounded '>
                    <div className='px-4  flex-auto'>
                      <div className='tab-content tab-space'>
                        {/* ........................................................ */}

                        <Box
                          component='form'
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "25ch" },
                          }}
                          noValidate
                          autoComplete='off'
                        >
                          <div>
                            <TextField
                              id='standard-multiline-static'
                              multiline
                              rows={4}
                              defaultValue='Comment'
                              variant='standard'
                            />
                          </div>
                        </Box>
                        <div className='flex gap-2'>
                          <Typography component='legend'>Rating :</Typography>
                          <Rating
                            name='simple-controlled'
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </div>
                        <p className='text-red-500 text-sm'>select a rating</p>
                        <MyButton
                          variant='contained'
                          type='submit'
                          sx={{ mt: "22px", fontSize: "14px" }}
                        >
                          RATE APPOINTMENT
                        </MyButton>
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RateAppointment;
