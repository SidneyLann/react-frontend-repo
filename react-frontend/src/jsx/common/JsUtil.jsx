import cnst from 'jsx/common/Constant';

const JsUtil = {}

const prod_mode = 1;
JsUtil.prod_mode = prod_mode;

const devEnv = () => {
	WEBSITE_SCHEM = 'http://';
	WEBSITE_HOST = 'd08.pc8g.com';
	API_SCHEM = 'http://';
	BE_PORT = 8443;
	API_HOST_ONLINE = 'ec2-13-229-223-170.ap-southeast-1.compute.amazonaws.com';
	API_HOST_OFFLINE = 'ec2-13-229-223-170.ap-southeast-1.compute.amazonaws.com';
	ONLINE_PORT = ':8443';
	OFFLINE_PORT = ':8443';
	IMAGE_PREFIX = '/rs/pub/media/image/src/search?path=';
}

let WEBSITE_SCHEM = 'http://';
let WEBSITE_HOST = 'ec2-13-229-223-170.ap-southeast-1.compute.amazonaws.com';
let API_SCHEM = 'http://';
let API_HOST_ONLINE = 'ec2-13-229-223-170.ap-southeast-1.compute.amazonaws.com';
let API_HOST_OFFLINE = 'ec2-13-229-223-170.ap-southeast-1.compute.amazonaws.com';
let ONLINE_PORT = ':8443';
let OFFLINE_PORT = ':8443';
let BE_PORT = 8443;
let IMAGE_PREFIX = '/rs/pub/media/image/src/search?path=';
//const IMAGE_PREFIX = '/pcng-biz-member/pcng-biz-member/rs/pub/media/image/src/search?path=';
prod_mode != 1 ? devEnv() : '';

JsUtil.WEBSITE_SCHEM = WEBSITE_SCHEM;
JsUtil.WEBSITE_HOST = WEBSITE_HOST;
JsUtil.API_SCHEM = API_SCHEM;
JsUtil.API_HOST_ONLINE = API_HOST_ONLINE;
JsUtil.API_HOST_OFFLINE = API_HOST_OFFLINE;
JsUtil.OFFLINE_PORT = OFFLINE_PORT;
JsUtil.BE_PORT = BE_PORT;
IMAGE_PREFIX = JsUtil.API_SCHEM + JsUtil.API_HOST_OFFLINE + OFFLINE_PORT + IMAGE_PREFIX;
JsUtil.IMAGE_PREFIX = IMAGE_PREFIX;

const getUri = uri => {
	const websit = JsUtil.API_SCHEM + JsUtil.API_HOST_ONLINE + ONLINE_PORT;

	if (uri.startsWith("/rs/") || uri.startsWith("/id/") || uri.startsWith("/mkt/") || uri.startsWith("/sec/login/offline")) {
		return JsUtil.API_SCHEM + JsUtil.API_HOST_OFFLINE + OFFLINE_PORT + uri;
	}

	return websit + uri;
}
JsUtil.getUri = getUri;

const getDomElement = selector => {
	const element = document.querySelector(selector);
	return element;
}
JsUtil.getDomElement = getDomElement;

const getDomValue = selector => {
	const element = document.querySelector(selector);
	const tn = element.tagName.toLowerCase();
	if (tn == 'input' && element.type == 'file') return element.files[0];
	return element.value;
}
JsUtil.getDomValue = getDomValue;

const setDomValue = (selector, val) => {
	const element = document.querySelector(selector);
	const tn = element.tagName.toLowerCase();
	if (tn == 'input' && element.type == 'file') element.files[0] = val;
	else element.value = val;
}
JsUtil.setDomValue = setDomValue;

const asyncHttpPost = (
	that,
	uri,
	param,
	succ,
	err,
	contentType = "application/json"
) => {
	if (!JsUtil.checkLogin(that, uri)) return;

	const headers = {
		['Authorization']: 'Bearer ' + JsUtil.getAppItem("token")
	}
	headers['mi'] = JsUtil.getAppItem('currUserId');
	headers['oi'] = JsUtil.getAppItem('currOrgId');
	headers['ot'] = JsUtil.getAppItem('currOrgType');

	if ('multipart/form-data' != contentType)
		headers["Content-Type"] = contentType;

	let isContain = uri.includes("/sec");
	if (isContain == false) {
		headers["Access-Control-Request-Headers"] = "Authorization, Content-Type";
	}

	const params = {
		method: "post",
		credentials: "include", // include, same-origin, *omit
		mode: "cors", // no-cors, cors, *same-origin
		headers: headers,
		body: param
	}

	uri = JsUtil.getUri(uri);
	fetch(uri, params)
		.then(function(response) {
			if (!response.ok) {
				throw response;
			}
			return response.json();
		})
		.then(succ)
		.catch(err);
}
JsUtil.asyncHttpPost = asyncHttpPost;

