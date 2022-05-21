import React, { useState } from 'react';
import { FixedLayout, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import MessageList from '../components/MessageList';
import MessageBox from '../components/MessageBox';

function ChatComp() {
    const [msgs, setMsgs] = useState([])

    // const addNewMsg = (e) => {
    //     e.preventDefault()
    //     const newMsg ={
    //         id: Date.now(),
    //         sender_name,
    //         text
    //     }
    //     setMsgs(...msgs, newMsg)
    // }
    
    return (
        <div>
            <MessageList />

            <FixedLayout filled vertical='bottom'>
                <MessageBox/>
            </FixedLayout>
        </div>
    );
}

export default ChatComp;