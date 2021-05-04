
    import React, { Component } from 'react';
    import ReactDom from 'react-dom';
    import './style.scss';

    import ContactsList from '@containers/ContactsList'
    
    export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render() {
        return <div className="chatslist">
            <ContactsList></ContactsList>
        </div>
    }
}
    