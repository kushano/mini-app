import React,  {useEffect} from 'react';
import Message from '../components/MessageComp';

function MessageList(props) {
    const messagesList = React.createRef();

    useEffect(() => {
        messagesList.current.scrollTop = messagesList.current.scrollHeight
    }, [props, messagesList]);

    const messageList = props.messages.map(message => 
        <MessageComp
            key={message.uuid}
            sender={props.members.find((member) => member.uuid === message.sender_id)} 
            message={message} />
        );

    return (
        <section className="MessageList" ref={messagesList}>
            {messageList}
        </section>
    );
}

export default MessageList;