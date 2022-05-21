import React, { useState } from 'react';
import { FixedLayout, Panel, PanelHeader, PanelHeaderBack, Spacing } from '@vkontakte/vkui';
import MessageComp from '../components/MessageComp';
import MessageBox from '../components/MessageBox';

function ChatComp() {
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

    // const addNewMsg = (e) => {
    //     e.preventDefault()
    //     const newMsg ={
    //         id: Date.now(),
    //         sender_name,
    //         text
    //     }
    //     setMsgs(...msgs, newMsg)
    // }
    
    const messagesList = messages.map(message =>
        <MessageComp message={message} key={message.id} />
    )

    return (
        <div>
            {messagesList}

            <Spacing size={38} />

            <FixedLayout filled vertical='bottom'>
                <MessageBox/>
            </FixedLayout>
        </div>
    );
}

export default ChatComp;