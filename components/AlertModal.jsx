'use client';
import React, { createContext, useContext } from 'react';
import { cn } from '@/lib/utils';
import { Btn } from './Button';
var AlertModal = function (_a) {
    var children = _a.children, isOpen = _a.isOpen, onClose = _a.onClose, className = _a.className;
    var isLightMode = document.documentElement.classList.contains('light');
    return isOpen ? (<AlertModalContext.Provider value={{ isOpen: isOpen, onOpen: function () { }, onClose: function () { } }}>
        <div className={cn("fixed inset-0 bg-black/80 bg-opacity-50 flex justify-center items-center z-[100]", className)} onClick={onClose}>
          <div className={cn("".concat(isLightMode ? 'bg-[white]' : 'bg-[black]', " border border-[#6f6e6e3e] p-6 rounded-md shadow-lg w-full sm:w-1/3"))} onClick={function (e) { return e.stopPropagation(); }}>
            {children}
          </div>
        </div>
      </AlertModalContext.Provider>) : null;
};
var AlertModalContext = createContext({
    isOpen: false,
    onOpen: function () { },
    onClose: function () { },
});
var AlertModalHeader = function (_a) {
    var children = _a.children, className = _a.className;
    return <div className={cn("mb-4", className)}>{children}</div>;
};
var AlertModalFooter = function (_a) {
    var children = _a.children, className = _a.className;
    return <div className={cn("mt-4 flex justify-end space-x-2", className)}>{children}</div>;
};
var AlertModalButton = function (_a) {
    var children = _a.children, onClick = _a.onClick, className = _a.className;
    return <Btn onClick={onClick} className={cn(className)}>{children}</Btn>;
};
var AlertModalCancel = function (_a) {
    var children = _a.children, className = _a.className;
    var onClose = useContext(AlertModalContext).onClose;
    return <AlertModalButton onClick={onClose} className={cn(className)}>{children}</AlertModalButton>;
};
var AlertModalAction = function (_a) {
    var children = _a.children, onClick = _a.onClick, className = _a.className;
    return <AlertModalButton className={cn('bg-black dark:bg-white text-white dark:text-black', className)} onClick={onClick}>{children}</AlertModalButton>;
};
export { AlertModal, AlertModalHeader, AlertModalFooter, AlertModalCancel, AlertModalAction };