const asyncHttpGet = (that, uri, succ, err, contentType = 'application/x-www-form-urlencoded') => {
	if (!JsUtil.checkLogin(that, uri)) return;

	const headers = {
		['Content-Type']: contentType,
		['Authorization']: 'Bearer ' + JsUtil.getAppItem("token"),
		['Access-Control-Request-Headers']: 'Authorization, Content-Type'
	}
	headers['mi'] = JsUtil.getAppItem('currUserId');
	headers['oi'] = JsUtil.getAppItem('currOrgId');
	headers['ot'] = JsUtil.getAppItem('currOrgType');

	const params = {
		method: 'post',
		credentials: 'include', // include, same-origin, *omit
		mode: 'cors', // no-cors, cors, *same-origin
		headers: headers,
		body: {}
	}

	fetch(JsUtil.getUri(uri), params)
		.then((response) => {
			if (!response.ok) {
				throw response;
			}

			const result = response.json();
			//JsUtil.checkResult(result);

			return result;
		})
		.then(succ)
		.catch(err);
}
JsUtil.asyncHttpGet = asyncHttpGet;

const asyncHttpDownload = (that,
	uri,
	param,
	fileName,
	err,
	contentType = "application/json"
) => {
	const headers = {
		['Content-Type']: contentType,
		['Authorization']: 'Bearer ' + JsUtil.getAppItem("token"),
		['Access-Control-Request-Headers']: 'Authorization, Content-Type'
	}

	const params = {
		method: "post",
		credentials: "include", // include, same-origin, *omit
		mode: "cors", // no-cors, cors, *same-origin
		headers: headers,
		body: param
	}

	fetch(JsUtil.getUri(uri), params)
		.then(function(response) {
			if (!response.ok) {
				throw response;
			}

			response.blob().then(blob => {
				let blobUri = window.URL.createObjectURL(blob);
				//不能直接创建一个<a>标签
				// let a = document.createElement('a_id');
				let a = document.getElementById('a_id');
				//无法从返回的文件流中获取文件名
				//const fileName = response.headers.get('Content-Disposition');
				//let fileName = '报表.xlsx';
				a.href = blobUri;
				a.download = fileName;
				a.click();
				window.URL.revokeObjectURL(blobUri);
			});
		}).catch(err);
}
JsUtil.asyncHttpDownload = asyncHttpDownload;

const checkLogin = (that, uri) => {
	if (!uri) {
		alert('uri is undefined')
		//JsUtil.go2Login();
		return false;
	}

	let memberId = JsUtil.getAppItem("currUserId");
	if (!memberId) {
		let isContain = uri.includes("/cart/create") || uri.includes("/cm/pub/b2b/common/search") || uri.includes("/cm/pub/b2c/common/search") || uri.includes("/od/pub/b2b/common/ord/create") || uri.includes("/od/pub/b2c/common/ord/create")
			|| uri.includes("/cm/pub/member/create") || uri.includes("/cm/pub/member/delete") || uri == "/be/mb" || uri == "/be";
		if (isContain == true) {
			console.log('uri need login')
			JsUtil.go2Login();
			return false;
		}
	}

	return true;
}
JsUtil.checkLogin = checkLogin;

const go2Login = (that, message) => {
	if (!message) message = '请先登录';
	showMsgBox(that, message);


	JsUtil.winOpen(`/fe/page/login`);
}
JsUtil.go2Login = go2Login;

const showMsgBox = (that, message) => {
	if (that) alert(message)
		//that.setState({ isAlertOpen: true, alertMsg: message })
}
JsUtil.showMsgBox = showMsgBox

const handleSuccMessage = (that, result, isPopUpon4Succ, isNotPopUpon4Fail) => {
	console.log("Util handleSuccMessage result: ", result);
	if (result.code == cnst.CODE_COMM_0_SUCCESS) {
		if (isPopUpon4Succ){ 
			showMsgBox(that, result.message);
		}
		
		return true;
	}
	
	JsUtil.handleErrMessage(that, result, isNotPopUpon4Fail);

	return false;
}
JsUtil.handleSuccMessage = handleSuccMessage

