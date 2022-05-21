import React from 'react';
import { ContentCard, Panel, PanelHeader, Text, Group, TextTooltip, View, Div, CardGrid, Card, Header, Spacing } from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

const MessageComp = (props) => {

    return (

        <View activePanel={props.id}>
            <Panel id={props.id}>
                <CardGrid size="l">
                    <ContentCard
                        subtitle={props.sender_name}
                        mode="outline"
                        text={props.text} />
                </CardGrid>
                <Spacing></Spacing>
            </Panel>
        </View>
    );
};

export default MessageComp;