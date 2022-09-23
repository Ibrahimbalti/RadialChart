import React, { useContext, useState } from "react";
import Logo from "../../assets/logo.jpeg";
import { Button } from "@mui/material";

import Model from "../Model";
import Login from "../../screens/login/Login";

function Header() {
  const [openmodel, setOpenModel] = useState(false);
  <Login openModel={setOpenModel} />;

  return (
    <>
      <div className='w-full bg-purple-800 px-2 py-3 flex justify-between'>
        <div className='flex gap-5 text-white justify-center items-center font-medium '>
          <img src={Logo} alt='Logo' className='h-8' />
          <p className='text-lg'>Doctor Finder</p>
        </div>

        <Button
          variant='contained'
          color='primary'
          onClick={() => setOpenModel(true)}
        >
          LOGIN
        </Button>
      </div>

      {openmodel === true && <Model />}
    </>
  );
}

export default Header;
