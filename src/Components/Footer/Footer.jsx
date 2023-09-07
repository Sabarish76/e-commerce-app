import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-300 h-fit text-black mt-10">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-black uppercase">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/mens" className="hover:underline">
                  Mens
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/womens" className="hover:underline">
                  Womens
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/kids" className="hover:underline">
                  Kids
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-black uppercase ">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="/discord" className="hover:underline">
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a href="/twitter" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="/facebook" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-black uppercase ">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="/licensing" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="/terms-and-conditions" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-black uppercase ">
              Download
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="/ios" className="hover:underline">
                  iOS
                </a>
              </li>
              <li className="mb-4">
                <a href="/android" className="hover:underline">
                  Android
                </a>
              </li>
              <li className="mb-4">
                <a href="/windows" className="hover:underline">
                  Windows
                </a>
              </li>
              <li className="mb-4">
                <a href="/macos" className="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6  bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2023 <a href="https://flowbite.com/">Sabarish76</a>. All Rights
            Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-gray-900"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                {/* ... Facebook icon path */}
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://discord.com"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                {/* ... Discord icon path */}
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                {/* ... Twitter icon path */}
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {/* ... GitHub icon path */}
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://dribbble.com"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {/* ... Dribbble icon path */}
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
