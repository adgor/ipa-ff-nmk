import { FaFacebook, FaTwitter } from "react-icons/fa";

const members = [
  {
    name: "Valentina Atanasovska",
    role: "National program coordinator",
    institution: "PRD",
    // twitter: "https://twitter.com/admirgorenca",
    // facebook: "https://www.facebook.com/ad.miri.39",
  },
  {
    name: "admir gorenca",
    // role: " na na",
    institution: "PRD",
    twitter: "https://twitter.com/admirgorenca",
    facebook: "https://www.facebook.com/ad.miri.39",
  },
];

export const Team = () => {
  return (
    <div className="bg-gray-50" id="team">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-indigo-900 uppercase rounded-full">
            Know Our Team
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            Representatives from involved institutions
          </p>
        </div>
        <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
          {members.map((member, index) => (
            <div key={index} className="grid sm:grid-cols-3">
              <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="Person"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">{member.name}</p>
                <p className="mb-4 text-xs text-gray-800">{member.role}</p>
                <p className="mb-4 text-sm tracking-wide text-gray-800">
                  {member.institution}
                </p>
                <div className="flex items-center space-x-3">
                  <a
                    href={member.twitter}
                    target="_blank"
                    className="text-gray-600 transition-colors duration-300 hover:text-blue-500"
                  >
                    <FaTwitter className="w-6 h-6 " />
                  </a>
                  <a
                    href={member.facebook}
                    target="_blank"
                    className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                  >
                    <FaFacebook className="w-6 h-6 " />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
