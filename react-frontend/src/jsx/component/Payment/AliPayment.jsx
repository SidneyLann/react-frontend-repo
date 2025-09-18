import React from 'react';
import withRouter from "jsx/component/WithRouter";
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import ErrorText from 'jsx/control/typography/ErrorText';
import PayGrid from 'jsx/control/grid/PayGrid';
import CircularProgress from '@mui/material/CircularProgress';

class AliPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: '',
      error: null
    }
  }

  componentDidUpdate() {
    if (this.state.html) {
      console.log(document.forms);
      document.forms[0].submit();
    }
  }

  componentDidMount() {
    const { paymentId, orderType } = this.props;
    const url = `/fn/pub/payment/ali/native/qrcode?paymentId=${paymentId}&orderType=${orderType}`;
    JsUtil.asyncHttpGet(this, url,
      (res) => {
        console.log(res);
        if (res.code == cnst.CODE_COMM_0_SUCCESS) {
          res = this._parseHtml(res.body);
          this.setState({
            html: res
          });
        } else {
          console.log('出错了', res);
          this.setState({ error: res });
        }
      },
      (e) => {
        console.log('出错了', e);
        this.setState({ error: e });
      });
  }

  _parseHtml(html) {
    console.log(html);
    return html;
  }


  render() {
    const { html, error } = this.state;
    if (error) {
      return (
        <PayGrid>
          <ErrorText>{error.message}</ErrorText>
        </PayGrid>
      );
    }
    return (
      <PayGrid>
        {
          html ? (<div dangerouslySetInnerHTML={{ __html: html }}/>)
            : (<CircularProgress/>)
        }
      </PayGrid>
    );
  }

}

export default withRouter(AliPayment);