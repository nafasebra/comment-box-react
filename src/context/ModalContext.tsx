import {createContext, useState} from 'react'


type PropType = {
    children: JSX.Element[] | JSX.Element;
}

type StateModalType = {
    stateModal: boolean,
    setStateModal: (a: boolean) => void;
}

export const StateModalContext = createContext<StateModalType>({
    stateModal: false,
    setStateModal: () => {}
});

export const StateModalProvider = ({children}: PropType) => {
    const [stateModal, setStateModal] = useState<boolean>(false);
    return (
        <StateModalContext.Provider value={{stateModal, setStateModal}}>
            {children}
        </StateModalContext.Provider>
    )
}


