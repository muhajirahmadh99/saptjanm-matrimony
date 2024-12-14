import { Link } from "react-router-dom";
import { profileItems } from "../utils/profileData";

const CardsProfile = () => {
  return (
    <div className="p-4">
      <div className="flex gap-3 flex-wrap justify-center">
        {profileItems.map((profile) => (
          <div
            key={profile.id}
            className="w-80 h-76 bg-cyan-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link>
              <img
                className="rounded-t-lg w-60 mx-auto"
                src={profile.avatar}
                alt=""
              />
            </Link>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {profile.name}
              </h5>

              <h1 className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
                Age : {profile.age}
              </h1>

              <div>{profile.description}</div>
              <Link className="inline-flex items-center px-3 py-2 mt-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsProfile;