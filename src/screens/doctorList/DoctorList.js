import React from "react";
import { Button } from "@mui/material";
import { Rating } from "@mui/material";
import BookAppointment from "./BookAppointment";
import DoctorDetails from "./DoctorDetails";
import { useState } from "react";
const doctorList = [
  {
    doctorname: "Ocean Garner",
    speciality: "PLUMONOLOGIST",
  },
  {
    doctorname: "Kennan Hess",
    speciality: "GENERAL_PHYSICIAN",
  },
  {
    doctorname: "Blossom Valentine",
    speciality: "PLUMONOLOGIST",
  },
];

function DoctorList({ color, openTab }) {
  const [openmodelappointment, setOpenModelAppointment] = useState(false);
  const [opendoctordetailmodal, setOpenDoctorDetailModal] = useState(false);
  return (
    <>
      <div
        className={`${
          openTab === 1 ? "block" : "hidden"
        } flex flex-col items-center justify-center`}
        id='link1'
      >
        <label
          forHtml='speciality'
          class='block mb-2 text-lg  font-medium text-gray-900 ml-20'
        >
          Select Speciality:
        </label>
        <select
          id='speciality'
          className='bg-gray-200 text-sm  block w-48 p-2.5 ml-20'
        >
          <option value='' disabled></option>
          {/* <option value='US'>United States</option>
                    <option value='CA'>Canada</option>
                    <option value='FR'>France</option>
                    <option value='DE'>Germany</option> */}
        </select>
        {doctorList.map((item) => {
          return (
            <div className='shadow-lg  p-4 text-bold mt-5 border-2 '>
              <h1 className='text-xl text-black text-border'>
                Doctor Name :<span className='ml-1'>{item.doctorname}</span>
              </h1>
              <p className='mt-4'>Speciality :{item.speciality}</p>
              <p>
                Rating:{" "}
                <Rating name='simple-controlled' value='5' size='small' />
              </p>
              <div className='p-3 text-sm'>
                <Button
                  variant='contained'
                  className='mt-3'
                  sx={{
                    fontSize: "10px",
                    paddingLeft: "50px",
                    paddingRight: "50px",
                  }}
                  onClick={() => setOpenModelAppointment(true)}
                >
                  Book Appointment
                </Button>
                <Button
                  variant='contained'
                  color='success'
                  sx={{
                    fontSize: "10px",
                    paddingLeft: "70px",
                    paddingRight: "70px",
                    ml: "20px",
                  }}
                  onClick={() => setOpenDoctorDetailModal(true)}
                >
                  View Details
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      {openmodelappointment === true && <BookAppointment />}
      {opendoctordetailmodal === true && <DoctorDetails />}
    </>
  );
}

export default DoctorList;
