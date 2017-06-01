import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class columns extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render () {
    return (
      <div className='columns'>
        {this.props.children}
        <style jsx>{`
          .columns {
            display: flex;
            flex: 1;
            flex-direction: row
          }
        `}</style>
      </div>
    )
  }
}
