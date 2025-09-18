import React from 'react';
import withRouter from "jsx/component/WithRouter";
import { Grid } from '@mui/material';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import { Link } from 'react-router-dom';
import FloorGrid from 'jsx/control/grid/FloorGrid';
import FloorTopTextGrid from 'jsx/control/grid/FloorTopTextGrid';
import CommonGrid from 'jsx/control/grid/CommonGrid';
import TopHomeTitle from 'jsx/control/text/TopHomeTitle';
import FloorTopLeftGrid from 'jsx/control/grid/FloorTopLeftGrid';
import TopRightGrid from 'jsx/control/grid/TopRightGrid';
import RightBottomGrid from 'jsx/control/paper/RightBottomGrid';
import ShopFloorLeftGrid from 'jsx/control/grid/ShopFloorLeftGrid';
import ShopFloorRightGrid from 'jsx/control/grid/ShopFloorRightGrid';
import FloorRightText from 'jsx/control/text/FloorRightText';
import FloorCommodities from 'jsx/component/FloorCommodities';
import LinkMore from 'jsx/control/text/LinkMore';
import { SupplierContext } from '../common/supplier-context';

function ShopFloorDisplay(props) {
  const supplierContext = React.useContext(SupplierContext);

  const searchWord = (str) => {
    const url = `/fe/page/search_commodity_by_keyword?text=${str}`;
    JsUtil.navigate(this, url);
  }

  const clickImage = num => {
    const uri = `/fe/page/CommodityShowList?categoryId=${cnst.SHOW_TYPE_FLOOR}&category2Id=${num}`;
    
    JsUtil.navigate(props, uri, {
        supplierId: supplierContext.id,
        supplierLogo: supplierContext.logo
      });
  }

  const renderKeywords = (start, floor) => {
    const words = [];
    for (let i = 1; i <= 6; i += 1) {
      const key = start + i;
      if (floor[key]) {
        words.push(floor[key]);
      }
    }
    if (words) {
      return (
        words.map(keyword => (
          <FloorRightText
            onClick={() => searchWord(keyword)}
          >
            {keyword}&ensp;
          </FloorRightText>
        ))
      );
    }
    return null;
  }

  const prevUrl = JsUtil.IMAGE_PREFIX;
  return (
    <CommonGrid cols={1} style={{ overflowY: 'unset' }}>
      {props.data.map((floor, num) => (
        <FloorGrid key={num} style={{ backgroundColor: (num % 2 === 0) ? 'rgba(253,240,221, 1)' : '#f0f0f0' }}>
          <FloorTopTextGrid item>
            <FloorTopLeftGrid>{renderKeywords('keyword1', floor)}</FloorTopLeftGrid>
            <TopRightGrid>
              <img height={30} alt="small" src={prevUrl + floor.smallImageUri} />
              <TopHomeTitle>
                {floor.floorName}
              </TopHomeTitle>
            </TopRightGrid>
          </FloorTopTextGrid>

          <Grid>
            <ShopFloorLeftGrid>
              <FloorCommodities floorNumber={floor.floorNumber} supplierId={supplierContext.id} />
            </ShopFloorLeftGrid>
            <ShopFloorRightGrid>
              <img alt="big" style={{ width: '100%', height: '91%', cursor: 'pointer' }} src={prevUrl + floor.bigImageUri} onClick={() => clickImage(floor.floorNumber)} />
            <RightBottomGrid>
            {renderKeywords('keyword2', floor)}
            </RightBottomGrid>
            <RightBottomGrid>
            <LinkMore
              component={Link}
              to={{
                pathname: '/fe/page/CommodityShowList',
                search: `?supplierId=${supplierContext.id}&categoryId=${cnst.SHOW_TYPE_FLOOR}&category2Id=${floor.floorNumber}`
              }}
            >
              更多&gt;
            </LinkMore>
            </RightBottomGrid>
            </ShopFloorRightGrid>
          </Grid>
        </FloorGrid>
      ))}
    </CommonGrid>
  );
}

export default withRouter(ShopFloorDisplay);
