import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const estates = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const estate = estates.find((estate) => estate.id === idInt);
  return (
    <div>
      <Helmet>
        <title> Estate Details -PrimeSquare Properties </title>
      </Helmet>
      <div className='flex flex-col lg:flex-row  justify-between  py-14 gap-12 items-center lg:mb-40 mb-[450px]'>
        <div className='p-16 bg-[#1313130D] flex justify-center items-center rounded-2xl flex-1'>
          <img className='w-[425px] lg:h-[565px]' src={estate.image} alt='' />
        </div>
        <div className='flex-1 text-center lg:text-left space-y-8 lg:mx-auto mx-4'>
          <h1 className=' text-2xl  lg:text-4xl  font-bold'>
            {estate.estate_title}
          </h1>
          <p className='nav-font font-medium'>
            {" "}
            <span className='font-bold'>Type:</span> {estate.segment_name}
          </p>
          <p className='nav-font font-medium'>
            {" "}
            <span className='font-bold'>Location:</span> {estate.location}
          </p>
          <p className='nav-font font-medium'>
            {" "}
            <span className='font-bold'> Rent or Sell:</span>{" "}
            <span className='capitalize'>{estate.status}</span>{" "}
          </p>
          <p>
            {" "}
            <span className='font-bold'>Description: </span>{" "}
            {estate.description}
          </p>
          <div className='flex items-center gap-4'>
            <h1 className='nav-font font-medium'>
              {" "}
              <span className='font-bold'>Facility:</span>{" "}
            </h1>
            <div className='flex  gap-3'>
              {estate.facilities.map((facility, index) => (
                <p
                  className=' py-2 lg:px-4 px-2 bg-[#f3f3f3] lg:text-[14px] text-[10px] font-medium  rounded-3xl'
                  key={index}>
                  {facility}
                </p>
              ))}
            </div>
          </div>

          <p className='nav-font font-medium'>
            {" "}
            <span className='font-bold'>Area:</span> {estate.area}
          </p>
          <p className='nav-font font-medium'>
            {" "}
            <span className='font-bold'> Price: </span> {estate.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
