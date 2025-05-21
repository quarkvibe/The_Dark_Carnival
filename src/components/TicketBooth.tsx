import React from 'react';

interface TicketBoothProps {
  openModal: (modalId: string) => void;
}

export const TicketBooth = ({ openModal }: TicketBoothProps) => {
  return (
    <div className="ticket-booth">
      <div className="booth-structure"></div>
      <div className="booth-window">
        <h2>Visitor Services</h2>
        <div className="booth-buttons">
          <button onClick={() => openModal('passport')}>
            Passport
          </button>
          <button onClick={() => openModal('about')}>
            About
          </button>
        </div>
      </div>
    </div>
  );
};