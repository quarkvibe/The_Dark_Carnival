import React, { createContext, useContext, useReducer, useEffect } from 'react';

interface CarnivalState {
  highContrast: boolean;
  animationLevel: string;
  visits: string[];
  stamps: string[];
  artifacts: string[];
}

type CarnivalAction = 
  | { type: 'TOGGLE_HIGH_CONTRAST' }
  | { type: 'SET_ANIMATION_LEVEL', payload: string }
  | { type: 'ADD_VISIT', payload: string }
  | { type: 'ADD_STAMP', payload: string }
  | { type: 'ADD_ARTIFACT', payload: string };

interface CarnivalContextType {
  state: CarnivalState;
  dispatch: React.Dispatch<CarnivalAction>;
}

const initialState: CarnivalState = {
  highContrast: false,
  animationLevel: 'full',
  visits: [],
  stamps: [],
  artifacts: [],
};

const CarnivalContext = createContext<CarnivalContextType | undefined>(undefined);

const carnivalReducer = (state: CarnivalState, action: CarnivalAction): CarnivalState => {
  switch (action.type) {
    case 'TOGGLE_HIGH_CONTRAST':
      return {
        ...state,
        highContrast: !state.highContrast,
      };
    case 'SET_ANIMATION_LEVEL':
      return {
        ...state,
        animationLevel: action.payload,
      };
    case 'ADD_VISIT':
      if (state.visits.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        visits: [...state.visits, action.payload],
      };
    case 'ADD_STAMP':
      if (state.stamps.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        stamps: [...state.stamps, action.payload],
      };
    case 'ADD_ARTIFACT':
      if (state.artifacts.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        artifacts: [...state.artifacts, action.payload],
      };
    default:
      return state;
  }
};

export const CarnivalProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(carnivalReducer, initialState);

  useEffect(() => {
    // Apply high contrast class to body
    if (state.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    // Apply animation level to body
    document.body.setAttribute('data-animation', state.animationLevel);
  }, [state.highContrast, state.animationLevel]);

  return (
    <CarnivalContext.Provider value={{ state, dispatch }}>
      {children}
    </CarnivalContext.Provider>
  );
};

export const useCarnival = (): CarnivalContextType => {
  const context = useContext(CarnivalContext);
  if (context === undefined) {
    throw new Error('useCarnival must be used within a CarnivalProvider');
  }
  return context;
};