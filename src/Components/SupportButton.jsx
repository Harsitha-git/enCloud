import React from 'react';

const SupportButton = () => {
  return (
    <a
      href="https://support.encloud.app/dev/" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-200 z-50"
    >
      Support
    </a>
  );
};

export default SupportButton;
