'use client'
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation";


export interface LinkProps {
  to ?: string,
  className ?: string ,
  children ?: React.ReactNode,
}
export interface LinkContentProps extends LinkProps, React.HTMLAttributes<HTMLDivElement> {
  width?: number,
  height?: number,
  Icon?: any,
  text ?: string,
  locatedStyle?: string,
}

const LinkContent = React.forwardRef<HTMLDivElement, LinkContentProps>(
  ({ to, Icon, width=16, height=16, text, locatedStyle = 'font-bold underline', className, children, ...props }, ref) => {
    const path = usePathname();
    return (
    <Link href={to || '/'}>
      <div
        ref={ref}
        style={to !== path ? { color: 'hsl(240, 5%, 64.9%)' } : {}}
        className={cn(`px-4 py-2 inline-flex items-center justify-start space-x-3 pl-[8px] ${to === path ? locatedStyle : ''}`, className)}
        {...props}
      >
        {Icon && <Icon width={width} height={height} />}
        <p className="whitespace-nowrap">{text}</p>
        {children}
      </div>
    </Link>
    );
  }
);

LinkContent.displayName = 'LinkContent';


export default LinkContent