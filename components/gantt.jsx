'use client';
import React, { useState, createContext, useContext } from 'react';
import { cn } from '@/lib/utils';
import { Btn } from './Button';
var GanttChartContext = createContext({
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    handlePrevMonth: function () { },
    handleNextMonth: function () { },
    tasks: [],
    width: 1000,
    height: 800,
    plannedColor: 'lightblue',
    actualColor: 'steelblue',
    margin: { top: 20, right: 20, bottom: 50, left: 150 }
});
var GanttChartProvider = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.width, width = _b === void 0 ? 1000 : _b, _c = _a.height, height = _c === void 0 ? 800 : _c, tasks = _a.tasks, _d = _a.plannedColor, plannedColor = _d === void 0 ? 'lightblue' : _d, _e = _a.actualColor, actualColor = _e === void 0 ? 'steelblue' : _e, _f = _a.margin, margin = _f === void 0 ? { top: 20, right: 20, bottom: 50, left: 150 } : _f;
    var _g = useState(new Date().getMonth()), currentMonth = _g[0], setCurrentMonth = _g[1];
    var _h = useState(new Date().getFullYear()), currentYear = _h[0], setCurrentYear = _h[1];
    var handlePrevMonth = function () {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        }
        else {
            setCurrentMonth(currentMonth - 1);
        }
    };
    var handleNextMonth = function () {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        }
        else {
            setCurrentMonth(currentMonth + 1);
        }
    };
    return (<GanttChartContext.Provider value={{ currentMonth: currentMonth, currentYear: currentYear, handlePrevMonth: handlePrevMonth, handleNextMonth: handleNextMonth, tasks: tasks || [], width: width, height: height, plannedColor: plannedColor, actualColor: actualColor, margin: margin }}>
      <div className={cn(" items-center flex w-[".concat(width, "px] flex flex-col h-[").concat(height, "px] p-5"), className)}>
        {children}
      </div>
    </GanttChartContext.Provider>);
};
var GanttChartHeader = function (_a) {
    var className = _a.className;
    var _b = useContext(GanttChartContext), currentYear = _b.currentYear, plannedColor = _b.plannedColor, actualColor = _b.actualColor;
    return (<div className={cn("relative flex flex-col items-center p-5 font-bold ", className)}>
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
    </div>);
};
var GanttChartBody = function () {
    var _a = useContext(GanttChartContext), tasks = _a.tasks, width = _a.width, height = _a.height, margin = _a.margin, plannedColor = _a.plannedColor, actualColor = _a.actualColor, currentMonth = _a.currentMonth, currentYear = _a.currentYear;
    var xScale = function (date) {
        var minDate = new Date(currentYear, currentMonth, 1).getTime();
        var maxDate = new Date(currentYear, currentMonth + 1, 0).getTime();
        return ((date.getTime() - minDate) / (maxDate - minDate)) * (width - margin.left - margin.right) + margin.left;
    };
    var yScale = function (index) {
        return margin.top + index * 50;
    };
    var daysBetween = function (start, end) {
        return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    };
    var minDate = new Date(currentYear, currentMonth, 1);
    var maxDate = new Date(currentYear, currentMonth + 1, 0);
    var totalDays = daysBetween(minDate, maxDate);
    var interval = 7; // 일주일 간격
    // Calculate dynamic width and height
    var dynamicWidth = Math.max(width, xScale(maxDate) + margin.right);
    var dynamicHeight = Math.max(height, yScale(tasks.length) + margin.bottom);
    return (<div className="relative overflow-hidden pr-4">
      <div className="" style={{ width: dynamicWidth, height: dynamicHeight }}>
        {/* X Axis */}
        {Array.from({ length: totalDays + 1 }).map(function (_, i) {
            var date = new Date(minDate);
            date.setDate(minDate.getDate() + i);
            return (<div key={i} className="absolute border-l border-gray-300 h-[90%]" style={{ left: xScale(date), top: 0, bottom: 0 }}>
              {i % interval === 0 && (<div className="absolute bottom-[-40px] font-semibold text-xs text-center w-full ">
                  {"".concat(date.getMonth() + 1, "/").concat(date.getDate())}
                </div>)}
            </div>);
        })}

        {/* 마지막 날짜 추가 */}
        <div className="absolute border-l border-gray-300 h-[90%]" style={{ left: xScale(maxDate), top: 0, bottom: 0 }}>
          <div className="absolute bottom-[-30px] text-xs text-center w-full">
            {"".concat(maxDate.getMonth() + 1, "/").concat(maxDate.getDate())}
          </div>
        </div>

        {/* Y Axis */}
        {tasks.map(function (task, index) { return (<div key={index} className={"absolute"} style={{ top: yScale(index), left: 0, right: 0, height: 50 }}>
            <div className={"absolute text-start text-xs w-[".concat(margin.left - 10, "px]")}>
              {task.name}
            </div>
            {/* Planned Task */}
            <div className={"w-full absolute h-full overflow-hidden"} style={{ left: margin.left - 10 }}>
              <div className={"absolute"} style={{
                left: xScale(task.plannedStart) - margin.left + 10,
                width: xScale(task.plannedEnd) - xScale(task.plannedStart),
                height: 20,
                backgroundColor: plannedColor,
                zIndex: 5,
            }}/>
            {/* Actual Task */}
            <div className="absolute" style={{
                left: xScale(task.actualStart) - margin.left + 10,
                top: 25,
                width: xScale(task.actualEnd) - xScale(task.actualStart),
                height: 20,
                backgroundColor: actualColor,
                zIndex: 5,
            }}/>
            </div>
            
          </div>); })}
      </div>
    </div>);
};
var MonthButton = function (_a) {
    var children = _a.children, onClick = _a.onClick, className = _a.className;
    return <Btn onClick={onClick} className={cn("border-[#6f6e6e3e]", className)}>{children}</Btn>;
};
var PrevBtn = function (_a) {
    var children = _a.children, className = _a.className;
    var handlePrevMonth = useContext(GanttChartContext).handlePrevMonth;
    return <MonthButton onClick={handlePrevMonth} className={className}>{children}</MonthButton>;
};
var NextBtn = function (_a) {
    var children = _a.children, className = _a.className;
    var handleNextMonth = useContext(GanttChartContext).handleNextMonth;
    return <MonthButton onClick={handleNextMonth} className={className}>{children}</MonthButton>;
};
var GanttChartFooter = function (_a) {
    var children = _a.children;
    return (<div className='relative bottom-0 transform text-sm font-bold flex space-x-5'>
      {children}
    </div>);
};
export { GanttChartHeader, GanttChartBody, GanttChartFooter, GanttChartProvider, PrevBtn, NextBtn };
