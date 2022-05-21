import React from 'react';
import { FixedLayout, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import MessageList from '../components/MessageList';
import MessageBox from '../components/MessageBox';

function ChatComp() {
    return (
        <div>
            <MessageList />

            <FixedLayout filled vertical='bottom'>
                <MessageBox />
            </FixedLayout>
        </div>
    );
}

export default ChatComp;