import Link from "next/link";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="responsive h-[80vh] py-10 flex flex-col justify-end">
      <div className="w-[50vw] flex flex-col gap-2">
        <h1 className="uppercase font-brule font-light text-4xl">
          Transform Your Vision into a Stunning Digital Experience
        </h1>
        <p className="">
          Let&apos;s work together to build a website that truly reflects your
          brand and connects with your audience.
        </p>
        <div className="">
          {/* TODO improve animation */}
          <Link
            href={"/Book"}
            className="text-xl my-4 text-orange border border-orange rounded-xl inline-flex items-center gap-2 hover:bg-orange hover:text-white transition duration-200 ease-in-out pl-4 whitespace-nowrap w-auto"
          >
            Let&apos;s Make It Happen
            <span className="material-symbols-rounded p-2 bg-orange rounded-lg text-white">
              arrow_outward
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
