'use client'

import React, { ReactNode, createContext, useContext } from 'react';
import { cn } from '@/lib/utils';
import { Btn } from './Button';

interface AlertModalProps {
    children?: ReactNode;
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
  }

interface AlertModalHeaderProps {
  children?: ReactNode;
  className?: string;
}

interface AlertModalFooterProps {
  children?: ReactNode;
  className?: string;
}

interface AlertModalButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const AlertModal = ({ children, isOpen, onClose, className }: AlertModalProps) => {
    const isLightMode = document.documentElement.classList.contains('light');
    return isOpen ? (
      <AlertModalContext.Provider value={{ isOpen, onOpen: () => {}, onClose }}>
        <div className={cn("fixed inset-0 bg-black/80 bg-opacity-50 flex justify-center items-center z-[100]", className)} onClick={onClose}>
          <div className={cn(`${isLightMode ? 'bg-[white]' : 'bg-[black]'} border border-[#6f6e6e3e] p-6 rounded-md shadow-lg w-full sm:w-1/3`)} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </AlertModalContext.Provider>
    ) : null;
  };

const AlertModalContext = createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

const AlertModalHeader = ({ children, className }: AlertModalHeaderProps) => {
  return <div className={cn("mb-4", className)}>{children}</div>;
};

const AlertModalFooter = ({ children, className }: AlertModalFooterProps) => {
  return <div className={cn("mt-4 flex justify-end space-x-2", className)}>{children}</div>;
};

const AlertModalButton = ({ children, onClick, className }: AlertModalButtonProps) => {
  return <Btn onClick={onClick} className={cn(className)}>{children}</Btn>;
};

const AlertModalCancel = ({ children, className }: AlertModalButtonProps) => {
  const { onClose } = useContext(AlertModalContext);
  return <AlertModalButton onClick={onClose} className={cn(className)}>{children}</AlertModalButton>;
};

const AlertModalAction = ({ children, onClick, className }: AlertModalButtonProps) => {
  return <AlertModalButton className={cn('bg-black dark:bg-white text-white dark:text-black', className)} onClick={onClick}>{children}</AlertModalButton>;
};

export { AlertModal, AlertModalHeader, AlertModalFooter, AlertModalCancel, AlertModalAction };