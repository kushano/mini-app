import React from 'react';
import PropTypes from 'prop-types';

const { messageId, messageText, senderName } = msg
export const MessageComp = ({msg}) => {
    return (
        <div className="Message">
        <div className="message-sender-icon">
            
        </div>
        <div className="message-bubble">
            <div className="message-sender-name">{getSenderName()}</div>
            <div className="message-content">{props.message.content}</div>
        </div>
    </div>
    )
}

export default MessageComp;