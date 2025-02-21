import { PropsWithChildren } from "react";

export const ResultMessageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center justify-center h-full font-bold text-pinkish-grey text-sm">
      {children}
    </div>
  );
};
