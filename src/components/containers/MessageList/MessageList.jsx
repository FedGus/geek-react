import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';

export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [{ name: 'One', text: 'Hey!' }, { name: 'One', text: 'How are you?' }]
        }
    }

    sendMessage = () => {
        this.setState({
            messages: [...this.state.messages, { name: 'Two', text: 'Fine!' }]
        })
    }

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) => <Message key={i} name={el.name} text={el.text}></Message>);
        return <div>
            <button onClick={ this.sendMessage }>Add</button>
            {Messages}
        </div>
    }
}