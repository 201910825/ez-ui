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
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
var LinkContent = React.forwardRef(function (_a, ref) {
    var to = _a.to, Icon = _a.Icon, _b = _a.width, width = _b === void 0 ? 16 : _b, _c = _a.height, height = _c === void 0 ? 16 : _c, text = _a.text, _d = _a.locatedStyle, locatedStyle = _d === void 0 ? 'font-bold underline' : _d, className = _a.className, children = _a.children, props = __rest(_a, ["to", "Icon", "width", "height", "text", "locatedStyle", "className", "children"]);
    var path = usePathname();
    return (<Link href={to || '/'}>
      <div ref={ref} style={to !== path ? { color: 'hsl(240, 5%, 64.9%)' } : {}} className={cn("px-4 py-2 inline-flex items-center justify-start space-x-3 pl-[8px] ".concat(to === path ? locatedStyle : ''), className)} {...props}>
        {Icon && <Icon width={width} height={height}/>}
        <p className="whitespace-nowrap">{text}</p>
        {children}
      </div>
    </Link>);
});
LinkContent.displayName = 'LinkContent';
export default LinkContent;
