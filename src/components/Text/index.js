import React, {Component} from 'react'
import PropTypes from 'prop-types'

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

export default class Text extends Component {
  static propTypes = {
    color: PropTypes.oneOf([BLUE, RED, YELLOW, ORANGE, GRAY]),
    children: PropTypes.node
  }
  render () {
    return (
      <div className={`text ${this.props.color}`}>
        {this.props.children}
        <style jsx>{`
          .text {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            display:inline;
          }
          .${BLUE} {color: ${HEX_BLUE}}
          .${RED} {color: ${HEX_RED}}
          .${YELLOW} {color: ${HEX_YELLOW}}
          .${ORANGE} {color: ${HEX_ORANGE}}
          .${GRAY} {color: ${HEX_GRAY}}
        `}</style>
      </div>
    )
  }
}
