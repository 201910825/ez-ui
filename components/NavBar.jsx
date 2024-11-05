import React from 'react';
import { cn } from '@/lib/utils';
var NavBar = function (_a) {
    var items = _a.items, logo = _a.logo, className = _a.className;
    return (<nav className={cn("flex justify-between z-[100] items-center px-4 py-3 shadow-sm sticky top-0 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      {logo && <div className="flex-shrink-0">{logo}</div>}
      <ul className="flex space-x-4">
        {items.map(function (item, index) { return (<li key={index}>{item.element}</li>); })}
      </ul>
    </nav>);
};
export default NavBar;
