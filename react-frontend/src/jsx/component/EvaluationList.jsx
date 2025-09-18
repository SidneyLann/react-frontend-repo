import React from 'react';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';
import PText from 'jsx/control/typography/PText';
import EvaluationItem from 'jsx/component/EvaluationItem';
import CustomTextInput from 'jsx/control/textfield/CustomTextInput';
import withRouter from "jsx/component/WithRouter";

class EvaluationList extends React.Component {
  state = {
    evaluations: [],
    page: 0,
    rowsPerPage: cnst.PAGE_SIZE,
    totalRecords: 0,
    toPage: 0
  }

  componentDidMount() {
    this.fetchEvaluationList({});
  }

  getTotalPage = () => {
    const { rowsPerPage, totalRecords } = this.state;
    return Math.ceil(totalRecords / rowsPerPage) || 1;
  }

  fetchEvaluationList = ({ pageNo = 1, pageSize = cnst.PAGE_SIZE }) => {
    const { commodityId } = JsUtil.getPathParams(this);
    const searchParam = {
      pageNo,
      pageSize,
      commodityId
    }

    JsUtil.asyncHttpPost(this, 
      '/od/pub/evaluation/search',
      JSON.stringify(searchParam),
      res => {
        this.setState({
          evaluations: res.body || [],
          page: pageNo - 1,
          rowsPerPage: pageSize,
          totalRecords: res.totalRecords
        });
      },
      err => console.log(err)
    );
  }

  render() {
    const { page, evaluations, toPage } = this.state;
    const totalPage = this.getTotalPage();
    return (
      <div>
        {evaluations.map(evaluation => (
          <div key={evaluation.id}>
            <EvaluationItem {...evaluation} />
          </div>
        ))}
        <Toolbar>
          <PText>
            第{page + 1}/{totalPage}页
          </PText>
          <Button
            color="primary"
            onClick={() => this.fetchEvaluationList({ pageNo: 1 })}
          >
            首页
          </Button>
          <Button
            color="primary"
            disabled={page === 0}
            onClick={() => this.fetchEvaluationList({ pageNo: page })}
          >
            上一页
          </Button>
          <Button
            color="primary"
            onClick={() => this.fetchEvaluationList({ pageNo: page + 2 })}
            disabled={page + 1 === totalPage}
          >
            下一页
          </Button>
          <Button
            color="primary"
            onClick={() => this.fetchEvaluationList({ pageNo: totalPage })}
          >
            尾页
          </Button>
          <PText>转到第</PText>
          <CustomTextInput
            value={this.state.toPage}
            onChange={e => this.setState({ toPage: e.target.value })}
          />
          <PText>页</PText>
          <Button
            color="primary"
            onClick={() => this.fetchEvaluationList({ pageNo: toPage })}
          >
            GO
          </Button>
        </Toolbar>
      </div>
    );
  }
}

export default withRouter(EvaluationList);