const handleErrMessage = (that, result, isNotPopUpon4Fail) => {
console.table("Util handleErrMessage result: ", result);
const resultCode=result.code||result.statusCode||result.status||-1;
const resultMsg=result.message||result.errMsg||result.statusText||'未知错误';
let message = resultCode + ' ' + resultMsg;
if (resultCode == 401||resultCode==cnst.CODE_COMM_GRANT_EXPIRED) {
		message = '操作失败:\n' + message+'，请先登录';
		JsUtil.go2Login(that, message);
		return;
} else if (resultCode == cnst.CODE_COMM_INPUT_ERROR && result.body) { 
		if (Array.isArray(result.body)) {
			message = result.message + ':\n' + JsUtil.collectMessage(result.body, that.labels0);
		} else {
			message = result.message + ':\n' + result.body;
		}
} else if (resultCode == -1 && (resultMsg == 'Failed to fetch' || resultMsg == 'request:fail ')) { 
	message = '444 网络不通，无法连接'
}	

	if (!isNotPopUpon4Fail) {
		showMsgBox(that, '操作失败:\n' + message);
	}
}
JsUtil.handleErrMessage = handleErrMessage

const winRef = (uri) => {
	window.location.href = uri;
}
JsUtil.winRef = winRef;

const winOpen = (uri, target) => {
	if (!target) target = '_self';
	window.open(`${JsUtil.WEBSITE_SCHEM}${document.domain}${uri}`, target);
}
JsUtil.winOpen = winOpen;

const go2Home = (that) => {
	JsUtil.navigate(that, '/');
}
JsUtil.go2Home = go2Home;

const setAppItem = (key, value) => {
	let val; let storedVal;

	switch (typeof value) {
		case 'number':
			val = JSON.stringify(value);
			storedVal = JSON.stringify({
				type: 'number',
				payload: val
			});
			break;
		case 'object':
			val = JSON.stringify(value);
			storedVal = JSON.stringify({
				type: 'object',
				payload: val
			});
			break;
		case 'string':
			storedVal = JSON.stringify({
				type: 'string',
				payload: value
			});
			break;
		default:
			break;
	}

	if (!key || !storedVal) return;

	try {
		localStorage.setItem(key, storedVal);
	} catch (error) {
		console.log('setAppItem: ' + error);
	}
}
JsUtil.setAppItem = setAppItem;

const getAppItem = key => {
	let returnVal;
	try {
		const value = localStorage.getItem(key);
		if (!value) {
			return value;
		}

		const valObj = JSON.parse(value);
		switch (valObj.type) {
			case 'number':
				returnVal = Number(valObj.payload);
				break;
			case 'string':
				returnVal = valObj.payload;
				break;
			case 'object':
				returnVal = JSON.parse(valObj.payload);
			default:
				break;
		}

		return returnVal;
	} catch (error) {
		console.log('getAppItem: ' + error);
		return undefined;
	}
}
JsUtil.getAppItem = getAppItem;

const setSessItem = (key, value) => {
	// implement storage here
	let val; let
		storedVal;
	switch (typeof value) {
		case 'number':
			val = JSON.stringify(value);
			storedVal = JSON.stringify({
				type: 'number',
				payload: val
			});
			break;
		case 'object':
			val = JSON.stringify(value);
			storedVal = JSON.stringify({
				type: 'object',
				payload: val
			});
			break;
		case 'string':
			storedVal = JSON.stringify({
				type: 'string',
				payload: value
			});
			break;
		default:
			break;
	}

	try {
		sessionStorage.setItem(key, storedVal);
		return true;
	} catch (error) {
		// Error saving data
		console.log(error);
		return false;
	}
}
JsUtil.setSessItem = setSessItem;

const getSessItem = key => {
	let returnVal;
	try {
		const value = sessionStorage.getItem(key);
		if (value !== null) {
			const valObj = JSON.parse(value);
			switch (valObj.type) {
				case 'number':
					returnVal = Number(valObj.payload);
					break;
				case 'string':
					returnVal = valObj.payload;
					break;
				case 'object':
					returnVal = JSON.parse(valObj.payload);
				default:
					break;
			}
			return returnVal;
		}
		return null;
	} catch (error) {
		console.log(error);
		return null;
	}
}
JsUtil.getSessItem = getSessItem;

const init = (uri, name) => {
	let validFunc = JsUtil.getAppItem(`fields_${name}`);
	// if(validFunc)return;

	function succ(result) {
		const { code } = result;
		if (code == cnst.CODE_COMM_0_SUCCESS) {
			validFunc = result.body.fieldJs;
			JsUtil.setAppItem(`fields_${name}`, validFunc);
			validFunc = result.body.formJs;
			JsUtil.setAppItem(`form_${name}`, validFunc);
		}
	}

	function err(result) {
		alert(result);
	}

	JsUtil.asyncHttpGet(this, uri, succ, err);
}
JsUtil.init = init;

