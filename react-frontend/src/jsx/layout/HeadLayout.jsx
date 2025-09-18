import React, { Fragment } from 'react';
import withRouter from "jsx/component/WithRouter";
import PropTypes from 'prop-types';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import JsUtil from 'jsx/common/JsUtil';
import FootLayout from 'jsx/layout/FootLayout';
import HeadGrid from 'jsx/control/grid/HeadGrid';
import ItemGrid from 'jsx/control/grid/ItemGrid';
import ContentGrid from 'jsx/control/grid/ContentGrid';
import ExtraText from 'jsx/control/typography/ExtraText';
import LinkButton from 'jsx/control/button/LinkButton';
import HeaderGrid1 from 'jsx/control/grid/HeaderGrid1';
import TopBadge from 'jsx/control/badge/TopBadge';

class HeadLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  state ={
    carNum: 0,
    anchorEl: null
  }

  componentDidMount() {
    const memberId = JsUtil.getAppItem('currUserId');
    console.log(`HeadLayout currUserId=${memberId}`);
    if (!memberId) return;

    const succ = result => {
      const { body } = result;
      console.log(`carnum:${JSON.stringify(body)}`);
      if (!isNaN(body)) {
        this.setState({
          carNum: body
        });
      }
    }

    const err = result => { }

    JsUtil.asyncHttpGet(this, `/cm/pub/cart/count/search?memberId=${memberId}`, succ, err);
  }

  handleLogin = () => {
    JsUtil.navigate(this, '/fe/page/login');
  }

  handleRegister = () => {
    JsUtil.navigate(this, '/fe/page/register');
  }
  
  goToGlobalHome = () => {
    JsUtil.goToGlobalHome();
  }
  
  goToRegionHome = () => {
	JsUtil.goToRegionHome();
  }

  handleToMemberBackEnd = () => {
    if(JsUtil.checkLogin(null, '/be/mb'))
    window.open(`//${document.domain}:${JsUtil.BE_PORT}/be/mb`, '_blank');
  }

  handleToOrgBackEnd = () => {
    if(JsUtil.checkLogin(null, 'be'))
    window.open(`//${document.domain}:${JsUtil.BE_PORT}/be`, '_blank');
  }

  handleToOrgCenter = () => {

  }

  handleToJoin = path => () => {
    this.setState({ anchorEl: null });
    JsUtil.navigate(this, `/fe/page/join/${path}`);
  }

  handleTocart = () => {
    JsUtil.navigate(this, '/fe/page/shopping_cart');
  }

  handleExit = () => {
    JsUtil.setAppItem('currUserId', null);
    JsUtil.setAppItem('currOrgType', null);
    this.handleLogin();
  }

  render() {
    const { children } = this.props;
    const userId = JsUtil.getAppItem('currUserId');

    const loginItem = (
      <Fragment>
        <ItemGrid>
          <LinkButton onClick={this.handleLogin}>Please Login</LinkButton>
        </ItemGrid>
        <ItemGrid>
          <LinkButton onClick={this.handleRegister}>Register</LinkButton>
        </ItemGrid>
      </Fragment>
    );

    const welcomeItem = (
      <Fragment>
        <ItemGrid>
          <LinkButton>{JsUtil.getAppItem('currUserName')}</LinkButton>
        </ItemGrid>
        <ItemGrid>
          <LinkButton onClick={this.handleExit}>Exit</LinkButton>
        </ItemGrid>
      </Fragment>
    );

    const actionButton = this.getActionButtonByOrgType();

    return (
      <FootLayout>
          <HeadGrid container>
            <HeaderGrid1>
              <ItemGrid>
                <ExtraText style={{marginTop: '10'}}>
              Welcome！
                </ExtraText>
              </ItemGrid>
              {userId ? welcomeItem : loginItem}
            </HeaderGrid1>

          </HeadGrid>
          <br />
          <ContentGrid xs={12}>{children}</ContentGrid>
      </FootLayout>
    );
  }
}

HeadLayout.propTypes = {
}

export default withRouter(HeadLayout);