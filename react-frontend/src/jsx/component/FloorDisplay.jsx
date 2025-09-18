/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import withRouter from "jsx/component/WithRouter";
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import FloorGrid from 'jsx/control/grid/FloorGrid';
import FloorTopTextGrid from 'jsx/control/grid/FloorTopTextGrid';
import FlexGrid from 'jsx/control/grid/FlexGrid';
import FloorLeftGrid from 'jsx/control/grid/FloorLeftGrid';
import FloorRightGrid from 'jsx/control/grid/FloorRightGrid';
import CommonGrid from 'jsx/control/grid/CommonGrid';
import TopHomeTitle from 'jsx/control/text/TopHomeTitle';
import FloorRightText from 'jsx/control/text/FloorRightText';
import LinkMore from 'jsx/control/text/LinkMore';
import FloorCommodities from 'jsx/component/FloorCommodities';
import LeftBottomGrid from 'jsx/control/paper/LeftBottomGrid';
import RightBottomGrid from 'jsx/control/paper/RightBottomGrid';
import TopRightGrid from 'jsx/control/grid/TopRightGrid';
import NormLink from "jsx/control/link/NormLink";

class FloorDisplay extends React.Component {
  searchWord = (str) => {
    const url = `/fe/page/search_commodity_by_keyword?text=${str}`;
    JsUtil.navigate(this, url);
  }

  clickImage = num => {
    const uri = `/fe/page/CommodityShowList?categoryId=${cnst.SHOW_TYPE_FLOOR}&category2Id=${num}`;
    JsUtil.navigate(this, uri);
  }

  renderKeywords = (start, floor) => {
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
          <NormLink key={keyword} onClick={() => this.searchWord(keyword)} >{keyword}&ensp;</NormLink>
        ))
      );
    }
    return null;
  }

  render() {
    const prevUrl = JsUtil.IMAGE_PREFIX;
    return (
      <CommonGrid cols={1} style={{ overflowY: 'unset' }}>
        {this.props.data.map((floor, i) => (
          <FloorGrid key={i} style={{ backgroundColor: (i % 2 === 0) ? 'rgba(253,240,221, 1)' : '#f0f0f0' }} >
            <FloorTopTextGrid item>
              <FlexGrid>
                <NormLink href={`/fe/page/CommodityShowList?categoryId=${cnst.SHOW_TYPE_FLOOR}&category2Id=${floor.floorNumber}`} >
                  <img height={30} alt="small" src={prevUrl + floor.smallImageUri} />
                </NormLink>
                <TopHomeTitle>
                  {floor.floorName}
                </TopHomeTitle>
              </FlexGrid>
              <TopRightGrid>{this.renderKeywords('keyword1', floor)}</TopRightGrid>
            </FloorTopTextGrid>

            <Grid>
              <FloorLeftGrid>
                <img alt="big" style={{ width: '100%', height: '90%' }} src={prevUrl + floor.bigImageUri} />
                <LeftBottomGrid>{this.renderKeywords('keyword2', floor)}</LeftBottomGrid>  
                <RightBottomGrid><LinkMore component={Link} to={{pathname: '/fe/page/CommodityShowList', search: `?categoryId=${cnst.SHOW_TYPE_FLOOR}&category2Id=${floor.floorNumber}`}} >更多&gt;&gt;</LinkMore></RightBottomGrid>
              </FloorLeftGrid>
              <FloorRightGrid>
                <FloorCommodities floorNumber={floor.floorNumber} />
              </FloorRightGrid>
            </Grid>
          </FloorGrid>
        ))}
      </CommonGrid>
    );
  }
}

export default withRouter(FloorDisplay);
