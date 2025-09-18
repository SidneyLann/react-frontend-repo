// inspired by react-component/Rate
import React from 'react';

const Star = ({
  index,
  disabled,
  onClick = () => null,
  onHover = () => null,
  value
}) => (
  <li
    onClick={e => (disabled ? null : onClick(e, index))}
    onMouseMove={e => (disabled ? null : onHover(e, index))}
    style={{
      position: 'relative',
      display: 'inline-block',
      margin: 0,
      marginRight: 8,
      padding: 0,
      cursor: 'pointer',
      transition: 'all .3s',
      color: index + 1 <= value ? 'rgb(178, 25, 27)' : '#e8e8e8'
    }}
  >
    <i aria-label="图标: star" style={{ textAlign: 'center' }}>
      <svg
        viewBox="64 64 896 896"
        data-icon="star"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
      </svg>
    </i>
  </li>
);

export default class Rate extends React.Component {
  constructor(props) {
    super(props);
    let { value } = props;
    if (value === undefined) {
      value = props.defaultValue;
    }

    this.state = {
      value,
      focused: false,
      cleanedValue: null
    }
  }

  onHover = (event, index) => {
    const { onHoverChange = () => null } = this.props;
    const hoverValue = Rate.getStarValue(index);
    const { cleanedValue } = this.state;
    if (hoverValue !== cleanedValue) {
      this.setState({
        hoverValue,
        cleanedValue: null
      });
    }
    onHoverChange(hoverValue);
  }

  onMouseLeave = () => {
    const { onHoverChange = () => null } = this.props;
    this.setState({
      hoverValue: undefined,
      cleanedValue: null
    });
    onHoverChange(undefined);
  }

  onClick = (event, index) => {
    const newValue = Rate.getStarValue(index);
    const isReset = false;
    this.onMouseLeave(true);
    this.changeValue(isReset ? 0 : newValue);
    this.setState({
      cleanedValue: isReset ? newValue : null
    });
  }

  static getDerivedStateFromProps(nextProps, state) {
    if ('value' in nextProps && nextProps.value !== undefined) {
      return {
        ...state,
        value: nextProps.value
      }
    }
    return state;
  }

  static getStarValue(index) {
    return index + 1;
  }

  changeValue(value) {
    const { onChange = () => null } = this.props;
    if (!('value' in this.props)) {
      this.setState({
        value
      });
    }
    onChange(value);
  }

  render() {
    const { count = 5, style, disabled, tabIndex } = this.props;
    const { value, hoverValue } = this.state;
    const stars = [];
    for (let index = 0; index < count; index++) {
      stars.push(
        <Star
          index={index}
          disabled={disabled}
          value={hoverValue === undefined ? value : hoverValue}
          onClick={this.onClick}
          onHover={this.onHover}
          key={index}
        />
      );
    }
    return (
      <ul
        style={{
          ...style,
          fontFeatureSettings: 'tnum',
          display: 'inline-block',
          margin: 0,
          padding: 0,
          fontSize: 20,
          lineHeight: 'unset',
          listStyle: 'none',
          outline: 'none',
          boxSizing: 'border-box'
        }}
        onMouseLeave={disabled ? null : this.onMouseLeave}
        tabIndex={disabled ? -1 : tabIndex}
        role="radiogroup"
      >
        {stars}
      </ul>
    );
  }
}
