import React from 'react';
import MessageItem from './MessageItem';
import ListContent from "jsx/control/grid/chat/ListContent";

export default class MessageList extends React.Component {
  render() {
    const {messages} = this.props;
    return (
      <ListContent item container spacing={8} 
          >
        {messages.map((msg, index) => <MessageItem message={msg} key={index} />)}
      </ListContent>
    );
  }
}
