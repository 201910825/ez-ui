import React from 'react';
export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
    showScrollbar?: boolean;
    barColor?: string;
}
declare const ScrollArea: ({ className, children, barColor, showScrollbar, ...props }: ScrollAreaProps) => React.JSX.Element;
export default ScrollArea;
