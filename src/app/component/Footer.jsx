import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white/20 w-full">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Logo" className="w-10 h-10" />
            <h2 className="text-2xl font-bold">Planto.</h2>
          </div>
          <p className="text-white/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            molestias blanditiis aliquid asperiores, nam consequuntur!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-white/70">
            <li><a href="#" className="hover:text-green-600">Home</a></li>
            <li><a href="#" className="hover:text-green-600">About</a></li>
            <li><a href="#" className="hover:text-green-600">Services</a></li>
            <li><a href="#" className="hover:text-green-600">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Subscribe for Updates</h2>
          <p className="text-white/70 mb-3">Get the latest news and offers.</p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-10 text-center py-4 text-sm text-white/70">
        © {new Date().getFullYear()} Planto. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
