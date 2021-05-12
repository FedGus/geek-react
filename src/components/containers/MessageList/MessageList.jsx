import React, { Component } from "react";
// import ReactDom from 'react-dom';
import { FormLayout, FormItem, Input, Button, CardGrid, Card } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { Icon24SendOutline } from "@vkontakte/icons";
import "./style.scss";
import Message from "@components/Message";
//stateFull

import { connect } from 'react-redux';
import redux, { bindActionCreators } from 'redux';
import { loadMessages, sendMessage } from '@actions/messages';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = evt => {
    if (evt.keyCode !== 13) {
      this.setState({ text: evt.target.value });
    } else {
      this.sendMessage();
    }
  };

  sendMessage = () => {
    const user = this.props.user.id;
    const chat = this.props.active;

    const payload = {
      name: 'Username',
      text: this.state.text,
      date: new Date()
    };

    this.props.send(payload, chat, user);

    this.setState({
      text: ''
    });
  };


  async componentDidMount() {
    await this.props.loadMessages(this.props.user.id, this.props.active);
  }

  render() {
    const { messages } = this.props;
    const Messages = messages.map((el, i) => (
      <Message key={"msg_" + i} name={el.name} text={el.text} />
    ));

    return (
      <div className="message-list__wrapper">
        <CardGrid size="l">
          <Card mode="outline">
            <div className="message-list__messages">
              {Messages}</div>
          </Card>
        </CardGrid>

        <FormLayout>
          <div className="message-list__form">
            <FormItem>
              <Input
                type="text"
                value={this.state.text}
                onChange={this.handleChange}
                onKeyUp={this.handleChange}
              />
            </FormItem>
            <FormItem>
              <Button
                mode="outline"
                size="l"
                before={<Icon24SendOutline />}
                onClick={this.sendMessage}
              >
                Send
              </Button>
            </FormItem>
          </div>
        </FormLayout>
      </div>
    );
  }
}

const mapStateToProps = ({ messagesReducer, userReducer, chatsReducer }) => ({
  messages: messagesReducer.messages,
  user: userReducer.user,
  activeChat: chatsReducer.activeChat
});

const mapActionsToProps = dispatch => bindActionCreators({ loadMessages, send: sendMessage }, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(MessageList);