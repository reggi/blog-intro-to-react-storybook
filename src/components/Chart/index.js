import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Columns from '../Columns'
import Rows from '../Rows'
import Box from '../Box'
import Arrow from '../Arrow'
import Text, {BLUE, RED, YELLOW, ORANGE, GRAY} from '../Text'
import List from '../List'

const data = [
  {
    color: BLUE,
    heading: 'Marketing Chartering',
    list: [
      'Customer Discovery',
      'Competition Deep Diving',
      'Industry Discovery'
    ]
  },
  {
    color: RED,
    heading: 'Solution Discovery',
    list: [
      'Unique Positioning',
      'MVP Discovery'
    ]
  },
  {
    color: YELLOW,
    heading: 'Community Alignment',
    list: [
      'Team Alignment',
      'Agile Programe Office',
      'Technical Due Diligence'
    ]
  }
]

import one from '../../../assets/1.png'

export default class Chart extends Component {
  render () {
    return (
      <div className='chart'>
        <div className='full'>
          <div className='half-one'>
            <Columns>
              {data.map((item, key) => (
                <div {...{key}} className='flex'>
                  <Box>
                    <div style={{paddingBottom: 30}}>
                      <Text {...{color: item.color}}>{item.heading}</Text>
                    </div>
                    <List {...{items: item.list, bulletColor: item.color}}/>
                  </Box>
                  <Arrow/>
                </div>
              ))}
            </Columns>
          </div>
          <div className='half-two'>
            <img src={one}/>
          </div>
        </div>
        <style jsx>{`
          .full {
            display: flex;
            flex: 1;
            flex-direction: row;
          }
          .half-one {
            display: flex;
            flex: 1;
            flex-basis: 60%;
          }
          .half-two {
            display: flex;
            flex: 1;
            flex-basis: 40%;
          }
          .flex {
            display: flex;
            flex: 1;
          }
        `}</style>
      </div>
    )
  }
}
