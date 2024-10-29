import React from 'react';

const PriceCards = () => {
  const plans = [
    {
      title: 'Basic',
      price: '$9.99/Month',
      features: ['Choose any one Solution','Each additional module $3.99','Includes all common modules','99.99% Availability', '15GB Storage Space', '24/7 Support(Basic)'],
      buttonText: 'Get Basic',
    },
    {
      title: 'Starter',
      price: '$19.99/Month',
      features: ['Choose any 3 Solutions','Each additional module $1.99','Includes all common modules','99.99% Availability', '100GB Storage Space', '24/7 Support(Enhanced)'],
      buttonText: 'Get Standard',
    },
    {
      title: 'Pro',
      price: '$29.99/Month',
      features: ['All Available Solutions','Automatic Upgrade to new modules','Includes all common modules','99.99% Availability', '1TB Storage Space', '24/7 Support(Premium)'],
      buttonText: 'Get Premium',
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">Plans</h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white border-t-2 border-indigo-200 border-t-blue-500 rounded-lg shadow-lg shadow-blue-500/40 p-8 text-center 
          hover:shadow-xl transition ease-in-out hover:-translate-y-1 
           hover:scale-110 duration-300">
            
            {/* Plan Title */}
            <h3 className="text-xl font-semibold text-gray-700 mb-4">{plan.title}</h3>
            
            {/* Price */}
            <p className="text-4xl font-bold text-blue-500 mb-6">{plan.price}</p>
            
            {/* Features List */}
            <ul className="text-gray-600 mb-8 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex place-items-center ml-8 justify-start">
                  <span className="mr-2">✓</span> {feature}
                </li>
              ))}
            </ul>
            
            {/* Action Button */}

            <a
          
                href="https://encloud.app/wsdev/public/signup" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-500 transition-colors">
                {plan.buttonText}
          
            </a>
            
            {/*<button className="bg-blue-400 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-500 transition-colors">
              {plan.buttonText}
            </button>*/}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceCards;
