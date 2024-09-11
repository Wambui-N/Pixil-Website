import Link from "next/link";
import React from "react";

interface buttonProps {
  href?: string;
  style?: string;
  text?: string;
  textStyle?: string;
  Icon?: React.ReactNode;
}

const Button = ({ href, text, Icon, style, textStyle }: buttonProps) => {
  return (
    <div>
      <Link
        className={`${style} rounded-2xl py-1.5 px-4 inline-flex flex-row`}
        href={{ href }}
      >
        <span className={`${textStyle} uppercase font-medium `}>{text}</span>
        {Icon && (
      <>{Icon}</>
    )}
      </Link>
    </div>
  );
};

export default Button;
