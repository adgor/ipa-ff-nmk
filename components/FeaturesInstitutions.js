import { FaCheck } from "react-icons/fa";

const institutions = [
  {
    abbr: "PRD",
    name: "Protection and Rescue Directorate",
    role: " – National program coordinator",
  },
  {
    abbr: "MoEPP",
    name: "Ministry of environment and physical planning",
    role: " – National coordinator for Component 1",
  },
  {
    abbr: "AoULSG",
    name: "Assotiation of the units of local self government",
    role: " – National coordinator for Component 2",
  },
  {
    abbr: "GS",
    name: "General Secretariat of the Government of North Macedonia",
  },
  {
    abbr: "SoEA",
    name: "Secretariat of European Affairs",
  },
  {
    abbr: "MoAFWM",
    name: "Ministry of agriculture, forestry and water management",
  },
  {
    abbr: "MoLSG",
    name: "Ministry of local self government",
  },
  {
    abbr: "CMC",
    name: "Crisis Management Center",
  },
  {
    abbr: "NHS",
    name: "National hydrometeorological service",
  },
];

export const FeaturesInstitutions = () => {
  return (
    <div
      id="intitutions"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-2xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          The National intitutions of North Macedonia involved in the IPAFF
          program
        </h2>
      </div>
      <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-3xl">
        {institutions.map((institution, index) => (
          <div
            key={index}
            className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110"
          >
            <div className="mr-2">
              <FaCheck className="w-4 h-4 text-indigo-500 h- " />
            </div>
            <span className="text-gray-800">
              {institution.name} {institution.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
