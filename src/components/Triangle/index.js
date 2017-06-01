// https://stackoverflow.com/questions/29001636/adding-border-to-css-triangle

import React, {Component} from 'react'
import PropTypes from 'prop-types'

export const LEFT = 'left'
export const RIGHT = 'right'

export default class Triangle extends Component {
  static propTypes = {
    direction: PropTypes.oneOf([LEFT, RIGHT]),
    size: PropTypes.number,
    border: PropTypes.number,
    borderColor: PropTypes.string,
    backgroundColor: PropTypes.string
  }
  static defaultProps = {
    backgroundColor: 'white',
    borderColor: 'black',
    direction: RIGHT,
    size: 15,
    border: 1
  }
  render () {
    const {size, border, backgroundColor, borderColor, direction} = this.props
    return (
      <div className={`triangle outer ${direction}-outer`}>
        <div className={`inner ${direction}-inner`}></div>
        <style jsx>{`
          .outer {
            width: 0;
            height: 0;
            border-top: ${size + (border * 1.8)}px solid transparent;
            border-bottom: ${size + (border * 1.8)}px solid transparent;
          }

          .left-outer {
            border-right: ${size + (border * 1.8)}px solid ${borderColor};
          }

          .right-outer {
            border-left: ${size + (border * 1.8)}px solid ${borderColor};
          }

          .inner {
            position: relative;
            width: 0;
            height: 0;
            border-top: ${size}px solid transparent;
            border-bottom: ${size}px solid transparent;
          }

          .left-inner {
            top: -${size}px;
            left: ${border}px;
            border-right: ${size}px solid ${backgroundColor};
          }

          .right-inner {
            top: -${size}px;
            left: -${size + (border)}px;
            border-left: ${size}px solid ${backgroundColor};
          }

        `}</style>
      </div>
    )
  }
}
