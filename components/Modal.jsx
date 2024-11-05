'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Btn } from './Button';
var Modal = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var onOpen = function () {
        setIsOpen(true);
    };
    var onClose = function () {
        setIsOpen(false);
    };
    return (<ModalContext.Provider value={{ isOpen: isOpen, onOpen: onOpen, onClose: onClose }}>
        {children}
      </ModalContext.Provider>);
};
var ModalContext = React.createContext({
    isOpen: false,
    onOpen: function () { },
    onClose: function () { },
});
var ModalTrigger = function (_a) {
    var children = _a.children, onClick = _a.onClick;
    var onOpen = React.useContext(ModalContext).onOpen;
    return (<div onClick={function () { onOpen(); onClick && onClick(); }}>
            {children}
        </div>);
};
var ModalContent = function (_a) {
    var children = _a.children, className = _a.className;
    var isLightMode = typeof window !== 'undefined' && document.documentElement.classList.contains('light');
    var _b = React.useContext(ModalContext), isOpen = _b.isOpen, contextOnClose = _b.onClose;
    return isOpen ? (<div className={cn("fixed inset-0 bg-black/80 bg-opacity-50 flex justify-center items-center z-[100]")} onClick={contextOnClose}>
        <div className={cn("p-6 rounded-md shadow-lg w-full sm:w-1/3 border border-[#6f6e6e3e]", isLightMode ? 'bg-[white]' : 'bg-[black]', className)} onClick={function (e) { return e.stopPropagation(); }}>
          {children}
        </div>
      </div>) : null;
};
var ModalHeader = function (_a) {
    var children = _a.children, className = _a.className;
    return <div className={cn("mb-4", className)}>{children}</div>;
};
var ModalFooter = function (_a) {
    var children = _a.children, className = _a.className;
    return <div className={cn("mt-4 flex justify-end space-x-2", className)}>{children}</div>;
};
var ModalButton = function (_a) {
    var children = _a.children, onClick = _a.onClick, className = _a.className;
    return <Btn onClick={onClick} className={cn(className)}>{children}</Btn>;
};
var ModalCancel = function (_a) {
    var children = _a.children;
    var onClose = React.useContext(ModalContext).onClose;
    return <ModalButton onClick={onClose}>{children}</ModalButton>;
};
var ModalAction = function (_a) {
    var children = _a.children;
    return <ModalButton>{children}</ModalButton>;
};
export { Modal, ModalTrigger, ModalContent, ModalHeader, ModalFooter, ModalCancel, ModalAction };
