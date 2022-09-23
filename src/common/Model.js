import React from "react";
import Login from "../screens/login/Login";
import Register from "../screens/register/Register";
function Model({ color }) {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className='w-full h-full '>
        <div
          className={`flex bg-[#000000] bg-opacity-80 justify-center cursor-default  fixed top-0 right-0 left-0 z-20 w-full md:inset-0 h-modal md:h-full`}
        >
          <div className='relative pt-4 w-3/12 h-full md:h-auto mt-20  '>
            <div className='relative bg-white shadow '>
              <div
                className='flex justify-between p-5 items-start   text-white text-lg bg-purple-800 '
                // onClick={() => closeModal()}
              >
                <h3 className='text-sm'>Authentication</h3>
              </div>

              <div className=' pt-5 pb-0 mb-0 '>
                <div className='flex flex-wrap'>
                  <div className='w-full h-full'>
                    <ul
                      className='flex mb-0 list-none flex-wrap  flex-row px-2'
                      role='tablist'
                    >
                      <li className='-mb-px  flex-auto text-center'>
                        <a
                          className={
                            "text-xs font-bold uppercase px-5 pb-2  rounded block leading-normal " +
                            (openTab === 1
                              ? "text-black border-b-4 border-red-500 bg-" +
                                color +
                                "-600"
                              : "text-gray-500 bg-white")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(1);
                          }}
                          data-toggle='tab'
                          href='#link1'
                          role='tablist'
                        >
                          Login
                        </a>
                      </li>

                      <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
                        <a
                          className={
                            "text-xs font-bold uppercase px-5 pb-2  rounded block leading-normal " +
                            (openTab === 2
                              ? "text-black border-b-4 border-red-500 bg-" +
                                color +
                                "-600"
                              : "text-gray-500 bg-white")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(2);
                          }}
                          data-toggle='tab'
                          href='#link3'
                          role='tablist'
                        >
                          Register
                        </a>
                      </li>
                    </ul>

                    <div className='relative flex flex-col  break-words bg-white w-full mb-6  rounded '>
                      <div className='px-4  flex-auto'>
                        <div className='tab-content tab-space'>
                          <Login openTab={openTab} />
                          <Register openTab={openTab} />
                          {/* ..........................................................LOgin and Logout................... */}
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
}

export default Model;
