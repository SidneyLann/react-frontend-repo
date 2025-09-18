import React from 'react';
import withRouter from "jsx/component/WithRouter"; 
import {Navigate} from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import CustomText from 'jsx/component/CustomText';
import LeftGrid from 'jsx/control/grid/LeftGrid';
import SecondaryMenu from './SecondaryMenu';
import TopGrid from 'jsx/control/grid/TopGrid';

import _ from 'lodash';

class CategoryList extends React.Component {
  state = {
    allCategories: [],
    secondCategoryId: null,
    secondEntries: [],
    mouseInSecondary: false,
    path: ''
  }

  mallType = JsUtil.getAppItem('currMallType');
  componentDidMount() {

	const succ = (result) => {
	  if (JsUtil.handleSuccMessage(this, result)) {
		const allCategories = result.body;
		const secondEntries = _.map(allCategories, entity => ({
		  mainCataid: entity.first,
		  payload: this.refinedData(entity.fourth)
		}));

		this.setState({
		  allCategories: allCategories,
		  secondEntries: secondEntries
		});
	  }
	}
	  
		const err = (result) => {
		  JsUtil.handleErrMessage(this, result);
		}

    JsUtil.asyncHttpGet(this, '/cm/pub/category/all/search', succ, err);
  }

  onClickText = event => {
    event.stopPropagation();
    const args = event.target.getAttribute('dataid');
    const succ = result => {
      console.log('result.body: '+result.body);
      const url = `/fe/page/CommodityListByCategory?category1Id=${args}`;

      // redirection here with body param passed in
      //JsUtil.setAppItem('CommodityListByCategoryData', result.body);
      // window.open('/fe/page/CommodityListByCategory?category1Id=' + args, 'blank');
      JsUtil.navigate(this, url);
    }

    const err = result => {
      console.log(`CategoryList error: ${result}`);
    }
    
  let operatorId = JsUtil.getAppItem('currOperatorId');
  if (!operatorId) {
    operatorId = cnst.ID_NO;
  }

    const param = JSON.stringify({
      operatorId: operatorId,
      status: cnst.COMMODITY_STATUS_ON_SALE,
      category1Id: event.target.getAttribute('dataid'),
    });

    let uri = '';
      if (cnst.MALL_TYPE_G_B2B == this.mallType) {
        uri = '/cm/pub/b2b/global/commodity/search';
      } else if (cnst.MALL_TYPE_G_B2C == this.mallType) {
        uri = '/cm/pub/b2c/global/commodity/search';
      } else if (cnst.MALL_TYPE_R_B2B == this.mallType) {
        uri = '/cm/pub/b2b/region/commodity/search';
      } else if (cnst.MALL_TYPE_R_B2C == this.mallType) {
        uri = '/cm/pub/b2c/region/commodity/search';
      }

    JsUtil.asyncHttpPost(this, 
      uri,
      param,
      succ,
      err
    );
  }

  onMouseHoverText = event => {
    event.stopPropagation();
    event.target.style.color = '#3F51B5';
    event.target.style.cursor = 'pointer';
  }

  onMouseOutText = event => {
    event.stopPropagation();
    event.target.style.color = 'black';
    event.target.style.cursor = 'initial';
  }

  mapFirstLevelToId = FirstLevel => _.map(FirstLevel, entity => entity.id);

  MouseEnterMain = event => {
    event.persist();
    document.getElementById('SecondaryMenu').style.display = 'block';
    console.log('enterMain');
  }

  MouseLeaveMain = event => {
    event.persist();
    event.stopPropagation();
    if (!this.state.mouseInSecondary) {
      document.getElementById('SecondaryMenu').style.display = 'none';
        this.setState({
          secondCategoryId: null
        });
    }
  }

  MouseHoverRow = event => {
    if (event.target.getAttribute('dataid')) {
      const rect = document.getElementById('catelist').getBoundingClientRect();
      document.getElementById('SecondaryMenu').style.top = `${rect.top + window.pageYOffset}px`;
      document.getElementById('SecondaryMenu').style.left = `${rect.left + rect.width}px`;
      const { height } = document.getElementById('catelist').getBoundingClientRect();
      document.getElementById('SecondaryMenu').style.height = `${height+100}px`;
      this.setState({ secondCategoryId: event.target.getAttribute('dataid')});
      document.getElementById('SecondaryMenu').style.display = 'block';
      //document.getElementById('imageBar').style.zIndex = 2;
      // console.log(this.refs.catelist);
    }
  }

  refinedData = fourth => _.map(fourth, row => ({
    SecondaryTitle: {
      id: row.first,
      name: row.second,
    },

    thirdTitles: this.refineThirdLevelTitle(row.fourth)
  }));

  refineThirdLevelTitle = fourth => _.map(fourth, row => ({
    name: row.third,
    id: row.first
  }));

  splitStrings = data => {
    const newString = data.replace(new RegExp('/', 'g'), ',/,');
    const arr = newString.split(',');
    return arr;
  }

  renderCatagoriesWithSlash = (data, id) => {
    //const arr = this.splitStrings(data);
    return (
      <CustomText
        data={data}
        onClickText={this.onClickText}
        onMouseHoverText={this.onMouseHoverText}
        onMouseOutText={this.onMouseOutText}
        dataid={id}
      />
    );
  }

  render() {
    const { allCategories } = this.state;
    const { path } = this.state;
    if (path !== '') {
      return (
        <Navigate replace
          to={{
            pathname: path
          }}
        />
      );
    }
    
    return (
      <LeftGrid
        //onMouseEnter={this.MouseEnterMain}
        onMouseLeave={this.MouseLeaveMain}
        id="catelist"
      >
            <TopGrid>全部商品分类</TopGrid>

        <List component="nav" dense>
          {allCategories.map(element => (
              <ListItem
                dataid={element.first}
                button
                onMouseOver={this.MouseHoverRow}
              >
                  {this.renderCatagoriesWithSlash(element.second, element.first)}
              </ListItem>
          ))}
        </List>
        <SecondaryMenu secondCategoryId={this.state.secondCategoryId} data={this.state.secondEntries} />
      </LeftGrid>
    );
  }
}

export default withRouter(CategoryList);
