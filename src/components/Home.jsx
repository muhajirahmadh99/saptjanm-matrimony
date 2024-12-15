import { Link } from "react-router-dom";
import Footer from "./Footer";
import ProfileModal from "../layouts/ProfileModal";

const Home = () => {
  return (
    <div className="">
      <nav className="bg-pink-300 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl text-red-800 font-semibold whitespace-nowrap dark:text-white">
              Saptjanm Matrimony
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to={"/login"}>
              <button
                type="button"
                className="text-white bg-pink-600 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </Link>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  className="block py-2 px-3 md:p-0 text-red-800 rounded hover:text-red-800 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:text-red-800  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700">
                  About
                </Link>
              </li>
              <li>
                <Link className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:text-red-800  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700">
                  Services
                </Link>
              </li>
              <li>
                <Link className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:text-red-800  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="hero">
        <section className="bg-center bg-no-repeat bg-[url('https://images.pexels.com/photos/17834/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              We invest in the world’s potential
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Join Now
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
              <ProfileModal />
            </div>
          </div>
        </section>
      </div>
      <div className="info">
        <section className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
              <div className="w-full flex-col justify-start items-center gap-3 flex">
                <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                  How It Works
                </h2>
                <p className="w-full text-center text-gray-500 text-base font-normal leading-relaxed">
                  A detailed breakdown of processes and mechanisms behind a
                  system or product, <br />
                  simplifying complex concepts for easy understanding.
                </p>
              </div>
              <div className="w-full justify-start items-center gap-4 flex md:flex-row flex-col">
                <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                    <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                      1
                    </h3>
                    <h4 className="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">
                      Design and Planning
                    </h4>
                  </div>
                  <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                    Outline the website's purpose, target audience, and
                    features. Create wireframes and design mockups to visualize
                    the layout and...
                  </p>
                </div>
                <svg
                  className="md:flex hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004"
                    stroke="#4F46E5"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                    <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                      2
                    </h3>
                    <h4 className="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">
                      Development
                    </h4>
                  </div>
                  <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                    Convert the design into a functional website using HTML,
                    CSS, and JavaScript. Ensure the site is responsive and works
                    on various...
                  </p>
                </div>
                <svg
                  className="md:flex hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004"
                    stroke="#4F46E5"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                    <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                      3
                    </h3>
                    <h4 className="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">
                      Testing and Deployment
                    </h4>
                  </div>
                  <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                    Test the website for issues like broken links and bugs.
                    After making necessary adjustments, deploy it to a web
                    server and conduct...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="testimonial">
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <img
              className="mx-auto h-12"
              src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg"
              alt=""
            />
            <figure className="mt-10">
              <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                <p>
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  expedita voluptas culpa sapiente alias molestiae. Numquam
                  corrupti in laborum sed rerum et corporis.”
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
                  <div className="text-gray-600">CEO of Workcation</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
