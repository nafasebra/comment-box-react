import {createContext, useState} from 'react'
import { ICommentType, commnets } from '../data';


type PropType = {
    children: JSX.Element[] | JSX.Element;
}

type CommentListContextType = {
    commentList: ICommentType[],
    setCommentList: (a: ICommentType[]) => void;
}

export const CommentListContext = createContext<CommentListContextType>({
    commentList: [],
    setCommentList: () => {}
});

export const CommentListProvider = ({children}: PropType) => {
    const [commentList, setCommentList] = useState<ICommentType[]>(commnets);
    return (
        <CommentListContext.Provider value={{commentList, setCommentList}}>
            {children}
        </CommentListContext.Provider>
    )
}


