import React, { Component } from "react";
// import ReactDom from 'react-dom';
import { FormLayout, FormItem, Input, Button, CardGrid, Card } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { Icon24SendOutline } from "@vkontakte/icons";
import "./style.scss";
import Message from "@components/Message";
//stateFull

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { name: "one", text: "Hey!" },
        { name: "one", text: "How are you?" }
      ],
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
    this.setState({
      text: "",
      messages: [
        ...this.state.messages,
        {
          name: "User",
          text: this.state.text
        }
      ]
    });
  };

  componentDidUpdate() {
    // console.log('Отправлено');
  }

  render() {
    const { messages } = this.state;
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
                before={<Icon24SendOutline/>}
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

//stateLess
// const arr = [{ name: 'one', text: 'Hey!' }, { name: 'one', text: 'How are you?' }];

// export default () => {
//     const Messages = arr.map((el, i) => <Message
//                                             key={ 'msg_' + i }
//                                             name={ el.name }
//                                             text={ el.text }
//                                         />);

//     return <div>
//         { Messages }
//     </div>;
// };
