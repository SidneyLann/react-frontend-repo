import React from "react";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import List from '@mui/material/List';

const CarList0 = styled(List)({});
const container = {
  paddingRight:"0",
  paddingLeft:"0"
}
const cartHead = {
  width:"100%",
  marginTop:"10px"
}
const cartList = {
  height:"44px",
  lineHeight: "44px",
  paddingLeft: "20px",
  backgroundColor: "#f5f5f5",
  marginLeft: "0",
}
const listChk = {
  color: "#999",
  width: "10%",
  paddingRight: "0",
  paddingLeft: "0",
  display: "inline-block",
  float:"left",
  fontSize: "12px"
}

const listMsg = {
  textAlign: "center",
  color: "#999",
  width: "28%",
  paddingRight: "0",
  paddingLeft: "0",
  display: "inline-block",
  float:"left",
  fontSize: "12px"
}

const listAmount = {
  textAlign: "center",
  color: "#999",
  width: "14.8%",
  paddingRight: "0",
  paddingLeft: "0",
  display: "inline-block",
  float:"left",
  fontSize: "12px"
}

const listPrice = {
  textAlign: "center",
  color: "#999",
  width: "15%",
  paddingRight: "0",
  paddingLeft: "0",
  display: "inline-block",
  float:"left",
  fontSize: "12px"
}

const listSum = {
  textAlign: "center",
  color: "#999",
  width: "15%",
  paddingRight: "0",
  paddingLeft: "0",
  display: "inline-block",
  float:"left",
  fontSize: "12px"
}

const listOperation = {
  textAlign: "center",
  color: "#999",
  width: "15%",
  paddingRight: "0",
  paddingLeft: "0",
  display: "inline-block",
  float:"left",
  fontSize: "12px"
}

const cartTitle = {
  display: "inline-block",
  fontSize: "18px",
  color: "#ff4400",
  borderBottom: "2px solid #ff4400",
  paddingBottom: "6px",
  marginBottom: "0"
}

const cartBox = {
  border:"1px solid #e5e5e5",
  marginTop: "20px",
  marginBottom:"20px"
}

const shopInfo = {
  height: "40px",
  lineHeight: "40px",
  paddingRight: "10px",
  paddingLeft: "10px",
  backgroundColor: "#fafafa"
}

const cList = {
  paddingLeft: "10px",
  paddingTop: "20px",
  width: "100%",
  height: "130px",
  borderTop: "1px solid #e5e5e5",
  listStyleType: "none",
}

const lChk = {
  float: "left",
  height: "100%",
  width: "30px"
}

const lMsg = {
  float: "left",
  height: "100%",
  width: "36%",
}

const listA = {
  textDecoration: "none",
  color: "#333",
  textAlign: "left",
  fontSize: "12px"
}

const pType = {
  textAlign: "left",
  width: "90%",
  marginLeft: "10px",
  color: "#999",
  marginBottom: "5px",
  fontSize: "12px"
}

const lAmount = {
  float: "left",
  height: "100%",
  width:"14.8%",
  textAlign: "center"
}

const amountBox = {
  transform: "translateY(100%)",
  width: "100px",
  border: "1px solid #e5e5e5",
  backgroundColor: "#fff",
  textAlign: "center"
}

const reduce = {
  textDecoration: "none",
  borderRight: "1px solid #e5e5e5",
  display: "inline-block",
  height: "25px",
  lineHeight: "22px",
  width: "20px",
  textAlign: "center"
}

const add = {
  borderLeft: "1px solid #e5e5e5",
  display: "inline-block",
  height: "25px",
  lineHeight: "22px",
  width: "20px",
  textAlign: "center",
  color: "#444",
  textDecoration:"none"
}

const lPrice = {
  float: "left",
  textAlign: "center",
  height: "100%",
  width: "14.8%"
}

const price = {
  transform: "translateY(100%)",
  fontSize: "14px",
  color: "#666"
}

const lSum = {
  float: "left",
  height: "100%",
  width: "14.8%"
}

