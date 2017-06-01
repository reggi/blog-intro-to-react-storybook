// https://stackoverflow.com/questions/6921792/how-to-draw-circle-in-html-page
import React, {Component, PropTypes} from 'react'

export const BLUE = 'blue'
export const RED = 'red'
export const YELLOW = 'yellow'
export const ORANGE = 'orange'
export const GRAY = 'gray'

export const HEX_BLUE = '#47A7A9'
export const HEX_RED = '#DC2859'
export const HEX_YELLOW = '#F3B169'
export const HEX_ORANGE = '#ED6A48'
export const HEX_GRAY = '#989999'

export default class Circle extends Component {
  static propTypes = {
    color: PropTypes.oneOf([BLUE, RED, YELLOW, ORANGE, GRAY]),
  }
  static defaultProps = {
    size: 25,
    color: BLUE
  }
  render () {
    return (
      <div className={`circle ${this.props.color}-bg`}>
        <style jsx>{`
          .circle {
            width: ${this.props.size}px;
            height: ${this.props.size}px;
            -webkit-border-radius: ${this.props.size / 2}px;
            -moz-border-radius: ${this.props.size / 2}px;
            border-radius: ${this.props.size / 2}px;
            background-color: ${this.props.color};
          }
          .${BLUE}-bg {background-color: ${HEX_BLUE}}
          .${RED}-bg {background-color: ${HEX_RED}}
          .${YELLOW}-bg {background-color: ${HEX_YELLOW}}
          .${ORANGE}-bg {background-color: ${HEX_ORANGE}}
          .${GRAY}-bg {background-color: ${HEX_GRAY}}
        `}</style>
      </div>
    )
  }
}
