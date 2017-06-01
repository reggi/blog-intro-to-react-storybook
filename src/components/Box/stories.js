import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from './index'

storiesOf('Box', module)
  .add('with defaults', () => (
    <Box>
      Hello World
    </Box>
  ))
