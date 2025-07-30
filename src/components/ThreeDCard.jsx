import React from "react";
import './index.scss'

const ThreeDCard = ({src, alt, label}) => {
  return (
    <div className="flex card">
      <div className="flip-card-inner flex items-center justify-center hover:shadow-md rounded-md cursor-pointer">
        <div className="flex front w-[40px] h-[40px]">
          <img src={src} className="w-[40px] h-[40px]" alt={alt} />
        </div>
        <div className="back">
          <p className="text-sm font-bold">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default ThreeDCard;
