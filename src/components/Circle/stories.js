import React from 'react'
import { storiesOf } from '@storybook/react'
import Circle from './index'

storiesOf('Circle', module)
  .add('with defaults', () => (
    <Circle/>
  ))
