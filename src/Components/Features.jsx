import React from 'react';
//import { FaCloudUploadAlt, FaShieldAlt, FaSyncAlt, FaCogs } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
    ,
    
      title: "Lower Costs",
      description: "Businesses can experiment with different ideas, but they might prove to be time-consuming or costly. However, with enCloud platform you can accelerate digitization of your business process without any wait or developing them from scratch.",
    },
    
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
    </svg>
    ,
    
      title: "Faster Results",
      description: "IT departments/Businesses are in need of deploying applications at light speed, to develop such applications with traditional approach takes very long time and large investments, with enCloud platform Businesses can significantly get faster results",
    },
   
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
    </svg>
    ,
    
      title: "Innovation",
      description: "Innovation is key to achieve Businesses goals faster & efficiently along with less over-heads. enCloud Platform enables Businesses to plan a good strategy to deploy most common digital tools/Apps with low investvents and faster ROI",
    },
   
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
    ,
    
      title: "24/7 Support",
      description: "With round-the-clock support, you can focus on your business knowing that help is always just a click or call away.",
    },
  ];

  return (
    <section id="benefits" className="py-16 bg-white h-max my-28">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Benefits</h2>

      <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl  shadow-xl p-8 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            {/* Icon with Circle Background */}
            <div className="flex justify-center mb-4">
              <div className="bg-blue-300 p-4 rounded-full shadow-md">
                {feature.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{feature.title}</h3>

            {/* Description */}
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
