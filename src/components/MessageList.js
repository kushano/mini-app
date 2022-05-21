// import React, { useEffect, useState, useRef } from 'react';
// import MessageComp from '../components/MessageComp';

// import { Spacing } from '@vkontakte/vkui';

// function MessageList(props) {
//     const messageList = React.createRef();

//     useEffect(() => {
//         messageList.current.scrollTop = messageList.current.scrollHeight
//     }, [props, messageList]);

//     const messagesList = messages.map(message =>
//         <MessageComp message={message} key={message.id} />
//     )

//     return (
//         <section className="messagesList" ref={messageList}>
//             {/* {messagesList} */}
//             <MessageComp message={messages} key={messages.id}/>
//             <Spacing size={36} />
//         </section>
//     );
// }

// export default MessageList;