'use client'

import React, { useState } from 'react';
import { Btn } from './Button';
import { cn } from '@/lib/utils';

interface AlertProps {
    title?: string;
    content?: string;
    isOpen?: boolean;
    className?: string;
    submit? : string;
    trigger ?: string;
}
interface AlertContentProps {
    title?: string;
    content?: string;
    onClose?: () => void;
    className?: string;
    submit? : string;
    trigger ?: string;
}

// Define the fade-in animation using plain CSS
const styles = `
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.fade-in {
    animation: fadeIn 0.1s ease-in-out;
}
`;

const AlertContent = ({ title, content, onClose, submit='알겠습니다',trigger, className }: AlertContentProps) => {
    const isLightMode = document.documentElement.classList.contains('light');
    return (
        <div className={cn(
            `border border-[#6f6e6e3e] p-6 rounded-md shadow-lg w-full sm:w-1/3 ${isLightMode ? 'bg-[white]' : 'bg-[black]'}`,
            className
        )} onClick={(e) => e.stopPropagation()}>
            <div className={cn("flex justify-between items-center mb-4", className)}>
                <h2 className="text-xl font-semibold">{title}</h2>
                
            </div>
            <div className="text-gray-700">
                {content}
            </div>
            <div className='flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'>
              <Btn onClick={onClose} className="text-xl font-bold">{submit}</Btn>
            </div>
        </div>
    );
};

const Alert = ({ title, content, isOpen: initialIsOpen, submit='알겠습니다', trigger = 'alert', className }: AlertProps) => {
    const [isOpen, setIsOpen] = useState(initialIsOpen);

    const onClose = () => {
        setIsOpen(false);
    }

    const onOpen = () => {
        setIsOpen(true);
    }

    return (
        <>
            <style>{styles}</style> {/* Inject the styles */}
            <Btn onClick={onOpen} className={cn("border-[#6f6e6e3e]",className)}>{trigger}</Btn>
            {isOpen && (
                <div className={cn("fixed z-[100] w-screen h-screen inset-0 bg-black/80 bg-opacity-50 flex justify-center items-center fade-in", className)} onClick={onClose}>
                    <AlertContent title={title} content={content} onClose={onClose} submit={submit}/>
                </div>
            )}
        </>
    );
};

export default Alert;