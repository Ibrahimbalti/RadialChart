import React from "react";
import DoctorList from "../../screens/doctorList/DoctorList";
import Appointment from "../../screens/appointment/Appointment";
// import Typography from "@material-ui/core/Typography";
// import PropTypes from "prop-types";

const TabContainer = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  //   return (
  //     <Typography component="div" style={{ padding: 0, textAlign: "center" }}>
  //       {props.children}
  //     </Typography>

  //     <div></div>
  //   );
  // };

  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full'>
          <ul
            className='flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row'
            role='tablist'
          >
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal " +
                  (openTab === 1
                    ? "text-black border-b-2 border-black bg-" + color + "-600"
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
                DOCTORS
              </a>
            </li>

            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal " +
                  (openTab === 2
                    ? "text-black border-b-2 border-black bg-" + color + "-600"
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
                APPOINTMENT
              </a>
            </li>
          </ul>
          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded '>
            <div className='px-4 py-5 flex-auto'>
              <div className='tab-content tab-space'>
                <DoctorList openTab={openTab} />
                <Appointment openTab={openTab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default TabContainer;
