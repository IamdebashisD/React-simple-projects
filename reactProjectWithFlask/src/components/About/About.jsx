import React from 'react';

function About() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Who We Are
          </p>
          <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {/* Example Feature 1 */}
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                  {/* Icon goes here */}
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Our Mission
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </dd>
            </div>

            {/* Example Feature 2 (Add more features as needed) */}
             <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-해도-12 w-12 rounded-md bg-indigo-500 text-white">
                  {/* Icon goes here */}
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Our Vision
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;