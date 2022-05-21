import React,  {useEffect, useState} from 'react';
import MessageComp from '../components/MessageComp';
import MessageBox from './MessageBox';

function MessageList(props) {
    const messagesList = React.createRef();

    // useEffect(() => {
    //     messagesList.current.scrollTop = messagesList.current.scrollHeight
    // }, [props, messagesList]);

    const [messages, setMessages] = useState([
        {sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути'},
        {sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути'},
        {sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути'},
        {sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути'},
        {sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути'},
        {sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути'},
        {sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути'},
        {sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути'},
        {sender_name: 'Lev', text: 'Я щас вымок весь под дождём('}
    ])

    return (
        <div className="messageList">
            {messages.map(message =>
                <MessageComp message={message}/>
            )}
        </div>
    );
}

export default MessageList;