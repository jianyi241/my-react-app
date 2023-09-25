import React from 'react';

interface Context {
    num: number
    onCalc: (type: 'reduce' | 'plus') => void
}

export const MyContext = React.createContext<Context | undefined>(undefined);
