import React from 'react';
import {Navigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Paper, Popper } from '@mui/material';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import LogoHeadLayout from 'jsx/layout/LogoHeadLayout';
import ContainerGrid from 'jsx/control/grid/ContainerGrid';
import CenterFormPaper from 'jsx/control/paper/CenterFormPaper';
import ItemGrid from 'jsx/control/grid/ItemGrid';
import TextInput from 'jsx/control/textfield/TextInput';
import LgTitle from "jsx/control/text/LgTitle";
import FindPass from "jsx/control/text/FindPass";
import ImagePaper from 'jsx/control/paper/ImagePaper';
import RegiesterButton from 'jsx/control/button/RegiesterButton';
import ImageCode from 'jsx/component/ImageCode';
import CenterGrid from "jsx/control/grid/CenterGrid";
import RegisterGrid from 'jsx/control/grid/register/RegisterGrid';
import InlineText from 'jsx/control/typography/InlineText';
import TumpToLogin from "jsx/control/text/TumpToLogin";

class MessageLogin extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onMatch = this.onMatch.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  state = {
    nickName: '',
    loginName: '',
    messageCode: '',
    password: '',
    open: false,
    backgroundImage: 'data:image/jpg;base64,',
    cutoutImage: 'data:image/jpg;base64,',
    serialNo: '',
    topLeftY: 0,
    topLeftX: 0,
    path: '',
    timeLeft: 0,
    buttonText: "获取验证码",
    buttonDisabled: false
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleLogin = () => {
    const that = this;
    
    if(!JsUtil.mobileFormat(this.state.loginName)){
      return;
    }

    if (!this.state.messageCode) {
      alert('请输入短信验证码');
      return;
    }

    const param = "smsCode="+this.state.messageCode+"&loginName="+this.state.loginName+"&clientVersion=1";

    const url = '/sec/sms/login';

    function succ(result) {
      console.log(result);
      const { code } = result;
      if (code == cnst.CODE_COMM_0_SUCCESS) {
        JsUtil.setAppItem("currUserName", result.body.nickName);
        JsUtil.setAppItem("currUserId", result.body.id);
        JsUtil.setAppItem("currOrgId", result.body.orgId);
        JsUtil.setAppItem("currOrgName", result.body.orgName);
        JsUtil.setAppItem("currOrgType", result.body.orgType);
        JsUtil.setAppItem('receiptMemId', result.body.receiptMemId);
        JsUtil.setAppItem('receiptOrgId', result.body.receiptOrgId);
        JsUtil.setAppItem("token", result.body.token);
        JsUtil.setAppItem("authorities", result.body.authorities);
        
        that.setState({ path: '/' });
      } else
      alert(result.message);
    }

    function err(result) {
      alert(`请求失败${result}`);
    }

    JsUtil.asyncHttpPost(this, url, param, succ, err, 'application/x-www-form-urlencoded');
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

  checkloginName(loginName) {
    
    if(!JsUtil.mobileFormat(loginName)){
      return false;
    }

    return true;
  }

  onMatch() {
    const that = this;
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
          buttonText: "获取验证码"
        });
      }
    }, 1000);
  }

  handleClick(event) {
    if(this.state.timeLeft>0) return;
    
    if(!JsUtil.mobileFormat(this.state.loginName)){
      return;
    }

    const { currentTarget } = event;
    this.setState(state => ({
      url: this.getImage(),
      anchorEl: currentTarget,
      open: true
    }));
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
              <LgTitle>短信登录</LgTitle>
            </ContainerGrid>
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
                      smsUri={'/sec/login/sms'}
                      imageUrl={this.state.backgroundImage}
                      onMatch={this.onMatch}
                      topLeftY={this.state.topLeftY}
                      cutout={this.state.cutoutImage}
                      loginName={this.state.loginName}
                      serialNo={this.state.serialNo}
                    />
                  </Paper>
                </Popper>
              </ItemGrid>
            </ContainerGrid>
            <ContainerGrid>
              <ItemGrid>
                <TextInput
                  id="messageCode"
                  label="短信验证码"
                  value={this.state.messageCode}
                  onChange={this.handleChange('messageCode')}
                />
                <FindPass onClick={this.handleClick} disabled={this.state.buttonDisabled}>
                {this.state.buttonText}
                </FindPass>
              </ItemGrid>
            </ContainerGrid>
            <br />
            <CenterGrid>
              <RegiesterButton fullWidth onClick={this.handleLogin}>
                登录
              </RegiesterButton>
            </CenterGrid>
            <br />
            <hr/>
            <br/>
            <RegisterGrid>
            <InlineText>我已注册过账号，</InlineText>
            <TumpToLogin component={Link} to="/fe/page/login">立即登录</TumpToLogin>
            <InlineText>或是</InlineText>
            <FindPass component={Link} to="/fe/page/findPassword">找回密码</FindPass>
            <FindPass component={Link} to="/fe/page/register">去注册</FindPass>
            </RegisterGrid>
          </CenterFormPaper>
        </ImagePaper>
      </LogoHeadLayout>
    );
  }
}

export default MessageLogin;
