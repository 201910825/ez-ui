'use client';
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { cn } from '@/lib/utils';
import React from 'react';
import ScrollArea from './ScrollArea';
export default function SideBar(_a) {
    var _b = _a.title, title = _b === void 0 ? 'title' : _b, children = _a.children, className = _a.className, props = __rest(_a, ["title", "children", "className"]);
    return (<aside className={cn("sticky left-0 top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block", className)} {...props}>
      <ScrollArea className="border-none flex justify-center w-full h-[500px]" showScrollbar={true} barColor='blue'>
        {children}
      </ScrollArea>
    </aside>);
}
