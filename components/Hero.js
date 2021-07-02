export const Hero = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="mb-6">
            <img
              className="object-none "
              src="https://www.ipaff.eu/wp-content/uploads/2021/04/LOGHI-EU_blu-300x85.png"
              alt=""
            />
          </div>

          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-1 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              IPA FF
            </h2>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Republic of North Macedonia
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              A new 3-year initiative for floods and forest fire risk management
              in the Western Balkans and Turkey.
            </p>
          </div>
          <div>
            <a
              href="#objectives"
              aria-label=""
              className="inline-flex items-center font-semibold text-blue-500 transition-colors duration-200 hover:text-blue-800"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="http://hukm.hr/wp-content/uploads/2016/08/skopje555-800x445.jpg"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://i0.wp.com/www.saba-news.com/wp-content/uploads/2019/09/EU-CPT-vest-02.jpg?w=450&ssl=1"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="http://dzs.gov.mk/public/storage1/images/ELPcqpfoVxo1RzJLlTagRaJoRinMD2UiF8Kb5ci7.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
