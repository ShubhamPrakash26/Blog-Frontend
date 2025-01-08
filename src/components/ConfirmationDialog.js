import React from 'react';
import './css/ConfirmationDialog.css';

const ConfirmationDialog = ({ isOpen, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h3>Confirm Status Change</h3>
        <p>{message}</p>
        <div className="dialog-buttons">
          <button onClick={onCancel} className="cancel-button">Cancel</button>
          <button onClick={onConfirm} className="confirm-button">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;