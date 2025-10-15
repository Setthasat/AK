import React from "react";
import { Menu, AlertTriangle } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-90 text-white z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="text-yellow-500" size={24} />
          <span className="font-bold text-lg">AK History</span>
        </div>
        <ul className="hidden md:flex space-x-6 text-sm">
          <li>
            <a href="#about" className="hover:text-yellow-500">
              About
            </a>
          </li>
          <li>
            <a href="#history" className="hover:text-yellow-500">
              History
            </a>
          </li>
          <li>
            <a href="#variants" className="hover:text-yellow-500">
              Variants
            </a>
          </li>
          <li>
            <a href="#technical" className="hover:text-yellow-500">
              Technical
            </a>
          </li>
          <li>
            <a href="#impact" className="hover:text-yellow-500">
              Impact
            </a>
          </li>
        </ul>
        <button className="md:hidden text-yellow-500">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};
