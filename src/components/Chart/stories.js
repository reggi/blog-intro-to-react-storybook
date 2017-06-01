import React from 'react'
import { storiesOf } from '@storybook/react'
import Chart from './index'

storiesOf('Chart', module)
  .add('with defaults', () => (
    <Chart/>
  ))
