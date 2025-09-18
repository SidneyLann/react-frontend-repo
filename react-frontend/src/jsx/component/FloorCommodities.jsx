/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import ImageCardsWithChips from 'jsx/component/ImageCardsWithChips';
import RightsmallGrid from 'jsx/control/grid/RightsmallGrid';

class FloorCommodities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      floorData: []
    }
  }

  componentDidMount() {
    const categoryId = cnst.SHOW_TYPE_FLOOR;
    const category2Id = this.props.floorNumber;
    const pageNo = 1;
    const pageSize = cnst.COUNT_FLOOR_COMMODITY;

    const operatorId = JsUtil.getAppItem('currOperatorId');
    const mallType = JsUtil.getAppItem('currMallType');
    let supplierId = this.props.supplierId;
    if (!supplierId) {
      supplierId=operatorId;
    }

    const param = JSON.stringify({
      operatorId,
      supplierId,
      mallType,
      category: categoryId,
      category2: category2Id,
      pageNo,
      pageSize
    });

    const url = '/ml/pub/commodity/show/search';

    const succ = (result) => {
      if(result.code==cnst.CODE_COMM_0_SUCCESS){
        this.setState({ floorData: result.body });
      } else {
        alert(result.message);
      }
    }

    const err = (result) => {
      console.log(`FloorCommodities error: ${result}`);
    }

    JsUtil.asyncHttpPost(this, url, param, succ, err);
  }

  render() {
    return (
      this.state.floorData.map(commodityShow => (
        <RightsmallGrid key={commodityShow.id}>
          <ImageCardsWithChips entity={commodityShow} />
        </RightsmallGrid>
      ))
    );
  }
}

export default FloorCommodities;
