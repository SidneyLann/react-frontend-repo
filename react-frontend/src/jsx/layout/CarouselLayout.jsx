import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import FeatureBarLayout from 'jsx/layout/FeatureBarLayout';
import ContentGrid from 'jsx/control/grid/ContentGrid';
import PaddingGrid2 from 'jsx/control/grid/PaddingGrid2';
import NormLink from "jsx/control/link/NormLink";
import TopHomeText from 'jsx/control/text/TopHomeText';
import CategoryList from 'jsx/component/CategoryList';
import AutoScrollingImage from 'jsx/component/AutoScrollingImage';
import ShopScrollingImage from 'jsx/component/ShopScrollingImage';
import UserPanel from 'jsx/component/UserPanel';
import { SupplierContext } from '../common/supplier-context';

class CarouselLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
      scrollingImages: []
    }
  }

  componentDidUpdate(preProps, preState) {
	    console.log(`CarouselLayout componentDidUpdate ...`);
	    let operatorId = this.props.currOperatorId;
	    const mallType = this.props.currMallType;
	    if (preProps.currOperatorId==operatorId) {
	        return; 
	    }
	    
    const context = this.context;
    if (this.props.isShop == null) {
      this.getFeatures();
    }

    if (!operatorId) {
      return; //operatorId=cnst.ID_NO;
    }

    let supplierId = context.id;
    console.log(`CarouselLayout SupplierId = ${supplierId}`);
    if (!supplierId) {
      supplierId = operatorId;
    }

    const param = JSON.stringify({operatorId, supplierId, mallType});
    console.log(`CarouselLayout param = ${param}`);
    
    const uri = '/ml/pub/carousel/search';

    const succ = (result) => {
      if(result.code==cnst.CODE_COMM_0_SUCCESS){
        this.setState({ scrollingImages: result.body });
      } else {
        alert(result.message);
      }
    }

    const err = (result) => {
      console.log(`CarouselLayout error: ${result}`);
    }

    JsUtil.asyncHttpPost(this, uri, param, succ, err);
  }
  
  getFeatures = () => {
    const operatorId = JsUtil.getAppItem('currOperatorId');
    const mallType = JsUtil.getAppItem('currMallType');
    const url = '/ml/pub/feature/search';

    const param = JSON.stringify({
      operatorId,
      mallType
    });

    const succ = result => {
      if (Array.isArray(result.body)) {
        this.setState({ features: result.body });
      } else {
        console.log('CarouselLayout data broken');
      }
    }

    const err = result => {
      console.log(`CarouselLayout error: ${result}`);
    }

    JsUtil.asyncHttpPost(this, url, param, succ, err);
  }

  onFeatureClicked = feature => {
    const category = feature.position;
    const url = `/fe/page/CommodityShowList?categoryId=${cnst.SHOW_TYPE_FEATURE}&category2Id=${category}`;
    //JsUtil.navigate(this, url);
    window.location.href=url;
  }
  
  render() {
    const { children } = this.props;


    return (
      <FeatureBarLayout currMallType={this.props.currMallType} currRegionName={this.props.currRegionName}>
        <PaddingGrid2 container>
          {
            window.location.href.indexOf('shopHome') == -1 ?
              <Grid item xs={2} /> : null
          }
          {
            window.location.href.indexOf('shopHome') == -1 ?
              <Grid item xs={8}>
                {this.state.features.map(feature => (
                  <NormLink key={feature}
                    onClick={() => this.onFeatureClicked(feature)}
                  >
                    {feature.featureName}
                  </NormLink>
                ))}
              </Grid> : null

          }
          {
            window.location.href.indexOf('shopHome') == -1 ?
              <Grid item xs={2} /> : null
          }

          {
            this.props.isShop ? null :
            <Grid item xs={2}>
              <CategoryList />
            </Grid>
          }
          {
            this.props.isShop ?
              <Grid item xs={12} id="imageBar">
                <ShopScrollingImage data={this.state.scrollingImages} />
              </Grid>
              :
              <Grid item xs={8} id="imageBar">
                <AutoScrollingImage data={this.state.scrollingImages} />
              </Grid>
          }
          {
            this.props.isShop ? null :
            <Grid item xs={2}>
              <UserPanel />
            </Grid>
          }
        </PaddingGrid2>
        <ContentGrid xs={12}>{children}</ContentGrid>
      </FeatureBarLayout>
    );
  }
}
CarouselLayout.contextType = SupplierContext;

CarouselLayout.propTypes = {
  //children: PropTypes.object.isRequired
}

export default CarouselLayout;
