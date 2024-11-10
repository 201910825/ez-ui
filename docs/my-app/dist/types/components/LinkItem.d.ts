import React from "react";
export interface LinkProps {
    to?: string;
    className?: string;
    children?: React.ReactNode;
}
export interface LinkContentProps extends LinkProps, React.HTMLAttributes<HTMLDivElement> {
    width?: number;
    height?: number;
    Icon?: any;
    text?: string;
    locatedStyle?: string;
}
declare const LinkContent: React.ForwardRefExoticComponent<LinkContentProps & React.RefAttributes<HTMLDivElement>>;
export default LinkContent;
