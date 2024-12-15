import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.name);
  return (
    <div>
      <Helmet>
        <title> Profile -PrimeSquare </title>
      </Helmet>

      <div className='max-w-md mx-auto mt-32'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'>
              Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              value={user?.displayName || "Your name is not found"}
              readOnly
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'>
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              value={user?.email || "Your mail is  not found"}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='photoURL'>
              Photo URL
            </label>
            <div className='flex'>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='photoURL'
                type='text'
                value={user?.photoURL || "Photo Url not found"}
              />
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
