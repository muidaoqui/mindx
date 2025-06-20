import React from 'react';

function Header() {
  return (
    <header className="bg-gray-900 text-white px-4 py-4 flex justify-around items-center shadow ">
        <h1 className="text-2xl font-bold">Anonime</h1>
        <a href="/" className="hover:text-indigo-400 transition">Home</a>
        <a href="#" className="hover:text-indigo-400 transition">List anime</a>
        <input
        type="text"
        placeholder="Search anime or movie"
        className="bg-gray-800 text-sm text-white px-4 py-2 rounded-full placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500 w-48 md:w-64"
        />
    </header>
  );
}

export default Header;
