import Link from "next/link";
import React from "react";

const Quiz = () => {
  return (
    <div className="bg-orange text-white py-10">
      <div className="responsive flex flex-row justify-between gap-4">
        <div className="w-[50vw]">
          <h6 className="font-brule text-4xl">
            We are committed to delivering personalized services,
          </h6>
          <p className="text-lg">
            which is why we only take on 3 projects at a time. Are you our next
            success story? <b>Take the Quiz to Find Out.</b>
          </p>
        </div>
        <div>
          <Link href="/Quiz">
            <div className="bg-iron p-4 rounded-2xl">
              <svg
                className="w-12 h-12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6 18L18 6M18 6H9M18 6V15"
                    stroke="#DE4A24"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
