import { Button, Input } from '@vkontakte/vkui';
import { create } from 'domain';
import React, { useState } from 'react';
import MessageBoxButton from './MessageBoxButton';

const MessageBox = (props) => {
    const [msg, setMsg] = useState({ id: '', sender_name: '', text: '' });


    // sendMessage = async (e) => {
    //     e.preventDefault();
    //     if (this.state.message.length > 0) {
    //         await this.props.onSendNewMessage(this.state.message);
    //         this.setState({...this.state, ...{message : ''}});
    //     }
    // }

    const sendMessage = async (e) => {
        e.preventDefault();
        const newMsg = {
            ...msg, id: Date.now()
        }
        create(newMsg)
        setMsg({ sender_name: '', text: '' })
    }

    return (
        <section className="MessageBox">
            <form>
                <Input {...props}
                    type="text"
                    value={msg.text}
                    onChange={e => setMsg({ ...msg, text: e.target.value })}
                    placeholder="Type message to send"
                    after={<MessageBoxButton type="submit" onClick={sendMessage} size="l"></MessageBoxButton>}
                />
            </form>
        </section>
    );
}

export default MessageBox;