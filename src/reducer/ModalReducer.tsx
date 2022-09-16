export enum IActionType {
    OPEN_MODAL  = 'OPEN_MODAL',
    CLOSE_MODAL = 'CLOSE_MODAL',
}

type IAction = {
    type: IActionType;
    payload: boolean;
}


function ModalReducer(state: boolean, action: IAction) {
    switch(action.type) {
        case IActionType.CLOSE_MODAL:
            return false;
        case IActionType.CLOSE_MODAL:
            return true;
        default: 
            return state;
    }
}