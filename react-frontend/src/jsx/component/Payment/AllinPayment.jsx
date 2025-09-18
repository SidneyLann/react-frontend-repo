import React from 'react';
import withRouter from "jsx/component/WithRouter";
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import CircularProgress from './AliPayment';
import PayGrid from 'jsx/control/grid/PayGrid';
import ErrorText from 'jsx/control/typography/ErrorText';

class AllinPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: null,
      error: null
    }
  }

  componentDidMount() {
    this.initFormData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.state.form) {
          document.forms[0].submit();
      }
  }


    initFormData() {
    const { paymentId, orderType } = this.props;
    const url = `/fn/pub/payment/allin/native/pay?paymentId=${paymentId}&orderType=${orderType}`;
    JsUtil.asyncHttpGet(this, 
      url,
      (res) => {
        console.log(res);
        if (res.code == cnst.CODE_COMM_0_SUCCESS) {

          this.setState({
            form: res.body
          });
        } else {
          this.setState({error: res});
        }
      },
      (e) => {
        console.log('出错了', e);
        this.setState({ error: e });
      });
  }


  render() {
    const { error, form } = this.state;
    if (error) {
      return (
        <PayGrid>
          <ErrorText>{error.message}</ErrorText>
        </PayGrid>
      );
    }
    if (form) {
      const keys = Object.keys(form);
      return (
        <PayGrid>
          <form action={"https://vsp.allinpay.com/apiweb/gateway/pay"} method="POST">
            {keys.map(key => (<input type={'hidden'} name={key} value={form[key]}/>))}
            <input type={"submit"} value={"跳转去支付"} style={{visibility: "hidden"}}/>
          </form>
        </PayGrid>
      );
    } else {
            return (
              <PayGrid>
                <CircularProgress/>
              </PayGrid>
            )
    }

  }
}

export default withRouter(AllinPayment);