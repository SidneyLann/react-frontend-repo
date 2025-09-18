import React from 'react';
import {Navigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Paper, Popper } from '@mui/material';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import LogoHeadLayout from 'jsx/layout/LogoHeadLayout';
import ContainerGrid from 'jsx/control/grid/ContainerGrid';
import RegisterGrid from 'jsx/control/grid/register/RegisterGrid';
import CenterFormPaper from 'jsx/control/paper/CenterFormPaper';
import ItemGrid from 'jsx/control/grid/ItemGrid';
import InlineText from 'jsx/control/typography/InlineText';
import TextInput from 'jsx/control/textfield/TextInput';
import LgTitle from "jsx/control/text/LgTitle";
import TumpToLogin from "jsx/control/text/TumpToLogin";
import FindPass from "jsx/control/text/FindPass";
import PasswordInput from 'jsx/control/textfield/PasswordInput';
import ImagePaper from 'jsx/control/paper/ImagePaper';
import TwoSidesGrid from "jsx/control/grid/TwoSidesGrid";
import CenterGrid from "jsx/control/grid/CenterGrid";
import LineGrid from "jsx/control/grid/LineGrid";
import CheckBox from "jsx/control/checkbox/CheckBox";
import NormLink from "jsx/control/link/NormLink";
import RegiesterButton from "jsx/control/button/RegiesterButton";
import ImageCode from 'jsx/component/ImageCode';

class Register extends React.Component {
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
    userContract: false,
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

  labels0 = {
    nickName: "昵称",
    loginName: "登录名",
    password: "密码",
    smsCode: "验证码"
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleRegister = () => {
    const that = this;
    if (!this.state.loginName) {
      alert('请输入手机号！');
      return;
    }else
    if (!this.state.messageCode) {
      alert('请输入验证码！');
      return;
    }else
    if (!this.state.password) {
      alert('请输入密码！');
      return;
    }else if (!this.state.userContract) {
        alert('请勾选注册协议！');
        return;
     }

    const param = {
      smsCode: this.state.messageCode,
      nickName: this.state.nickName,
      loginName: this.state.loginName,
      password: this.state.password
    }

    function succ(result) {
      const code = result.code;
      let msg = result.message + "\n";
      let msgs = "";
      if (code == cnst.CODE_COMM_0_SUCCESS) {
        that.setState({ path: '/fe/page/login' });
      } else if (code == cnst.CODE_COMM_INPUT_ERROR && result.body) {
        msgs = JsUtil.collectMessage(result.body, that.labels0);
      }
      alert(msg + msgs);
    }

    function err(result) {
      alert(`请求失败${result}`);
    }

    JsUtil.asyncHttpPost(this, '/mb/pub/2/create', JSON.stringify(param), succ, err);
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

  onMatch(smsCode) {
    const that = this;
    that.setState({messageCode: smsCode});
    
    setTimeout(() => {
      that.setState({
        open: false,
        timeLeft: 60,
        buttonDisabled: true
      });
    }, 500);

    var downloadTimer = setInterval(function() {
      const text = "(" + that.state.timeLeft + ")";
      that.setState({
        buttonText: text,
        timeLeft: that.state.timeLeft - 1
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

  agreeContract = () => {
	const userContract=!this.state.userContract;
    this.setState({userContract: userContract});
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
              <LgTitle>注册账户</LgTitle>
              </ContainerGrid>
              <ContainerGrid>
              <ItemGrid>
                <TextInput
                  id="nickName"
                  label="昵称"
                  value={this.state.nickName}
                  fullWidth
                  variant="outlined"
                  onChange={this.handleChange('nickName')}
                />
              </ItemGrid>
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
                      smsUri={'/mb/pub/validation/sms'}
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
                  label="验证码"
                  value={this.state.messageCode}
                  onChange={this.handleChange('messageCode')}
                  disabled={true}
                />
                <FindPass onClick={this.handleClick} disabled={this.state.buttonDisabled}>
                {this.state.buttonText}
                </FindPass>
              </ItemGrid>
            </ContainerGrid>
            <ContainerGrid>
              <ItemGrid>
                <PasswordInput
                  id="password"
                  label="密码"
                  value={this.state.password}
                  fullWidth
                  onChange={this.handleChange('password')}
                />
              </ItemGrid>
            </ContainerGrid>
            <ContainerGrid>
            <LineGrid justifyContent='start'>
              <CheckBox id="contractCheckBox" onClick={this.agreeContract}/>同意
              <NormLink id="contractLink" href='/fe/page/userContract'>《柏君用户注册协议》</NormLink>
            </LineGrid>
            </ContainerGrid>
            <br />
            <CenterGrid>
            <RegiesterButton onClick={this.handleRegister.bind(this)} fullWidth>
              注册
            </RegiesterButton>
            </CenterGrid>

            <br />
            <hr/>
            <br/>
            <RegisterGrid>
            <InlineText>我已注册过账号，</InlineText>
            <TumpToLogin component={Link} to="/fe/page/login">立即登录</TumpToLogin>
            </RegisterGrid>
          </CenterFormPaper>
        </ImagePaper>
      </LogoHeadLayout>
    );
  }
}

export default Register;
