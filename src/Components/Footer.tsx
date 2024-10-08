"use client";

import Link from "next/link";
import React from "react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/Work", label: "Work" },
  { path: "/About", label: "About" },
  { path: "/Services", label: "Services" },
  { path: "/Contact", label: "Contact" },
];

const Footer = () => {
  return (
    <div className="bg-black text-iron font-light py-6">
      <div className="responsive">
        <div className="flex flex-col gap-8 py-4 border-b border-white">
          <svg
            className="w-full p-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 618.4 73.2"
          >
            <defs>
              <style>
                {`
            .cls-1 { fill: #DE4A24; }
          `}
              </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  className="cls-1"
                  d="M232.45,40.56l22.45-4.88-22.45-4.87a9.65,9.65,0,0,1-7.38-7.44L220.25.68l-4.82,22.69a9.64,9.64,0,0,1-7.37,7.44L185.6,35.68l22.46,4.88A9.64,9.64,0,0,1,215.43,48l4.82,22.68L225.07,48A9.65,9.65,0,0,1,232.45,40.56Z"
                />
                <path
                  className="cls-1"
                  d="M18.4,1.1C35.8,1.1,47,11,47,26.5c0,13.8-8.1,25-21.7,25a18.37,18.37,0,0,1-10-2.79A5,5,0,0,0,7.5,52.87V71.1H0V1.1ZM39.5,26.5c0-12.7-6.8-22.7-21.1-22.7H12.5a5,5,0,0,0-5,5V25.7c0,14.4,7.1,21.9,17,21.9C34,47.6,39.5,40.8,39.5,26.5Z"
                />
                <path className="cls-1" d="M51.5,71.1V1.1h7.6v70Z" />
                <path
                  className="cls-1"
                  d="M114.3,1.1,93.58,33.84a5,5,0,0,0,0,5.33l20,31.93h-8.1L89.72,45.91A5,5,0,0,0,81.2,46c-6.52,10.84-9.74,16.75-8.9,25.11H61.9L82,39a5,5,0,0,0,0-5.31L61.6,1.1h8.1L86,27.06a5,5,0,0,0,8.48,0c6.82-11,10.08-17.53,9.24-25.94Z"
                />
                <path className="cls-1" d="M117.8,71.1V1.1h7.6v70Z" />
                <path
                  className="cls-1"
                  d="M134.5,71.1V1.1h7.6v62a5,5,0,0,0,5.06,5c9-.11,14.91-.83,27.24-5.59v8.6Z"
                />
                <path
                  className="cls-1"
                  d="M268.5,71.6V1.6h16c13,0,38.1,0,38.1,35s-25.1,35-38.1,35Zm7.5-8a5,5,0,0,0,5,5h6.8c15.1,0,26.8-4.4,26.8-32s-11.7-32-26.8-32H281a5,5,0,0,0-5,5Z"
                />
                <path
                  className="cls-1"
                  d="M368.4,9.8C356.15,5,349.62,4.61,340.61,4.6a5,5,0,0,0-5,5V32.8l30.3-1.9v7.3l-30.3-3V63.6a5,5,0,0,0,5,5c9.05,0,15.51-.6,27.77-5.8v8.8H328V1.6h40.4Z"
                />
                <path
                  className="cls-1"
                  d="M372,62.7v-16h.1c4.1,14.2,18.5,22.7,29.6,22.7,10.5,0,17.1-4.9,17.1-12.8,0-20.1-45.6-17.5-45.6-40C373.2,4.5,383.5.2,395.7.2c9.4,0,19.6,2.6,26.4,6.9V18.2c-5.9-9.6-17.5-14.7-27.6-14.7-9.2,0-15.4,4-15.4,10.8C379.1,32.1,424,30,424,53.5c0,12.2-8.1,19.7-23.8,19.7C386.1,73.2,377.7,67.6,372,62.7Z"
                />
                <path className="cls-1" d="M428.3,71.6V1.6h7.6v70Z" />
                <path
                  className="cls-1"
                  d="M465.5,35.3h37.2V71.6H498l-.9-22.7c-.8,10.5-5.5,24.3-23,24.3-21,0-32.8-15.5-32.8-37.9C441.3,13.5,454,0,474.3,0s27.6,11.5,27.6,18.9c0,5.9-2.5,9.3-6,9.3a6.65,6.65,0,0,1-3.9-1.4,24.09,24.09,0,0,0,2.2-9.2c0-8-6.2-14.2-19.6-14.2-17.5,0-25.1,15-25.1,31.8,0,17.8,9.2,33,24.7,33,13.66,0,19.53-11.05,21.74-22.82a5,5,0,0,0-4.25-5.94L465.5,36Z"
                />
                <path
                  className="cls-1"
                  d="M561,1.6v70h-8.3l-34-56A2.5,2.5,0,0,0,514.06,17c.33,36.91,1.65,42.11,5.74,54.65h-9V1.6h7.9l34.43,56.45a2.5,2.5,0,0,0,4.64-1.32c-.21-37.13-1.3-42.67-5.67-55.13Z"
                />
                <path
                  className="cls-1"
                  d="M566.4,62.7v-16h.1c4.1,14.2,18.5,22.7,29.6,22.7,10.5,0,17.1-4.9,17.1-12.8,0-20.1-45.6-17.5-45.6-40C567.6,4.5,577.9.2,590.1.2c9.4,0,19.6,2.6,26.4,6.9V18.2C610.6,8.6,599,3.5,588.9,3.5c-9.2,0-15.4,4-15.4,10.8,0,17.8,44.9,15.7,44.9,39.2,0,12.2-8.1,19.7-23.8,19.7C580.5,73.2,572.1,67.6,566.4,62.7Z"
                />
              </g>
            </g>
          </svg>
          <div className="flex flex-row justify-between">
            {navLinks.map((link, index) => (
              <div key={index} className="">
                <div className="overflow-hidden text-white hover:orange capitalize">
                  <Link
                    href={link.path}
                    className="flex flex-row justify-end items-center"
                  >
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
            <div
              className="cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to the top
            </div>
          </div>
        </div>
        <div className="border-b border-white py-4 flex flex-row justify-between items-center">
          <div>
            <Link
              href="/Book"
              className="text-orange font-brule font-medium text-4xl"
            >
              Let&apos;s get started!
            </Link>
          </div>
          <div>
            <div className="flex flex-row gap-3 items-center justify-end">
              <Link target="_blank" href="https://x.com/PixilDesigns">
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2817 0.463379H17.0143L11.0452 7.30297L18.0681 16.6116H12.5699L8.2605 10.9671L3.33507 16.6116H0.599998L6.98396 9.29351L0.25 0.464652H5.88815L9.77758 5.62298L14.2817 0.463379ZM13.3208 14.9724H14.8354L5.06088 2.01737H3.43689L13.3208 14.9724Z"
                    fill="#FBFCF8"
                  />
                </svg>
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/pixildesigns/"
              >
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.34913 0.628906H12.8327C15.6836 0.628906 18 2.94526 18 5.79615V13.2797C18 14.6502 17.4556 15.9645 16.4865 16.9335C15.5175 17.9026 14.2032 18.447 12.8327 18.447H5.34913C2.49823 18.447 0.181885 16.1306 0.181885 13.2797V5.79615C0.181885 4.42571 0.726289 3.1114 1.69533 2.14236C2.66438 1.17331 3.97869 0.628906 5.34913 0.628906ZM5.17095 2.41071C4.32033 2.41071 3.50455 2.74862 2.90308 3.3501C2.3016 3.95157 1.96369 4.76735 1.96369 5.61797V13.4579C1.96369 15.2308 3.39805 16.6652 5.17095 16.6652H13.0109C13.8615 16.6652 14.6773 16.3273 15.2788 15.7258C15.8802 15.1243 16.2182 14.3085 16.2182 13.4579V5.61797C16.2182 3.84507 14.7838 2.41071 13.0109 2.41071H5.17095ZM13.7682 3.74707C14.0635 3.74707 14.3468 3.8644 14.5556 4.07324C14.7645 4.28209 14.8818 4.56535 14.8818 4.8607C14.8818 5.15605 14.7645 5.43931 14.5556 5.64815C14.3468 5.857 14.0635 5.97433 13.7682 5.97433C13.4728 5.97433 13.1896 5.857 12.9807 5.64815C12.7719 5.43931 12.6545 5.15605 12.6545 4.8607C12.6545 4.56535 12.7719 4.28209 12.9807 4.07324C13.1896 3.8644 13.4728 3.74707 13.7682 3.74707ZM9.09092 5.08343C10.2723 5.08343 11.4054 5.55274 12.2407 6.38812C13.0761 7.22351 13.5454 8.35653 13.5454 9.53794C13.5454 10.7194 13.0761 11.8524 12.2407 12.6878C11.4054 13.5231 10.2723 13.9925 9.09092 13.9925C7.90951 13.9925 6.77649 13.5231 5.9411 12.6878C5.10572 11.8524 4.6364 10.7194 4.6364 9.53794C4.6364 8.35653 5.10572 7.22351 5.9411 6.38812C6.77649 5.55274 7.90951 5.08343 9.09092 5.08343ZM9.09092 6.86523C8.38208 6.86523 7.70226 7.14682 7.20103 7.64805C6.6998 8.14928 6.41821 8.8291 6.41821 9.53794C6.41821 10.2468 6.6998 10.9266 7.20103 11.4278C7.70226 11.9291 8.38208 12.2107 9.09092 12.2107C9.79977 12.2107 10.4796 11.9291 10.9808 11.4278C11.482 10.9266 11.7636 10.2468 11.7636 9.53794C11.7636 8.8291 11.482 8.14928 10.9808 7.64805C10.4796 7.14682 9.79977 6.86523 9.09092 6.86523Z"
                    fill="#FBFCF8"
                  />
                </svg>
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/pixil-designs/"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.85411 4.90524C4.04198 4.90524 4.99228 3.9401 4.99228 2.76708C4.99228 1.59405 4.02713 0.628906 2.85411 0.628906C1.68109 0.628906 0.715942 1.59405 0.715942 2.76708C0.715942 3.9401 1.68109 4.90524 2.85411 4.90524ZM7.02651 6.52372V18.4321H10.7089V12.5522C10.7089 10.9931 11.0059 9.4934 12.9213 9.4934C14.8368 9.4934 14.8368 11.2752 14.8368 12.6413V18.4321H18.534V11.8988C18.534 8.69159 17.851 6.22675 14.1092 6.22675C12.3125 6.22675 11.1098 7.20675 10.6198 8.1422H10.5753V6.50887H7.04136L7.02651 6.52372ZM1.01291 6.52372H4.71016V18.4321H1.01291V6.52372Z"
                    fill="#FBFCF8"
                  />
                </svg>
              </Link>
            </div>
            <div>{/* TODO Add Contacts */}</div>
          </div>
        </div>
        <div className="py-4 flex flex-row justify-between">
          <p className="text-grey text-sm">
            ©2024 Pixil Designs - All rights Reserved
          </p>
          <p className="text-grey text-sm">Designed by Pixil Designs</p>
          <div className="flex flex-col gap-2 justify-end">
            <Link href="#" className="text-grey text-sm text-end capitalize">
              privacy policy
            </Link>
            <Link href="#" className="text-grey text-sm text-end capitalize">
              terms and conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
