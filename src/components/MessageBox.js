import { Button, Input } from '@vkontakte/vkui';
import React from 'react';

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    currentMessageChanged = (e) => {
        this.setState({message: e.target.value });
    }

    // sendMessage = async (e) => {
    //     e.preventDefault();
    //     if (this.state.message.length > 0) {
    //         await this.props.onSendNewMessage(this.state.message);
    //         this.setState({...this.state, ...{message : ''}});
    //     }
    // }

    sendMessage = async (e) => {
        e.preventDefault();

    }

    render(){
        return (
            <section className="MessageBox">
                <form>
                    <Input 
                        type="text" 
                        value={this.state.message} 
                        onChange={this.currentMessageChanged} 
                        placeholder="Type message to send"
                        after={<Button 
                            type="submit" 
                            onClick={this.sendMessage}
                            size="l"
                        >
                            Send
                        </Button>}/>
                </form>
            </section>
        );
    }
}

export default MessageBox;