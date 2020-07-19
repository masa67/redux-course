import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import todoReducer, { TodoState } from './reducers/todo'
import messageReducer, { MessageState } from './reducers/messages'

export interface ApplicationState {
    todo: TodoState,
    message: MessageState
}

const reducer = combineReducers({
    todo: todoReducer,
    message: messageReducer
})

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
