import React, { Component } from "react";
// import ReactDom from 'react-dom';
import MessageList from "@containers/MessageList";
import ChatList from "@containers/ChatList";
import MsgInput from "@components/MsgInput";

import { connect } from 'react-redux';
import redux, { bindActionCreators } from 'redux';
import { loadUser } from "@actions/user";
import { loadChats } from '@actions/chats';
import { loadContacts } from '@actions/contacts';
import { loadMessages } from '@actions/messages';
import { getActiveChat } from '@actions/chats'

import { StylesProvider } from "@material-ui/core/styles";
import {
  AdaptivityProvider,
  ConfigProvider,
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import "./style.scss";

class Home extends Component {
  async componentDidMount() {
    await this.props.loadUser();
    await this.props.loadChats(this.props.user.id);
    await this.props.loadContacts(this.props.user.id);
  }
  render () {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
           <PanelHeader><h1>Chat with {this.props.name}</h1></PanelHeader> 
            <div className="app__wrapper">
              {/* <MsgInput /> */}
              <ChatList />
              {this.props.name && <MessageList active={ this.props.id }/>}
            </div>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
  }
};

const mapStateToProps = ({ userReducer }) => ({
  user: userReducer.user
});

const mapActionsToProps = dispatch => bindActionCreators({ loadUser, loadChats, loadContacts, loadMessages, getActiveChat }, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(Home);
