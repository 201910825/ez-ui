import React from 'react';
import { cn } from '@/lib/utils';
var sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
};
function Avatar(_a) {
    var src = _a.src, alt = _a.alt, _b = _a.size, size = _b === void 0 ? 'medium' : _b, className = _a.className;
    return (<img src={src} alt={alt} className={cn('rounded-full object-cover bg-[#6f6e6e3e]', sizeClasses[size], className)}/>);
}
export default Avatar;
