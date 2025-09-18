import React from 'react';
import withRouter from "jsx/component/WithRouter";
import { Link } from 'react-router-dom';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import FloorLayout from 'jsx/layout/FloorLayout';
import FootLayout from 'jsx/layout/FootLayout';
import RightBottomNavBar from 'jsx/component/RightBottomNavBar';

class Home extends React.Component {
	state = {
		carNum: 0,
		currOperatorId: '',
		currMallType: 0,
		currRegionName: ''
	}


	componentDidMount() {
		this.changeMall();
		this.searchCartCount();
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('Home shouldComponentUpdate');

		return true;
	}

	changeMall = () => {
		const domain = document.domain;
		console.log('domain=' + domain)
		let currDomain2 = JsUtil.getAppItem('currDomain2');
		console.log('Home 1 currDomain2=' + currDomain2);
		console.log('currRegionName=' + JsUtil.getAppItem('currRegionName'));
		//if (!domain2) {
		if (domain.indexOf('www') == 0 || domain.indexOf('d08') == 0 || domain.indexOf('d18') == 0) {
			let currMallType = JsUtil.getAppItem('currMallType');
			if (!currMallType || currMallType == cnst.MALL_TYPE_R_B2C || currMallType == cnst.MALL_TYPE_R_B2B) {
				currMallType = cnst.MALL_TYPE_G_B2C;
				JsUtil.setAppItem('currMallType', currMallType);
			}

			const urlParams = JsUtil.getUrlParams(this);
			JsUtil.setAppItem('currDomain2', urlParams.d2);
			JsUtil.setAppItem('currOperatorId', cnst.ID_HQ);
			JsUtil.setAppItem('currOperatorName', cnst.NAME_HQ);
			JsUtil.setAppItem('currRegionName', '全国');

			this.setState({ currOperatorId: cnst.ID_HQ, currMallType: currMallType, currRegionName: '全国' });
		} else {
			currDomain2 = domain.substring(0, domain.indexOf('.'));
			let currMallType = JsUtil.getAppItem('currMallType');
			console.log('Home rmall currMallType=' + currMallType);

			if (!currMallType || currMallType == cnst.MALL_TYPE_G_B2C || currMallType == cnst.MALL_TYPE_G_B2B) {
				currMallType = cnst.MALL_TYPE_R_B2C;
				JsUtil.setAppItem('currMallType', currMallType);
			}

			const isExist = JsUtil.getAppItem('currDomain2');
			if (isExist) {
				//return/update;
			}

			const succ = (result) => {
				if (result.code == cnst.CODE_COMM_0_SUCCESS) {
					const currOperatorId = result.body[0];
					const currRegionName = result.body[1];

					JsUtil.setAppItem('currOperatorId', currOperatorId);
					JsUtil.setAppItem('currOperatorName', result.body[2]);
					JsUtil.setAppItem('currRegionName', currRegionName);
					JsUtil.setAppItem('currDomain2', currDomain2);
					JsUtil.setAppItem(currDomain2, true);

					this.setState({ currOperatorId: currOperatorId, currMallType: currMallType, currRegionName: currRegionName });
				} else {
					JsUtil.setAppItem('currOperatorId', cnst.ID_NO);
					console.log('Home operator not found ' + result.code);
				}
			}

			const err = (result) => {
				console.log(result);
			}

			console.log('Home 2 currDomain2=' + currDomain2);
			JsUtil.asyncHttpGet(this, '/lg/pub/region/ids/search?domain2=' + currDomain2, succ, err);
		}
		//}else{
		//  console.log('domain2=not null '+domain2);
		//  this.setState({currOperatorId: JsUtil.getAppItem('currOperatorId'), currMallType: JsUtil.getAppItem('currMallType'), currRegionName: JsUtil.getAppItem('currRegionName')});
		// }
	}

	searchCartCount = () => {
		if (!this.memberId) return;

		const succ = result => {
			if (result.code == JsUtil.CODE_COMM_0_SUCCESS)
				this.setState({
					carNum: result.body
				});
		}

		const err = result => { }

		JsUtil.asyncHttpGet(this, `/cm/pub/cart/count/search?memberId=${memberId}`, succ, err);
	}

	render() {
		return (
			<FloorLayout currOperatorId={this.state.currOperatorId} currMallType={this.state.currMallType} currRegionName={this.state.currRegionName}>
				<RightBottomNavBar carNum={this.state.carNum} />
			</FloorLayout>
		);
	}
}

export default withRouter(Home);
