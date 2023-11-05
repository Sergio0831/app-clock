import {
  ToggleReadMoreAction,
  toggleReadMoreReducer,
} from '@/reducer/toggleReadMoreReducer';
import { createContext, useReducer } from 'react';

export interface ToggleReadMoreState {
  isReadMore: boolean;
}

// Context for the read more toggle functionality
export const ToggleReadMoreContext = createContext<
  | {
      state: ToggleReadMoreState;
      dispatch: React.Dispatch<ToggleReadMoreAction>;
    }
  | undefined
>(undefined);

// Initial state for the toggle
const initialState: ToggleReadMoreState = {
  isReadMore: false,
};

// ToggleReadMoreProvider component to wrap application with the context
export const ToggleReadMoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(toggleReadMoreReducer, initialState);

  return (
    <ToggleReadMoreContext.Provider value={{ state, dispatch }}>
      {children}
    </ToggleReadMoreContext.Provider>
  );
};
