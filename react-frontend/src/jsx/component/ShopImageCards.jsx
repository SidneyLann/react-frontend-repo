import React from 'react';
import withRouter from "jsx/component/WithRouter";
import CommonGrid from 'jsx/control/grid/CommonGrid';
import TextContent from 'jsx/control/card/TextContent';
import CardActionArea from '@mui/material/CardActionArea';
import ImageCard from 'jsx/control/card/ImageCard';
import ColumnGrid from 'jsx/control/grid/ColumnGrid';
import LeftLineText from 'jsx/control/text/LeftLineText';
import FloorTitle from 'jsx/control/text/FloorTitle';
import JsUtil from 'jsx/common/JsUtil';

class ShopImageCards extends React.Component {

   clickMedia = (entity) => {
    JsUtil.navigate(this, `/fe/page/shop_home/${entity.id}`, {
        supplierId: entity.id,
        supplierName: entity.orgName,
        supplierLogo: entity.orgLogo,
    });
  }

  render() {
  const entity = this.props.entity;

  const prevUrl = JsUtil.IMAGE_PREFIX;

  return (
    <CommonGrid>
      <CardActionArea onClick={() => this.clickMedia(entity)}>
        <ImageCard image={prevUrl + entity.bigImageUri} />
      </CardActionArea>
      <TextContent>
        <FloorTitle>
         {entity.orgName}
        </FloorTitle>
        <ColumnGrid>
        <LeftLineText>商品评价:&nbsp;{entity.evaluationScore}</LeftLineText>
        <LeftLineText>销售额:&nbsp;{entity.saleAmount}</LeftLineText>
        </ColumnGrid>
      </TextContent>
    </CommonGrid>
  );
}
}

export default withRouter(ShopImageCards);
