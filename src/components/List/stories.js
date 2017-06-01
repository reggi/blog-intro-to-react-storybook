import React from 'react'
import { storiesOf } from '@storybook/react'
import List from './index'

storiesOf('List', module)
  .add('with defaults', () => (
    <List {...{
      items: [
        'Alpha',
        'Beta',
        'Gamma'
      ]
    }}/>
  ))
