'use client';
import React, { createContext, useContext, useState } from 'react';
import { AlertModal, AlertModalHeader, AlertModalFooter, AlertModalCancel, AlertModalAction } from './AlertModal';
var ConfirmContext = createContext(undefined);
export var ConfirmProvider = function (_a) {
    var children = _a.children, alertClassName = _a.alertClassName, alertHeaderClassName = _a.alertHeaderClassName, alertFooterClassName = _a.alertFooterClassName, alertCancelClassName = _a.alertCancelClassName, alertActionClassName = _a.alertActionClassName, _b = _a.alertTitle, alertTitle = _b === void 0 ? 'Alert' : _b, _c = _a.confirmTitle, confirmTitle = _c === void 0 ? 'Confirm' : _c;
    var _d = useState(null), confirmState = _d[0], setConfirmState = _d[1];
    var _e = useState(null), alertState = _e[0], setAlertState = _e[1];
    var confirm = function (message) {
        return new Promise(function (resolve) {
            setConfirmState({ message: message, resolve: resolve });
        });
    };
    var alert = function (message) {
        return new Promise(function (resolve) {
            setAlertState({ message: message, resolve: resolve });
        });
    };
    var handleConfirm = function () {
        if (confirmState) {
            confirmState.resolve(true);
            setConfirmState(null);
        }
    };
    var handleCancel = function () {
        if (confirmState) {
            confirmState.resolve(false);
            setConfirmState(null);
        }
    };
    var handleAlertClose = function () {
        if (alertState) {
            alertState.resolve();
            setAlertState(null);
        }
    };
    return (<ConfirmContext.Provider value={{ confirm: confirm, alert: alert }}>
      {children}
      {confirmState && (<AlertModal isOpen={!!confirmState} onClose={handleCancel} className={alertClassName}>
          <AlertModalHeader className={alertHeaderClassName}>{confirmTitle}</AlertModalHeader>
          <h1>{confirmState.message}</h1>
          <AlertModalFooter className={alertFooterClassName}>
            <AlertModalCancel onClick={handleCancel} className={alertCancelClassName}>Cancel</AlertModalCancel>
            <AlertModalAction onClick={handleConfirm} className={alertClassName}>OK</AlertModalAction>
          </AlertModalFooter>
        </AlertModal>)}
      {alertState && (<AlertModal isOpen={!!alertState} onClose={handleAlertClose} className={alertClassName}>
          <AlertModalHeader className={alertClassName}>{alertTitle}</AlertModalHeader>
          <h1>{alertState.message}</h1>
          <AlertModalFooter className={alertClassName}>
            <AlertModalAction onClick={handleAlertClose} className={alertActionClassName}>OK</AlertModalAction>
          </AlertModalFooter>
        </AlertModal>)}
    </ConfirmContext.Provider>);
};
export var useConfirm = function () {
    var context = useContext(ConfirmContext);
    if (!context) {
        throw new Error('useConfirm must be used within a ConfirmProvider');
    }
    return context;
};
