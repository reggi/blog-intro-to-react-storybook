import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Rows extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render () {
    return (
      <div className='rows'>
        {this.props.children}
        <style jsx>{`
          .rows {
            display: flex;
            flex: 1;
            flex-direction: column
          }
        `}</style>
      </div>
    )
  }
}
