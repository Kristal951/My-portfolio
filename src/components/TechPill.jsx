import React from 'react';

const TechPill = ({ name, image }) => {
  return (
    <div className="bg-bg px-4 py-2 rounded-xl flex items-center gap-3 hover:border transition-all hover:border-border hover:translate-y-[-4px] hover:shadow-xl group">
      {image && (
        <img 
          src={image} 
          alt={`${name} icon`}
          className="w-3.5 h-3.5 object-contain transition-opacity group-hover:opacity-100" 
        />
      )}
      <span>{name}</span>
    </div>
  );
};

export default TechPill