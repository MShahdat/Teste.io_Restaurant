import React, { createContext, useState } from 'react';


export const dataContext = createContext();


const Context = (props) => {

  const [open, setOpen] = useState(false)
  const [signInOpen, setSignInOpen] = useState(false)
  const [signUpOpen, setSignUpOpen] = useState(false)
  const [profile, setProfile] = useState('');
  

  return (
    <div>
      <dataContext.Provider value={
        [
          open,
          setOpen,
          signInOpen,
          setSignInOpen,
          signUpOpen,
          setSignUpOpen,
          profile,
          setProfile,
        ]}>
        {props.children}
      </dataContext.Provider>
    </div>
  );
};

export default Context;