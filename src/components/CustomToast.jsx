import React, { useEffect } from 'react';

const CustomToast = ({ message, type = 'info', duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); 
    }, duration);
    return () => clearTimeout(timer); 
  }, [duration, onClose]);

  const typeStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  };

  return (
    <div
      className={`fixed top-5 right-5 px-4 py-3 rounded shadow-lg text-white flex items-center justify-between min-w-[200px] ${typeStyles[type]} opacity-90 transition-opacity duration-300`}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-white text-lg font-bold focus:outline-none"
      >
        ✕
      </button>
    </div>
  );
};

export default CustomToast;
