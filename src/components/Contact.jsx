import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="h-full  mx-auto flex items-center justify-center my-14">
        <div className=" bg-white shadow-lg rounded p-3">
          <p className="md:text-3xl text-xl font-bold text-center text-gray-700 mt-3">
            Let’s chat and get a quote!
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className=" flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800 mt-2">
                Name
              </label>
              <input
                tabIndex={0}
                arial-label="Please input name"
                type="name"
                className="text-base text-gray-900 p-2  focus:oultine-none focus:border-indigo-700 mt-2 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input name"
              />
            </div>
            <div className=" flex flex-col ">
              <label className="text-base font-semibold leading-none text-gray-800 mt-2">
                Email Address
              </label>
              <input
                tabIndex={0}
                arial-label="Please input email address"
                type="name"
                className="text-base  text-gray-900 p-2 focus:oultine-none focus:border-indigo-700 mt-2 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input email address"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className=" flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Company name
              </label>
              <input
                tabIndex={0}
                role="input"
                arial-label="Please input company name"
                type="name"
                className="text-base  text-gray-900 p-2 focus:oultine-none focus:border-indigo-700 mt-2 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                placeholder="Please input company name"
              />
            </div>
            <div className=" flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Country
              </label>
              <input
                tabIndex={0}
                arial-label="Please input country name"
                type="name"
                className="text-base  text-gray-900 p-2 focus:oultine-none focus:border-indigo-700 mt-2 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input country name"
              />
            </div>
          </div>
          <div className="flex items-center justify-center  mt-3">
            <div className=" w-96  flex flex-col mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Message
              </label>
              <textarea
                tabIndex={0}
                aria-label="leave a message"
                role="textbox"
                type="name"
                className="h-36 text-base text-gray-900 focus:oultine-none focus:border-indigo-700 mt-2 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                defaultValue={""}
              />
            </div>
          </div>
          <p className="text-xs leading-3 text-gray-600 mt-4">
            By clicking submit you agree to our terms of service, privacy policy
            and how we use data as stated
          </p>
          <div className="flex items-center justify-center w-fit mx-auto p-2">
            <button className="flex p-2 w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
