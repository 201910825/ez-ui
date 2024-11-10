import { ReactNode } from 'react';
export interface AlertModalProps {
    children?: ReactNode;
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}
export interface AlertModalHeaderProps {
    children?: ReactNode;
    className?: string;
}
export interface AlertModalFooterProps {
    children?: ReactNode;
    className?: string;
}
export interface AlertModalButtonProps {
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
}
declare const AlertModal: ({ children, isOpen, onClose, className }: AlertModalProps) => import("react").JSX.Element | null;
declare const AlertModalHeader: ({ children, className }: AlertModalHeaderProps) => import("react").JSX.Element;
declare const AlertModalFooter: ({ children, className }: AlertModalFooterProps) => import("react").JSX.Element;
declare const AlertModalCancel: ({ children, className }: AlertModalButtonProps) => import("react").JSX.Element;
declare const AlertModalAction: ({ children, onClick, className }: AlertModalButtonProps) => import("react").JSX.Element;
export { AlertModal, AlertModalHeader, AlertModalFooter, AlertModalCancel, AlertModalAction };
