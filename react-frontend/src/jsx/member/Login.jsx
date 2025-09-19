import React from "react";
import {Navigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import HeadLayout from "jsx/layout/HeadLayout";
import ContainerGrid from "jsx/control/grid/ContainerGrid";
import ItemGrid from "jsx/control/grid/ItemGrid";
import CenterFormPaper from "jsx/control/paper/CenterFormPaper";
import InlineText from "jsx/control/typography/InlineText";
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
      loginName: "",
      password: "",
      path: ""
    }
  }

  handleLogin() {
    if (!this.state.loginName) {
      alert("Please input Login Name");
      return;
    }
	
	  if (!this.state.password) {
	    alert("Please input password");
	    return;
	  }

    const params = "loginName=" + this.state.loginName + "&password=" + this.state.password + "&clientVersion=1.0.0";
    let formBody = [];
    formBody.push("loginName=" + this.state.loginName);
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
      alert("operation fail: " + result);
    }

    JsUtil.asyncHttpPost(this, "/sec/login?"+params, null, succ, err, "application/x-www-form-urlencoded");
  }

  render() {
    const { path } = this.state;
    if (path != "") {
      return <Navigate replace to={path} />;
    }

    return (
      <HeadLayout>
          <CenterFormPaper>
            <ContainerGrid>
              <LgTitle>Login</LgTitle>
            </ContainerGrid>
            <br />
            <ContainerGrid>
              <ItemGrid>
                <LoginInput
                  id="loginName"
                  label='loginName'
                  onChange={e => this.setState({ loginName: e.target.value })}
                  fullWidth
                />
              </ItemGrid>
            </ContainerGrid>
            <ContainerGrid>
              <ItemGrid>
                <PasswordInput
                  id="password"
                  label='password'
                  onChange={e => this.setState({ password: e.target.value })}
                  fullWidth
                />
              </ItemGrid>
            </ContainerGrid>
            <br />
            <CenterGrid>
              <RegiesterButton onClick={this.handleLogin.bind(this)}>
                Login
          </RegiesterButton>
            </CenterGrid>
            <br />
            <br /><br /><br />
          </CenterFormPaper>
      </HeadLayout>
    );
  }
}

export default Login;
