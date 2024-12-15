import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// react icon
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const notify = () => toast("User created Successfully");
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  // const navigate = useNavigate();
  const [showPassword, SetShowPassword] = useState(false);

  const handleRegister = (e) => {
    // const { name, image } = e;
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const image = e.target.PhotoUrl.value;
    console.log(email, password, name, image);
    e.target.reset();

    // password validation
    if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setRegisterError("Password must contain at least one lowercase letter");
      return;
    }
    if (password.length < 6) {
      setRegisterError("Password Should be 6 Character or More");
      return;
    }

    // reset error
    setRegisterError("");

    // create user
    createUser(email, password)
      .then((result) => {
        // update user profil
        updateUserProfile(name, image);

        console.log(result.user);
        setSuccess(true);
        // toast.success("User created successfully");
        notify();
        e.target.reset();
        // navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
        setSuccess(false);
      });
  };

  return (
    <div className='hero min-h-screen bg-base-200 mt-16 mb-96 lg:mt-24 lg:mb-24'>
      <Helmet>
        <title> Register -PrimeSquare </title>
      </Helmet>
      ;
      <div className='hero-content flex-col '>
        <div className='text-center '>
          <h1 className=' text-3xl lg:text-5xl font-bold'>Register Now!</h1>
        </div>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form onSubmit={handleRegister} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                name='name'
                type='text'
                placeholder='Name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                name='email'
                type='email'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>PhotoUrl</span>
              </label>
              <input
                name='PhotoUrl'
                type='text'
                placeholder='PhotoUrl'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <div className='relative'>
                <input
                  name='password'
                  type={showPassword ? "text" : "password"}
                  placeholder='password'
                  className='input input-bordered w-full'
                  required
                />

                <span
                  className='absolute top-4 right-3'
                  onClick={() => SetShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <label className='label'>
                <p href='#' className='label-text-alt text-[12px] mt-6  '>
                  Already User ?{" "}
                  <Link
                    to='/login'
                    className='link-hover text-base ml-8 font-robo font-medium '>
                    Login
                  </Link>
                </p>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='btn bg-[#f2f2f2]'>Register</button>
            </div>
          </form>

          {registerError && <p className=' bg-red-500'>{registerError}</p>}
          {/* {success && <ToastContainer />} */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
