import React from 'react';
import JsUtil from 'jsx/common/JsUtil';
import Messages from "jsx/control/grid/chat/Messages";

export default class MessageItem extends React.Component {
  render() {
    const { message } = this.props;
    if (!message) {
      return null;
    }
    
    let content = null;
    switch (message.contentType) {
      case 1:
        content = message.interactContent;
        break;
      case 3:
        const picUrl = JsUtil.IMAGE_PREFIX + message.interactContent;
        content = (
          <img src={picUrl} width={150} height={150} alt="图片" />
        );
        break;
      default:
        content = null;
        break;
    }
    
    const style = {
      alignSelf: message.from ? 'flex-start' : 'flex-end'
    }
    
    return (
      <Messages item style={style}>{
        content
      }
      </Messages>
    );
  }
}
