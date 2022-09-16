import {createContext, useState} from 'react'


type PropType = {
    children: JSX.Element[] | JSX.Element;
}

type StateModalType = {
    stateModal: boolean;
    currentId: number;
    setStateModal: (a: boolean) => void;
    setCurrentId: (a: number) => void;
}

export const StateModalContext = createContext<StateModalType>({
    stateModal: false,
    currentId: 0,
    setStateModal: () => {},
    setCurrentId: () => {}
});

export const StateModalProvider = ({children}: PropType) => {
    const [stateModal, setStateModal] = useState<boolean>(false);
    const [currentId, setCurrentId] = useState<number>(0);

    return (
        <StateModalContext.Provider value={{stateModal, setStateModal, currentId, setCurrentId}}>
            {children}
        </StateModalContext.Provider>
    )
}


