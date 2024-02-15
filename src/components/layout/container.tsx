import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainer) => {
  return (
    <div
      className={cn("w-full max-w-screen-xl mx-auto px-4", className)}
    >
      {children}
    </div>
  );
};

export default Container;
