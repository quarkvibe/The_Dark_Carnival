import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import { useCarnival } from '../context/CarnivalContext';

export const Settings = () => {
  const { state, dispatch } = useCarnival();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSettings = () => {
    setIsOpen(!isOpen);
  };

  const toggleHighContrast = () => {
    dispatch({ type: 'TOGGLE_HIGH_CONTRAST' });
  };

  const setAnimationLevel = (level: string) => {
    dispatch({ type: 'SET_ANIMATION_LEVEL', payload: level });
  };

  return (
    <div className="settings-panel">
      <button 
        onClick={toggleSettings}
        className="settings-toggle"
        aria-label="Toggle Settings"
      >
        <SettingsIcon size={24} />
      </button>
      
      {isOpen && (
        <div className="settings-menu">
          <h2>Settings</h2>
          <div className="settings-options">
            <div className="setting">
              <label htmlFor="high-contrast">High Contrast</label>
              <input
                type="checkbox"
                id="high-contrast"
                checked={state.highContrast}
                onChange={toggleHighContrast}
              />
            </div>
            
            <div className="setting">
              <label htmlFor="animation-level">Animation Level</label>
              <select
                id="animation-level"
                value={state.animationLevel}
                onChange={(e) => setAnimationLevel(e.target.value)}
              >
                <option value="full">Full Animations</option>
                <option value="low">Reduced Animations</option>
                <option value="off">No Animations</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};