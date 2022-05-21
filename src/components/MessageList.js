import React, { useEffect, useState, useRef } from 'react';
import MessageComp from '../components/MessageComp';

import { Spacing } from '@vkontakte/vkui';

function MessageList(props) {
    const messagesList = React.createRef();

    // useEffect(() => {
    //     messagesList.current.scrollTop = messagesList.current.scrollHeight
    // }, [props, messagesList]);



    const [messages, setMessages] = useState([
        { id: 1, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { id: 2, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { id: 3, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { id: 4, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { id: 5, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { id: 6, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { id: 7, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { id: 8, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { id: 9, sender_name: 'Lev', text: 'Я щас вымок весь под дождём(' },
        { id: 10, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' }
    ])

    return (
        <section className="messageList">
            {messages.map(message =>
                <MessageComp message={message} key={message.id} />
            )}
            <Spacing size={36} />
        </section>
    );
}

export default MessageList;