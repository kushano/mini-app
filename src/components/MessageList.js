import React,  {useEffect} from 'react';
import MessageComp from '../components/MessageComp';

function MessageList(props) {
    const messagesList = React.createRef();

    // useEffect(() => {
    //     messagesList.current.scrollTop = messagesList.current.scrollHeight
    // }, [props, messagesList]);

    return (
        <div className="MessageList">
            <MessageComp message={{sender_name: 'Vladislav', text: 'hi'}}></MessageComp>
            <MessageComp message={{sender_name: 'Vladislav', text: 'hisssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'}}></MessageComp>
        </div>
    );
}

export default MessageList;