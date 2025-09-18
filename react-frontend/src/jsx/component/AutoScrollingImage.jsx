import React from 'react';
import withRouter from "jsx/component/WithRouter";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Grid } from '@mui/material';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import FlexGridImg from 'jsx/control/grid/FlexGridImg';

class AutoScrollingImage extends React.Component {
  onItemClicked = index => {
    const url = `/fe/page/CommodityShowList?categoryId=${cnst.SHOW_TYPE_CAROUSEL}&category2Id=${index}`;
    JsUtil.navigate(this, url);
  }

  render() {
    const { data } = this.props;
    if (!data) {
      return null;
    }
    const prevUrl = JsUtil.IMAGE_PREFIX;
    
    return (
      <Grid>
      {(data && data.length > 0) && (
        <Carousel
          autoPlay={true}
          swipeable={true}
          interval={4000}
          transitionTime={300}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          {data.map(element => (
            <FlexGridImg key={element.position} onClick={() => this.onItemClicked(element.position)}>
              <img alt="image" src={prevUrl + element.imageUrl} />
            </FlexGridImg>
          ))}
        </Carousel>
      )}
      </Grid>
    );
  }
}

export default withRouter(AutoScrollingImage);
