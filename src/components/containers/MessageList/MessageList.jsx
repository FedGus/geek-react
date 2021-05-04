import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';

export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [{ name: 'One', text: 'Hey!' }, { name: 'One', text: 'How are you?' }],
            text: ''
        }
    }

    handleChange = e => {
        if (e.keyCode !== 13) {
            this.setState({ text: e.target.value });
        } else {
            this.sendMessage();
        }
    }

    sendMessage = () => {
        this.setState({
            text: '',
            messages: [...this.state.messages, { name: 'User', text: this.state.text }]
        })
    }

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) => <Message key={i} name={el.name} text={el.text}></Message>);
        return <div>
            <button onClick={this.sendMessage}>Add</button>
            <input type="text" value={this.state.text} onChange={ this.handleChange } onKeyUp={ this.handleChange }></input>
            {Messages}
        </div>
    }
}