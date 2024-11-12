import React from 'react';

export function Contact ()  {
  return (
    <div className="flex flex-col md:flex-row bg-blue-800 text-white p-8 rounded-sm">
        <div className="bg-blue-900 text-white py-2 px-4">
      <div className="max-w-screen-lg mx-auto flex justify-start">
        <span className="font-semibold">Home</span>
        <span className="mx-2">|</span>
        <span className="font-semibold">Contact Us</span>
      </div>
    </div>
      <div className="flex-1 mb-8 md:mb-0 md:mr-8">
        <h2 className="text-2xl font-bold">We are here to help you</h2>
        <p className="mt-4 mb-8">
          We specialize in helping individuals and families regain control of their financial by
          repairing and improving their credit scores.
        </p>
        <form className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="p-1 rounded bg-white text-black" />
            <input type="text" placeholder="Last Name" className="p-1 rounded bg-white text-black" />
          </div>
          <input type="text" placeholder="Phone Number" className="p-1 rounded bg-white text-black" />
          <input type="text" placeholder="Subject" className="p-1 rounded bg-white text-black" />
          <input type="text" placeholder="What is your Current Score?" className="p-1 rounded bg-white text-black" />
          <input type="text" placeholder="Reason for Credit Repair" className="p-2 rounded bg-white text-black" />
          <textarea placeholder="How Soon?" className="p-2 rounded bg-white text-black h-10"></textarea>
          <button className="mt-[-5px] p-2 rounded bg-green-500 text-white font-bold">Sign Up Now</button>
        </form>
      </div>

      <div className="max-w-lg w-full mt-8 md:mt-0 md:ml-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span role="img" aria-label="phone" className="mr-2">📞</span> 0000-00-0000
          </li>
          <li className="flex items-center">
            <span role="img" aria-label="email" className="mr-2">✉️</span> info@ezecreditrepiar.com
          </li>
          <li className="flex items-center">
            <span role="img" aria-label="web" className="mr-2">🌐</span> ezecreditrepiar.com
          </li>
          <li className="flex items-center">
            <span role="img" aria-label="location" className="mr-2">📍</span> 120 Double Street, Texas, Houston USA
          </li>
        </ul>
        <div className="flex space-x-4 mt-8">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        <script src="https://cdn.tailwindcss.com"></script>
        <a href="#" className="text-white text-2xl"><i className="fab fa-facebook"></i></a>
           <a href="#" className="text-white text-2xl"><i className="fab fa-twitter"></i></a>
           <a href="#" className="text-white text-2xl"><i className="fab fa-instagram"></i></a>
           <a href="#" className="text-white text-2xl"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  );
};


