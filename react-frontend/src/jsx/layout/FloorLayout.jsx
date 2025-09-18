import React, {lazy} from 'react';
import PropTypes from 'prop-types';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import CarouselLayout from 'jsx/layout/CarouselLayout';
import ContentGrid from 'jsx/control/grid/ContentGrid';
import FloorDisplay from 'jsx/component/FloorDisplay';
import UiLoad from 'jsx/common/UiLoad';
import UiLoadingGrid from 'jsx/control/grid/UiLoadingGrid';

// const FloorDisplay0 = lazy(() => import('jsx/component/FloorDisplay'));
// const FloorDisplay = () => (
//   <UiLoad uiShow={UiLoadingGrid}>
//     <FloorDisplay0 />
//   </UiLoad>
// );

class FloorLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      floorsInfo: []
    }
  }
  
  componentDidUpdate(preProps, preState) {
	this.searchFloorInfo(preProps);
  }
  
  searchFloorInfo = (preProps) => {
	    let operatorId = this.props.currOperatorId;
	    const mallType = this.props.currMallType;
	    if (preProps.currOperatorId==operatorId) {
	        return; 
	    }
	    
    if (!operatorId) {
      return ; //operatorId=cnst.ID_NO;
    }
    
    let supplierId = this.props.supplierId;
    if (!supplierId) {
      supplierId=operatorId;
    }

    console.log("FloorLayout floor search operatorId = " + operatorId);
    console.log("FloorLayout floor search mallType = " + mallType);
    
    const param = JSON.stringify({operatorId, supplierId, mallType});

    const uri = '/ml/pub/floor/search';

    const succ = (result) => {
      if(result.code==cnst.CODE_COMM_0_SUCCESS){
        this.setState({ floorsInfo: result.body });
      } 
    }

    const err = (result) => {
    }

    JsUtil.asyncHttpPost(this, uri, param, succ, err);
  }

  render() {
    const { children } = this.props;

    return (
      <CarouselLayout  currOperatorId={this.props.currOperatorId} currMallType={this.props.currMallType} currRegionName={this.props.currRegionName}>
        <FloorDisplay data={this.state.floorsInfo} />
        <br />
        <ContentGrid>{children}</ContentGrid>
      </CarouselLayout>
    );
  }
}

FloorLayout.propTypes = {
  children: PropTypes.object.isRequired
}

export default FloorLayout;
