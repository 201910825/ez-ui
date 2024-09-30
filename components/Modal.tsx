'use client'

import React, { useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Btn } from './Button';

interface ModalProps {
  children?: ReactNode;
  className?: string;
}

interface ModalTriggerProps extends ModalProps {
  onClick?: () => void;
}

interface ModalContentProps extends ModalProps {
  onClose?: () => void;
}

interface ModalHeaderProps extends ModalProps {
}

interface ModalFooterProps extends ModalProps {
}

interface ModalButtonProps extends ModalProps {
  onClick?: () => void;
}

const Modal = ({ children }: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => {
      setIsOpen(true);
    };
  
    const onClose = () => {
      setIsOpen(false);
    };
  
    return (
      <ModalContext.Provider value={{ isOpen, onOpen, onClose }}>
        {children}
      </ModalContext.Provider>
    );
  };
  
  const ModalContext = React.createContext({
    isOpen: false,
    onOpen: () => {},
    onClose: () => {},
  });
  
  const ModalTrigger = ({ children, onClick }: ModalTriggerProps) => {
    const { onOpen } = React.useContext(ModalContext);
    return (
        <div onClick={() => { onOpen(); onClick && onClick(); }}>
            {children}
        </div>
    );
};
  
const ModalContent = ({ children, className }: ModalContentProps) => {
    const isLightMode = typeof window !== 'undefined' && document.documentElement.classList.contains('light');
    const { isOpen, onClose: contextOnClose } = React.useContext(ModalContext);
  
    return isOpen ? (
      <div className={cn("fixed inset-0 bg-black/80 bg-opacity-50 flex justify-center items-center z-[100]")} onClick={contextOnClose}>
        <div
        className={cn(
          "p-6 rounded-md shadow-lg w-full sm:w-1/3 border border-[#6f6e6e3e]",
          isLightMode ? 'bg-[white]' : 'bg-[black]',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
          {children}
        </div>
      </div>
    ) : null;
  };
  

const ModalHeader = ({ children,className }: ModalHeaderProps) => {
  return <div className={cn("mb-4",className)}>{children}</div>;
};

const ModalFooter = ({ children,className }: ModalFooterProps) => {
  return <div className={cn("mt-4 flex justify-end space-x-2",className)}>{children}</div>;
};

const ModalButton = ({ children, onClick,className }: ModalButtonProps) => {
  return <Btn onClick={onClick} className={cn(className)}>{children}</Btn>;
};

const ModalCancel = ({ children }: ModalButtonProps) => {
  const { onClose } = React.useContext(ModalContext);
  return <ModalButton onClick={onClose}>{children}</ModalButton>;
};

const ModalAction = ({ children }: ModalButtonProps) => {
  return <ModalButton>{children}</ModalButton>;
};

export { Modal, ModalTrigger, ModalContent, ModalHeader, ModalFooter, ModalCancel, ModalAction };