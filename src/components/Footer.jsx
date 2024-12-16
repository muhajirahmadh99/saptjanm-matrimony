import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-body-secondary">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link className="flex items-center no-underline  mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                Saptjanm Matrimony
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0">
              <li>
                <Link href="#" className="no-underline text-black me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline text-black me-4 md:me-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline text-black me-4 md:me-6">
                  Licensing
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-black sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to={""} className="no-underline text-black">
              SaptJanm
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
