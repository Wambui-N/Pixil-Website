import React from "react";
import Benefit from "./Benefit";

const Benefits = () => {
  return (
    <div className="responsive flex flex-row gap-6 my-8">
      <div className="basis-1/2 flex flex-col gap-2 sticky top-10 h-full">
        {/* <h6 className="capitalize text-sm font-lg">
          the pixil design advantage
        </h6> */}
        {/* TODO Fix the design of the h6 */}
        <h2 className="font-brule text-3xl uppercase">
          How we will take your business to the next level
        </h2>
      </div>
      <div className="basis-1/2 flex flex-col gap-6">
        <Benefit
          icon={
            <svg
              width="45"
              height="44"
              viewBox="0 0 45 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.8825 24.563V10.1686L35.805 14.5974L25.8825 24.563ZM6.93937 43.5886L19.1081 20.6761L24.4463 26.0068L6.93937 43.5886ZM0 0.411133L25.0406 9.50113V25.4086L0 0.411133ZM40.8806 9.50113H26.4562L45 17.7774L40.8806 9.50113Z"
                fill="#DE4A24"
              />
            </svg>
          }
          title="Tailored to Your Exact Needs"
          content="Benefit from a website that's designed specifically to meet your business goals and branding requirements, providing a perfect fit for your needs."
        />
        <Benefit
          icon={
            <svg
              width="46"
              height="45"
              viewBox="0 0 46 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.75 2.8125H5.31201L12.7388 10.2612L10.7612 12.2388L3.3125 4.81201V11.25H0.5V0H11.75V2.8125ZM34.25 0H45.5V11.25H42.6875V4.81201L35.2388 12.2388L33.2612 10.2612L40.688 2.8125H34.25V0ZM10.7612 32.7612L12.7388 34.7388L5.31201 42.1875H11.75V45H0.5V33.75H3.3125V40.188L10.7612 32.7612ZM42.6875 40.188V33.75H45.5V45H34.25V42.1875H40.688L33.2612 34.7388L35.2388 32.7612L42.6875 40.188ZM14.5625 30.9375V14.0625H31.4375V30.9375H14.5625ZM17.375 16.875V28.125H28.625V16.875H17.375Z"
                fill="#DE4A24"
              />
            </svg>
          }
          title="Seamless Experience on Any Device"
          content="Ensure your website delivers a flawless experience across all devices, from desktops to smartphones, enhancing user satisfaction and engagement."
        />
        <Benefit
          icon={
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4221 29.7441C19.3045 29.7441 24.0732 24.9754 24.0732 19.093C24.0732 13.2105 19.3045 8.44189 13.4221 8.44189C7.53965 8.44189 2.771 13.2105 2.771 19.093C2.771 24.9754 7.53965 29.7441 13.4221 29.7441Z"
                fill="#DE4A24"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.0366 45.223C29.0925 45.5026 29.3295 45.7209 29.6171 45.7209H34.3702C35.9731 45.7209 37.1767 44.3123 36.6415 42.8025C35.5231 39.6498 32.847 35.0698 26.736 35.0698C26.4023 35.0698 26.0783 35.0831 25.7641 35.1098C24.7629 35.195 24.5072 36.4252 25.1783 37.1707C27.5881 39.8468 28.5999 43.0368 29.0366 45.223ZM25.4792 42.6135C26.1262 44.1659 24.8507 45.7209 23.1679 45.7209H19.1018C17.4988 45.7209 16.2953 44.3123 16.8305 42.8025C17.3364 41.3753 18.1619 39.6578 19.4799 38.2012C19.8344 37.8088 20.3301 37.573 20.8583 37.5455C21.3864 37.5181 21.9039 37.7012 22.2971 38.0548C23.8203 39.4022 24.8215 41.0424 25.4792 42.6135Z"
                fill="#DE4A24"
              />
              <path
                d="M13.4221 35.0698C22.9335 35.0698 25.6496 41.8626 26.4244 45.7449C26.7147 47.1854 25.5457 48.3837 24.0732 48.3837H2.77102C1.30117 48.3837 0.129555 47.1854 0.419797 45.7449C1.19466 41.8599 3.91069 35.0698 13.4221 35.0698Z"
                fill="#DE4A24"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.6939 28.6471C23.9727 27.4062 24.9894 25.9211 25.6838 24.28C26.3781 22.6389 26.7359 20.8751 26.736 19.0931C26.736 17.2292 26.3525 15.4504 25.6602 13.8395C26.0117 13.7915 26.3703 13.7676 26.736 13.7676C27.9635 13.7679 29.1744 14.051 30.2747 14.595C31.3751 15.1391 32.3352 15.9294 33.0807 16.9046C33.8261 17.8798 34.3368 19.0137 34.5731 20.2182C34.8094 21.4227 34.7649 22.6655 34.4431 23.8501C34.1213 25.0346 33.5309 26.1291 32.7176 27.0485C31.9044 27.9679 30.8902 28.6875 29.7537 29.1515C28.6173 29.6155 27.3893 29.8114 26.1649 29.7239C24.9405 29.6364 23.7528 29.268 22.6939 28.6471ZM20.6436 26.9217C21.7248 25.9243 22.5878 24.7139 23.1781 23.3665C23.7683 22.0191 24.0731 20.5641 24.0732 19.0931C24.0732 17.5034 23.7271 15.9963 23.1013 14.641C22.0286 15.189 21.0937 15.9726 20.3667 16.933C19.6396 17.8934 19.1391 19.0058 18.9028 20.187C18.6664 21.3682 18.7002 22.5875 19.0016 23.7538C19.3031 24.92 19.8644 26.003 20.6436 26.9217Z"
                fill="#DE4A24"
              />
              <path
                d="M40.0498 3.11621V13.7673M45.3753 8.44175H34.7242"
                stroke="#DE4A24"
                stroke-width="5.32554"
                stroke-linecap="round"
              />
            </svg>
          }
          title="Turn Visitors into Loyal Customers"
          content="Strategic layouts guide visitors seamlessly, boosting conversion rates and turning them into loyal customers."
        />
        <Benefit
          icon={
            <svg
              width="45"
              height="30"
              viewBox="0 0 45 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.375 29.625L16.875 16.125L25.875 25.125L45 3.57L41.8275 0.375L25.875 18.375L16.875 9.375L0 26.25L3.375 29.625Z"
                fill="#DE4A24"
              />
            </svg>
          }
          title="Boost Your Search Visibility"
          content="Improve your search engine rankings with our SEO-optimized designs, helping attract more organic traffic and increase your online presence."
        />
        <Benefit
          icon={
            <svg
              width="49"
              height="44"
              viewBox="0 0 49 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1808 27.3242L6.09154 23.2281L2 27.3242M38.8192 16.7573L42.9085 20.8558L47 16.7573"
                stroke="#DE4A24"
                stroke-width="3.46154"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M42.9085 20.8559C42.9085 15.9636 40.97 11.2767 37.5177 7.81749C35.8094 6.10578 33.7803 4.74776 31.5466 3.82116C29.3129 2.89456 26.9183 2.41757 24.5 2.41749C22.151 2.41562 19.8237 2.86776 17.6462 3.74903C15.2154 4.72364 13.0204 6.20551 11.2078 8.09574C9.39517 9.98597 8.00655 12.2411 7.13463 14.7106M6.09155 23.2259C6.0951 27.5057 7.58545 31.6513 10.3077 34.9536C13.027 38.2521 16.8104 40.5003 21.0075 41.3118C25.2046 42.1234 29.5533 41.4476 33.3062 39.4006C37.0589 37.3494 39.9831 34.059 41.5792 30.0913"
                stroke="#DE4A24"
                stroke-width="3.46154"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.9154 26.5675C19.0355 27.9375 19.6873 29.206 20.731 30.1014C21.7748 30.9968 23.1277 31.448 24.5 31.3583C29.0046 31.3583 30.0846 28.7667 30.0846 26.5675C30.0846 24.3682 28.2223 22.0375 24.5 22.0375C20.7777 22.0375 18.9154 20.5652 18.9154 17.5652C18.9671 16.5256 19.3342 15.5265 19.9678 14.7007C20.6014 13.875 21.4716 13.2618 22.4623 12.9429C23.12 12.7306 23.8123 12.6544 24.5 12.719C25.8741 12.6593 27.2188 13.1284 28.2575 14.0298C29.2963 14.9312 29.9502 16.1964 30.0846 17.5652M24.5 34.1506V31.7252M24.5 9.91748V12.7098"
                stroke="#DE4A24"
                stroke-width="3.46154"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          title="Maximize your ROI"
          content="Our web solutions deliver high conversion rates, ensuring every dollar you invest drives measurable growth."
        />
      </div>
    </div>
  );
};

export default Benefits;
