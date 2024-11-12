import React from 'react';
import { NavLink } from 'react-router-dom';

export function MainNav() {
  return (
    <nav className="flex justify-evenly items-center shadow-md border-b-[6px] border-zinc-500/50  text-sm font-semibold text-gray-700">
      <div className="flex p-5 items-center h-16">
        <NavLink to="/" className="text-2xl font-bold text-blue-700">
          Eze Credit Repair
        </NavLink>
      </div>
      <div  className='flex space-x-3'>
       <NavLink 
        to="/learning-center" 
        className={({ isActive }) => 
          isActive 
        ? "text-blue-700  underline font-bold decoration-[5px] underline-offset-[26px]"
        : "hover:text-blue-700"
        
      }
      >
        Learning Center
      </NavLink>
      <NavLink 
        to="/f&q" 
        className={({ isActive }) => 
          isActive 
        ? "text-blue-700  underline font-bold decoration-[5px] underline-offset-[26px]"
        : "hover:text-blue-700"
      }
      >
        FAQ
      </NavLink>
      <NavLink 
        to="/how-it-works" 
        className={({ isActive }) => 
          isActive 
        ? "text-blue-700  underline font-bold decoration-[5px] underline-offset-[26px]"
        : "hover:text-blue-700"
      }
      >
        How It Works
      </NavLink>
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          isActive 
        ? "text-blue-700  underline font-bold decoration-[5px] underline-offset-[26px]"
        : "hover:text-blue-700"
      }
      >
        Home
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => 
          isActive 
        ? "text-blue-700  underline font-bold decoration-[5px] underline-offset-[26px]"
        : "hover:text-blue-700"
      }
      >
        About Us
      </NavLink>
      <NavLink 
        to="/services" 
        className={({ isActive }) => 
          isActive 
        ? "text-blue-700  underline font-bold decoration-[5px] underline-offset-[26px]"
        : "hover:text-blue-700"
      }
      >
        Our Services
      </NavLink>
      <NavLink 
        to="/pricing" 
        className={({ isActive }) => 
          isActive 
        ? "text-blue-700  underline font-bold decoration-[5px] underline-offset-[26px]"
        : "hover:text-blue-700"
      }
      >
        Pricing Page
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => 
          isActive 
        ? "text-blue-700  underline font-bold decoration-[5px] underline-offset-[26px]"
        : "hover:text-blue-700"
      }
      >
        Contact Us
      </NavLink>
        </div>
    </nav>
  );
}
