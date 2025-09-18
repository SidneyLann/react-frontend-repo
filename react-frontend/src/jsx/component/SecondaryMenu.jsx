import React from 'react';
import PropTypes from 'prop-types';
import withRouter from "jsx/component/WithRouter";
import {Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import ListTitle from 'jsx/control/text/ListTitle'
import HoverListGrid from 'jsx/control/grid/HoverListGrid';
import HoverListGrid2 from 'jsx/control/grid/HoverListGrid2';
import ThirdLevelTitle from './ThirdLevelTitle';

class SecondaryMenu extends React.Component {
  
  state = {
    index: 0
  }

  componentDidMount() {
  }

  getIndexWithId = (id) => {
    if (!id) {
      return 0;
    }
    for (let i = 0; i < this.props.data.length; i++) {
      const intId = parseInt(id);
      const intCata = parseInt(this.props.data[i].mainCataid);
      if (intId === intCata) {
        return i;
      }
    }
    return 0;
  }

  renderThirdTitle = (data) => {
    data.map((text) => (
      <ListTitle key={text} onClick={this.thirdTitleClick}>
        {text}
      </ListTitle>
    ));
  }

  renderSecondTitle = (data) => {
    if (!data) {
      console.log('no data to show second category menu');
      return;
    }

    return data.payload.map((obj) => (
        <Grid key={obj.SecondaryTitle.name}>
          <br />
          <a onClick={e => { this.secondTitleClick(obj, e) }}>
            {obj.SecondaryTitle.name}
          </a>
          <ThirdLevelTitle data={obj.thirdTitles} />
        </Grid>
    ));
  }

  secondTitleClick = (obj) => {
    const categortId = obj.SecondaryTitle.id;
    const succ = (result) => {
      const url = '/fe/page/CommodityListByCategory?category2Id=' + categortId;
      JsUtil.navigate(this, url);
    }

    const err = (result) => {
      alert(result);
    }

    let operatorId = JsUtil.getAppItem('currOperatorId');
    if (!operatorId) {
      operatorId = cnst.ID_NO;
    }

    const param = JSON.stringify({
      operatorId: operatorId,
      category2Id: categortId
    });

    JsUtil.asyncHttpPost(this, 
      '/cm/pub/b2b/global/commodity/search',
      param,
      succ,
      err
    );
  }

  render() {
    
    return (
      <Grid>
        <HoverListGrid
          id="SecondaryMenu"
        >
           {this.renderSecondTitle(this.props.data[this.getIndexWithId(this.props.secondCategoryId)])}
        </HoverListGrid>
      </Grid>
    );
  }
}

SecondaryMenu.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRouter(SecondaryMenu);
