import React from "react";
export interface ScreenProps {
    src: string;
    alt: string;
    priority?: boolean;
    className?: string;
    speed?: number;
    width: number;
    height?: number;
    isSpin?: boolean;
}
declare const VirtualPhone: ({ width, height, src, alt, priority, speed, isSpin }: ScreenProps) => React.JSX.Element;
export default VirtualPhone;
