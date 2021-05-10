import React from "react";
// import ReactDom from 'react-dom';
import MessageList from "@containers/MessageList";
import ChatList from "@containers/ChatList";
import MsgInput from "@components/MsgInput";
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

export default props => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
           <PanelHeader><h1>Chat with {props.name}</h1></PanelHeader> 
            <div className="app__wrapper">
              {/* <MsgInput /> */}
              <ChatList />
              {props.name && <MessageList />}
            </div>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
