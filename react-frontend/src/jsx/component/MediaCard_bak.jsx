import React from 'react';
import PropTypes from 'prop-types';
import withRouter from "jsx/component/WithRouter";
import CardActionArea from '@mui/material/CardActionArea';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import ImageCard from 'jsx/control/card/ImageCard';
import CommonGrid from 'jsx/control/grid/CommonGrid';
import FloorComment from 'jsx/control/text/FloorComment';
import CommentNum from 'jsx/control/text/CommentNum';
import FloorPrice from 'jsx/control/text/FloorPrice';
import FloorStore from 'jsx/control/text/FloorStore';
import FloorTitle from 'jsx/control/text/FloorTitle';
import TextContent from 'jsx/control/card/TextContent';

const clickMedia = (props, commodityId) => {
  JsUtil.winRef(`/fe/page/commodityDetail/${commodityId}`);
}

function ImageCard(props) {
  const { isCommodity, data } = props;
  let commodityPicUri = JsUtil.IMAGE_PREFIX;
  isCommodity?commodityPicUri=commodityPicUri+JSON.parse(data.bigImageUri)[0]:commodityPicUri=commodityPicUri+data.commodityPicUri;
  //isCommodity?commodityPicUri=commodityPicUri+'':commodityPicUri=commodityPicUri+data.commodityPicUri;

  const currOrgType = JsUtil.getAppItem('currOrgType');
  let showPrice=JsUtil.currFormat(data.price);
  console.log(data.mallType==cnst.MALL_TYPE_G_B2B && currOrgType!=cnst.ORG_TYPE_OP)
  if(data.mallType==cnst.MALL_TYPE_G_B2B && currOrgType!=cnst.ORG_TYPE_OP)showPrice='登录查看';
  else if(data.mallType==cnst.MALL_TYPE_R_B2B && currOrgType!=cnst.ORG_TYPE_SS)showPrice='登录查看';
  

  return (
    <CommonGrid>
      <CardActionArea onClick={() => clickMedia(props, isCommodity?data.id:data.commodityId)}>
        <ImageCard
          image={commodityPicUri}
          title={data.commodityName}
        />
      </CardActionArea>

      <TextContent>
        <FloorPrice>{showPrice}</FloorPrice>
        <FloorTitle onClick={() => clickMedia(props, isCommodity?data.id:data.commodityId)}>
          {data.commodityName}
        </FloorTitle>
        <FloorComment><CommentNum> {data.evaluteCount}&nbsp;&nbsp;</CommentNum>条评价</FloorComment>
        <FloorStore>{data.supplierName}</FloorStore>
      </TextContent>

    </CommonGrid>

  );
}

ImageCard.propTypes = {
  //classes: PropTypes.object.isRequired
}

export default withRouter(ImageCard);
