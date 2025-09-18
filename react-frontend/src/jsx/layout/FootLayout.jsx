import React from 'react';
import PropTypes from 'prop-types';
import withRouter from "jsx/component/WithRouter";
import Level1GridC from 'jsx/control/grid/Level1GridC';
import FootGrid from 'jsx/control/grid/FootGrid';
import CenterGrid from 'jsx/control/grid/CenterGrid';
import ContentGrid from 'jsx/control/grid/ContentGrid';
import NormLink from "jsx/control/link/NormLink";
import FootTextLine from 'jsx/control/text/FootTextLine';
import JsUtil from 'jsx/common/JsUtil';
import LazyLoad from 'react-lazyload';
import beian2 from 'image/beian2.png';

class FootLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  
  goToGlobalHome = () => {
    JsUtil.goToGlobalHome();
  }

  goToRegionHome = () => {
	JsUtil.goToRegionHome();
  }

  handleToLink = path => () => {
    JsUtil.navigate(this, path);
  }

  render() {
    const { children } = this.props;

    return (
      <Level1GridC>
        <ContentGrid xs={12}>{children}</ContentGrid>
        <FootGrid>
        <br />
          <CenterGrid>
            <NormLink onClick={this.goToGlobalHome}>全国首页</NormLink>
            <FootTextLine >|</FootTextLine>
            
            <NormLink onClick={this.goToRegionHome}>地方首页</NormLink>
            <FootTextLine >|</FootTextLine>

            <NormLink onClick={this.handleToLink(`/fe/page/join/Supplier`)}>供应商入驻</NormLink>
            <FootTextLine >|</FootTextLine>

            <NormLink onClick={this.handleToLink(`/fe/page/join/opCenter`)}>运营中心入驻</NormLink>
            <FootTextLine >|</FootTextLine>

            <NormLink onClick={this.handleToLink(`/fe/page/join/serviceStation`)}>服务站入驻</NormLink>
            <FootTextLine >|</FootTextLine>
{/**
            <NormLink onClick={this.handleToLink('/fe/page/help')}>帮助中心</NormLink>
            <FootTextLine >|</FootTextLine>
*/}
            <NormLink onClick={this.handleToLink('/fe/page/about')}>关于我们</NormLink>
            <FootTextLine >|</FootTextLine>

            <NormLink onClick={this.handleToLink('/fe/page/contact')}>联系我们</NormLink>
          </CenterGrid>
          <br/>
          <CenterGrid>Copyright © 2012-2025 柏君商城 www.pc8g.com 深圳市柏君科技有限公司 版权所有</CenterGrid>
          <br/>
          <CenterGrid><a href="https://beian.miit.gov.cn" >粤ICP备18056790号</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502002068" ><img src={beian2} style={{ height: 14 }} />粤公网安备 44030502002068号</a></CenterGrid>
          <br/>
        </FootGrid>
      </Level1GridC>
    );
  }
}

FootLayout.propTypes = {
  //children: PropTypes.object.isRequired
}

export default withRouter(FootLayout);
