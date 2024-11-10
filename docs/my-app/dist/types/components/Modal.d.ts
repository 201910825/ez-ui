import React, { ReactNode } from 'react';
export interface ModalProps {
    children?: ReactNode;
    className?: string;
}
export interface ModalTriggerProps extends ModalProps {
    onClick?: () => void;
}
export interface ModalContentProps extends ModalProps {
    onClose?: () => void;
}
export interface ModalHeaderProps extends ModalProps {
}
export interface ModalFooterProps extends ModalProps {
}
export interface ModalButtonProps extends ModalProps {
    onClick?: () => void;
}
declare const Modal: ({ children }: ModalProps) => React.JSX.Element;
declare const ModalTrigger: ({ children, onClick }: ModalTriggerProps) => React.JSX.Element;
declare const ModalContent: ({ children, className }: ModalContentProps) => React.JSX.Element | null;
declare const ModalHeader: ({ children, className }: ModalHeaderProps) => React.JSX.Element;
declare const ModalFooter: ({ children, className }: ModalFooterProps) => React.JSX.Element;
declare const ModalCancel: ({ children }: ModalButtonProps) => React.JSX.Element;
declare const ModalAction: ({ children }: ModalButtonProps) => React.JSX.Element;
export { Modal, ModalTrigger, ModalContent, ModalHeader, ModalFooter, ModalCancel, ModalAction };
