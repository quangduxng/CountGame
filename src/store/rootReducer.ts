import React, { useReducer, createContext } from 'react';
// Application State
interface AppState {
    choseCurrentNumber: number;
}
export const InitialAppState: AppState = {
    choseCurrentNumber: 1
}
type Click = { type: 'click'; payload: number };
export function appReducer(state: AppState, action: Click | any) {
    switch (action.type) {
        case 'click':
            console.log('action', action);
            return { ...state, choseCurrentNumber: 4 };

        default:
            return state;
    }
}
export const AppContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<any>;
}>({
    state: InitialAppState,
    dispatch: () => null
});