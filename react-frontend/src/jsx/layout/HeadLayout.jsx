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