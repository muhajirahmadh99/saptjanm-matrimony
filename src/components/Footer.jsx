import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-red-900 shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
                Flowbite
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
              <li>
                <Link href="#" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-white sm:text-center dark:text-gray-400">
            © 2023 <Link to={""} className="hover:underline">SaptJanm</Link>. All
            Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
