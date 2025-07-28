import React from "react";
import { Github, Linkedin, Mail, Twitter, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-white">
      <div className="border-t border-gray-700/60 w-full" />
      <div className="max-w-6xl mx-auto py-5 px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/TanjimulSabbir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 hover:drop-shadow-glow transform hover:scale-110 transition duration-300"
          >
            <Github className="w-3 h-3" />
          </a>
          <a
            href="https://www.linkedin.com/in/tanjimulsabbir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 hover:drop-shadow-glow transform hover:scale-110 transition duration-300"
          >
            <Linkedin className="w-3 h-3" />
          </a>
          <a
            href="mailto:tanjimulsabbir.dev@gmail.com"
            className="hover:text-green-400 hover:drop-shadow-glow transform hover:scale-110 transition duration-300"
          >
            <Mail className="w-3 h-3" />
          </a>
          <a
            href="https://twitter.com/TanjimulSabbir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 hover:drop-shadow-glow transform hover:scale-110 transition duration-300"
          >
            <Twitter className="w-3 h-3" />
          </a>
          <a
            href="https://tanjimulsabbir.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 hover:drop-shadow-glow transform hover:scale-110 transition duration-300"
          >
            <Globe className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
