import React, { ReactNode } from 'react';
interface ConfirmContextProps {
    confirm: (message: string) => Promise<boolean>;
    alert: (message: string) => Promise<void>;
}
export interface ConfirmProviderProps {
    children: ReactNode;
    alertClassName?: string;
    alertHeaderClassName?: string;
    alertFooterClassName?: string;
    alertCancelClassName?: string;
    alertActionClassName?: string;
    alertTitle?: string;
    confirmTitle?: string;
}
export declare const ConfirmProvider: ({ children, alertClassName, alertHeaderClassName, alertFooterClassName, alertCancelClassName, alertActionClassName, alertTitle, confirmTitle }: ConfirmProviderProps) => React.JSX.Element;
export declare const useConfirm: () => ConfirmContextProps;
export {};