const sumPrice = {
  transform: "translateY(100%)",
  fontSize: "14px",
  color: "#333",
  fontWeight: "700",
  textAlign: "center"
}

const lOperation = {
  textAlign: "center",
  float: "left",
  height: "100%",
  width: "13%"
}

const btnOperation = {
  transform: "translateY(220%)"
}

const btnDel = {
  paddingRight: "10px",
  borderRight: "1px solid #666",
  textDecoration:"none",
  fontSize:"12px",
  color: "#333"
}

const btnCol = {
  display: "inline-block",
  width: "40px",
  textDecoration:"none",
  fontSize:"12px",
  color: "#333"
}

const amountBoxInput = {
  width: "50px",
  height: "25px",
  lineHeight: "25px",
  border: "1px solid transparent",
  color: "#343434",
  textAlign: "center",
  zIndex: "2"
}

const businessImg = {
  width: "16px",
  height: "17px",
  verticalAlign: "middle"
}

const listImg = {
  display: "inline-block",
  width: "80px",
  height: "80px",
  border: "1px solid #e5e5e5",
}

const listDes = {
  transform: "translateY(-95%)",
  display: "inline-block",
  float: "right",
  width: "75%"
}

function CarList(props) {
    return (
        <CarList0 classes={props.classes}  component={props.component}>
          <div  style={container}>
            <div style={cartHead}>
              <ul style={cartList}>
                <li style={listChk}>
                  <input type="checkbox" id="checkAll" className="check-all"/>
                  <label htmlFor="checkAll" className="c6">全选</label>
                </li>
                <li style={listMsg}>商品信息</li>
                <li style={listPrice}>单价</li>
                <li style={listAmount}>数量</li>
                <li style={listSum}>总价</li>
                <li style={listOperation}>操作</li>
              </ul>
            </div>

            <div style={cartBox} className="cart-box">
              <div style={shopInfo} className="shop-info">
                <div className="all-check">
                  <input type="checkbox" id="shop0" className="shop-check"/>
                  <label htmlFor="shop0">
                    <img style={businessImg} src="http://www.w3school.com.cn/i/eg_tulip.jpg"/>
                    商家：
                  </label>
                  <a href="#">eastpak旗舰店</a>
                </div>
                <div className="shop-name"></div>
              </div>
              <div className="cart-content">
                <ul style={cList}>
                  <li style={lChk} className="list-chk">
                    <input type="checkbox" id="checkBox0" className="goods-check" style={{display:" inline-block;"}}/>
                  </li>
                  <li style={lMsg} className="list-msg">
                    <div className="list-img">
                      <a href="javascript:;">
                        <img style={listImg} src="http://www.w3school.com.cn/i/eg_tulip.jpg" alt=""/>
                      </a>
                    </div>
                    <div style={listDes} className="list-des">
                      <p className="p-info">
                        <a style={listA} href="javascript:;">EASTPAK2016依斯柏新品背包 迷你时尚儿童双肩包 潮流小学生书包</a>
                      </p>
                      <p style={pType} className="p-type">型号：EK043363</p>
                      <p style={pType} className="p-color">颜色：灰色</p>
                    </div>
                  </li>
                  <li style={lPrice} className="list-price">
                    <p style={price} className="price">269.00</p>
                  </li>
                  <li style={lAmount} className="list-amount">
                    <div style={amountBox} className="amount-box">
                      <a style={reduce} href="javascript:;" className="reduce reSty">-</a>
                      <input style={amountBoxInput} type="text" value="1" className="sum"/>
                      <a style={add} href="javascript:;" className="add">+</a>
                    </div>
                  </li>
                  <li style={lSum} className="list-sum"><p style={sumPrice} className="sum-price">269.00</p></li>
                  <li style={lOperation} className="list-operation">
                    <div style={btnOperation} className="btn-operation">
                      <a style={btnDel} href="javascript:;" className="btn-del">删除</a>
                      <a style={btnCol} href="javascript:;" className="btn-col">收藏</a>
                    </div>
                  </li>
                </ul>

              </div>
            </div>
          </div>
          {props.children}
        </CarList0>
    );
}

export default CarList;

