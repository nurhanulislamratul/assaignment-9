import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className='min-h-screen relative'>
      <div className='max-w-7xl mx-auto py-8 pb-14'>
        <Nav />
        <Outlet />
      </div>
      <Footer className='absolute bottom-0 w-full  ' />
    </div>
  );
};

export default Root;
