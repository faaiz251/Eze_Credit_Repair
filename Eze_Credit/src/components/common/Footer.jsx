import React from 'react';

export function Footer() {
    return (
        <footer className="bg-blue-800 text-white py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Logo and Description */}
                <div>
                    <h2 className="text-2xl font-bold">EzeCreditRepair LLC.</h2>
                    <p className="mt-4 text-sm">
                        EzeCredit Repair is your trusted guide to better credit, ensuring you're ready for every opportunity that comes your way. As the A-Team of credit repair, our fast-track process improves your credit for better rates, loans, and peace of mind.
                    </p>
                </div>
                
                {/* Contact Information */}
                <div>
                    <h3 className="text-lg font-semibold">Mail & Phone</h3>
                    <p className="mt-2">Support@EZEcreditRepair.com</p>
                    <p>0000-000-000</p>
                    <h3 className="text-lg font-semibold mt-4">Office Address, USA</h3>
                    <p>120 Double Street, Texas, Houston USA</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold">Shot Link</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                        {["Home", "About Us", "Our Services", "Pricing Page", "How It Works", "Learning Center", "Terms and Conditions", "FAQ", "Privacy Policy"].map((link, index) => (
                            <li key={index}>
                                <a href="#" className="hover:text-gray-300">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Subscribe and Social Media */}
                <div>
                    <h3 className="text-lg font-semibold">Follow us</h3>
                    <div className="flex flex-col mt-4 space-y-2">
                        <input type="email" placeholder="Email address" className="px-4 py-2 rounded text-gray-900" />
                        <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600">Subscribe Now</button>
                    </div>
                    <div className="flex space-x-4 mt-4 text-lg">
                        <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-gray-300"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                
            </div>

            {/* Footer bottom section */}
            <div className="bg-green-500 text-center text-white py-4 mt-10">
                All 2024 Copyrights Reserved by EzeCreditRepair.com
            </div>
        </footer>
    );
};
