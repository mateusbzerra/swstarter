import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export const Button = ({
  children,
  ...buttonProps
}: PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className="w-full h-[34px] px-5 rounded-[20px] border bg-primary border-primary disabled:border-pinkish-grey disabled:bg-pinkish-grey text-white uppercase font-bold hover:bg-emerald"
      {...buttonProps}
    >
      {children}
    </button>
  );
};
