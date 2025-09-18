/* eslint-disable no-console */
import React from 'react';
import withRouter from "jsx/component/WithRouter";
import { Carousel } from 'react-responsive-carousel';
import { Grid } from '@mui/material';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import FlexGridImg from 'jsx/control/grid/FlexGridImg';
import ShopTopGrid from 'jsx/control/grid/shop/ShopTopGrid';
import StoreInput from 'jsx/control/text/shop/StoreInput';
import ShopLeftGrid from 'jsx/control/grid/shop/ShopLeftGrid';
import ShopRightGrid from 'jsx/control/grid/shop/ShopRightGrid';
import StoreSearchText from 'jsx/control/text/shop/StoreSearchText';
import StoreName from 'jsx/control/text/shop/StoreName';
import StoreIntroduce from 'jsx/control/text/shop/StoreIntroduce';
import StoreContact from 'jsx/control/text/shop/StoreContact';
import shopService from 'image/shop_service.png';
import shopFollow from 'image/shop_follow.png';
import shopUnFollow from 'image/shop_unfollow.png';

class ShopScrollingImage extends React.Component {
  state = {
    input: '',
    supplierFollow: false,
  }

  memberId = JsUtil.getAppItem('currUserId');
 componentDidMount() {
  this.showSupplierFollow();
 }

 onItemClicked = index => {
    const uri = `/fe/page/CommodityShowList?categoryId=${cnst.SHOW_TYPE_CAROUSEL}&category2Id=${index}&supplierId=${this.props.supplierId}`;

    JsUtil.navigate(this, uri);
  }

   handleInput = event => {
    this.setState({input: event.target.value});
  }

   handleSearch = () => {
    const uri = `/fe/page/search_commodity_by_keyword?text=${this.state.input}&supplierId=${this.props.supplierId}`;
    JsUtil.winRef(uri);
  }

   handleChat = () => {
    const uri = '/fe/page/chat';

    JsUtil.navigate(this, uri, {
        orgId: this.props.supplierId,
        orgName: this.props.supplierName,
    });
  }

  
  showSupplierFollow = () => {
    const followSupplierIds = JsUtil.getAppItem("followSupplierIds");
    
    if(followSupplierIds&&followSupplierIds.indexOf(this.props.supplierId)!=-1){
      this.setState({supplierFollow: true});
    }
  }

  supplierFollow = () => {
    const uri = '/sp/pub/member/create';
    const currMallType = JsUtil.getAppItem('currMallType');
    const orgType = (currMallType==cnst.MALL_TYPE_G_B2B||currMallType==cnst.MALL_TYPE_G_B2C)? cnst.ORG_TYPE_SP_G: cnst.ORG_TYPE_SP_R;
    const param = {
      supplierId: this.props.supplierId,
      orgType: orgType,
      memberId: this.memberId,
    }
  
    const succ = result => {
      if (result.code == cnst.CODE_COMM_0_SUCCESS) {
         this.setState({supplierFollow:true});
      }else {
        alert(result.message);
      }
    }

    const err = result => {

    }

    JsUtil.asyncHttpPost(this, uri,JSON.stringify(param),succ,err);
  }

  supplierUnFollow = () => {
    const uri = '/sp/pub/member/delete';

    const param = "supplierId="+this.props.supplierId+"&memberId="+ this.memberId;
  
    const succ = result => {
      if (result.code == cnst.CODE_COMM_0_SUCCESS) {
         this.setState({supplierFollow:false});
      } else {
        alert(result.message);
      }
    }

    const err = result => {

    }

    JsUtil.asyncHttpPost(this, uri, param,succ,err, 'application/x-www-form-urlencoded');
  }

  render(){
  const prevUri = JsUtil.IMAGE_PREFIX;

  const logoUri = prevUri + this.props.supplierLogo;

  return (
    <Grid>
      <hr />
      <ShopTopGrid>
        <ShopLeftGrid>
          <img alt="ShopLogo" src={logoUri} width="60px" height="60px" />
          <StoreName>
          {this.props.supplierName}
          </StoreName>
          <br />
          <StoreIntroduce>
            <StoreContact onClick={this.handleChat}><img src={shopService} width={20} height={20} style={{marginBottom: -2}} alt="图片" />&nbsp;联系商家</StoreContact>
                  {this.state.supplierFollow==true?
                  <StoreContact onClick={this.supplierUnFollow}><img src={shopUnFollow} width={20} height={20} style={{marginBottom: -2}} alt="图片" />&nbsp;取消关注</StoreContact>
                  :
                  <StoreContact onClick={this.supplierFollow}><img src={shopFollow} width={20} height={20} style={{marginBottom: -2}} alt="图片" />&nbsp;关注店铺</StoreContact>
                  }
          </StoreIntroduce>
        </ShopLeftGrid>
        <ShopRightGrid>
          <StoreInput placeholder="商品搜索" value={this.state.input} onChange={this.handleInput} />
          <StoreSearchText onClick={this.handleSearch}>店内搜索</StoreSearchText>
        </ShopRightGrid>
      </ShopTopGrid>
      <br />
      <ShopTopGrid>
        <Carousel
          autoPlay
          swipeable
          width={1140}
          height={500}
          interval={4000}
          transitionTime={1000}
          showThumbs={false}
          showStatus={false}
          infiniteLoop
        >
          {
            this.props.data.map(element => (
              <FlexGridImg onClick={() => this.onItemClicked(element.position)}>
                <img alt="scrolling" src={prevUri + element.imageUrl} />
              </FlexGridImg>
            ))
          }
        </Carousel>
      </ShopTopGrid>

    </Grid>
  );
}
}

export default withRouter(ShopScrollingImage);
