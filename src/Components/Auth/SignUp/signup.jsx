import React from 'react';
import logoImage from './../../../images/ars.png';

const Signup = () => {
  return (
    <div className="min-h-screen py-40" style={{ backgroundImage: '' }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${logoImage})` }} 
          >
            {/* <h1 className="text-white text-3xl mb-3">Welcome</h1> */}
            {/* <div>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus
                maecenas ac <a href="#" className="text-black font-semibold">Learn more</a>
              </p>
            </div> */}
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4 text-customColor text-center font-extrabold">Sign Up</h2>
            <p className="mb-4">
              Create your account. It’s free and only takes a minute.
            </p>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Firstname" className="border border-gray-400 py-1 px-2" />
                <input type="text" placeholder="Surname" className="border border-gray-400 py-1 px-2" />
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5 flex items-center">
                <input type="checkbox" className="border border-gray-400" />
                <span className="ml-2">
                  I accept the <a href="#" className="text-black font-semibold">Terms of Use</a> & <a href="#" className="text-black font-semibold">Privacy Policy</a>
                </span>
              </div>
              <div className="mt-5">
                <button type="submit" className="w-full bg-customColor rounded-md py-3 text-center text-white">Sign Up</button>
              </div>

              <h1 className='text-center p-1 cursor-pointer'>Already have an account? <span className='text-customColor text-1xl'>Log in</span></h1>

              {/* <div className="flex items-center my-3">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="mx-4 text-gray-500">Or</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>

              <div className="flex justify-center my-8">
                <div className="bg-gray-200 px-4 py-2 rounded-md flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>Sign up with Google</span>
                </div>
            </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
