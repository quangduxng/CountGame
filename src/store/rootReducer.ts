import React, { useReducer, createContext, ReactNode } from 'react';
import { STATUS_GAME } from '../utils/enum';
// Application State
interface AppState {
    choseCurrentNumber: number,
}
interface StatusGame {
    status: string,
    isReset: boolean,
    numberOfPoints: number,
    isAuto: boolean
}

// Initial states
const InitialAppState: AppState = {
    choseCurrentNumber: 1,
}
const InitialAppState2: StatusGame = {
    status: STATUS_GAME.START,
    isReset: false,
    numberOfPoints: 0,
    isAuto: false
};


type Click = { type: 'click'; payload: number };
type ChangeStatus = { type: 'change_status'; payload: string };
type SetReset = { type: 'set_reset'; payload: boolean };
type SetNumberOfPoints = { type: 'set_number_points'; payload: number };
type setAuto = { type: 'set_auto'; payload: boolean };
export function appReducer(state: AppState, action: Click) {
    switch (action.type) {
        case 'click':
            console.log('action', action);
            return { choseCurrentNumber: action.payload };
        default:
            return state;
    }
}
export function appReducerStatusGame(state: StatusGame, action: ChangeStatus | SetReset | SetNumberOfPoints | setAuto) {
    switch (action.type) {
        case 'change_status':
            console.log('action', action);
            return { ...state, status: action.payload };
        case 'set_reset':
            console.log('action', action);
            return { ...state, isReset: action.payload };
        case 'set_number_points':
            console.log('action', action);
            return { ...state, numberOfPoints: action.payload };
        case 'set_auto':
            console.log('action', action);
            return { ...state, isAuto: action.payload };
        default:
            return state;
    }
}

export interface CombinedState {
    NumberState: AppState;
    StatusState: StatusGame;
}

export const initialCombinedState: CombinedState = {
    NumberState: InitialAppState,
    StatusState: InitialAppState2,
};

// Combined reducer function
export function combinedReducer(state: CombinedState, action: any): CombinedState {
    return {
        NumberState: appReducer(state.NumberState, action),
        StatusState: appReducerStatusGame(state.StatusState, action),
    };
}


