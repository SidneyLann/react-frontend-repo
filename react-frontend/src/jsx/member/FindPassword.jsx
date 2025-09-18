import React from 'react';
import {Navigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Paper, Popper } from '@mui/material';
import LogoHeadLayout from 'jsx/layout/LogoHeadLayout';
import ContainerGrid from 'jsx/control/grid/ContainerGrid';
import CenterFormPaper from 'jsx/control/paper/CenterFormPaper';
import ItemGrid from 'jsx/control/grid/ItemGrid';
import InlineText from 'jsx/control/typography/InlineText';
import LgTitle from "jsx/control/text/LgTitle";
import TextInput from "jsx/control/textfield/TextInput";
import FindPass from "jsx/control/text/FindPass";
import ImagePaper from 'jsx/control/paper/ImagePaper';
import ImageCode from 'jsx/component/ImageCode';
import TumpToLogin from "jsx/control/text/TumpToLogin";
import RegisterGrid from 'jsx/control/grid/register/RegisterGrid';
import CenterGrid from "jsx/control/grid/CenterGrid";
import RegiesterButton from 'jsx/control/button/RegiesterButton';
import JsUtil from 'jsx/common/JsUtil';

class FindPassword extends React.Component {
 constructor(props) {
  super(props);
}

  state = {
    loginName: '',
    open: false,
    backgroundImage: 'data:image/jpg;base64,',
    cutoutImage: 'data:image/jpg;base64,',
    serialNo: '',
    topLeftY: 0,
    topLeftX: 0,
    path: '',
    timeLeft: 0,
    buttonText: "找回密码",
    buttonDisabled: false
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  getImage() {
    const succ = result => {
      console.log(result.body);
      const {
        backgroundImage, cutoutImage, serialNo, topLeftY
      } = result.body;

      this.setState({
        backgroundImage: `data:image/jpg;base64,${backgroundImage}`,
        cutoutImage: `data:image/jpg;base64,${cutoutImage}`,
        topLeftY: parseInt(topLeftY),
        serialNo
      });
    }

    const err = result => {
      alert(result);
    }

    JsUtil.asyncHttpGet(this, '/mb/pub/validation/image', succ, err);
  }

  onMatch = (that) => event => {
    setTimeout(() => {
      that.setState({
        open: false,
        timeLeft: 120,
        buttonDisabled: true
      });
    }, 500);

    var downloadTimer = setInterval(function() {
      const text = "(" + that.state.timeLeft + ")";
      const nextTimeleft = that.state.timeLeft - 1;
      that.setState({
        buttonText: text,
        timeLeft: nextTimeleft
      });

      if (that.state.timeLeft < 0) {
        clearInterval(downloadTimer);
        that.setState({
          timeLeft: 0,
          buttonDisabled: false,
          buttonText: "找回密码"
        });
      }
    }, 1000);
  }

  handleClick = (that) => event => {
    if(that.state.timeLeft>0) return;
    
    if(!JsUtil.mobileFormat(that.state.loginName)){
      return;
    }

    const { currentTarget } = event;
    that.setState({
      url: this.getImage(),
      anchorEl: currentTarget,
      open: true
    });
  }

  render() {
    const { anchorEl, open, path } = this.state;
    const id = open ? 'simple-popper' : null;
    if (path != '') {
      return <Navigate replace to={path} />;
    }

    return (
      <LogoHeadLayout>
        <ImagePaper>
          <CenterFormPaper>
            <ContainerGrid>
              <LgTitle>找回密码</LgTitle>
            </ContainerGrid>
            <br />
            <br />
            <ContainerGrid>
              <ItemGrid>
                <TextInput
                  id="loginName"
                  label="手机号"
                  value={this.state.loginName}
                  fullWidth
                  variant="outlined"
                  onChange={this.handleChange('loginName')}
                />
              </ItemGrid>
            </ContainerGrid>
            <ContainerGrid>
              <ItemGrid>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                  <Paper>
                    <ImageCode
                      smsUri={'/mb/pub/find/password'}
                      imageUrl={this.state.backgroundImage}
                      onMatch={this.onMatch(this)}
                      topLeftY={this.state.topLeftY}
                      cutout={this.state.cutoutImage}
                      loginName={this.state.loginName}
                      serialNo={this.state.serialNo}
                    />
                  </Paper>
                </Popper>
              </ItemGrid>
            </ContainerGrid>
            <br />
            <CenterGrid>
            <RegiesterButton onClick={this.handleClick(this)} fullWidth>
            {this.state.buttonText}
            </RegiesterButton>
            </CenterGrid>

            <br />
            <hr/>
            <br/>
            <RegisterGrid>
            <InlineText>我已注册过账号，</InlineText>
            <TumpToLogin component={Link} to="/fe/page/login">立即登录</TumpToLogin>
            <InlineText>或是</InlineText>
            <FindPass component={Link} to="/fe/page/MessageLogin">短信登录</FindPass>
            <FindPass component={Link} to="/fe/page/register">去注册</FindPass>
            </RegisterGrid>
          </CenterFormPaper>
        </ImagePaper>
      </LogoHeadLayout>
    );
  }
}

export default FindPassword;
