import React from "react";

const ImageUpload = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-64 mx-auto mt-4">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300  rounded-full cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 0"
        >
          <div className="flex flex-col items-center justify-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10 mb-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-white">Click to upload Photo</span>
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
