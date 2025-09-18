import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import SearchHeadLayout from 'jsx/layout/SearchHeadLayout';
import ContentGrid from 'jsx/control/grid/ContentGrid';
import PaddingGrid2 from 'jsx/control/grid/PaddingGrid2';
import TopHomeText from 'jsx/control/text/TopHomeText';
import CategoryList from 'jsx/component/CategoryList';
import AutoScrollingImage from 'jsx/component/AutoScrollingImage';
import ShopScrollingImage from 'jsx/component/ShopScrollingImage';
import UserPanel from 'jsx/component/UserPanel';

class ShopCarouselLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingImages: []
    }
  }

  componentDidMount() {
    let operatorId = JsUtil.getAppItem('currOperatorId');
    const mallType = JsUtil.getAppItem('currMallType');
    if (!operatorId) {
      operatorId=cnst.ID_NO;
    }

    const param = JSON.stringify({
      operatorId,
      supplierId: this.props.supplierId,
      mallType,
    });

    const url = '/ml/pub/carousel/search';
    console.log(`${url}: ${param}`);

    const succ = (result) => {
      if(result.code==cnst.CODE_COMM_0_SUCCESS){
        this.setState({ scrollingImages: result.body });
      } else {
        alert(result.message);
      }
    }

    const err = (result) => {
      
    }

    JsUtil.asyncHttpPost(this, url, param, succ, err);
  }

  render() {
    const { children } = this.props;

    return (
      <SearchHeadLayout>
        <PaddingGrid2 container>
              <Grid xs={12} id="imageBar">
                <ShopScrollingImage supplierId={this.props.supplierId} supplierName={this.props.supplierName} supplierLogo={this.props.supplierLogo} data={this.state.scrollingImages} />
              </Grid>
        </PaddingGrid2>
        <ContentGrid xs={12}>{children}</ContentGrid>
      </SearchHeadLayout>
    );
  }
}

ShopCarouselLayout.propTypes = {
  children: PropTypes.object.isRequired
}

export default ShopCarouselLayout;
