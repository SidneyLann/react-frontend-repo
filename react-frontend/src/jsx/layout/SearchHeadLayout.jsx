import React from 'react';
import withRouter from "jsx/component/WithRouter";
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import HeadLayout from 'jsx/layout/HeadLayout';
import Head2Grid from 'jsx/control/grid/Head2Grid';
import FlexGrid from 'jsx/control/grid/FlexGrid';
import SelectOrganizationField from 'jsx/control/textfield/SelectOrganizationField';
import ContentGrid from 'jsx/control/grid/ContentGrid';
import SearchInputBase from 'jsx/control/input/SearchInputBase';
import SearchGoods from 'jsx/control/text/SearchGoods';
import SearchGoods2 from 'jsx/control/text/SearchGoods2';
import SearchStore from 'jsx/control/text/SearchStore';
import SearchStore2 from 'jsx/control/text/SearchStore2';
import KeyWords from 'jsx/control/text/KeyWords';
import Logo from 'image/logo.png';
import LogoCard from 'jsx/control/card/LogoCard';
import NormLink from "jsx/control/link/NormLink";
import HeaderGrid3 from 'jsx/control/grid/HeaderGrid3';
import CountyOperatorSelect from 'jsx/component/CountyOperatorSelect';

class SearchHeadLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '商品搜索',
      tradeType: 0,
      focused: false
    }
  }

  componentDidUpdate(preProps, preState) {
	const mallType=this.props.currMallType;
	if(preProps.currMallType==mallType) return;
	
    if (mallType == cnst.MALL_TYPE_G_B2C||mallType == cnst.MALL_TYPE_R_B2C) {
      document.getElementById('change_color').style.border = '3px solid #3F51B5';
      this.setState({tradeType: cnst.MALL_TYPE_G_B2C});
    }else if (mallType == cnst.MALL_TYPE_G_B2B||mallType == cnst.MALL_TYPE_R_B2B) {
      document.getElementById('change_color').style.border = '3px solid #158402';
      this.setState({tradeType: cnst.MALL_TYPE_G_B2B});
    }
    
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (e) => {
    if (e.key == 'Enter' && this.state.focused) {
      this.handleCommoditySearch();
    }
  }

  handleCommoditySearch = () => {
    let keyWords = this.state.search;
    
    if(keyWords=='商品搜索')
       keyWords = '';

    const uri = `/fe/page/search_commodity_by_keyword?text=${keyWords}`;

    JsUtil.navigate(this, uri);
  }

  handleShopSearch = () => {
    let keyWords = this.state.search;
    
    if(keyWords=='商品搜索')
       keyWords = '';

    const uri = `/fe/page/shop_list?text=${keyWords}`;
    
    JsUtil.navigate(this, uri);
  }

  handleInput = event => {
    const keywords = event.target.value;

    this.setState({
      search: keywords
    });
  }

  inputOnFocus = () => {
    if(this.state.search=='商品搜索')
    this.setState({
      search: ''
    });

    this.setState({
      focused: true
    });
  }

  inputOnBlur = () => {
    if(!this.state.search)
    this.setState({
      search: '商品搜索'
    });
    this.setState({
      focused: false
    });
  }

  changeTradeType = () => event => {
    let mallType = event.target.value;
    
    const currMallType= this.props.currMallType;
    if(currMallType == cnst.MALL_TYPE_R_B2C||currMallType == cnst.MALL_TYPE_R_B2B){
    	if(mallType == cnst.MALL_TYPE_G_B2C){
    		mallType=cnst.MALL_TYPE_R_B2C
        }else if(mallType == cnst.MALL_TYPE_G_B2B){
    		mallType=cnst.MALL_TYPE_R_B2B
        }
    }

    console.log('changeTradeType currMallType=' +mallType);

    JsUtil.setAppItem('currMallType', mallType);
    window.open(JsUtil.WEBSITE_SCHEM+`${document.domain}`, '_self');
  }
  
  goToGlobalHome = () => {
	    JsUtil.goToGlobalHome();
  }
  
  render() {
    const { children } = this.props;
    const tradeType=this.state.tradeType

    return (
      <HeadLayout>
        <FlexGrid>
          <Head2Grid container>
          <NormLink onClick={this.goToGlobalHome} ><LogoCard image={Logo} /></NormLink>
            <HeaderGrid3 id="change_color">
              <FormControl >
                <CountyOperatorSelect currRegionName={this.props.currRegionName} />
              </FormControl>
              <FormControl >
                <SelectOrganizationField
                  id="tradeType"
                  value={this.state.tradeType}
                  onChange={this.changeTradeType()}
                >
                  <option value={cnst.MALL_TYPE_G_B2C}>B2C</option>
                  <option value={cnst.MALL_TYPE_G_B2B}>B2B</option>
                </SelectOrganizationField>
              </FormControl>
              <IconButton aria-label="Search">
                <SearchIcon />
              </IconButton>
              <SearchInputBase value={this.state.search} onChange={text => this.handleInput(text)} onFocus={this.inputOnFocus} onBlur={this.inputOnBlur} />
              {
                (tradeType == cnst.MALL_TYPE_G_B2C? <SearchGoods onClick={this.handleCommoditySearch}>搜商品</SearchGoods> : <SearchGoods2 onClick={this.handleCommoditySearch}>搜商品</SearchGoods2>)
              }
            </HeaderGrid3>
            <br />
            <KeyWords></KeyWords>
          </Head2Grid>
          <br />
        </FlexGrid>
        <br />
        <ContentGrid container>{children}</ContentGrid>
      </HeadLayout>
    );
  }
}

SearchHeadLayout.propTypes = {
  //children: PropTypes.object.isRequired
}

export default withRouter(SearchHeadLayout);
