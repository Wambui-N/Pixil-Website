import React from "react";
import DropDown from "./DropDown";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="responsive flex flex-row justify-between items-center w-full py-6">
      <Link href={"/"}>
        <svg
          className="w-44"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 618.4 73.2"
        >
          <defs>
            <style>
              {`
            .cls-1 { fill: #212121; }
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
      </Link>
      <DropDown />
    </div>
  );
};

export default Navigation;
