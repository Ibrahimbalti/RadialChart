import React, { useState } from "react";
import { Button } from "@mui/material";

import RateAppointment from "./RateAppointment";
const Appointment = ({ openTab }) => {
  const appointmentList = [
    {
      doctorname: "Hermione Kelley",
      date: "2021-08-02",
      symptoms: "",
      medicalhistory: "",
    },
    {
      doctorname: "Alexis Rodriguez",
      date: "2021-08-02",
      symptoms: "",
      medicalhistory: "",
    },
    {
      doctorname: "Alexis Rodriguez",
      date: "2021-08-02",
      symptoms: "Cold",
      medicalhistory: "NA",
    },
  ];

  const [openrateappointment, setOpenRateAppointment] = useState(false);
  return (
    <>
      <div className={openTab === 2 ? "block" : "hidden"} id='link3'>
        {appointmentList.map((item) => {
          return (
            <div className='shadow-lg w-full p-4 text-bold mt-5 border-2'>
              <h1 className='text-xl text-black text-border'>
                Dr :<span className='ml-1'>{item.doctorname}</span>
              </h1>
              <p>Date :{item.date}</p>
              <p>Symptoms :{item.symptoms}</p>
              <p>priorMedicalHistory :{item.medicalhistory}</p>

              <div className='mt-8 text-sm'>
                <Button
                  variant='contained'
                  className='mt-3'
                  sx={{
                    fontSize: "12px",
                  }}
                  onClick={() => setOpenRateAppointment(true)}
                >
                  RATE APPOINTMENT
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {openrateappointment === true && <RateAppointment />}
    </>
  );
};

export default Appointment;
