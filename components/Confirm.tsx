'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AlertModal, AlertModalHeader, AlertModalFooter, AlertModalCancel, AlertModalAction } from './AlertModal';

interface ConfirmContextProps {
  confirm: (message: string) => Promise<boolean>;
  alert: (message: string) => Promise<void>;
}

const ConfirmContext = createContext<ConfirmContextProps | undefined>(undefined);

export interface ConfirmProviderProps {
  children: ReactNode;
  alertClassName?: string;
  alertHeaderClassName?: string;
  alertFooterClassName?: string;
  alertCancelClassName?: string;
  alertActionClassName?: string;
  alertTitle ?: string;
  confirmTitle ?: string;
}

export const ConfirmProvider = ({
  children,
  alertClassName,
  alertHeaderClassName,
  alertFooterClassName,
  alertCancelClassName,
  alertActionClassName,
  alertTitle = 'Alert',
  confirmTitle = 'Confirm'
}: ConfirmProviderProps) => {
  const [confirmState, setConfirmState] = useState<{
    message: string;
    resolve: (value: boolean) => void;
  } | null>(null);

  const [alertState, setAlertState] = useState<{
    message: string;
    resolve: () => void;
  } | null>(null);

  const confirm = (message: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setConfirmState({ message, resolve });
    });
  };

  const alert = (message: string): Promise<void> => {
    return new Promise((resolve) => {
      setAlertState({ message, resolve });
    });
  };

  const handleConfirm = () => {
    if (confirmState) {
      confirmState.resolve(true);
      setConfirmState(null);
    }
  };

  const handleCancel = () => {
    if (confirmState) {
      confirmState.resolve(false);
      setConfirmState(null);
    }
  };

  const handleAlertClose = () => {
    if (alertState) {
      alertState.resolve();
      setAlertState(null);
    }
  };

  return (
    <ConfirmContext.Provider value={{ confirm, alert }}>
      {children}
      {confirmState && (
        <AlertModal isOpen={!!confirmState} onClose={handleCancel} className={alertClassName}>
          <AlertModalHeader className={alertHeaderClassName}>{confirmTitle}</AlertModalHeader>
          <h1>{confirmState.message}</h1>
          <AlertModalFooter className={alertFooterClassName}>
            <AlertModalCancel onClick={handleCancel} className={alertCancelClassName}>Cancel</AlertModalCancel>
            <AlertModalAction onClick={handleConfirm} className={alertClassName}>OK</AlertModalAction>
          </AlertModalFooter>
        </AlertModal>
      )}
      {alertState && (
        <AlertModal isOpen={!!alertState} onClose={handleAlertClose} className={alertClassName}>
          <AlertModalHeader className={alertClassName}>{alertTitle}</AlertModalHeader>
          <h1>{alertState.message}</h1>
          <AlertModalFooter className={alertClassName}>
            <AlertModalAction onClick={handleAlertClose} className={alertActionClassName}>OK</AlertModalAction>
          </AlertModalFooter>
        </AlertModal>
      )}
    </ConfirmContext.Provider>
  );
};

export const useConfirm = (): ConfirmContextProps => {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error('useConfirm must be used within a ConfirmProvider');
  }
  return context;
};