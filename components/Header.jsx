import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-around border border-gray-300 py-3 px-7 items-center">
      <nav className="flex-[70%]">
        <ul className="flex whitespace-normal justify-around">
          <li className="text-pink-700 uppercase font-semibold whitespace-nowrap mr-10">
            Iludate&mdash;Agentur
          </li>
          <li>start</li>
          <li>info</li>
          <li>Honorar</li>
          <li>Select</li>
          <li>Video Call</li>
          <li>Contact us</li>
          <li>News</li>
        </ul>
      </nav>

      <ul className="flex flex-[20%] ">
        <li>
          <span>EN</span>
          <span>DE</span>
        </li>
        <li>
          <button>Login</button>
        </li>
      </ul>
    </header>
  );
};
