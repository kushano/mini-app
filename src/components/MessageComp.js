import React from 'react';
import { ContentCard, Panel, PanelHeader, Text, Group, TextTooltip, View, Div, CardGrid, Card, Header, Spacing } from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

const MessageComp = (props) => {

    return (

        <View activePanel="test">
            <Panel id="test">
                <CardGrid size="l">
                    <ContentCard
                        subtitle={props.message.sender_name}
                        mode="outline"
                        text={props.message.text} />
                </CardGrid>
                <Spacing></Spacing>
            </Panel>
        </View>
    );
};

export default MessageComp;