import React from 'react';
import withRouter from "jsx/component/WithRouter";
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import PayGrid from 'jsx/control/grid/PayGrid';
import WeChatPay from 'jsx/control/text/WeChatPay';
import ErrorText from 'jsx/control/typography/ErrorText';
import QRCode from 'qrcode.react';
import CircularProgress from '@mui/material/CircularProgress';

class WechatPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeUrl: '',
      error: null
    }
    console.log(props);
  }

  componentDidMount() {
    const { paymentId, payType } = this.props;
    const url = `/fn/pub/payment/wx/native/qrcode?paymentId=${paymentId}&payType=${payType}`;
    JsUtil.asyncHttpGet(this, 
      url,
      (res) => {
        console.log(res);
        if (res.code == cnst.CODE_COMM_0_SUCCESS) {
          this.setState({
            codeUrl: res.body
          }, () => {
            // 开启轮询
            this.timerId = setInterval(() => {
              this.checkIfPayed();
            }, 5000);
          });
        } else {
          this.setState({ error: res });
        }
      },
      (e) => {
        console.log('出错了', e);
        this.setState({ error: e });
      });
  }


  checkIfPayed = () => {
    const { paymentId, payType } = this.props;
    let url = `/od/pub/b2c/payment/load/search?id=${paymentId}`;
    JsUtil.asyncHttpGet(this, url, (res) => {
      console.log(res);
      if (res.code === cnst.CODE_COMM_0_SUCCESS) {
        const order = res.body;
        if (order && order.status !== 1) {
          alert('已支付成功，回到主页');
          JsUtil.navigate(this, '/');
        }
      } else {
      }
    }, e => {});
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { codeUrl, error } = this.state;
    if (error) {
      return (
        <PayGrid>
          <ErrorText>{error.message}</ErrorText>
        </PayGrid>
      );
    }
    return (
      <PayGrid>
        <WeChatPay>使用微信扫码支付</WeChatPay>
        {codeUrl
          ? (<QRCode value={codeUrl} size={150} />)
          : (<CircularProgress />)
        }
      </PayGrid>
    );
  }
}

export default withRouter(WechatPayment);