import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="">
        <div className="max-w-screen-md px-4 py-3 mx-auto bg-gray-200 mt-3 mb-3 shadow-md">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-red-500 dark:text-gray-900">
            Contact us
          </h2>
          <p className="mb-8 font-light text-center text-gray-200 lg:mb-16 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let me know.
          </p>
          <form className="space-y-8">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="p-2 w-full  text-gray-900 text-sm  bg-gray-300 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder:text-gray-600"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-900"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block w-full p-3 text-sm text-gray-900 bg-gray-300 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder:text-gray-600"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-300 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder:text-gray-600"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="button"
              className="flex w-fit p-2 justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
