import React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
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

class CountyOperatorSelect extends React.Component {
	state = {
		open: false,
		value: 0,
		jumpid: '',
		arrmatch: [],
		shownOperator: JsUtil.getAppItem('currRegionName') || '全国',
		grouparr: [],
		grouparr2: [],
		grouparr3: [],
		grouparr4: [],
		province: '请选择',
		city: '请选择',
		county: '请选择'
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
		let that = this;
		let regionName = JsUtil.getAppItem('currRegionName');
		if (!regionName) {
			let domain2 = JsUtil.getAppItem('currDomain2');
			if (domain2 && domain2 != 'www') {
				const succ = result => {
					if (JsUtil.handleSuccMessage(this, result)) {
						const currOperatorId = result.body[0].toString();
						const operatorRegion = result.body[1];

						JsUtil.setAppItem('currOperatorId', currOperatorId);
						JsUtil.setAppItem('currOperatorName', result.body[2]);
						JsUtil.setAppItem('currRegionName', operatorRegion);

						that.setState({ shownOperator: operatorRegion });
					} else {
						JsUtil.setAppItem('currOperatorId', cnst.ID_NO);
						console.log('operator not found ' + result.code);
					}
				}
				const err = (result) => {
					console.log(result);
				}

				JsUtil.asyncHttpGet(this, '/lg/pub/region/ids/search?domain2=' + domain2, succ, err);
			}
		}

		function group(array, subGroupLength) {
			let index = 0;
			const newArray = [];
			while (index < array.length) {
				newArray.push(array.slice(index, index += subGroupLength));
			}
			return newArray;
		}
		this.setState({
			labels: this.labels
		});

		const region = {
			parentId: 8
		}

		const succ = result => {
			if (JsUtil.handleSuccMessage(this, result)) {
			that.setState({ grouparr: that.group(result.body, 4) });
		}
}

		const err = (result) => {
			JsUtil.handleErrMessage(this, result)
		}
		
		JsUtil.asyncHttpPost(this, '/lg/pub/region/search', JSON.stringify(region), succ, err);
	}

	handleChange = (event, value) => {
		this.setState({ value });
	}

	selectProvince = (item, id, index2) => {
		this.setState({
			value: 1,
			province: item
		});
		const that = this;
		const region = {
			parentId: id
		}

		function group(array, subGroupLength) {
			let index = 0;
			const newArray = [];
			while (index < array.length) {
				newArray.push(array.slice(index, index += subGroupLength));
			}
			return newArray;
		}

		const succ = result => {
			if (JsUtil.handleSuccMessage(this, result)) {
			that.setState({ grouparr2: that.group(result.body, 4) });
		}
}


		const err = (result) => {
			JsUtil.handleErrMessage(this, result)
		}

		JsUtil.asyncHttpPost(this, '/lg/pub/region/search', JSON.stringify(region), succ, err);
	}

	selectCity = (item, id, index2) => {
		this.setState({
			value: 2,
			city: item,
			jumpid: id
		});

		const that = this;
		const region = {
			parentId: id
		}

		function group(array, subGroupLength) {
			let index = 0;
			const newArray = [];
			while (index < array.length) {
				newArray.push(array.slice(index, index += subGroupLength));
			}
			return newArray;
		}

		const succ = result => {
			if (JsUtil.handleSuccMessage(this, result)) {
			console.log(result.body);
			const arr1 = [];
			const arr2 = [];
			for (let i = 0; i < result.body.length; i++) {
				if (result.body[i].first == '') {
					arr1.push(result.body[i]);
				} else {
					(
						arr2.push(result.body[i])
					);
				}
			}
			that.setState({ grouparr3: that.group(arr1, 4) });
			that.setState({ grouparr4: arr2 });
		}
}


		const err = (result) => {
			JsUtil.handleErrMessage(this, result)
		}

		JsUtil.asyncHttpGet(this, `/lg/pub/region/county/search?secondLevelRegionId=${id}`, succ, err);
	}

	selectCounty = (second, first, third) => {
		this.setState({
			county: second,
			open: false
		});
		console.log(second, first, third);
		second = second.substring(0, second.indexOf('('));
		console.log(second, first, third);
		if (first != '') {
			JsUtil.goToRegionHome(first, second, third);
		}
	}

	handleClickOpen = () => {
		this.setState({ open: true });
	}

	handleClose = () => {
		this.setState({ open: false });
	}


	render() {
		const { value } = this.state;

		return (
			<OrganizationGrid>
				<OrganizationButton variant="outlined" onClick={this.handleClickOpen}>
					{this.state.shownOperator}
				</OrganizationButton>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<OrganizationDialog style={{ position: 'absolute' }}>
						<AppBar position="static">
							{value === 0 ?
								<TabsStyle
									value={value}
									onChange={this.handleChange}
								>
									<Tab label={this.state.province} />

								</TabsStyle> : null
							}
							{value === 1 ?
								<TabsStyle value={value} onChange={this.handleChange}>
									<Tab label={this.state.province} />
									<Tab label={this.state.city} />

								</TabsStyle> : null
							}
							{value === 2 ?
								<TabsStyle value={value} onChange={this.handleChange}>
									<Tab label={this.state.province} />
									<Tab label={this.state.city} />
									<Tab label={this.state.county} />
								</TabsStyle> : null
							}
						</AppBar>
						{value === 0 && <TabContainer>
							<TableWithoutLine>

								{this.state.grouparr.map((row, index1) => (
									<TableRow key={index1}>
										{
											row.map((item, index2) => (
												<CellWithoutLine onClick={() => this.selectProvince(item.regionFullName, item.id, index2)} key={index2}>{item.regionFullName}</CellWithoutLine>
											))
										}

									</TableRow>
								))}

							</TableWithoutLine>
						</TabContainer>}
						{value === 1 && <TabContainer>
							<TableWithoutLine>

								{this.state.grouparr2.map((row, index1) => (
									<TableRow key={index1}>
										{
											row.map((item, index2) => (
												<CellWithoutLine onClick={() => this.selectCity(item.regionFullName, item.id, index2)} key={index2}>{item.regionFullName}</CellWithoutLine>
											))
										}

									</TableRow>
								))}

							</TableWithoutLine>
						</TabContainer>}
						{value === 2 && <TabContainer> <TableWithoutLine>

							{this.state.grouparr3.map((row, index1) => (
								<TableRow key={index1}>
									{
										row.map((item, index2) => (
											<CellWithoutLine onClick={() => this.selectCounty(item.second, item.first,)} key={index2}>{item.second}</CellWithoutLine>
										))
									}

								</TableRow>
							))}
							{
								this.state.grouparr4.map((row1, key1) => (
									<TableRow key={key1}>
										<CellWithoutLine colSpan="4" onClick={() => this.selectCounty(row1.second, row1.first, row1.third)} >{row1.second}</CellWithoutLine>
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

export default CountyOperatorSelect;
