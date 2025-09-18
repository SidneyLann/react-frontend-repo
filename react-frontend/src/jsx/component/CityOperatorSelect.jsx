import React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import OrganizationButton from 'jsx/control/button/OrganizationButton';
import TableWithoutLine from 'jsx/component/TableWithoutLine';
import CellWithoutLine from 'jsx/component/CellWithoutLine';
import OrganizationDialog from 'jsx/component/OrganizationDialog';
import TabsStyle from 'jsx/component/TabsStyle';
import OrganizationGrid from 'jsx/control/grid/OrganizationGrid';
//import 'css/stylesheet.css';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class CityOperatorSelect extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
    open: false,
    tabNo: 0,
    jumpid: '',
    currRegionName: this.props.currRegionName||JsUtil.getAppItem('currRegionName'),
    provinceOptions: [],
    cityOptions: [],
    operatorOptions: [],
    provinceLabel: '请选择',
    cityLabel: '请选择'
  }
  }
  
  group(array, subGroupLength) {
    let index = 0;
    const newArray = [];
    while (index < array.length) {
      newArray.push(array.slice(index, index += subGroupLength));
    }
    return newArray;
  }

  componentDidMount() {
    let that=this;
    
    function group(array, subGroupLength) {
      let index = 0;
      const newArray = [];
      while (index < array.length) {
        newArray.push(array.slice(index, index += subGroupLength));
      }
      return newArray;
    }
    
    const region = {
      parentId: cnst.ID_TOP_REGION
    }

	const succ = (result) => {
	  if (JsUtil.handleSuccMessage(this, result)) {
		that.setState({ provinceOptions: that.group(result.body, 4) });
	  }
	}

	  const err = (result) => {
	    JsUtil.handleErrMessage(this, result);
	  }
	  
    JsUtil.asyncHttpPost(this, '/lg/pub/region/search', JSON.stringify(region), succ, err);
  }  
  
  componentDidUpdate(preProps, preState) {
	  if(preProps.currRegionName==this.props.currRegionName) return;
	  this.setState({currRegionName: this.props.currRegionName});
  }

  handleChange = (event, value) => {
    this.setState({ tabNo: value });
    if(value==0)
    this.setState({cityLabel: '请选择'});
  }

  prepareCityOptions = (regionName, regionId, index2) => {
    this.setState({
      tabNo: 1,
      provinceLabel: regionName,
      jumpid: regionId
    });

    const that = this;
    const region = {
      parentId: regionId
    }

    function group(array, subGroupLength) {
      let index = 0;
      const newArray = [];
      while (index < array.length) {
        newArray.push(array.slice(index, index += subGroupLength));
      }
      return newArray;
    }

    function succ(result) {
    if (JsUtil.handleSuccMessage(this, result)) {
      const arr1 = [];
      const arr2 = [];
      const entites = result.body;
      
      for (let i = 0; i < entites.length; i++) {
        if (result.body[i].first == '') {
          arr1.push(entites[i]);
        } else {
          (
            arr2.push(entites[i])
          );
        }
      }
      
      that.setState({cityOptions: that.group(arr1, 4), operatorOptions: arr2});
    }}

    function err(result) {
     JsUtil.handleErrMessage(this, result)
    }

    JsUtil.asyncHttpGet(this, `/lg/pub/region/city/search?firstLevelRegionId=${regionId}`, succ, err);
  }

  selectCity = (second, first, third) => {
    this.setState({
      cityLabel: second,
      open: false
    });

    if (first != '') {
      JsUtil.goToRegionHome(first);
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { tabNo } = this.state;

    return (
      <OrganizationGrid>
        <OrganizationButton variant="outlined" onClick={this.handleClickOpen}>
          {this.state.currRegionName}
        </OrganizationButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <OrganizationDialog style={{ position: 'absolute' }}>
            <AppBar position="static">
              {tabNo === 0 ?
                <TabsStyle
                  value={tabNo}
                  onChange={this.handleChange}
                >
                  <Tab label={this.state.provinceLabel} />

                </TabsStyle> : null
              }
              {tabNo === 1?
                <TabsStyle value={tabNo} onChange={this.handleChange}>
                  <Tab label={this.state.provinceLabel} />
                  <Tab label={this.state.cityLabel} />
                </TabsStyle> : null
              }
            </AppBar>
            {tabNo === 0 && <TabContainer>
              <TableWithoutLine>
                
                  {this.state.provinceOptions.map((row, index1) => (
                    <TableRow key={index1}>
                      {
                          row.map((item, index2) => (
                            <CellWithoutLine onClick={() => this.prepareCityOptions(item.regionFullName, item.id, index2)} key={index2}>{item.regionFullName}</CellWithoutLine>
                            ))
                        }

                    </TableRow>
                    ))}
                
              </TableWithoutLine>
            </TabContainer>}
            {tabNo === 1 && <TabContainer> <TableWithoutLine>
              
                {this.state.cityOptions.map((row, index1) => (
                  <TableRow key={index1}>
                    {
                        row.map((item, index2) => (
                          <CellWithoutLine onClick={() => this.selectCity(item.second, item.first, )} key={index2}>{item.second}</CellWithoutLine>
                          ))
                      }

                  </TableRow>
                  ))}
                {
                  this.state.operatorOptions.map((row1, key1) => (
                    <TableRow key={key1}>
                      <CellWithoutLine colSpan="4" onClick={() => this.selectCity(row1.second, row1.first,row1.third)} >{row1.second}</CellWithoutLine>
                    </TableRow>
                    ))
                }
              
            </TableWithoutLine>
            </TabContainer>}
          </OrganizationDialog>
        </Dialog>
      </OrganizationGrid>
    );
  }
}

export default CityOperatorSelect;
