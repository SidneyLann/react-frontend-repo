import React from 'react';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import ShopCarouselLayout from 'jsx/layout/ShopCarouselLayout';
import ContentGrid from 'jsx/control/grid/ContentGrid';
import ShopFloorDisplay from 'jsx/component/ShopFloorDisplay';

class ShopFloorLayout extends React.Component {
  state = {
    floorsInfo: [],
  }

    componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.supplierId==prevProps.supplierId) return;
    
    const operatorId = JsUtil.getAppItem('currOperatorId');
    const mallType = JsUtil.getAppItem('currMallType');

    const url = '/ml/pub/floor/search';

    const param = JSON.stringify({
      operatorId,
      supplierId: this.props.supplierId,
      mallType
    });

      const succ = result => {
        if (result.code == cnst.CODE_COMM_0_SUCCESS) {
           this.setState({floorsInfo: result.body});
        }else {
          alert(result.message);
        }
      }
  
      const err = result => {
  
      }

      console.log(param)
    JsUtil.asyncHttpPost(this, url, param, succ, err);
  }

  render() {

  return (
    <ShopCarouselLayout supplierId={this.props.supplierId} supplierName={this.props.supplierName} supplierLogo={this.props.supplierLogo}>
      <ShopFloorDisplay data={this.state.floorsInfo} />
      <br />
      <ContentGrid>
        {this.props.children}
      </ContentGrid>
    </ShopCarouselLayout>
  );
}
}

export default ShopFloorLayout;
