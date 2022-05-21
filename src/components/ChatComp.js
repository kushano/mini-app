import React, { useState, useRef, useEffect } from 'react';
import { View, CardGrid, ContentCard, Input, Button, FixedLayout, Panel, PanelHeader, PanelHeaderBack, Spacing } from '@vkontakte/vkui';

function ChatComp() {
    const messagesEndRef = useRef(null)
    const [messages, setMessages] = useState([
        { key: 1, sender_name: 'sss', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { key: 2, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { key: 3, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { key: 4, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { key: 5, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { key: 6, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { key: 7, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { key: 8, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' },
        { key: 9, sender_name: 'Lev', text: 'Я щас вымок весь под дождём(' },
        { key: 10, sender_name: 'Vladislav', text: 'ой, блять заебался, сделал коммит, он не сделался, сделал сейчас хуйни, рестор только к началу, по сути' }
    ])
    const [msgs, setMsgs] = useState('')

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages]);

    const messagesList = Object.keys(messages).map((message) =>
        <div key={message.toString()}>
            <CardGrid size="l">
                <ContentCard
                    subtitle={messages[message].sender_name}
                    mode="outline"
                    text={messages[message].text} />
            </CardGrid>
            <Spacing></Spacing>
            <div ref={messagesEndRef}></div>
        </div>
        // <MessageComp key={message} id={message.id} sender_name={message.sender_name} text={message.text}/>
    )

    const sendMessage = (e) => {
        e.preventDefault();
        const newMsg = {
            id: Date.now(),
            sender_name: 'wlsdw',
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