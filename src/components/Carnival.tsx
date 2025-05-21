import React, { useState } from 'react';
import { Entrance } from './Entrance';
import { AttractionsMap } from './AttractionsMap';
import { TicketBooth } from './TicketBooth';
import { Background } from './Background';
import { Modal } from './Modal';
import { useCarnival } from '../context/CarnivalContext';

export const Carnival = () => {
  const { state } = useCarnival();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalId: string) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div 
      className="carnival-container"
      data-animation={state.animationLevel}
    >
      <Background />
      
      <div className="carnival-midway">
        <Entrance />
        
        <AttractionsMap openModal={openModal} />
        
        <TicketBooth openModal={openModal} />
      </div>

      <Modal 
        id="passport" 
        isActive={activeModal === 'passport'} 
        onClose={closeModal}
        title="Book of the Damned"
      >
        <div className="passport-pages">
          <div className="passport-visits">
            <h3>Your Dark Journey</h3>
            <p>The shadows have yet to mark your path...</p>
          </div>
          <div className="passport-stamps">
            <h3>Marks of the Void</h3>
            <p>Collect the sigils of darkness as you descend.</p>
          </div>
          <div className="passport-collections">
            <h3>Cursed Artifacts</h3>
            <p>Your collection awaits. Each item carries its own curse.</p>
          </div>
        </div>
      </Modal>

      <Modal 
        id="about" 
        isActive={activeModal === 'about'} 
        onClose={closeModal}
        title="The Dark Carnival's Origins"
      >
        <div className="about-content">
          <p>Welcome to The Dark Carnival, where reality frays and sanity is optional. This carnival manifests in the spaces between nightmares, drawing those marked by fate.</p>
          <p>Our carnival has existed since before time itself, emerging from the primordial darkness. Those who find us were chosen by forces beyond comprehension.</p>
          <p>Each tent houses horrors and wonders that defy mortal understanding. Our performers are ancient beings who have transcended the boundaries of existence.</p>
          <p>Warning: What you witness here cannot be unseen. Your soul may never return unchanged.</p>
        </div>
      </Modal>
    </div>
  );
};