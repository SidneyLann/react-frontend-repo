/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import withRouter from "jsx/component/WithRouter";
import PropTypes from 'prop-types';
import CardActionArea from '@mui/material/CardActionArea';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import CommonGrid from 'jsx/control/grid/CommonGrid';
import TextContent from 'jsx/control/card/TextContent';
import ImageCard from 'jsx/control/card/ImageCard';
import FloorComment from 'jsx/control/text/FloorComment';
import CommentNum from 'jsx/control/text/CommentNum';
import FloorPrice from 'jsx/control/text/FloorPrice';
import FloorStore from 'jsx/control/text/FloorStore';
import FloorTitle from 'jsx/control/text/FloorTitle';

class ImageCardsWithChips extends React.Component {

  clickMedia = (entity) => {
    let uri = '/fe/page/commodityDetail/';
    if (entity.commodityId) {
      uri=uri + entity.commodityId;
    } else {
      uri=uri + entity.id;
    }
    
    JsUtil.navigate(this, uri);
  }

  render() {
    const { classes, entity } = this.props;
    let imageUri;
    if (entity.bigImageUri) {
      imageUri = JsUtil.IMAGE_PREFIX + JSON.parse(entity.bigImageUri)[0];
    } else if (entity.commodityPicUri) {
      imageUri = JsUtil.IMAGE_PREFIX + entity.commodityPicUri;
    } else {
      imageUri = '';
    }

    const currOrgType = JsUtil.getAppItem('currOrgType');
    let showPrice=JsUtil.currFormat(entity.price);
    if(entity.mallType==cnst.MALL_TYPE_G_B2B && currOrgType!=cnst.ORG_TYPE_OP)showPrice='登录查看';
    else if(entity.mallType==cnst.MALL_TYPE_R_B2B && currOrgType!=cnst.ORG_TYPE_SS)showPrice='登录查看';

    return (
      <CommonGrid>
        <CardActionArea onClick={() => this.clickMedia(entity)}>
          <ImageCard
            image={imageUri}
            title={entity.commodityName}
          />
        </CardActionArea>
        <TextContent learnMoreUrl={entity.id}>
          <FloorPrice component="p" learnMoreUrl={entity.id}>
            {showPrice}
          </FloorPrice>
          <FloorTitle
            learnMoreUrl={entity.id}
          >
            {entity.commodityName}
          </FloorTitle>
          <FloorComment><CommentNum> {entity.evaluteCount}&nbsp;&nbsp;</CommentNum>条评价</FloorComment>
          <FloorStore>{entity.supplierName}</FloorStore>
        </TextContent>
      </CommonGrid>
    );
  }
}

ImageCardsWithChips.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRouter(ImageCardsWithChips);
