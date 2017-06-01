import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Box extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render () {
    return (
      <div className='box'>
        {this.props.children}
        <style jsx>{`
          .box {
            background-color: #F5F6F7;
            border: 1px solid #F1F2F3;
            padding: 10px;
            display: flex;
            flex: 1;
            flex-direction: column;
          }
        `}</style>
      </div>
    )
  }
}
