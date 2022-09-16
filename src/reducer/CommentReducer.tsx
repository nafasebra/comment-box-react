export enum IActionKind {
    ADD_COMMENT = 'ADD_COMMENT',
    ADD_REPLY = 'ADD_REPLY',
    DELETE_COMMENT = 'DELETE_COMMENT',
    EDIT_COMMENT = 'EDIT_COMMENT',
}

type ActionType = {
    type: IActionKind;
    payload: []
}

function CommentReducer(state: any[], action: ActionType) {
    // somthing
}