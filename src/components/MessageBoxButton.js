import { Button } from '@vkontakte/vkui';
import React, { useState } from 'react'
import PropTypes from 'prop-types';

const MessageBoxButton = props => {

    // const sendMessage = async (e) => {
    //     e.preventDefault();
    //     const newMsg = {
    //         ...msg, id: Date.now()
    //     }
    //     create(newMsg)
    //     setMsg({ sender_name: '', text: '' })
    // }

    return (
        <Button {...props}
            type={props.type}
            //type="submit"
            onClick={props.onClick}
            size={props.size}
        >
            Send
        </Button>
    )
}

MessageBoxButton.propTypes = {
	type: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
    size: PropTypes.string.isRequired,
};

export default MessageBoxButton;