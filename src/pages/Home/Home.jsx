import React from 'react';
import ReactDom from 'react-dom';

import MessageList from "@containers/MessageList"
import MsgInput from "@components/MsgInput"
import './style.scss';

export default () => {
    return <div>
        <MsgInput></MsgInput>
        <MessageList></MessageList>
    </div>;
}
