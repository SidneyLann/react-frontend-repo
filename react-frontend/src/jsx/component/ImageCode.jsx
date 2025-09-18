import React from "react";
import JsUtil from 'jsx/common/JsUtil';
import cnst from 'jsx/common/Constant';

const icoSuccess = require("image/success.png");
const icoError = require("image/error.png");
const icoReload = require("image/Reload.png");
const icoSlider = require("image/slider.png");

const STATUS_LOADING = 0; // 还没有图片
const STATUS_READY = 1; // 图片渲染完成,可以开始滑动
const STATUS_MATCH = 2; // 图片位置匹配成功
const STATUS_ERROR = 3; // 图片位置匹配失败

const arrTips = [
  { ico: icoSuccess, text: "匹配成功" },
  { ico: icoError, text: "匹配失败" }
];

// 生成裁剪路径
function createClipPath(ctx, size = 100, styleIndex = 0) {
  const styles = [
    [0, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [0, 1, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 0, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 1, 0],
    [1, 1, 1, 1]
  ];
  const style = styles[styleIndex];

  const r = 0.1 * size;
  ctx.save();
  ctx.beginPath();
  // left
  ctx.moveTo(r, r);
  ctx.lineTo(r, 0.5 * size - r);
  ctx.arc(r, 0.5 * size, r, 1.5 * Math.PI, 0.5 * Math.PI, style[0]);
  ctx.lineTo(r, size - r);
  // bottom
  ctx.lineTo(0.5 * size - r, size - r);
  ctx.arc(0.5 * size, size - r, r, Math.PI, 0, style[1]);
  ctx.lineTo(size - r, size - r);
  // right
  ctx.lineTo(size - r, 0.5 * size + r);
  ctx.arc(size - r, 0.5 * size, r, 0.5 * Math.PI, 1.5 * Math.PI, style[2]);
  ctx.lineTo(size - r, r);
  // top
  ctx.lineTo(0.5 * size + r, r);
  ctx.arc(0.5 * size, r, r, 0, Math.PI, style[3]);
  ctx.lineTo(r, r);

  ctx.clip();
  ctx.closePath();
}

class ImageCode extends React.Component {
  static defaultProps = {
    imageUrl: "",
    imageWidth: 340,
    imageHeight: 240,
    fragmentSize: 55,
    onReload: () => {},
    onMatch: () => {},
    onError: () => {}
  }

  state = {
    isMovable: false,
    offsetX: 0, //图片截取的x
    offsetY: 0, //图片截取的y
    startX: 0, // 开始滑动的 x
    oldX: 0,
    currX: 0, // 滑块当前 x,
    status: STATUS_LOADING,
    showTips: false,
    tipsIndex: 0,
    isMatch: false
  }

  constructor(props) {
    super(props);
    this.renderImage();
  }

  componentDidUpdate(prevProps) {
    // 当父组件传入新的图片后，开始渲染
    if (!!this.props.imageUrl && prevProps.imageUrl !== this.props.imageUrl) {
      this.renderImage();
    }
  }

  renderImage = () => {
    // 初始化状态

    this.setState({ status: STATUS_LOADING });

    // 创建一个图片对象，主要用于canvas.context.drawImage()
    const objImage = new Image();

    objImage.addEventListener("load", () => {
      const { imageWidth, imageHeight, fragmentSize } = this.props;

      // 先获取两个ctx
      // const ctxShadow = this.refs.shadowCanvas.getContext("2d");
      // const ctxFragment = this.refs.fragmentCanvas.getContext("2d");

      // 让两个ctx拥有同样的裁剪路径(可滑动小块的轮廓)
      // const styleIndex = Math.floor(Math.random() * 16);
      // createClipPath(ctxShadow, fragmentSize, styleIndex);
      // createClipPath(ctxFragment, fragmentSize, styleIndex);

      // 随机生成裁剪图片的开始坐标
      const clipX = 0;
      const clipY = this.props.topLeftY;

      // 让小块绘制出被裁剪的部分
      // ctxFragment.drawImage(
      //   objImage,
      //   clipX,
      //   clipY,
      //   fragmentSize,
      //   fragmentSize,
      //   0,
      //   0,
      //   fragmentSize,
      //   fragmentSize
      // );

      // 让阴影canvas带上阴影效果
      // ctxShadow.fillStyle = "rgba(0, 0, 0, 0.5)";
      // ctxShadow.fill();

      // 恢复画布状态
      // ctxShadow.restore();
      // ctxFragment.restore();

      // 设置裁剪小块的位置
      this.setState({ offsetX: clipX, offsetY: clipY });

      // 修改状态
      this.setState({ status: STATUS_READY });
    });

    objImage.src = this.props.imageUrl;
  }

  onMoveStart = e => {
    if (this.state.status !== STATUS_READY) {
      return;
    }

    // 记录滑动开始时的绝对坐标x
    this.setState({ isMovable: true, startX: e.clientX });
  }

  onMoving = e => {
    if (this.state.status !== STATUS_READY || !this.state.isMovable) {
      return;
    }
    const distance = e.clientX - this.state.startX;
    let currX = this.state.oldX + distance;

    const minX = 0;
    const maxX = this.props.imageWidth - this.props.fragmentSize;
    currX = currX < minX ? 0 : currX > maxX ? maxX : currX;

    this.setState({ currX });
  }

  onMoveEnd = () => {
    const that = this;
    if (this.state.status !== STATUS_READY || !this.state.isMovable) {
      return;
    }
    // 将旧的固定坐标x更新
    this.setState(pre => ({ isMovable: false, oldX: pre.currX }));
    let smsCode='';
    
    new Promise((resolve, reject) => {
      const param =
        "loginName=" +
        this.props.loginName +
        "&serialNo=" +
        this.props.serialNo +
        "&topLeftX=" +
        this.state.currX;

      function succ(result) {
        const code = result.code;
        smsCode=result.body;
        let message = result.message;
        if (code == cnst.CODE_COMM_0_SUCCESS) {
          if(that.props.smsUri=='/mb/pub/find/password')
            alert('密码已发送到您手机，请及时更改密码');
          resolve(true);
        }
      }

      function err(result) {
        resolve(false);
        alert("请求失败" + result);
      }

      JsUtil.asyncHttpPost(this, 
        this.props.smsUri,
        param,
        succ,
        err,
        "application/x-www-form-urlencoded"
      );
    }).then(res => {
      if (res) {
        this.setState(
          pre => ({ status: STATUS_MATCH, currX: pre.offsetX }),
          this.onShowTips
        );
        this.props.onMatch(smsCode);
      } else {
        this.setState({ status: STATUS_ERROR }, () => {
          this.onReset();
          this.onShowTips();
        });
        this.props.onError();
      }
    });
  }

  onReset = () => {
    const timer = setTimeout(() => {
      this.setState({ oldX: 0, currX: 0, status: STATUS_READY });
      clearTimeout(timer);
    }, 1000);
  }

  onReload = () => {
    if (
      this.state.status !== STATUS_READY &&
      this.state.status !== STATUS_MATCH
    ) {
      return;
    }
    const ctxShadow = this.refs.shadowCanvas.getContext("2d");
    const ctxFragment = this.refs.fragmentCanvas.getContext("2d");

    // 清空画布
    ctxShadow.clearRect(0, 0, this.props.fragmentSize, this.props.fragmentSize);
    ctxFragment.clearRect(
      0,
      0,
      this.props.fragmentSize,
      this.props.fragmentSize
    );

    this.setState(
      {
        isMovable: false,
        offsetX: 0, //图片截取的x
        offsetY: 0, //图片截取的y
        startX: 0, // 开始滑动的 x
        oldX: 0,
        currX: 0, // 滑块当前 x,
        status: STATUS_LOADING
      },
      this.props.onReload
    );
  }

  onShowTips = () => {
    if (this.state.showTips) {
      return;
    }

    const tipsIndex = this.state.status === STATUS_MATCH ? 0 : 1;
    this.setState({ showTips: true, tipsIndex });
    const timer = setTimeout(() => {
      this.setState({ showTips: false });
      clearTimeout(timer);
    }, 2000);
  }

  render() {
    const {
      imageUrl,
      imageWidth,
      imageHeight,
      fragmentSize,
      classes
    } = this.props;
    const { offsetX, offsetY, currX, showTips, tipsIndex } = this.state;
    const tips = arrTips[tipsIndex];

    return (
      <div className={classes.imageCode} style={{ width: imageWidth }}>
        <div
          className={classes.imageContainer}
          style={{ height: imageHeight, backgroundImage: `url("${imageUrl}")` }}
        >
          <img
            className={classes.canvas}
            src={this.props.cutout}
            width={fragmentSize}
            height={fragmentSize}
            style={{ top: offsetY + "px", left: currX + "px" }}
          />
          <div
            className={
              showTips ? classes.tipsContainerActive : classes.tipsContainer
            }
          >
            <i
              className={classes.tipsIcon}
              style={{ backgroundImage: `url("${tips.ico}")` }}
            />
            <span className={classes.tipsText}>{tips.text}</span>
          </div>
        </div>

        <div className={classes.reloadContainer}>
          <div className={classes.reloadWrapper} onClick={this.onReload}>
            <i
              className={classes.reloadIcon}
              style={{ backgroundImage: `url("${icoReload}")` }}
            />
            <span className={classes.reloadTips}>刷新验证</span>
          </div>
        </div>

        <div
          className={classes.sliderWrpper}
          onMouseMove={this.onMoving}
          onMouseLeave={this.onMoveEnd}
        >
          <div className={classes.sliderBar}>按住滑块，拖动完成拼图</div>
          <div
            className={classes.sliderButton}
            onMouseDown={this.onMoveStart}
            onMouseUp={this.onMoveEnd}
            style={{
              left: currX + "px",
              backgroundImage: `url("${icoSlider}")`
            }}
          />
        </div>
      </div>
    );
  }
}

export default ImageCode;
