'use client'
import React, { useState, createContext, useContext } from 'react';
import { cn } from '@/lib/utils';
import Btn from './Button';

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
  margin?: { top: number; right: number; bottom: number; left: number };
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

const GanttChartContext = createContext({
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  handlePrevMonth: () => {},
  handleNextMonth: () => {},
  tasks: [] as Task[],
  width: 1000,
  height: 800,
  plannedColor: 'lightblue',
  actualColor: 'steelblue',
  margin: { top: 20, right: 20, bottom: 50, left: 150 }
});

const GanttChartProvider = ({ children, className, width = 1000, height = 800, tasks, plannedColor = 'lightblue', actualColor = 'steelblue', margin = { top: 20, right: 20, bottom: 50, left: 150 } }: GanttChartProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <GanttChartContext.Provider value={{ currentMonth, currentYear, handlePrevMonth, handleNextMonth, tasks, width, height, plannedColor, actualColor, margin }}>
      <div className={cn(`overflow-y-scroll items-center flex w-[${width}px] flex flex-col h-[${height}px] p-5`, className)}>
        {children}
      </div>
    </GanttChartContext.Provider>
  );
};

const GanttChartHeader = ({className}:GanttChartProps) => {
  const { currentYear, plannedColor, actualColor } = useContext(GanttChartContext);

  return (
    <div className={cn("relative flex flex-col items-center p-5 font-bold ",className)}>
      {currentYear}
      <div className="flex space-x-4 p-2">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4" style={{ backgroundColor: plannedColor }}></div>
          <span className="text-xs">Planned</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4" style={{ backgroundColor: actualColor }}></div>
          <span className="text-xs">Actual</span>
        </div>
      </div>
    </div>
  );
};

const GanttChartBody = () => {
  const { tasks, width, height, margin, plannedColor, actualColor, currentMonth, currentYear } = useContext(GanttChartContext);

  const xScale = (date) => {
    const minDate = new Date(currentYear, currentMonth, 1).getTime();
    const maxDate = new Date(currentYear, currentMonth + 1, 0).getTime();
    return ((date.getTime() - minDate) / (maxDate - minDate)) * (width - margin.left - margin.right) + margin.left;
  };

  const yScale = (index) => {
    return margin.top + index * 50;
  };

  const daysBetween = (start, end) => {
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  const minDate = new Date(currentYear, currentMonth, 1);
  const maxDate = new Date(currentYear, currentMonth + 1, 0);
  const totalDays = daysBetween(minDate, maxDate);
  const interval = 7; // 일주일 간격

  // Calculate dynamic width and height
  const dynamicWidth = Math.max(width, xScale(maxDate) + margin.right);
  const dynamicHeight = Math.max(height, yScale(tasks.length) + margin.bottom);

  return (
    <div className="relative overflow-hidden pr-4">
      <div className="" style={{ width: dynamicWidth, height: dynamicHeight }}>
        {/* X Axis */}
        {Array.from({ length: totalDays + 1 }).map((_, i) => {
          const date = new Date(minDate);
          date.setDate(minDate.getDate() + i);
          return (
            <div key={i} className="absolute border-l border-gray-300 h-[90%]" style={{ left: xScale(date), top: 0, bottom: 0 }}>
              {i % interval === 0 && (
                <div className="absolute bottom-[-40px] font-semibold text-xs text-center w-full ">
                  {`${date.getMonth() + 1}/${date.getDate()}`}
                </div>
              )}
            </div>
          );
        })}

        {/* 마지막 날짜 추가 */}
        <div className="absolute border-l border-gray-300 h-[90%]" style={{ left: xScale(maxDate), top: 0, bottom: 0 }}>
          <div className="absolute bottom-[-40px] text-xs text-center w-full">
            {`${maxDate.getMonth() + 1}/${maxDate.getDate()}`}
          </div>
        </div>

        {/* Y Axis */}
        {tasks.map((task, index) => (
          <div key={index} className="absolute" style={{ top: yScale(index), left: 0, right: 0, height: 50 }}>
            <div className="absolute text-start text-xs" style={{ width: margin.left - 10 }}>
              {task.name}
            </div>
            {/* Planned Task */}
            <div
              className="absolute"
              style={{
                left: xScale(task.plannedStart),
                width: xScale(task.plannedEnd) - xScale(task.plannedStart),
                height: 20,
                backgroundColor: plannedColor,
              }}
            />
            {/* Actual Task */}
            <div
              className="absolute"
              style={{
                left: xScale(task.actualStart),
                top: 25,
                width: xScale(task.actualEnd) - xScale(task.actualStart),
                height: 20,
                backgroundColor: actualColor,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MonthButton = ({ children, onClick, className }:ButtonProps) => {
  return <Btn onClick={onClick} className={cn("border-[#6f6e6e3e]",className)}>{children}</Btn>;
};

const PrevBtn = ({ children,className }:ButtonProps) => {
  const { handlePrevMonth } = useContext(GanttChartContext);
  return <MonthButton onClick={handlePrevMonth} className={className}>{children}</MonthButton>;
};

const NextBtn = ({ children,className }:ButtonProps) => {
  const { handleNextMonth } = useContext(GanttChartContext);
  return <MonthButton onClick={handleNextMonth} className={className}>{children}</MonthButton>;
};

const GanttChartFooter = ({ children }:GanttChartProps) => {
  return (
    <div className='relative bottom-0 transform text-sm font-bold flex space-x-5'>
      {children}
    </div>
  );
};

export { GanttChartHeader, GanttChartBody, GanttChartFooter, GanttChartProvider, PrevBtn, NextBtn };