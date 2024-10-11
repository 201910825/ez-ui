"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker, DayPickerProps } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "./Button"

// Custom CalendarProps type
export type CustomCalendarProps = DayPickerProps & {
  className?: string;
  classNames?: Partial<{
    months: string;
    month: string;
    caption: string;
    caption_label: string;
    nav: string;
    nav_button: string;
    nav_button_previous: string;
    nav_button_next: string;
    table: string;
    head_row: string;
    head_cell: string;
    row: string;
    cell: string;
    day: string;
    day_range_end: string;
    day_selected: string;
    day_today: string;
    day_outside: string;
    day_disabled: string;
    day_range_middle: string;
    day_hidden: string;
  }>;
  showOutsideDays?: boolean;
  components?: {
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
  };
  [key: string]: any;
};

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  components,
  ...props
}: CustomCalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4 border border-white", className)} // Custom styles
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium text-gray-700", // Custom styles
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "default" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "default" }),
          "h-9 w-9 p-0 font-normal opacity-0 aria-selected:opacity-100 border border-white align-center text-center cursor-pointer bg-white"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: components?.IconLeft || ((props) => <ChevronLeft className="h-5 w-5 text-gray-600" {...props} />), // Custom styles
        IconRight: components?.IconRight || ((props) => <ChevronRight className="h-5 w-5 text-gray-600" {...props} />), // Custom styles
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export default Calendar;