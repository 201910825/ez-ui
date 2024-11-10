import React from "react";
import { VariantProps } from "class-variance-authority";
export interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    className?: string;
    children?: React.ReactNode;
}
declare const buttonVariants: (props?: ({
    size?: "default" | "small" | "medium" | "large" | null | undefined;
    variant?: "default" | "primary" | "secondary" | "danger" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const Btn: React.ForwardRefExoticComponent<BtnProps & React.RefAttributes<HTMLButtonElement>>;
export { Btn, buttonVariants };
