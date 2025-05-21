import React, { useEffect } from 'react';

interface ModalProps {
  id: string;
  isActive: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ id, isActive, onClose, title, children }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isActive) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    
    // Prevent scrolling when modal is open
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isActive, onClose]);

  return (
    <div className={`modal ${isActive ? 'active' : ''}`} id={`modal-${id}`}>
      <div className="modal-content">
        <h2>{title}</h2>
        <button className="close-modal" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};