export const Objective = () => {
  return (
    <div className="bg-gray-50" id="objectives">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Project objectives
          </h2>
        </div>
        <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
          <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide uppercase">
                Component 1
              </p>
              <h5 className="max-w-md mb-6 text-2xl font-bold leading-none ">
                FLOOD PREVENTION
              </h5>
              <p className="mb-4 text-base text-gray-700 md:text-lg sm:mb-6">
                <span className="font-bold ">
                  Specific objective: <br />
                </span>
                To improve <b> legal</b> and <b> institutional framework</b>{" "}
                related to
                <b> EUFD implementation</b>
              </p>
              <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                <span className="font-bold ">
                  Expected result: <br />
                </span>
                Improved <b> FRMP capacities</b> and strengthened <b> EWS </b>{" "}
                for <b> floods</b>
              </p>
            </div>
            <div className="flex items-center">
              <a
                target="_blank"
                href="https://drive.google.com/drive/folders/1g-JYduigHW9irEq_6N5S3zc1nC7o98fs?usp=sharing"
              >
                <button
                  //   type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-indigo-500 rounded shadow-md hover:bg-indigo-700 text- focus:shadow-outline focus:outline-none"
                >
                  Learn more
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide uppercase">
                Component 2
              </p>
              <h5 className="max-w-md mb-6 text-2xl font-bold leading-none ">
                FOREST-FIRES RISK MANAGEMENT
              </h5>
              <p className="mb-4 text-base text-gray-700 md:text-lg sm:mb-6">
                <span className="font-bold ">
                  Specific objective: <br />
                </span>
                To improve capacities for <b> prevention</b> and{" "}
                <b>preparedness</b> for <b>FF</b> at central, regional and EU
                levels
              </p>
              <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                <span className="font-bold ">
                  Expected result: <br />
                </span>
                <b> Regionally harmonized</b> methodology for <b>FFRA</b>,
                updated <b>FFRMP</b>, improved <b>operational capacities</b> for{" "}
                <b>response</b> to <b>FF</b>
              </p>
            </div>
            <div className="flex items-center">
              <a
                target="_blank"
                href="https://drive.google.com/drive/folders/1g-JYduigHW9irEq_6N5S3zc1nC7o98fs?usp=sharing"
              >
                <button
                  //   type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-indigo-500 rounded shadow-md hover:bg-indigo-700 text- focus:shadow-outline focus:outline-none"
                >
                  Learn more
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
