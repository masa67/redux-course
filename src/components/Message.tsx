import React from 'react'

export interface MessageProps {
    message?: string
}

const Message = ({message}: MessageProps) => (
    message
        ? <span className='message'>{message}</span>
        : null
)

export default Message