import React from "react";
import { Rating } from "@mui/material";
function DoctorDetails() {
  const doctorDetail = [
    {
      doctorname: "Ocean Garner",
      speciality: "PLUMONOLOGIST",
      experience: "2 years",
      birthDate: "12-04-1998",
      city: "Avignon",
      email: "nec@vestibulumnec.co.uk",
      mobile: "160211234984",
    },
  ];
  return (
    <>
      <div className='w-full h-full '>
        <div
          className={`flex rounded-rounded bg-[#000000] bg-opacity-80 justify-center cursor-default  fixed top-0 right-0 left-0 z-20 w-full md:inset-0 h-modal md:h-full`}
        >
          <div className='relative pt-4 w-3/12 rounded-full h-full md:h-auto mt-20  '>
            <div className='relative bg-white shadow '>
              <div className='flex justify-between p-5 items-start    text-white text-xl bg-[#a21caf] '>
                <h3>Doctors Details</h3>
              </div>

              <div className=' pt-5 pb-0 mb-0 '>
                <div className='flex flex-wrap'>
                  <div className='w-full h-full'>
                    <div className='relative flex flex-col  break-words bg-white w-full mb-6  rounded '>
                      <div className='px-4  flex-auto'>
                        <div className='tab-content tab-space'>
                          {doctorDetail.map((item) => {
                            return (
                              <div className='flex flex-col gap-2'>
                                <h1 className='text-xl text-black text-border'>
                                  Dr : {item.doctorname}
                                </h1>
                                <p>Total Experience : {item.experience}</p>
                                <p>Speciality : {item.speciality}</p>
                                <p>Date of Birth : {item.birthDate}</p>
                                <p>City : {item.city}</p>
                                <p>Email : {item.email}</p>
                                <p>Mobile : {item.mobile}</p>
                                <p>
                                  Rating :{" "}
                                  <Rating
                                    name='simple-controlled'
                                    value='5'
                                    size='small'
                                  />
                                </p>
                              </div>
                            );
                          })}
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
    </>
  );
}

export default DoctorDetails;
