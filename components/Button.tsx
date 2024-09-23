import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

const Btn = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {

      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(
          "group relative z-0 rounded-[40px] flex px-[15px] py-[10px] cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        <div
          className={cn(
            "insert-0 absolute h-full w-full",
            "rounded-[40px] px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#6f6e6e3e]",
            // on hover
            "group-hover:shadow-[inset_0_-4px_10px_#6f6e6e3e]",
            // on click
            "group-active:shadow-[inset_0_-10px_10px_#6f6e6e3e]"
          )}
        />
        
      </button>
    );
  },
);

Btn.displayName = "Btn";

export default Btn;