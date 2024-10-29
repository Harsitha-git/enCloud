import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "How to get started with enCloud?",
      answer: <ul className='list-disc mx-4'>
      <li>Sign-up for 15 days free trial</li>
      <li>Explore all available modules</li>
      <li>Choose one or more modules for your business needs</li>
      <li>Send us a detailed message with info on desired modules via our 24/7 support center, alternatively you can also use our Live chat tool to contact us</li>
      <li>enCloud team will contact you to verify & setup your account for Production use with-in 24hrs</li>
    </ul>
    },
    {
      question: "How to contact enCloud for further information or support?",
      answer: <ul className='list-disc mx-4'>
      <li>Support URL: https://support.encloud.app</li>
      <li>Send us a detailed message, alternatively you can also use our Live chat</li>
      <li>enCloud team will contact you to verify your request & provide required assistance with-in 24hrs</li>
      
    </ul>
    },
    {
      question: "Are there any contracts involved to use enCloud?",
      answer: <ul className='list-disc mx-4'>
      <li>All Solutions & Services provided by enCloud are month-to-month</li>
      <li>There are no contracts involved</li>
      <li>For any further questions please contact us via our 24/7 support center</li>
      
    </ul>
    },
    {
      question: "How to understand Pricing & Payment terms?",
      answer: <ul className='list-disc mx-4'>
      <li>Based on plan you have selected pricing will be based on month-to-month</li>
      <li>You can cancel services at any time</li>
      <li>Invoice for paytment will be automatically sent every month 7 days before the due date</li>
      <li>All payments will be charged via secured payment links or automatic deductions via registered payment options</li>
      <li>For any further questions please contact us via our 24/7 support center</li>
    </ul>
    },
  ];

  // Track open/close state of each FAQ
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white my-28">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>

      <div className="max-w-4xl mx-auto space-y-4 px-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <button
              className="flex justify-between items-center w-full text-left font-semibold text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="text-blue-600">{openIndex === index ? '-' : '+'}</span>
            </button>

            {openIndex === index && (
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
