import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import MessageList from '../components/MessageList';

const Chat = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Chat
		</PanelHeader>
        <MessageList></MessageList>
	</Panel>
);

Chat.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Chat;