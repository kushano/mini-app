import React from 'react';
import PropTypes from 'prop-types';

import { FixedLayout, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import ChatComp from '../components/ChatComp';

const Chat = ({fetchedUser, ...props}) => (

	<Panel id={props.id}>
        <PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Chat
		</PanelHeader>
		<ChatComp first_name={fetchedUser.first_name} last_name={fetchedUser.last_name} photo_100={fetchedUser.photo_200}></ChatComp>
	</Panel>
);

Chat.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Chat;