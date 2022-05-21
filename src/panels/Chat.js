import React from 'react';
import PropTypes from 'prop-types';

import { FixedLayout, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import ChatComp from '../components/ChatComp';

const Chat = props => (

	<Panel id={props.id}>
        <PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Chat
		</PanelHeader>
		<ChatComp></ChatComp>
	</Panel>
);

Chat.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Chat;