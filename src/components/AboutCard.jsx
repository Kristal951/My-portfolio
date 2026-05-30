import React from "react";

const AboutCard = ({ title, Icon, description }) => {
  return (
    <div className="p-4 sm:p-5 md:p-6 w-full max-w-[350px] flex flex-col items-start gap-3 bg-white border border-gray-300 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex mb-2 text-2xl sm:text-3xl text-gray-700">
        <Icon />
      </div>
      <div className="text-lg sm:text-xl font-geistSemiBold text-gray-800">
        {title}
      </div>
      <div className="text-sm text-left sm:text-base font-katanmruy text-gray-600 leading-relaxed">
        {description}
      </div>
    </div>
  );
};

export default AboutCard;