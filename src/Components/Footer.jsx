import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">encloud</h2>
            <p className="mt-2 text-white">
              Digital Solutions, without the wait!
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-white hover:text-gray-200">Solutions</a>
              </li>
              <li>
                <a href="#benefits" className="text-white hover:text-gray-200">Benefits</a>
              </li>
              <li>
                <a href="#faq" className="text-white hover:text-gray-200">FAQ</a>
              </li>
              <li>
                <a href="https://support.encloud.app/dev/" target="_blank" className="text-white hover:text-gray-200">Support</a>
              </li>
            </ul>
          </div>

          {/* Links to social media*/}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.563-2.003.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.915 2.206-4.915 4.917 0 .39.045.765.126 1.125-4.083-.205-7.697-2.157-10.118-5.118-.422.722-.666 1.561-.666 2.455 0 1.692.863 3.18 2.173 4.055-.803-.026-1.559-.247-2.218-.616v.061c0 2.364 1.676 4.341 3.897 4.785-.407.11-.835.17-1.278.17-.31 0-.615-.03-.916-.085.631 1.953 2.445 3.377 4.6 3.417-1.686 1.318-3.809 2.103-6.102 2.103-.396 0-.787-.023-1.174-.069 2.189 1.395 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.422-.015-.633.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.742 0-1.325.603-1.325 1.344v21.311c0 .742.603 1.344 1.344 1.344h11.495v-9.29h-3.112v-3.623h3.112v-2.672c0-3.09 1.882-4.772 4.633-4.772 1.321 0 2.455.098 2.784.142v3.226h-1.915c-1.5 0-1.794.714-1.794 1.764v2.312h3.588l-.467 3.623h-3.121v9.291h6.114c.742 0 1.344-.602 1.344-1.344v-21.312c-.001-.741-.604-1.344-1.345-1.344z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19.5 0h-15c-2.486 0-4.5 2.014-4.5 4.5v15c0 2.486 2.014 4.5 4.5 4.5h15c2.486 0 4.5-2.014 4.5-4.5v-15c0-2.486-2.014-4.5-4.5-4.5zm-10.5 19h-3v-10h3v10zm-1.5-11.667c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75c.966 0 1.75.783 1.75 1.75s-.784 1.75-1.75 1.75zm12 11.667h-3v-4.5c0-1.103-.897-2-2-2s-2 .897-2 2v4.5h-3v-10h3v1.337c.702-1.096 1.938-1.833 3.25-1.833 2.485 0 4.5 2.014 4.5 4.5v6.996z"/></svg>
              </a>
            </div>
          </div>
        </div>

        
        <div className="mt-8 text-center text-white text-sm">
          <p>&copy; {new Date().getFullYear()} encloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
