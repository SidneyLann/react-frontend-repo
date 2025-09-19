import React from 'react';
import PropTypes from 'prop-types';
import withRouter from "jsx/component/WithRouter";
import Level1GridC from 'jsx/control/grid/Level1GridC';
import FootGrid from 'jsx/control/grid/FootGrid';
import CenterGrid from 'jsx/control/grid/CenterGrid';
import ContentGrid from 'jsx/control/grid/ContentGrid';
import NormLink from "jsx/control/link/NormLink";
import FootTextLine from 'jsx/control/text/FootTextLine';
import JsUtil from 'jsx/common/JsUtil';
import LazyLoad from 'react-lazyload';
import beian2 from 'image/beian2.png';

class FootLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  
  goToGlobalHome = () => {
    JsUtil.goToGlobalHome();
  }

  goToRegionHome = () => {
	JsUtil.goToRegionHome();
  }

  handleToLink = path => () => {
    JsUtil.navigate(this, path);
  }

  render() {
    const { children } = this.props;

    return (
      <Level1GridC>
        <ContentGrid xs={12}>{children}</ContentGrid>
      </Level1GridC>
    );
  }
}

FootLayout.propTypes = {
  //children: PropTypes.object.isRequired
}

export default withRouter(FootLayout);
