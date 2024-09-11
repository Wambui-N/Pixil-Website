"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { path: "/", label: "Pixil Designs" },
  { path: "/Work", label: "Work" },
  { path: "/About", label: "About" },
  { path: "/Services", label: "Services" },
  { path: "/Contact", label: "Contact" },
];

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="bg-orange text-white font-medium uppercase font-satoshi py-2 px-3 flex items-center rounded-2xl"
      >
        <span className="px-1">{isOpen ? "Close" : "Menu"}</span>
        <span
          className={`material-symbols-rounded transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          keyboard_arrow_down
        </span>
      </button>
      <div
        className={`absolute right-0 mt-4 p-6 bg-black rounded-2xl inline-block min-w-max ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {navLinks.map((link, index) => (
          <Link
            onClick={toggleMenu}
            key={index}
            className="text-orange hover:text-grey text-right font-brule font-medium text-3xl uppercase block py-1"
            href={link.path}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={"/Book"}
          className="text-white font-brule font-medium text-3xl uppercase py-2"
        >
          Let&apos;s Get Started{" "}
          <span className="material-symbols-rounded">arrow_outward</span>
        </Link>
      </div>
    </div>
  );
};

export default DropDown;
