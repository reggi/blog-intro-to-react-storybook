import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Circle from '../Circle'
import Text, {GRAY} from '../Text'

export default class List extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render () {
    return (
      <div className='list'>
        {this.props.items.map((item, key) => (
          <div {...{key}} className='line-item'>
            <div className='circle-wrap'>
              <Circle {...{color: this.props.bulletColor, size: 15}}/>
            </div>
            <Text color={GRAY}>{item}</Text>
          </div>
        ))}
        <style jsx>{`
          .line-item {
            margin-bottom: 30px
          }
          .circle-wrap {
            display:inline-block;
            margin-right: 10px
          }
        `}</style>
      </div>
    )
  }
}
