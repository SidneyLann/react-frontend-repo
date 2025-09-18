import React from 'react';
import withRouter from "jsx/component/WithRouter";
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import ListTitle from 'jsx/control/text/ListTitle'

class ThirdLevelTitle extends React.Component {
  mallType=JsUtil.getAppItem('currMallType');
  
  level3Click = str => {
    console.log('level3Click: ', str);
    const succ = (result) => {
      JsUtil.setAppItem('categoryDetailData', result.body);
      const url = `/fe/page/CommodityListByCategory?category3Id=${str.id}`;
      // window.open("/ml/categoryDetail?category3Id=" + str.id, "blank");
      JsUtil.navigate(this, url);
    }

    const err = result => {
      console.log('level3Click2: '+result);
    }

    let operatorId = JsUtil.getAppItem('currOperatorId');
    if (!operatorId) {
      operatorId = JsUtil.NO_ID;
    }

    const param = JSON.stringify({
      operatorId: operatorId,
      category3Id: str.id
    });

    let uri='';
    if(cnst.MALL_TYPE_G_B2B==this.mallType){
        uri=`/cm/pub/b2b/global/commodity/search`;
    }else if(cnst.MALL_TYPE_G_B2C==this.mallType){
        uri=`/cm/pub/b2c/global/commodity/search`;
    }else if(cnst.MALL_TYPE_R_B2B==this.mallType){
        uri=`/cm/pub/b2b/region/commodity/search`;
    }else if(cnst.MALL_TYPE_R_B2C==this.mallType){
        uri=`/cm/pub/b2c/region/commodity/search`;
    }

    console.log(uri+'level3Click3: '+this.mallType);
    JsUtil.asyncHttpPost(this, 
      uri,
      param,
      succ,
      err
    );
  }

  MouseHoverText = event => {
    event.target.style.cursor = 'pointer';
  }
  
  MouseOutText = () => {
    event.target.style.cursor = 'initial';
  }
  
  render() {
    return (
      <Grid>
        {this.props.data.map((str,key) => (
          <ListTitle key={key}
            onClick={e => this.level3Click(str, e)}
            onMouseOver={this.MouseHoverText}
            onMouseOut={this.MouseOutText}
            inline
          >
            {str.name}
          </ListTitle>
          ))}
      </Grid>
    );
  }
}

export default withRouter(ThirdLevelTitle);
