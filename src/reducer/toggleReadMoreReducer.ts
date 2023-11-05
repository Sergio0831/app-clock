import { ToggleReadMoreState } from '@/context/ToggleReadMore';

// Action type
export type ToggleReadMoreAction = { type: 'READMORE' };

// Reducer function to handle read more toggle action
export const toggleReadMoreReducer = (
  state: ToggleReadMoreState,
  action: ToggleReadMoreAction
): ToggleReadMoreState => {
  switch (action.type) {
    case 'READMORE':
      return {
        ...state,
        isReadMore: !state.isReadMore,
      };

    default:
      return state;
  }
};
