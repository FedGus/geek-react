import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import redux, { bindActionCreators } from 'redux';

import Home from '@pages/Home';

class Router extends Component {
  render() {
    const { chats } = this.props;
    const ChatsRoutes = chats.map((el, i) =>
      <Route exact path={`/chat/${el.id}`} render={() => <Home name={el.name} />} key = {i} />
    );
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        { ChatsRoutes }
      </Switch>
    );
  }
};

const mapStateToProps = ({ chatsReducer }) => ({
  chats: chatsReducer.chats
});

const mapActionsToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(Router);