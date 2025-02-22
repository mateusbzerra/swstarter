import { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="card flex flex-col bg-foreground w-full p-8 border border-gainsboro">
      {children}
    </div>
  );
};
