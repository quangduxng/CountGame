import { createContext, useReducer } from "react";
import { combinedReducer, CombinedState, initialCombinedState } from "./rootReducer";

const CombinedContext = createContext<{ state: CombinedState; dispatch: React.Dispatch<any> }>({
    state: initialCombinedState,
    dispatch: () => null,
});

const CombinedProvider = ({ children }: { children: any }) => {
    const [state, dispatch] = useReducer(combinedReducer, initialCombinedState);

    return (
        <CombinedContext.Provider value={{ state, dispatch }}>
            {children}
        </CombinedContext.Provider>
    );
};

export { CombinedProvider, CombinedContext };