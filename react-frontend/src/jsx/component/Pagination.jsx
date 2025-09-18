import React from "react";
import Button from "@mui/material/Button";
import Toolbar from '@mui/material/Toolbar';
import Paper from "jsx/control/paper/CenterPaper";
import PText from "jsx/control/typography/PText";
import CustomTextInput from "jsx/control/textfield/CustomTextInput";

class Pagination extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 1,
      input: "",
      showGoButton: false
    }
  }

  componentDidMount() {
    this.setTotalPages(this.props.totalPages||1);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.totalPages !== this.props.totalPages) {
      this.setTotalPages(this.props.totalPages);
    }
    if (prevState.showGoButton !== this.state.showGoButton) {
      console.log(this.state.showGoButton);
    }
  }

  setTotalPages = totalPages => {
    this.setState({ totalPages: totalPages })
  }

  setPage = page => {
    this.setState({
      currentPage: page
    }, () => { this.props.onChange(page) });
    console.log(page);
  }

  clickPrev = () => {
    let page = this.state.currentPage;
    this.setPage(page - 1);
  }

  clickNext = () => {
    let page = this.state.currentPage;
    this.setPage(page + 1);
  }

  changePageNum = event => {
    let totalPages = this.state.totalPages;
    let str = event.target.value;
    let showGoButton = false;
    if (parseFloat(str).toString() !== "NaN") {
      let num = parseFloat(str);
      if (Math.round(num) === num && num > 0 && num <= totalPages) {
        showGoButton = true;
      }
    }
    
    this.setState({
      showGoButton: showGoButton,
      input: event.target.value
    });
  }

  confirmGo = () => {
    this.setPage(this.state.input);
  }

  render() {
    const currentPage = this.state.currentPage;
    const totalPages = this.state.totalPages;
    
    return (
      <Paper>
        <Toolbar>
          <PText>第{currentPage}/{totalPages}页</PText>
          <Button color="primary" disabled={(currentPage === 1) ? true : false} onClick={() => this.setPage(1)}>首页</Button>
          <Button color="primary" disabled={(currentPage === 1) ? true : false} onClick={this.clickPrev}>上一页</Button>
          <Button color="primary" disabled={(currentPage === totalPages) ? true : false} onClick={this.clickNext}>下一页</Button>
          <Button color="primary" disabled={(currentPage === totalPages) ? true : false} onClick={() => this.setPage(totalPages)}>尾页</Button>
          <PText>转到第</PText>
          <CustomTextInput onChange={this.changePageNum} value={this.state.input} width={30} />
          <PText>页</PText>
          <Button color="primary" disabled={!this.state.showGoButton} onClick={this.confirmGo}>GO</Button>
        </Toolbar>
      </Paper>
    )
  }

}

export default Pagination;