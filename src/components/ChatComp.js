import React, { useState, useRef, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { Avatar, ScreenSpinner, CardGrid, ContentCard, Input, Button, FixedLayout, Panel, PanelHeader, PanelHeaderBack, Spacing, FormLayoutGroup } from '@vkontakte/vkui';

function ChatComp(props) {
    const messagesEndRef = useRef(null)
    const [messages, setMessages] = useState([
        { key: 1, src: '', sender_name: 'sss', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { key: 2, src: '', sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { key: 3, src: '', sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { key: 4, src: '', sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { key: 5, src: '', sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { key: 6, src: '', sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { key: 7, src: '', sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { key: 8, src: '', sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { key: 9, src: '', sender_name: 'Lev', text: 'Я щас вымок весь под дождём(' },
        { key: 10, src: '', sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' }
    ])
    const [msgs, setMsgs] = useState('')


    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages]);

    const messagesList = Object.keys(messages).map((message) =>
        <div key={message.toString()}>
            <FormLayoutGroup>
                <Avatar src={messages[message].src}></Avatar>
                <Spacing></Spacing>
                <ContentCard
                    // src={messages[message].src}
                    subtitle={messages[message].sender_name}
                    mode="outline"
                    text={messages[message].text} />
                    <Spacing></Spacing>
            </FormLayoutGroup>
            <Spacing></Spacing>
            <div ref={messagesEndRef}></div>
        </div>
        // <MessageComp key={message} id={message.id} sender_name={message.sender_name} text={message.text}/>
    )

    const sendMessage = (e) => {
        e.preventDefault();
        const newMsg = {
            id: Date.now(),
            src: props.photo_100,
            sender_name: props.first_name + ' ' + props.last_name,
            text: msgs
        }
        if (msgs.length > 0 & msgs != " ") {
            setMessages([...messages, newMsg])
            setMsgs('')
        }
    }

    return (
        <div>
            <Panel>
                {messagesList}
            </Panel>

            <Spacing size={38} />

            <FixedLayout filled vertical='bottom'>
                <section className="MessageBox">
                    <form>
                        <Input
                            type="text"
                            value={msgs}
                            onChange={e => setMsgs(e.target.value)}
                            placeholder="Type message to send"
                            after={
                                <Button
                                    type="submit"
                                    onClick={sendMessage}
                                    size="l"
                                >
                                    Send
                                </Button>
                            }
                        />
                    </form>
                </section>
            </FixedLayout>
        </div>
    );
}

export default ChatComp;