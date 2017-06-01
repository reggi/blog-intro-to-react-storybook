import React from 'react'
import { storiesOf } from '@storybook/react'
import Triangle, {RIGHT, LEFT} from './index'

storiesOf('Triangle', module)
  .add('with defaults', () => (
    <Triangle/>
  ))
  .add('with RIGHT', () => (
    <Triangle {...{
      direction: RIGHT
    }}/>
  ))
  .add('with LEFT', () => (
    <Triangle {...{
      direction: LEFT
    }}/>
  ))
  .add('with SIZE', () => (
    <Triangle {...{
      direction: LEFT,
      size: 50
    }}/>
  ))
  .add('with backgroundColor borderColor', () => (
    <Triangle {...{
      backgroundColor: 'green',
      borderColor: 'red',
      direction: LEFT,
      size: 50
    }}/>
  ))
  .add('with border', () => (
    <Triangle {...{
      backgroundColor: 'green',
      borderColor: 'red',
      direction: LEFT,
      size: 50,
      border: 5
    }}/>
  ))
