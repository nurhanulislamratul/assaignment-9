import { useEffect, useState } from "react";
import Estate from "../Estate/Estate";
import { Helmet } from "react-helmet-async";

const Estates = () => {
  const [estates, setEstates] = useState([]);
  useEffect(() => {
    fetch("estate.json")
      .then((res) => res.json())
      .then((data) => setEstates(data));
  }, []);
  return (
    <div className='lg:mb-40 mb-auto'>
      ;<h1 className='text-center text-5xl font-robo'>Estates</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 py-9'>
        {estates.map((estate) => (
          <Estate key={estate.id} estate={estate}></Estate>
        ))}
      </div>
    </div>
  );
};

export default Estates;
