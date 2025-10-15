import { Github, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-gray-200 text-black flex flex-col md:flex-row items-center justify-between w-full gap-4">
      <div className="flex gap-2">
        <a
          href="https://github.com/Setthasat"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 mx-2 gap-2 rounded-full hover:bg-yellow-500 transition-colors flex items-center justify-center"
        >
          <Github />
          <p>Github</p>
        </a>
        <a
          href="https://safehub.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 mx-2  gap-2 rounded-full hover:bg-yellow-500 transition-colors flex items-center justify-center"
        >
          <Globe />
          <p>SafeHub</p>
        </a>
      </div>
      <p className="text-center">
        A simple design that reshaped modern weapon history.
      </p>
    </footer>
  );
};
