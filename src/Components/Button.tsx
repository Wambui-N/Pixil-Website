import Link from "next/link";
import React from "react";

interface buttonProps {
  href?: string;
  text?: string;
  textStyle?: string;
  Icon?: React.ReactNode;
}

const Button = ({ href, text, Icon, textStyle }: buttonProps) => {
  return (
    <div>
      <Link
        className={`${textStyle} rounded-2xl py-1.5 px-2 flex flex-row`}
        href={{ href }}
      >
        <span className="pl-2 uppercase">{text}</span>
        {Icon && (
      <>{Icon}</>
    )}
      </Link>
    </div>
  );
};

export default Button;
