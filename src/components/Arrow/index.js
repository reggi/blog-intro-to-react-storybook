import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Triangle, {RIGHT} from '../Triangle'

export default class Arrow extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render () {
    return (
      <div className='arrow'>
        <div className='line'/>
        <div className='triangle'>
          <Triangle {...{
            direction: RIGHT,
            backgroundColor: '#F5F6F7',
            borderColor: '#F1F2F3',
          }}/>
        </div>
        <style jsx>{`
          .arrow {
            position:relative;
            width: 40px;
            height: 40px;
          }
          .line {
            position: absolute;
            top: 10px;
            left: 0;
            height: 10px;
            width: 16px;
            background-color: #F5F6F7;
            border: 1px solid #F1F2F3;
          }
          .triangle {
            position: absolute;
            top: 0;
            left: 8px;
          }
        `}</style>
      </div>
    )
  }
}
