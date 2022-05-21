import React from 'react';
import { Panel, PanelHeader, Text, Group, TextTooltip, View, Div, CardGrid, Card, Header } from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

const MessageComp = (props) => {

    return (
        // <div className="message">
        //     <div className="message-sender-icon">

        //     </div>
        //     <div className="message-text">
        //         <div className="message-sender-name">
        //             <Text/>
        //         </div>
        //         <div className="message-text">{props.message.text}</div>
        //     </div>
        // </div>

        // <div className='message'>
        //     <Panel id="test">
        //         <PanelHeader>{props.message.sender_name}</PanelHeader>
        //     </Panel>
        // </div>

        <View activePanel="test">
            <Panel id="test">
                <Group mode="plain" header={<Header mode="secondary">{props.message.sender_name}</Header>}>
                    <CardGrid size="l">
                        <Card mode="outline">
                            <Text>{props.message.text}</Text>
                        </Card>
                    </CardGrid>
                </Group>
            </Panel>
        </View>
    );
};

export default MessageComp;