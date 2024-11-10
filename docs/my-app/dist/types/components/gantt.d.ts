import React from 'react';
interface Task {
    name: string;
    plannedStart: Date;
    plannedEnd: Date;
    actualStart: Date;
    actualEnd: Date;
}
interface GanttChartProps {
    tasks?: Task[];
    width?: number;
    height?: number;
    margin?: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    plannedColor?: string;
    actualColor?: string;
    className?: string;
    children?: React.ReactNode;
}
interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
declare const GanttChartProvider: ({ children, className, width, height, tasks, plannedColor, actualColor, margin }: GanttChartProps) => React.JSX.Element;
declare const GanttChartHeader: ({ className }: GanttChartProps) => React.JSX.Element;
declare const GanttChartBody: () => React.JSX.Element;
declare const PrevBtn: ({ children, className }: ButtonProps) => React.JSX.Element;
declare const NextBtn: ({ children, className }: ButtonProps) => React.JSX.Element;
declare const GanttChartFooter: ({ children }: GanttChartProps) => React.JSX.Element;
export { GanttChartHeader, GanttChartBody, GanttChartFooter, GanttChartProvider, PrevBtn, NextBtn };
export type { Task, GanttChartProps, ButtonProps };
