import React from "react";
import PropTypes from "prop-types";
import CardActionArea from '@mui/material/CardActionArea';
import JsUtil from 'jsx/common/JsUtil';
import HeadLayout from "jsx/layout/HeadLayout";
import Head2Grid from "jsx/control/grid/Head2Grid";
import ContentGrid from "jsx/control/grid/ContentGrid";
import ItemGrid from "jsx/control/grid/ItemGrid";
import LogoCard from 'jsx/control/card/LogoCard';
import LogoCard1 from 'jsx/control/card/LogoCard1';
import NormLink from "jsx/control/link/NormLink";
import Logo from "image/logo.png";

class LogoHeadLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  
  goToGlobalHome = () => {
	 JsUtil.goToGlobalHome();
  }
  
  render() {
    const { children } = this.props;

    return (
      <HeadLayout>
      <Head2Grid container>
      <ItemGrid>
      <NormLink onClick={this.goToGlobalHome} ><LogoCard image={Logo} /></NormLink>
      </ItemGrid>
      </Head2Grid>
      <br />
      <ContentGrid xs={12}>{children}</ContentGrid>
      </HeadLayout>
    );
  }
}

LogoHeadLayout.propTypes = {
  children: PropTypes.object.isRequired
}

export default LogoHeadLayout;
