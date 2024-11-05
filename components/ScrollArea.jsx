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
import React, { useRef, useEffect, useState } from 'react';
var ScrollArea = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.barColor, barColor = _b === void 0 ? 'blue' : _b, _c = _a.showScrollbar, showScrollbar = _c === void 0 ? true : _c, props = __rest(_a, ["className", "children", "barColor", "showScrollbar"]);
    var _d = useState(showScrollbar), isScrollbarVisible = _d[0], setIsScrollbarVisible = _d[1];
    var contentRef = useRef(null);
    var scrollTrackRef = useRef(null);
    var scrollThumbRef = useRef(null);
    var _e = useState(false), isDragging = _e[0], setIsDragging = _e[1];
    var _f = useState(0), startY = _f[0], setStartY = _f[1];
    var _g = useState(0), startScrollTop = _g[0], setStartScrollTop = _g[1];
    useEffect(function () {
        var handleResize = function () {
            if (contentRef.current && scrollTrackRef.current && scrollThumbRef.current) {
                var _a = contentRef.current, clientHeight = _a.clientHeight, scrollHeight = _a.scrollHeight;
                var trackHeight = scrollTrackRef.current.clientHeight;
                var thumbHeight = Math.max((clientHeight / scrollHeight) * trackHeight, 20);
                scrollThumbRef.current.style.height = "".concat(thumbHeight, "px");
                setIsScrollbarVisible(showScrollbar);
            }
        };
        handleResize();
        var observer = new MutationObserver(handleResize);
        if (contentRef.current) {
            observer.observe(contentRef.current, { childList: true, subtree: true });
        }
        return function () { return observer.disconnect(); };
    }, [showScrollbar, children]); // Ensure children is included
    var handleScroll = function () {
        if (contentRef.current && scrollThumbRef.current && scrollTrackRef.current) {
            var _a = contentRef.current, scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
            var trackHeight = scrollTrackRef.current.clientHeight;
            var thumbHeight = scrollThumbRef.current.clientHeight;
            var thumbTop = (scrollTop / (scrollHeight - clientHeight)) * (trackHeight - thumbHeight);
            scrollThumbRef.current.style.transform = "translateY(".concat(thumbTop, "px)");
            setIsScrollbarVisible(showScrollbar && scrollHeight > clientHeight);
        }
    };
    var handleMouseDown = function (e) {
        setIsDragging(true);
        setStartY(e.clientY);
        if (contentRef.current) {
            setStartScrollTop(contentRef.current.scrollTop);
        }
    };
    useEffect(function () {
        var handleMouseMove = function (e) {
            var _a;
            if (!isDragging)
                return;
            var deltaY = e.clientY - startY;
            var deltaRatio = deltaY / (((_a = scrollTrackRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight) || 1);
            if (contentRef.current) {
                var newScrollTop = startScrollTop + deltaRatio * contentRef.current.scrollHeight;
                contentRef.current.scrollTop = newScrollTop;
            }
        };
        var handleMouseUp = function () {
            setIsDragging(false);
        };
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }
        return function () {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, startY, startScrollTop]);
    return (<div className={cn("border border-[#] relative overflow-hidden", className)} {...props} style={{ '--bar-color': barColor }}>
      <div ref={contentRef} className="p-4 h-full flex flex-col overflow-scroll scrollbar-hide" onScroll={handleScroll}>
        {children}
      </div>
      {isScrollbarVisible && (<div ref={scrollTrackRef} className="absolute right-0 top-0 h-full w-2.5 flex touch-none select-none transition-colors border-l border-l-transparent p-[1px]">
          <div ref={scrollThumbRef} className={"h-full w-full bg-[var(--bar-color)] rounded-md cursor-pointer"} onMouseDown={handleMouseDown}/>
        </div>)}
    </div>);
};
export default ScrollArea;
