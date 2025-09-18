import React from 'react';
import withRouter from "jsx/component/WithRouter";
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import RightBottomGrid from 'jsx/control/grid/RightBottomGrid';
import FixedButtonGrid from 'jsx/control/grid/FixedButtonGrid';
import RightBadge from 'jsx/control/badge/RightBadge';

class RightBottomFixedNav extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    carNum: 0
  }

  currOperatorId;
  currOperatorName
  mallType = JsUtil.getAppItem('currMallType');
  componentDidMount() {
    this.currOperatorId = JsUtil.getAppItem('currOperatorId');
    this.currOperatorName = JsUtil.getAppItem('currOperatorName');

    if (this.mallType == cnst.MALL_TYPE_G_B2C || this.mallType == cnst.MALL_TYPE_R_B2C) {
      document.getElementById("fixedbutton1").style.background = '#303f9f'
      document.getElementById("fixedbutton2").style.background = '#303f9f'
      document.getElementById("fixedbutton3").style.background = '#303f9f'
    }else if (this.mallType == cnst.MALL_TYPE_G_B2B || this.mallType == cnst.MALL_TYPE_R_B2B) {
      document.getElementById("fixedbutton1").style.background = '#158402'
      document.getElementById("fixedbutton2").style.background = '#158402'
      document.getElementById("fixedbutton3").style.background = '#158402'
    }
  }

  handleTocart = () => {
    JsUtil.navigate(this, "/fe/page/shopping_cart")
  }

  backToTop() {
    const scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 2);
  }


  handleGoToChat = () => {
    const uri = '/fe/page/chat';
    JsUtil.navigate(this, {
      pathname: uri,
      query: {
    	mallType: this.mallType,
        orgId: this.currOperatorId,
        orgName: this.currOperatorName,
      }
    });
  }

  render() {
    return (
      <RightBottomGrid>
        <FixedButtonGrid id="fixedbutton1" onClick={this.handleTocart}>
          购<br/>物<br/>车
          {/*
          <RightBadge color="primary" showZero badgeContent={this.state.carNum}>
          </RightBadge>
          */}
        </FixedButtonGrid>

        <FixedButtonGrid id="fixedbutton2" onClick={this.handleGoToChat}>
          联<br/>系<br/>客<br/>服
        </FixedButtonGrid>

        <FixedButtonGrid id="fixedbutton3" onClick={this.backToTop.bind(this)}>
          返<br/>回<br/>顶<br/>部
        </FixedButtonGrid>
      </RightBottomGrid>);
  }
}

export default withRouter(RightBottomFixedNav);
