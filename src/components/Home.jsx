import { Link } from "react-router-dom";
import Footer from "./Footer";
import ProfileModal from "../layouts/ProfileModal";

const Home = () => {
  return (
    <div className="">
      <div className="hero">
        <section className="bg-center bg-no-repeat bg-[url('https://images.pexels.com/photos/17834/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-gray-700 bg-blend-multiply">
          <div className="flex justify-between px-4 py-4">
            <div className=""></div>
            <div className="">
              <Link to={"/login"}>
                <button className="bg-gray-300 text-black font-medium p-2 w-24 rounded-md cursor-pointer">
                  Login
                </button>
              </Link>
            </div>
          </div>
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              We invest in the world’s potential
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              Now find your partner... Finding your perfect match just became
              easier..
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <ProfileModal />
            </div>
          </div>
        </section>
      </div>
      <div className="info">
        <section className="py-24 relative h-full bg-[url('https://img.freepik.com/free-vector/working-characters-flat-design-web-banner_1308-127707.jpg?t=st=1734371237~exp=1734374837~hmac=fe85ae29ebe4b43851872f5a447673ca1293529de1604486ad6438a475c4b306&w=1380')]">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto bg-gray-200 my-20 opacity-85 py-5 rounded-2xl">
            <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
              <div className="w-full flex-col justify-start items-center gap-3 flex">
                <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                  How It Works
                </h2>
                <p className="w-full text-center text-black font-medium text-lg leading-relaxed">
                  Choose by Interests, Location and other relevant filters
                  Customize your partner search with filters like Hobbies,
                  Location and more. Find your suitable match!
                </p>
              </div>
              <div className="flex justify-between w-full mx-auto flex-wrap ">
                <div className=" flex-col bg-gray-400 p-3 rounded-md mt-2">
                  <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                    <h3 className="self-stretch text-center text-white text-4xl font-extrabold font-manrope leading-normal">
                      1
                    </h3>
                    <h4 className="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">
                      Connect with matches the way you like
                    </h4>
                  </div>
                  <div className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                    <div className="flex gap-3">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6 text-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                          />
                        </svg>
                      </div>
                      <div className="text-black">
                        Talk to matches directly through voice calls
                      </div>
                    </div>
                    <div className="flex gap-3 mt-3">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6 text-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                          />
                        </svg>
                      </div>
                      <div className="text-black">
                        Connect with matches instantly through messaging
                      </div>
                    </div>
                    <div className="flex gap-3 mt-3">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6 text-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                          />
                        </svg>
                      </div>
                      <div className="text-black">
                        Meet your matches virtually with video calls
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col w-96 bg-gray-400 p-3 rounded-md mt-2">
                  <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                    <h3 className="self-stretch text-center text-white text-4xl font-extrabold font-manrope leading-normal">
                      2
                    </h3>
                    <h4 className="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">
                      AI-driven match recommendations to suit your preferences
                    </h4>
                  </div>
                  <p className="self-stretch text-center text-black text-base font-normal leading-relaxed">
                    Our AI recommendation engine gives profile suggestions based
                    on your preferences. Explore compatible matches from these.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="testimonial">
        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-center text-red-500 dark:text-gray-900">
          Testimonial
        </h2>
        <div className="flex justify-between items-center flex-wrap">
          <div className="">
            <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
              <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="mt-10">
                  <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                    <p>
                      “
                      <span className="text-2xl text-red-800 font-bold me-1">
                        Saptjanm Matrimony 
                      </span>
                     Company, we take pride in our commitment to providing
                      exceptional customer service and high-quality personalised
                      services. Our goal is to exceed our customers'
                      expectations and make their experience with us a positive
                      one. This is why we are constantly receiving positive
                      feedback from our satisfied customers.”
                    </p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <img
                      className="mx-auto size-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">
                        Judith Black
                      </div>
                      <svg
                        viewBox="0 0 2 2"
                        width="3"
                        height="3"
                        aria-hidden="true"
                        className="fill-gray-900"
                      >
                        <circle cx="1" cy="1" r="1" />
                      </svg>
                      <div className="text-gray-600">
                        CEO of Saptjanm Matrimony
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>
          <div className="">
            <img
              src="
           https://img.freepik.com/free-vector/chat-bubble-style-quote-template-design-set_1017-27116.jpg?t=st=1734372065~exp=1734375665~hmac=4f1aa68338fd660ac74e17baf74a0e9a03cccc982ccbb7ed1465f7c18f728899&w=826

            "
              alt=""
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
