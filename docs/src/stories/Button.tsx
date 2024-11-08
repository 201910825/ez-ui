import React from "react";
import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  className?: string;
  children?: React.ReactNode;
}

const buttonVariants = cva(
  "group relative z-100 rounded-[40px] flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap",
  {
    variants: {
      size: {
        default: "px-[15px] py-[10px]",
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
      },
      variant: {
        default: "",
        primary: "bg-blue-500 text-white group-active:shadow-[inset_0_-10px_10px_blue] group-hover:shadow-[inset_0_-4px_10px_blue]",
        secondary: "bg-gray-500 text-white group-active:shadow-[inset_0_-10px_10px_gray] group-hover:shadow-[inset_0_-4px_10px_#f82d2d3d]",
        danger: "bg-red-500 text-white",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

const Btn = React.forwardRef<HTMLButtonElement, BtnProps>(
  ({ className, children, size, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ size, variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
        <div
          className={cn(
            "insert-0 absolute h-full w-full",
            "rounded-[40px] px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#6f6e6e3e]",
            // on hover
            "group-hover:shadow-[inset_0_-4px_10px_#00000063]",
            // on click
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3b]"
          )}
        />
      </button>
    );
  }
);

Btn.displayName = "Btn";

export { Btn , buttonVariants }