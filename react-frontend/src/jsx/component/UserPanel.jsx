import React from 'react';
import { Grid, Typography, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import withRouter from "jsx/component/WithRouter";
import RightGrid from 'jsx/control/grid/RightGrid';
import TopGrid from 'jsx/control/grid/TopGrid';
import RightLoginButton from 'jsx/control/button/RightLoginButton';
import RightRegButton from 'jsx/control/button/RightRegButton';
import CenterText from 'jsx/control/text/CenterText';
import Description from 'jsx/control/text/Description';
import RightList from 'jsx/control/list/RightList';
import RightAvatar from 'jsx/control/avatar/RightAvatar';
import avatar from 'image/avatar.jpg';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

class UserPanel extends React.Component {
  handleLogin = () => {
    JsUtil.navigate(this, '/fe/page/login');
  }
  handleRegister = () => {
    JsUtil.navigate(this, '/fe/page/register');
  }
  render() {
    return (
      <RightGrid>
        <TopGrid>注册/登录</TopGrid>
        <List>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <RightAvatar src={avatar} />
            </ListItemAvatar>
          </ListItem>
          <RightList alignItems="center">
            <CenterText>欢迎来到柏君商城</CenterText>  
          </RightList>
          <RightList alignItems="center">
            <RightLoginButton onClick={this.handleLogin}>
              登录
          </RightLoginButton>
          <RightRegButton onClick={this.handleRegister}>
              注册
          </RightRegButton>
          </RightList>
          <ListItem>
            <Description>
            柏君商城(www.pc8g.com)是一家专注本地电商的综合交易平台。
            </Description>
          </ListItem>
        </List>
      </RightGrid>

    );
  }
}

export default UserPanel;
