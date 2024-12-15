import { Helmet } from "react-helmet-async";

const ExclusiveOffer = () => {
  const contactInfo = {
    address: "123 Main Street, Suite 100, New York, NY 10001",
    phoneNumber: "(555) 123-4567",
    emailAddress: "info@primesquareproperties.com",
  };

  const exclusiveOffer = {
    title: "Exclusive Offer for First-Time Customers!",
    description:
      "Welcome to PrimeSquare Properties! As a special offer for being a first-time logged-in customer, we're offering a 10% discount on your first lease agreement or property purchase. Don't miss out on this limited-time offer.",
    terms:
      "Offer valid for first-time logged-in customers only. Cannot be combined with other offers. Terms and conditions apply.",
    couponCode: "FIRST10OFF",
  };

  return (
    <div className='bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-center'>
      <Helmet>
        <title> Exclusive Offer -PrimeSquare Properties </title>
      </Helmet>
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        <div className='bg-white overflow-hidden shadow-xl sm:rounded-lg p-8 mt-16 mb-8 '>
          <h2 className='lg:text-3xl text-2xl font-semibold text-gray-800'>
            {exclusiveOffer.title}
          </h2>
          <p className='mt-4 text-lg text-gray-600'>
            {exclusiveOffer.description}
          </p>
          <p className='mt-4 text-sm text-gray-500'>{exclusiveOffer.terms}</p>
          <div className='mt-6'>
            <h3 className='text-lg font-semibold text-gray-800'>
              Contact Us to Avail the Offer:
            </h3>
            <p className='mt-2 text-sm text-gray-600'>
              Meet us at: {contactInfo.address}
            </p>
            <p className='text-sm text-gray-600'>
              {" "}
              or Call: {contactInfo.phoneNumber}
            </p>
            <p className='text-sm text-gray-600'>
              {" "}
              or Mail: {contactInfo.emailAddress}
            </p>
          </div>
          <div className='mt-6'>
            <p className='text-lg font-semibold text-gray-800'>
              Your Exclusive Coupon Code:
            </p>
            <p className='mt-2 text-2xl font-bold text-blue-500'>
              {exclusiveOffer.couponCode}
            </p>
            <p className='mt-1 text-sm text-gray-500'>
              Use this code during checkout or mention it when contacting us to
              redeem your offer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffer;