const validateFields = name => {
	const validFunc = JsUtil.getAppItem(`fields_${name}`);
	return new Function('validator', validFunc);
}
JsUtil.validateFields = validateFields;

const validateForm = name => {
	const validFunc = JsUtil.getAppItem(`form_${name}`);

	return new Function('validator', 'JsUtil', validFunc);
}
JsUtil.validateForm = validateForm;

const genFileName = (name = "") => {
	const reg = /\.\w+$/;
	const type = reg.exec(name);
	const tail = String(type ? type[0] : "");
	const nextName = name.replace(tail, "");

	return (
		'/' + nextName +
		"_" +
		new Date().getTime() +
		"_" +
		Math.round(Math.random() * 10000) +
		tail
	);
}
JsUtil.genFileName = genFileName;

const navigate = (that, uri, params) => {
	const navigate = that.props ? that.props.navigate : that.navigate;
	if (params)
		navigate(uri, { state: params });
	else
		navigate(uri);
}
JsUtil.navigate = navigate;

const getNavigateParams = (that, paramName) => {
	const params = that.props ? that.props.location.state : that.location.state;

	if (paramName) {
		return params[paramName]
	}

	return params;
}
JsUtil.getNavigateParams = getNavigateParams;

const getPathParams = (that, paramName) => {
	const pathParams = that.props ? that.props.pathParams : that.pathParams;

	if (paramName) {
		return pathParams[paramName]
	}

	return pathParams;
}
JsUtil.getPathParams = getPathParams;

const getUrlParams = (that, paramName) => {
	let params = {}
	console.log("Util getUrlParams: ", that.props ? that.props : that);
	const queryStr = that.props ? that.props.location.search : that.location.search;

	if (queryStr) {
		const keyValueEntries = queryStr.slice(1).split('&');
		params = keyValueEntries.reduce((pre, cur) => {
			const patterns = cur.split('=');
			pre[patterns[0]] = patterns[1];
			return pre;
		}, {});
	}

	if (paramName) {
		return params[paramName];
	}

	return params;
}
JsUtil.getUrlParams = getUrlParams;

const goToGlobalHome = () => {
	let currDomain2 = JsUtil.getAppItem('currDomain2');
	if(!currDomain2) currDomain2 = 'www';
	window.open(JsUtil.WEBSITE_SCHEM + JsUtil.WEBSITE_HOST + "?d2=" + currDomain2, "_self");
}
JsUtil.goToGlobalHome = goToGlobalHome;

const goToRegionHome = () => {
    const currDomain2=JsUtil.getAppItem('currDomain2');
	if(!currDomain2||currDomain2=='www'){
	  alert('请点击搜索栏上的“中国”，选中要浏览的地方商城。');
	  return;
	}
	
	const jumpurl = JsUtil.WEBSITE_SCHEM + currDomain2 + document.domain.substring(document.domain.indexOf("."));
	window.open(jumpurl, '_self');
}
JsUtil.goToRegionHome = goToRegionHome;

const collectMessage = (body, label) => {
	let msg = "";
	for (let key in body) {
		msg = `${msg}${label[key] || key}:${body[key]}\n`;
	}
	return msg;
}
JsUtil.collectMessage = collectMessage;

const formatter = new Intl.NumberFormat('zh-CN', {
	style: 'currency',
	currency: 'RMB',   //此处为各货币的缩写，如JPY,CAD,EUR,GBP等，都能展示对应的货币显示
	minimumFractionDigits: 2
});

const currFormat = (price) => {
	if (!price) return "0.00";

	return formatter.format(price).replace('RMB', '¥');
}
JsUtil.currFormat = currFormat;

const truncateContent = (content, length) => {
	if (content.length < length) return content;

	return content.substring(0, length) + '...';
}
JsUtil.truncateContent = truncateContent;

const mobileFormat = (phoneNo) => {
	if (!phoneNo) {
		alert('请输入手机号')
		return false;
	} else if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(phoneNo)) {
		alert('手机号码不规范，请重新输入');
		return false;
	}

	return true;
}
JsUtil.mobileFormat = mobileFormat;

const uploadSingleFile = (that, file, succ, err) => {
	if (file.size > 1024 * 1024) {
		alert('上传文件不能大于1M');
		return;
	}

	const param = new FormData();
	param.append('uploadFile', file);

	JsUtil.asyncHttpPost(that, "/rs/pub/file/upload/create", param, succ, err, 'multipart/form-data');
}
JsUtil.uploadSingleFile = uploadSingleFile;

export default JsUtil;