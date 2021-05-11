
import './style.css';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ChatsDialog from '@components/ChatsDialog';
import { connect } from 'react-redux';
import redux, { bindActionCreators } from 'redux';
import { loadChats } from '@actions/chats';

import { Header, SimpleCell, Avatar, Separator } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { Icon24SendOutline } from "@vkontakte/icons";

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeChats: [
                { name: 'Вася', id: '1' },
                { name: 'Клава', id: '2' },
                { name: 'Дуня', id: '3' }
            ]
        }
    }

    addChat = name => {
        this.setState({ activeChats: [...this.state.activeChats, { name, id: Date.now() }] });
    }

    componentDidMount() {
        // this.props.loadChats('Username');
    }

    render() {
        const { chats } = this.props;
        const Chats = chats.map((el, i) =>
            <Link key={i} to={`/chat/${el.id}`} ><SimpleCell className="chatlist-list__item" before={<Avatar size={48} />}>{el.name}</SimpleCell></Link>
        );

        return (
            <div className="chatlist d-flex flex-column">
                <Header mode="secondary">Список диалогов</Header>
                <div>
                    {Chats}
                </div>
                <Separator style={{ margin: '12px 0' }} />
                <div>
                    <ChatsDialog add={this.addChat} />
                </div>
                {/* <div>
                            <Link to = '/not-home'>Not Home</Link>
                        </div> */}
            </div>
        )
    }
}

const mapStateToProps = ({ chatsReducer }) => ({
    chats: chatsReducer.chats
});

const mapActionsToProps = dispatch => bindActionCreators({ loadChats }, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(ChatList);
