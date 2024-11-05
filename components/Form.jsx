'use client';
import React, { useState } from 'react';
import { Btn } from './Button';
import { cn } from '@/lib/utils';
var styles = "\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.fade-in {\n    animation: fadeIn 0.1s ease-in-out;\n}\n";
var FormContent = function (_a) {
    var title = _a.title, content = _a.content, onClose = _a.onClose, _b = _a.submit, submit = _b === void 0 ? 'Submit' : _b, trigger = _a.trigger, className = _a.className;
    var isLightMode = document.documentElement.classList.contains('light');
    var _c = useState(''), inputValue = _c[0], setInputValue = _c[1];
    var handleSubmit = function () {
        onClose();
    };
    return (<div className={cn("border border-[#6f6e6e3e] p-6 rounded-md shadow-lg w-full sm:w-1/3 ".concat(isLightMode ? 'bg-[white]' : 'bg-[black]'), className)} onClick={function (e) { return e.stopPropagation(); }}>
            <div className={cn("flex justify-between items-center mb-4", className)}>
                <h2 className="text-xl font-semibold">{title}</h2>
            </div>
            <div className="text-gray-700">
                {content}
            </div>
            <input type="text" value={inputValue} onChange={function (e) { return setInputValue(e.target.value); }} className="border p-2 w-full mb-4"/>
            <div className='flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'>
              <Btn onClick={handleSubmit} className="text-xl font-bold">{submit}</Btn>
            </div>
        </div>);
};
var Form = function (_a) {
    var title = _a.title, content = _a.content, initialIsOpen = _a.isOpen, _b = _a.submit, submit = _b === void 0 ? 'Submit' : _b, _c = _a.trigger, trigger = _c === void 0 ? 'Form' : _c, className = _a.className;
    var _d = useState(initialIsOpen), isOpen = _d[0], setIsOpen = _d[1];
    var onClose = function () {
        setIsOpen(false);
    };
    var onOpen = function () {
        setIsOpen(true);
    };
    return (<>
            <style>{styles}</style> {/* Inject the styles */}
            <Btn onClick={onOpen} className={cn("border-[#6f6e6e3e]", className)}>{trigger}</Btn>
            {isOpen && (<div className={cn("fixed z-[100] w-screen h-screen inset-0 bg-black/80 bg-opacity-50 flex justify-center items-center fade-in", className)} onClick={onClose}>
                    <FormContent title={title} content={content} onClose={onClose} submit={submit}/>
                </div>)}
        </>);
};
export default Form;
