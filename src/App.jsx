import React, { useContext } from 'react';
import Nav from './component/Nav';
import Footer from './component/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';
import Singin from './component/Singin';
import Signup from './component/Signup';
import { dataContext } from './context/Context';
import ScrollToTop from './scroll/ScrollTop';
import Top from './scroll/Top';
import { ToastContainer, Zoom } from 'react-toastify';

const App = () => {
  
  const [, , signInOpen, , signUpOpen, ] = useContext(dataContext);

  return (
    <div>
      <Top></Top>
      {/* <Nav></Nav> */}
      <Navbar></Navbar>
      <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Zoom}
        />
      {
        signInOpen && 
        <Singin></Singin>
      }
      {
        signUpOpen && 
        <Signup></Signup>
      }
      <ScrollToTop showAfter={200}></ScrollToTop>
      
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;