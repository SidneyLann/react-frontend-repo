import React, { lazy } from 'react';
import JsUtil from 'jsx/common/JsUtil';
import DetailGridLeft from 'jsx/control/grid/detailgrid/DetailGridLeft';
import DetailGridSmall from 'jsx/control/grid/detailgrid/DetailGridSmall';
import DetailGrid from 'jsx/control/grid/detailgrid/DetailGrid';
import MyImageList from 'jsx/control/grid/detailgrid/MyImageList';
import ImageItem from 'jsx/control/grid/detailgrid/ImageItem';
import 'js/ZoomImage.js';
import Left from 'jsx/control/text/detail/Left';
import Right from 'jsx/control/text/detail/Right';
import UiLoad from 'jsx/common/UiLoad';
import UiLoadingGrid from 'jsx/control/grid/UiLoadingGrid';

// const jq = lazy(() => import('jquery'));
// const $ = () => (
//   <UiLoad uiShow={UiLoadingGrid}>
//       {jq}
//   </UiLoad>
// );

import $ from 'jquery';

class SlidingImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,// this.getDefaultSelected(props),
      bigImageUri: this.props.bigImageUri
    }
  }

  componentDidMount() {
    $('#show').zoomImage();
  }
  componentDidUpdate() {
    if (this.state.selectedIndex) {
      $('#show').zoomImage();
    }
  }
  // componentWillUpdate(){
  //     if(this.state.selectedIndex)
  // }

  onButtonClick(value) {
    const count = this.props.bigImageUri.length;

    if (this.state.selectedIndex + value >= count) {
      this.setState({ selectedIndex: 0 });
    } else if (this.state.selectedIndex + value <= 0) {
      this.setState({ selectedIndex: count });
    } else {
      this.setState({ selectedIndex: this.state.selectedIndex + value });
    }
    $('#show').zoomImage();
  }

  render() {
    //if(!this.props.bigImageUri) return null;
    $('#show').zoomImage();
    const commImages = this.props.bigImageUri;
    return (
      <DetailGridLeft>
        <DetailGridSmall id="show" href={JsUtil.IMAGE_PREFIX + commImages[this.state.selectedIndex]}>
          <img
            src={JsUtil.IMAGE_PREFIX + commImages[this.state.selectedIndex]}
            id="show-img"
            alt=""
          />
        </DetailGridSmall>
        <DetailGrid>
        <MyImageList cols={1}>
        {commImages.map((item,index) => (
          <ImageItem key={item}>
            {this.state.selectedIndex==index?
            <img src={JsUtil.IMAGE_PREFIX + item} 
            style={{borderStyle: 'ridge'}} />
            :
            <img src={JsUtil.IMAGE_PREFIX + item} 
            onMouseOver={e=> this.setState({selectedIndex:index})} />
            }
          </ImageItem>
        ))}
      </MyImageList>
          <Left
            type="submit"
            onClick={() => this.onButtonClick(-1, this)}
          >
            {' '}
            &lt;{' '}
          </Left>
          <Right
            type="submit"
            onClick={() => this.onButtonClick(1, this)}
          >
            {' '}
            &gt;{' '}
          </Right>
        </DetailGrid>
      </DetailGridLeft>
    );
  }
}

export default SlidingImages;