'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AlertModal, AlertModalHeader, AlertModalFooter, AlertModalCancel, AlertModalAction } from './AlertModal';

interface ConfirmContextProps {
  confirm: (message: string) => Promise<boolean>;
}

const ConfirmContext = createContext<ConfirmContextProps | undefined>(undefined);

export const ConfirmProvider = ({ children }: { children: ReactNode }) => {
  const [confirmState, setConfirmState] = useState<{
    message: string;
    resolve: (value: boolean) => void;
  } | null>(null);

  const confirm = (message: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setConfirmState({ message, resolve });
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


  return (
    <ConfirmContext.Provider value={{ confirm }}>
      {children}
      {confirmState && (
        <AlertModal isOpen={!!confirmState} onClose={handleCancel}>
        <AlertModalHeader>Confirm</AlertModalHeader>
        <h1>{confirmState.message}</h1>
        <AlertModalFooter>
          <AlertModalCancel>Cancel</AlertModalCancel>
          <AlertModalAction onClick={handleConfirm}>OK</AlertModalAction>
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