import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex flex-col items-center py-5 border-t sm:flex-row">
        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">ad-docs</span>
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0">
          © 2021 admirg. All rights reserved.
        </p>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            href="https://www.facebook.com/ad.miri.39"
            target="_blank"
            className="text-gray-500 hover:text-blue-500"
          >
            <FaFacebook className="w-6 h-6 " />
          </a>
          <a
            href="https://twitter.com/admirgorenca"
            target="_blank"
            className="ml-3 text-gray-500 hover:text-blue-600"
          >
            <FaTwitter className="w-6 h-6 " />
          </a>
          <a
            href="https://www.instagram.com/admirgorenca/"
            target="_blank"
            className="ml-3 text-gray-500 hover:text-pink-500"
          >
            <FaInstagram className="w-6 h-6 " />
          </a>
        </span>
      </div>
    </div>
  );
};
