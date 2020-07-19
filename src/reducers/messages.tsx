
export enum MessageActionType {
    MESSAGE_SHOW = 'MESSAGE_SHOW'
}

export interface MessageAction {
    type: MessageActionType,
    payload: string,
}

export interface MessageState {
    message: string
}

export const showMessage = (msg: string) => ({type: MessageActionType.MESSAGE_SHOW, payload: msg})

export default function(state: string = '', action: MessageAction) {
    switch (action.type) {
        case MessageActionType.MESSAGE_SHOW:
            return { message: action.payload }
        default:
            return state
    }
}