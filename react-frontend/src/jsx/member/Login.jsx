import React from "react";
import {Navigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import LogoHeadLayout from "jsx/layout/LogoHeadLayout";
import ContainerGrid from "jsx/control/grid/ContainerGrid";
import ItemGrid from "jsx/control/grid/ItemGrid";
import CenterFormPaper from "jsx/control/paper/CenterFormPaper";
import InlineText from "jsx/control/typography/InlineText";
import ImagePaper from "jsx/control/paper/ImagePaper";
import LoginInput from "jsx/control/textfield/LoginInput";
import LgTitle from "jsx/control/text/LgTitle";
import PasswordInput from "jsx/control/textfield/PasswordInput";
import TwoSidesGrid from "jsx/control/grid/TwoSidesGrid";
import CenterGrid from "jsx/control/grid/CenterGrid";
import RegiesterButton from "jsx/control/button/RegiesterButton";
import ForgetText from "jsx/control/text/ForgetText";
import FloatRightText from "jsx/control/text/FloatRightText";
import FloatLeftText from "jsx/control/text/FloatLeftText";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: "",
      path: ""
    }
  }

  handleLogin() {
    if (!this.state.password) {
      alert("请输入密码！");
      return;
    }

    const params = "loginName=" + this.state.phone + "&password=" + this.state.password + "&clientVersion=1.0.0";
    let formBody = [];
    formBody.push("loginName=" + this.state.phone);
    formBody.push("password=" + this.state.password);
    formBody.push("clientVersion=" + '1.0.0');
    formBody = formBody.join("&");
    
    const succ = result => {
      const code = result.code;
      const entity = result.body;
      if (code == cnst.CODE_COMM_0_SUCCESS) {
        JsUtil.setAppItem("currUserName", entity.nickName);
        JsUtil.setAppItem("currUserId", entity.id);
        JsUtil.setAppItem("currOrgId", entity.orgId);
        JsUtil.setAppItem("currOrgName", entity.orgName);
        JsUtil.setAppItem("currOrgType", entity.orgType);
        JsUtil.setAppItem('receiptMemId', entity.receiptMemId);
        JsUtil.setAppItem('receiptOrgId', entity.receiptOrgId);
        JsUtil.setAppItem("token", entity.token);
        JsUtil.setAppItem("authorities", entity.authorities);
        JsUtil.setAppItem("storeNames", entity.storeNames);

        this.loadCommodityFollow(entity.id);
        this.loadSupplierFollow(entity.id);

		const succ2 = result2 => {
		if (JsUtil.handleSuccMessage(this, result2)) {
			console.log('login offline successfully')
			JsUtil.setAppItem("token", result2.body);
		}
		}
		
		const err2 = result2 => {
			JsUtil.handleErrMessage(this, result2)
		}
		
		JsUtil.asyncHttpPost(this, '/sec/login/offline?token=Bearer ' + entity.token, null, succ2, err2, cnst.REQUEST_TYPE_WWW);

		this.setState({ path: "/" });
      } else {
        alert(result.message);
      }
    }

    const err = result => {
      alert("请求失败" + result);
    }

    JsUtil.asyncHttpPost(this, "/sec/login?"+params, null, succ, err, "application/x-www-form-urlencoded");
  }

  loadCommodityFollow = (memberId) => {
    const uri = '/cm/pub/member/search';
    const param = "memberId=" + memberId;

    const succ = result => {
      if (result.code == cnst.CODE_COMM_0_SUCCESS) {
        JsUtil.setAppItem("followSpecIds", result.body);
      } else {
        alert(result.message);
      }
    }

    const err = result => {

    }

    JsUtil.asyncHttpPost(this, uri, param, succ, err, "application/x-www-form-urlencoded");
  }

  loadSupplierFollow = (memberId) => {
    const uri = '/sp/pub/member/search';
    const param = "memberId=" + memberId;

    const succ = result => {
      if (result.code == cnst.CODE_COMM_0_SUCCESS) {
        JsUtil.setAppItem("followSupplierIds", result.body);
      } else {
        alert(result.message);
      }
    }

    const err = result => {

    }

    JsUtil.asyncHttpPost(this, uri, param, succ, err, "application/x-www-form-urlencoded");
  }

  render() {
    const { path } = this.state;
    if (path != "") {
      return <Navigate replace to={path} />;
    }

    return (
      <LogoHeadLayout>
        <ImagePaper>
          <CenterFormPaper>
            <ContainerGrid>
              <LgTitle>账户登录</LgTitle>
            </ContainerGrid>
            <br />
            <ContainerGrid>
              <ItemGrid>
                <LoginInput
                  id="phone"
                  label='手机号'
                  onChange={e => this.setState({ phone: e.target.value })}
                  fullWidth
                  required
                />
              </ItemGrid>
            </ContainerGrid>
            <ContainerGrid>
              <ItemGrid>
                <PasswordInput
                  id="password"
                  label='密码'
                  onChange={e => this.setState({ password: e.target.value })}
                  fullWidth
                  required
                />
              </ItemGrid>
            </ContainerGrid>
            <ContainerGrid>
              <ForgetText component={Link} to="/fe/page/findPassword">
                忘记密码？
          </ForgetText>
              <ForgetText component={Link} to="/fe/page/MessageLogin">
                短信登录
          </ForgetText>
            </ContainerGrid>
            <br />
            <CenterGrid>
              <RegiesterButton onClick={this.handleLogin.bind(this)}>
                登录
          </RegiesterButton>
            </CenterGrid>
            <br />
            <br /><br /><br />
            <hr />
            <TwoSidesGrid>
              <FloatLeftText component={Link} to="/fe/page/register">
                注册
          </FloatLeftText>
              <FloatRightText component={Link} to="/">
                返回商城
          </FloatRightText>
            </TwoSidesGrid>
          </CenterFormPaper>
        </ImagePaper>
      </LogoHeadLayout>
    );
  }
}

export default Login;
