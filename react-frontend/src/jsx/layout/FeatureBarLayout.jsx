import React from 'react';
import PropTypes from 'prop-types';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import SearchHeadLayout from 'jsx/layout/SearchHeadLayout';
import PaddingGrid from 'jsx/control/grid/PaddingGrid';
import TopTextGrid from 'jsx/control/grid/TopTextGrid';
import TopHomeText from 'jsx/control/text/TopHomeText';
import PaddingGrid2 from 'jsx/control/grid/PaddingGrid2';
import Grid from '@mui/material/Grid';

class FeatureBarLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    features: []
  }

  componentDidMount() {
    if (this.props.isShop == null) {
     // this.getFeatures();
    }
  }

  onFeatureClicked = feature => {
    const category = feature.position;
    const url = `/fe/page/CommodityShowList?categoryId=${cnst.SHOW_TYPE_FEATURE}&category2Id=${category}`;
    JsUtil.navigate(this, url);
  }

  getFeatures = () => {
    let operatorId = JsUtil.getAppItem('currOperatorId');
    const mallType = JsUtil.getAppItem('currMallType');
    const url = '/ml/pub/feature/search';
    if (!operatorId) {
      operatorId=cnst.ID_NO;
    }

    const param = JSON.stringify({
      operatorId,
      mallType
    });

    const succ = result => {
      if(result.code==cnst.CODE_COMM_0_SUCCESS){
        this.setState({ features: result.body });
      } else {
        alert(result.message);
      }
    }

    const err = result => {
      console.log(`Feature error: ${result}`);
    }

    JsUtil.asyncHttpPost(this, url, param, succ, err);
  }

  render() {
    const { children } = this.props;

    return (
      <SearchHeadLayout currMallType={this.props.currMallType} currRegionName={this.props.currRegionName}>
        <PaddingGrid2 container>
        </PaddingGrid2>
        <PaddingGrid container>{children}</PaddingGrid>
      </SearchHeadLayout>
    );
  }
}

FeatureBarLayout.propTypes = {
  //children: PropTypes.object.isRequired
}

export default FeatureBarLayout;
