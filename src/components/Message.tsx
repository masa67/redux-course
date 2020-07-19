import React from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from '../store'

export interface MessageProps {
    message?: string
}

export interface MessageState {
    message: string;
}

const Message = ({message}: MessageProps) => (
    message
        ? <span className='message'>{message}</span>
        : null
)

export default connect(
    (state: ApplicationState) => ({message: state.message.message})
)(Message)