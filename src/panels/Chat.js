import React from 'react';
import PropTypes from 'prop-types';

import { FixedLayout, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import MessageList from '../components/MessageList';
import MessageBox from '../components/MessageBox';

const Chat = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Chat
		</PanelHeader>
        <MessageList></MessageList>
        <FixedLayout filled vertical='bottom'>
            <MessageBox/>
        </FixedLayout>
	</Panel>
);

Chat.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Chat;